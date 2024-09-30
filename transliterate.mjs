import { transliterate as transliteratePhonetically } from './transliteratePhonetically.mjs';

const letterMap = {
  'a': 'ا',
  'b': 'ب',
  'k': 'ك',
  'd': 'د',
  'e': 'ى',
  'ə': 'ۏ',
  'ø': 'ۏَ',
  'œ': 'ۏً',
  'ɛ': 'ى',
  'f': 'ف',
  'g': 'غ',
  'i': 'ي',
  'j': 'ي',
  'ʒ': 'ج',
  'l': 'ل',
  'm': 'م',
  'n': 'ن',
  'ɔ': 'وَ',
  'o': 'وَ',
  'p': 'پ',
  'q': 'ك',
  'ʁ': 'ر',
  's': 'س',
  'ʃ': 'ش',
  't': 'ت',
  'u': 'و',
  'y': 'ۊ',
  'ɥ': 'ۊ',
  'v': 'ڤ',
  'w': 'و',
  'z': 'ز',
  'ɑ̃': 'ان',
  'ɔ̃': 'وَن',
  'ɛ̃': 'ىن',
  'œ̃': 'ىَن',
  'ɲ': 'ني',
  'ْ': 'ْ', // sukun
};

const silentLetterMap = {
  'g': 'غ',
  'd': 'ت',
  't': 'ت',
  's': 'ز',
  'x': 'ز',
  'z': 'ز',
  'p': 'پ',
};

function normalize(str) {
  const accentMap = {
    'à': 'a', 'â': 'a', 'ä': 'a', 'æ': 'ae',
    'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
    'î': 'i', 'ï': 'i',
    'ô': 'o', 'œ': 'oe', 'ö': 'o',
    'ù': 'u', 'û': 'u', 'ü': 'u',
    'ÿ': 'y',
    'ç': 'c'
  };

  return str.replace(/[àâäæéèêëîïôœöùûüÿç]/g, match => accentMap[match]);
}

function extractPunctuation(word) {
  const punctuation = word.match(/\p{P}$/gu) || [];
  const cleanWord = word.replace(/\p{P}$/gu, '');
  return { word: cleanWord, punctuation };
}

function ipaToFrench(ipa) {
  const ipaToFrenchMap = {
    'a': 'a', 'ɑ': 'a', 'e': 'e', 'ɛ': 'e', 'i': 'i', 'o': 'o', 'ɔ': 'o', 'u': 'u', 'y': 'u',
    'ə': 'e', 'ø': 'eu', 'œ': 'eu',
    'b': 'b', 'd': 'd', 'f': 'f', 'g': 'g', 'k': 'c', 'l': 'l', 'm': 'm', 'n': 'n',
    'p': 'p', 'ʁ': 'r', 's': 's', 't': 't', 'v': 'v', 'z': 'z',
    'ʃ': 'ch', 'ʒ': 'j', 'ɲ': 'gn', 'ŋ': 'ng',
    'w': 'w', 'ɥ': 'u',
    'ɑ̃': 'an', 'ɛ̃': 'in', 'ɔ̃': 'on', 'œ̃': 'un'
  };
  return ipa.split('').map(char => ipaToFrenchMap[char] || char).join('');
}

function handleSilentLetter(word, ipa, transliteratedWord) {
  const lastIpaLetter = ipa.slice(-1);
  const lastFrenchLetter = ipaToFrench(lastIpaLetter);
  const lastWordLetter = word.slice(-1).toLowerCase();

  if (lastFrenchLetter !== lastWordLetter && silentLetterMap[lastWordLetter]) {
    return transliteratedWord + silentLetterMap[lastWordLetter] + letterMap['ْ']; // Add silent letter with sukun
  }
  return transliteratedWord;
}

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

// Function to load dictionary file based on environment
async function loadDictionaryFile(filename) {
  if (isBrowser) {
    // Browser environment: use fetch
    const response = await fetch(`./dict/${filename}`);
    return await response.json();
  } else {
    // Node.js environment: use fs
    const fs = await import('fs/promises');
    const filePath = new URL(`./dict/${filename}`, import.meta.url);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  }
}

function transliterateIPA(ipa) {
  let ipaChars = ipa.split("");
  ipaChars.forEach((char, index) => {
    if (char === '̃') {
      ipaChars[index - 1] = ipaChars[index - 1] + '̃';
      ipaChars[index] = null;
    }
  });
  ipaChars = ipaChars.filter(Boolean);

  const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'ə', 'ø', 'œ', 'ɛ', 'ɔ', 'ɑ'];
  let transliteratedWord = '';
  for (let i = 0; i < ipaChars.length; i++) {
    const currentChar = ipaChars[i];
    const nextChar = ipaChars[i + 1];
    const nextNextChar = ipaChars[i + 2];
    const prevChar = i > 0 ? ipaChars[i - 1] : null;

    if (currentChar === 'j' && prevChar === 'i') {
      continue; // Skip 'j' if it comes after 'i'
    }

    if (vowels.includes(currentChar) && nextChar === 'n' && !vowels.includes(nextNextChar)) {
      transliteratedWord += letterMap[currentChar] + letterMap['n'] + 'ّ'; // Add shaddah to ن
      i++; // Skip the next character (n) as we've already handled it
    } else if (currentChar === 'ɲ' && nextChar === 'i') {
      transliteratedWord += 'ن'; // Transliterate 'ɲ' as 'ن' without 'ي' when followed by 'i'
    } else if (currentChar === 'ɲ') {
      transliteratedWord += letterMap['ɲ']; // Use the original transliteration for 'ɲ' in other cases
    } else {
      transliteratedWord += letterMap[currentChar] || currentChar;
    }
  }

  // Handle 'ɲ' at the end of a word
  if (ipaChars[ipaChars.length - 1] === 'ɲ') {
    transliteratedWord += 'ّ'; // Add shaddah
  }

  return transliteratedWord;
}

export async function transliterate(text) {
  const cachedFiles = {};
  const result = [];

  const words = text.split(/\s+/);

  for (let word of words) {
    const { word: cleanWord, punctuation } = extractPunctuation(word);
    
    if (cleanWord.length < 3) {
      result.push(transliteratePhonetically(cleanWord) + (punctuation[0] || ''));
      continue;
    }

    const first3Letters = normalize(cleanWord.slice(0, 3).toLowerCase());
    const filename = `${first3Letters}.json`;

    if (!cachedFiles[filename]) {
      try {
        cachedFiles[filename] = await loadDictionaryFile(filename);
      } catch(e) {
        result.push(transliteratePhonetically(cleanWord) + (punctuation[0] || ''));
        continue;
      }
    }

    let transliteratedWord;
    if(cachedFiles[filename]?.[cleanWord.toLowerCase()]) {
      const ipaValues = cachedFiles[filename][cleanWord.toLowerCase()].split(',').map(v => v.trim().replaceAll("/", ""));
      const transliteratedIPAs = ipaValues.map(ipa => transliterateIPA(ipa));
      
      transliteratedWord = transliteratedIPAs[0]; // Use the first transliterated IPA as the main one
      transliteratedWord = handleSilentLetter(cleanWord, ipaValues[0], transliteratedWord);

      // Add alternative transliterated IPA values in parentheses if they exist
      if (transliteratedIPAs.length > 1) {
        transliteratedWord += ` (${transliteratedIPAs.slice(1).join(', ')})`;
      }
    } else {
      transliteratedWord = transliteratePhonetically(cleanWord);
    }

    result.push(transliteratedWord + (punctuation[0] || ''));
  }

  return result.join(" ");
}