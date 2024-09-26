const letterMap = {
    'a': 'ا',
    'b': 'ب',
    'c': 'ك',
    'd': 'د',
    'e': 'ى',
    'f': 'ف',
    'g': 'غ',
    'i': 'ي',
    'j': 'ج',
    'k': 'ك',
    'l': 'ل',
    'm': 'م',
    'n': 'ن',
    'o': 'وَ',
    'p': 'پ',
    'q': 'ك',
    'r': 'ر',
    's': 'س',
    't': 'ت',
    'u': 'ۊ',
    'v': 'ڤ',
    'w': 'و',
    'y': 'ي',
    'z': 'ز',
    "ş": "ش",
    "ñ": "نّ",
    "ğ": "غ", // This is a g that is pronounced as g forcely
    "ĥ": "ه", // Aspired h
    "ś": "س", // Forced s
  };
  
  const diagraphMap = {
    'ou': 'و',
    'eu': 'ۏ',
    'au': 'وَ',
    'ai': 'ى',
    'on': 'وَن',
    'om': 'وَم',
    'an': 'ان',
    'am': 'ام',
    'in': 'ىن',
    'im': 'ىم',
    'un': 'ىَن',
    'um': 'ىَم',
    'oi': 'وا',
    'gn': 'ني'
  };
  
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const extendedVowels = "aàâæeéèêëiîïoôœuùûüyÿ";
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
  
  const oBrothers = [ "au", "eau"];
  const aiBrothers = [ "ai", "é", "è", "ê", "ë"];
  const inBrothers = [ "in", "ein", "yn", "ain"];
  const imBrothers = [ "im", "eim", "ym", "aim"]
  const anBrothers = [ "an", "en"];
  const amBrothers = [ "am", "em"];
  
  const irrationalWords = {
    femme: "famme",
    wagon: "vagon",
    six: "sis",
    dix: "dis",
    bruxelles: "bruselles",
    bruxellois: "brusellois",
    auxerre: "ausserre",
    "agnat": "ağnat",
    "agnathe": "ağnathe",
    "agnosie": "ağnosie",
    "agnostique": "ağnostique",
    "agnus-castus": "ağnus-castus",
    "agnus dei": "ağnus dei",
    "cognation": "coğnation",
    "cognitif": "coğnitif",
    "cognition": "coğnition",
    "diagnostic": "diağnostic",
    "diagnostiquer": "diağnostiquer",
    "gneiss": "ğneiss",
    "gnète": "ğnète",
    "gnome": "ğnome",
    "gnomon": "ğnomon",
    "gnose": "ğnose",
    "gnou": "ğnou",
    "magnum": "mağnum",
    "pignoratif": "piğnoratif",
    "prégnance": "préğnance",
    "prognathie": "proğnathie",
    "pugnace": "puğnace",
    "sphagnales": "sphağnales",
    "stagnant": "stağnant",
    "stagner": "stağner",
    "syngnathe": "synğnathe",
    "wagnérien": "wağnérien",
    "mille": "mile",
    "million": "milion",
    "milliard": "miliard",
    "tranquille": "tranquile",
    "ville": "vile",
    "bacille": "bacile",
    "grill": "gril",
    "imbécillité": "imbécilité",
    "capillaire": "capilaire",
    "oscillation": "oscilation",
    "hache": "ĥache",
    "hagard": "ĥagard",
    "haie": "ĥaie",
    "haillon": "ĥaillon",
    "haine": "ĥaine",
    "haïr": "ĥaïr",
    "hall": "ĥall",
    "halo": "ĥalo",
    "halte": "ĥalte",
    "hamac": "ĥamac",
    "hamburger": "ĥamburger",
    "hameau": "ĥameau",
    "hamster": "ĥamster",
    "hanche": "ĥanche",
    "handicap": "ĥandicap",
    "hangar": "ĥangar",
    "hanter": "ĥanter",
    "happer": "ĥapper",
    "harceler": "ĥarceler",
    "hardi": "ĥardi",
    "harem": "ĥarem",
    "hareng": "ĥareng",
    "harfang": "ĥarfang",
    "hargne": "ĥargne",
    "haricot": "ĥaricot",
    "harnais": "ĥarnais",
    "harpe": "ĥarpe",
    "hasard": "ĥasard",
    "hâte": "ĥâte",
    "hausse": "ĥausse",
    "haut": "ĥaut",
    "havre": "ĥavre",
    "hennir": "ĥennir",
    "hérisser": "ĥérisser",
    "hernie": "ĥernie",
    "héron": "ĥéron",
    "héros": "ĥéros",
    "hêtre": "ĥêtre",
    "heurter": "ĥeurter",
    "hibou": "ĥibou",
    "hic": "ĥic",
    "hideur": "ĥideur",
    "hiérarchie": "ĥiérarchie",
    "hiéroglyphe": "ĥiéroglyphe",
    "hippie": "ĥippie",
    "hisser": "ĥisser",
    "hocher": "ĥocher",
    "hockey": "ĥockey",
    "hollande": "ĥollande",
    "homard": "ĥomard",
    "honte": "ĥonte",
    "hoquet": "ĥoquet",
    "horde": "ĥorde",
    "hors": "ĥors",
    "hotte": "ĥotte",
    "houblon": "ĥoublon",
    "houle": "ĥoule",
    "housse": "ĥousse",
    "huard": "ĥuard",
    "hublot": "ĥublot",
    "huche": "ĥuche",
    "huer": "ĥuer",
    "huit": "ĥuit",
    "humer": "ĥumer",
    "hurler": "ĥurler",
    "huron": "ĥuron",
    "husky": "ĥusky",
    "hutte": "ĥutte",
    "hyène": "ĥyène"
  }
  
  const extraFixes = {
    "سْ": "زْ"
  }
  
  function transliterate(text) {
    
    let result = text.toLowerCase();
  
    // Normalization
  
    // Replace irrational words
    for (const word in irrationalWords) {
      result = result.replace(new RegExp(word, 'g'), irrationalWords[word]);
    }
  
  
  
    // Ils verb
    result = result.replace(/(ils|elles) ([aàâæbcçdðeéèêëfghijklmnoôœpqrstuùûüvwxyzÿ]+)ent/g, '$1 $2t');
  
    result = result.replace(/([aeuoiy])n+e/g, '$1ñ');
  
    result = result.replace(/\bill/g, 'il');
  
    result = result.replace(/ill/g, 'y');
  
    result = result.replace(/([^ ])tion\b/g, '$1śion');
  
    result = result.replace(/ss/g, 'ś');
  
    result = result.replace(/([^ ])[bcçdðfghjklpqrstvwxz]t\b/g, (match, l1, l2) => `${l1}t`);
  
    result = result.replace(/\b([bcdfghjklmnpqrstvxz])e\b/g, '$1eu');
    result = result.replace(/([bcdfghjklmnpqrstvxz]*)e([bcdfghjklmnpqrstvxz][aàâæeéèêëiîïoôœuùûüyÿ])/g, '$1eu$2');
  
    // Replace all Xs at the start of a word or following an "e" at the start of a word with "gz"
    result = result.replace(/\b(e)*x([aàâæeéèêëiîïoôœuùûüyÿ])/g, '$1gz$2');
  
    // Replace all Xs with "ks"
    result = result.replace(/x\b/g, 's');
    result = result.replace(/x/g, 'ks');
  
    // Replace every e followed by a double consonant with é
    result = result.replace(/e([bcdfghjklmnpqrstvxz]{2})/g, 'é$1');
  
    // S (surrounded by vowels) => Z
    result = result.replace(new RegExp(`([${extendedVowels}])s([${extendedVowels}])`, 'g'), '$1z$2');
  
    // Ci, Ce, C' => Si, Se
    result = result.replace(/c([iîïìíīįeêéèëēėę\'])/g, 's$1');
  
    // Ç => S
    result = result.replace(/ç/g, 's');
  
    // Gi, Ge => Ji, Je
    result = result.replace(/g([iîïìíīįeêéèëēėę])/g, 'j$1');
  
    result = result.replace(/gu([iîïìíīįeêéèëēėę])/g, 'ğ$1');
  
    // Qu => K
    result = result.replace(/qu*/g, 'k');
  
    // CH => ş
    result = result.replace(/ch/g, 'ş');
    // Remove the remaining h
    result = result.replace(/h/g, "");
  
    // C (Not Ch) => K
    result = result.replace(/c([^h])/g, 'k$1');
  
    result = result.replace(/oy([aàâæeéèêëiîïoôœuùûüyÿ])/g, 'oiy$1');
    result = result.replace(/oy/g, 'oi');
  
  
    // Replace repeated consonants
    result = result.replace(/([bcdfghjklmnpqrstvxz])\1/g, '$1');
    // End Normalization
  
    // Replace every "ou" with the corresponding letter
    result = result.replace(/ou/g, diagraphMap['ou']);
  
    // Replace every "un" word with "ىَن"
    result = result.replace(/\bun\b/g, diagraphMap['un']);
  
    // Replace oBrothers with the letter mapped to "o"
    result = result.replace(new RegExp(oBrothers.join('|'), 'g'), diagraphMap['au']);
  
    // Replace aiBrothers with the letter mapped to "ai"
    result = result.replace(new RegExp(aiBrothers.join('|'), 'g'), diagraphMap['ai']);
  
    // Replace eu with the letter mapped to "eu"
    result = result.replace(/eu/g, diagraphMap['eu']);
  
    // Nasal voices
  
    // Replace inBrothers not followed by a vowel with the letter mapped to "in"
    result = result.replace(new RegExp(`${inBrothers.join('|')}([^${vowels.join('|')}])`, 'g'), (match, l1 = "") => diagraphMap['in'] + l1);
  
    // Replace imBrothers not followed by a vowel with the letter mapped to "im"
    result = result.replace(new RegExp(`${imBrothers.join('|')}([^${vowels.join('|')}])`, 'g'), (match, l1 = "") => diagraphMap['im'] + l1);
  
    // Replace anBrothers not followed by a vowel with the letter mapped to "an"
    result = result.replace(new RegExp(`${anBrothers.join('|')}([^${vowels.join('|')}])`, 'g'), (match, l1 = "") => diagraphMap['an'] + l1);
  
    // Replace amBrothers not followed by a vowel with the letter mapped to "am"
    result = result.replace(new RegExp(`${amBrothers.join('|')}([^${vowels.join('|')}])`, 'g'), (match, l1 = "") => diagraphMap['am'] + l1);
  
    // Replace on not followed by a vowel with the letter mapped to "on"
    result = result.replace(new RegExp(`on([^${vowels.join('|')}])`, 'g'), (match, l1 = "") => diagraphMap['on'] + l1);
  
    // Replace om not followed by a vowel with the letter mapped to "om"
    result = result.replace(new RegExp(`om([^${vowels.join('|')}])`, 'g'), (match, l1 = "") => diagraphMap['om'] + l1);
  
    // Replace un not followed by a vowel with the letter mapped to "un"
    result = result.replace(new RegExp(`un([^${vowels.join('|')}])`, 'g'), (match, l1 = "") => diagraphMap['un'] + l1);
  
    // Replace um not followed by a vowel with the letter mapped to "um"
    result = result.replace(new RegExp(`um([^${vowels.join('|')}])`, 'g'), (match, l1 = "") => diagraphMap['um'] + l1);
  
    // End Nasal Voices
  
  result = result.replace(/gne/g, diagraphMap['gn'] + "ّ");
    result = result.replace(/gn/g, diagraphMap['gn']);
    result = result.replace(/oi/g, diagraphMap['oi']);
  
    // Replace every "p", "s", or "t" at the end of a word with its corresponding letter
  result = result.replace(/([^ ][pst])( |$)/g, (match, l1, l2) => l1 + "ْ" + l2);
  result = result.replace(/([^ ]e[rz])( |$)/g, (match, l1, l2) => l1 + "ْ" + l2);
  
    // Remove e at the end of a word
    result = result.replace(/e\b/g, '');
  
    // Replace remaining letters with their corresponding Arabic letters
    result = result.split('').map(char => letterMap[char] || char).join('');
  
    // Make the extra fixes
    
    for(const [letterToFix, replacement] of Object.entries(extraFixes)) {
      result = result.replace(new RegExp(letterToFix, 'g'), replacement);
    }
  
    return result;
  }

// Fonction pour générer des exemples aléatoires
function generateRandomExample() {
  const subjects = ["Je", "Tu", "Il", "Elle", "Nous", "Vous", "Ils", "Elles"];
  const verbs = ["suis", "es", "est", "sommes", "êtes", "sont", "ai", "as", "a", "avons", "avez", "ont", "vais", "vas", "va", "allons", "allez", "vont"];
  const adjectives = ["heureux", "triste", "grand", "petit", "beau", "joli", "intelligent", "fort", "faible", "rapide", "lent"];
  const nouns = ["maison", "voiture", "chat", "chien", "livre", "table", "chaise", "arbre", "fleur", "soleil"];
  const adverbs = ["très", "peu", "beaucoup", "rapidement", "lentement", "bien", "mal", "souvent", "rarement"];

  const randomElement = (array) => array[Math.floor(Math.random() * array.length)];

  const structures = [
    () => `${randomElement(subjects)} ${randomElement(verbs)} ${randomElement(adjectives)}.`,
    () => `${randomElement(subjects)} ${randomElement(verbs)} ${randomElement(adverbs)} ${randomElement(adjectives)}.`,
    () => `Le ${randomElement(nouns)} est ${randomElement(adjectives)}.`,
    () => `${randomElement(subjects)} ${randomElement(verbs)} un ${randomElement(nouns)}.`,
    () => `${randomElement(subjects)} ${randomElement(verbs)} ${randomElement(adverbs)}.`
  ];

  return randomElement(structures)();
}

// Fonction pour peupler le tableau d'exemples
function populateExamples() {
  const exampleTable = document.getElementById('example-table').getElementsByTagName('tbody')[0];
  for (let i = 0; i < 10; i++) {
    const example = generateRandomExample();
    const row = exampleTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = example;
    cell2.textContent = transliterate(example);
  }
}

// Fonction pour générer des exemples pour la correspondance des lettres
function generateLetterMappingExample(letter) {
  const words = {
    'a': ['ami', 'chat', 'arbre'],
    'b': ['bon', 'bébé', 'bateau'],
    'c': ['car', 'ciel', 'cou'],
    'd': ['dent', 'doux', 'dur'],
    'e': ['le', 'belle', 'petit'],
    'f': ['feu', 'fort', 'fille'],
    'g': ['gare', 'gel', 'gâteau'],
    'h': ['homme', 'héros', 'heure'],
    'i': ['lit', 'ici', 'île'],
    'j': ['jeu', 'jour', 'joli'],
    'k': ['kilo', 'kayak', 'koala'],
    'l': ['lune', 'lit', 'loin'],
    'm': ['maman', 'mer', 'main'],
    'n': ['non', 'nuit', 'neuf'],
    'o': ['mot', 'beau', 'chose'],
    'p': ['papa', 'peur', 'porte'],
    'q': ['quoi', 'qui', 'quatre'],
    'r': ['rue', 'rire', 'rouge'],
    's': ['sol', 'soir', 'sous'],
    't': ['tu', 'tête', 'tout'],
    'u': ['tu', 'lune', 'rue'],
    'v': ['vent', 'vrai', 'voir'],
    'w': ['kiwi', 'wagon', 'web'],
    'x': ['taxi', 'exemple', 'axe'],
    'y': ['yoga', 'type', 'yeux'],
    'z': ['zoo', 'zéro', 'zone']
  };

  const letterWords = words[letter.toLowerCase()];
  if (letterWords && letterWords.length > 0) {
    const word = letterWords[Math.floor(Math.random() * letterWords.length)];
    return `${word} → ${transliterate(word)}`;
  } else {
    return `No example available for '${letter}'`;
  }
}

// Fonction pour peupler le tableau de correspondance des lettres
function populateLetterMapping() {
  const letterMappingTable = document.getElementById('letter-mapping-table');
  if (!letterMappingTable) {
    console.error("Couldn't find the letter-mapping-table element");
    return;
  }
  const tbody = letterMappingTable.getElementsByTagName('tbody')[0];
  if (!tbody) {
    console.error("Couldn't find the tbody element in letter-mapping-table");
    return;
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (const letter of alphabet) {
    if (letter in letterMap) {
      const row = tbody.insertRow();
      row.insertCell(0).textContent = letter.toUpperCase();
      row.insertCell(1).textContent = letterMap[letter];
      row.insertCell(2).textContent = getPronunciation(letter);
      row.insertCell(3).textContent = generateLetterMappingExample(letter);
    }
  }
}

// Fonction pour obtenir la prononciation d'une lettre
function getPronunciation(letter) {
  const pronunciations = {
    'a': '[a] comme dans "chat"',
    'b': '[b] comme dans "bon"',
    'c': '[k] comme dans "car" ou [s] comme dans "ciel"',
    'd': '[d] comme dans "dent"',
    'e': '[ə] comme dans "le" ou [ɛ] comme dans "belle"',
    'f': '[f] comme dans "feu"',
    'g': '[g] comme dans "gare" ou [ʒ] comme dans "gel"',
    'h': 'Muet ou [h] aspiré',
    'i': '[i] comme dans "lit"',
    'j': '[ʒ] comme dans "jeu"',
    'k': '[k] comme dans "kilo"',
    'l': '[l] comme dans "lune"',
    'm': '[m] comme dans "maman"',
    'n': '[n] comme dans "non"',
    'o': '[o] comme dans "mot"',
    'p': '[p] comme dans "papa"',
    'q': '[k] comme dans "quoi"',
    'r': '[ʁ] comme dans "rue"',
    's': '[s] comme dans "sol"',
    't': '[t] comme dans "tu"',
    'u': '[y] comme dans "tu"',
    'v': '[v] comme dans "vent"',
    'w': '[w] comme dans "kiwi"',
    'x': '[ks] comme dans "taxi" ou [gz] comme dans "exemple"',
    'y': '[j] comme dans "yoga" ou [i] comme dans "type"',
    'z': '[z] comme dans "zoo"'
  };
  return pronunciations[letter.toLowerCase()] || '';
}

// Fonction pour générer des exemples pour les digrammes
function generateDigraphExample(digraph) {
  const words = {
    'ou': ['vous', 'jour', 'tout'],
    'ch': ['chat', 'chien', 'chaud'],
    'eu': ['peu', 'peur', 'bleu'],
    'au': ['chaud', 'autre', 'jaune'],
    'ai': ['mais', 'lait', 'vrai'],
    'on': ['bon', 'son', 'long'],
    'an': ['dans', 'grand', 'blanc'],
    'in': ['fin', 'vin', 'matin'],
    'un': ['un', 'lundi', 'brun'],
    'oi': ['roi', 'noir', 'voix'],
    'gn': ['agneau', 'montagne', 'peigne']
  };

  const digraphWords = words[digraph.toLowerCase()];
  if (digraphWords && digraphWords.length > 0) {
    const word = digraphWords[Math.floor(Math.random() * digraphWords.length)];
    return `${word} → ${transliterate(word)}`;
  } else {
    return `No example available for '${digraph}'`;
  }
}

// Fonction pour peupler le tableau des digrammes
function populateDigraphs() {
  const digraphsTable = document.getElementById('digraphs-table').getElementsByTagName('tbody')[0];
  const digraphPronunciations = {
    'ou': '[u] comme dans "vous"',
    'ch': '[ʃ] comme dans "chat"',
    'eu': '[ø] comme dans "peu" ou [œ] comme dans "peur"',
    'au': '[o] comme dans "chaud"',
    'ai': '[ɛ] comme dans "mais"',
    'on': '[ɔ̃] comme dans "bon"',
    'an': '[ɑ̃] comme dans "dans"',
    'in': '[ɛ̃] comme dans "fin"',
    'un': '[œ̃] comme dans "un"',
    'oi': '[wa] comme dans "roi"',
    'gn': '[ɲ] comme dans "agneau"'
  };
  const digraphHomophones = {
    'ou': 'OÙ, HOUE',
    'ch': 'SH',
    'eu': 'ŒU',
    'au': 'EAU, Ô',
    'ai': 'È, Ê, ET',
    'on': 'OM',
    'an': 'EN, EM',
    'in': 'AIN, EIN, YN, IM',
    'un': '-',
    'oi': '-',
    'gn': '-'
  };
  for (const [digraph, arabic] of Object.entries(diagraphMap)) {
    const row = digraphsTable.insertRow();
    row.insertCell(0).textContent = digraph.toUpperCase();
    row.insertCell(1).textContent = arabic;
    row.insertCell(2).textContent = digraphPronunciations[digraph] || '';
    row.insertCell(3).textContent = generateDigraphExample(digraph);
    row.insertCell(4).textContent = digraphHomophones[digraph] || '';
  }
}

// Fonction pour peupler les règles spéciales
function populateSpecialRules() {
  const specialRules = [
    {
      rule: "Toutes les voyelles sont écrites, il n'y a pas de voyelles courtes comme en arabe.",
      example: "table → " + transliterate("table")
    },
    {
      rule: "Les voyelles muettes à la fin des mots sont omises.",
      example: "table → " + transliterate("table")
    },
    {
      rule: "Les consonnes muettes à la fin des mots ont un ْ (Soukoune) au-dessus d'elles. Ces lettres sont gardées pour indiquer la liaison.",
      example: "petit → " + transliterate("petit")
    },
    {
      rule: "Le S muet à la fin d'un mot s'écrit زْ puisque la liaison d'un s est toujours prononcée z.",
      example: "les amis → " + transliterate("les amis")
    },
    {
      rule: "Toutes les lettres muettes qui précèdent une lettre muette à la fin du mot ne sont pas écrites.",
      example: "temps → " + transliterate("temps")
    },
    {
      rule: "Les sons nasaux sont représentés par des combinaisons spécifiques de lettres arabes.",
      example: "bon → " + transliterate("bon") + ", pain → " + transliterate("pain")
    }
  ];

  const specialRulesList = document.getElementById('special-rules');
  specialRules.forEach(({rule, example}) => {
    const li = document.createElement('li');
    li.textContent = `${rule} Exemple : ${example}`;
    specialRulesList.appendChild(li);
  });
}

// Translittération en temps réel
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const output = document.getElementById('output');

  input.addEventListener('input', () => {
    output.textContent = transliterate(input.value);
  });

  // Peupler les tableaux et les règles
  populateLetterMapping();
  populateDigraphs();
  populateSpecialRules();
  populateExamples();
});