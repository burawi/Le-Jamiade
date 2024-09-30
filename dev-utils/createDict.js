const fs = require('fs');
const path = require('path');
const unorm = require('unorm');

// Load the JSON file containing the words and their IPA transcriptions
const wordsFilePath = './fr_FR.json';
const words = JSON.parse(fs.readFileSync(wordsFilePath, 'utf8'));

// Create a directory to store the split files
const outputDir = './dict';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Function to normalize a word (remove diacritics)
function normalizeWord(word) {
  return unorm.nfd(word).replace(/[\u0300-\u036f]/g, ''); // NFD form, then remove accents
}

// Create an object to store words by their 3-letter prefixes
const wordGroups = {};

// Loop over all words in the JSON object
for (const [word, ipa] of Object.entries(words)) {
  const normalizedWord = normalizeWord(word);
  const prefix = normalizedWord.slice(0, 3).toLowerCase(); // Get the first three letters (normalized)

  // If the prefix group doesn't exist, create it
  if (!wordGroups[prefix]) {
    wordGroups[prefix] = {};
  }

  // Add the word and its IPA transcription to the appropriate group
  wordGroups[prefix][word] = ipa;
}

// Write each group to a separate JSON file
for (const [prefix, group] of Object.entries(wordGroups)) {
  const filePath = path.join(outputDir, `${prefix}.json`);
  fs.writeFileSync(filePath, JSON.stringify(group, null, 2), 'utf8');
}

console.log('Files split and saved in the "dict" directory.');