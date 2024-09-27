// Import the transliterate function from transliterate.js
import { transliterate } from './transliterate.mjs';

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
    const row = tbody.insertRow();
    row.insertCell(0).textContent = letter.toUpperCase();
    row.insertCell(1).textContent = transliterate(letter);
    row.insertCell(2).textContent = getPronunciation(letter);
    row.insertCell(3).textContent = generateLetterMappingExample(letter);
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
    'ph': ['phare', 'pharmacie', 'physique'],
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
    'ph': '[f] comme dans "feu"',
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
    'ou': '-',
    'ch': '-',
    'ph': '-',
    'eu': 'ŒU',
    'au': 'EAU, Ô',
    'ai': 'È, Ê, É',
    'on': '-',
    'an': 'EN',
    'in': 'AIN, EIN, YN',
    'un': '-',
    'oi': 'oy',
    'gn': '-'
  };
  const digraphs = ['ou', 'ch', 'ph', 'eu', 'au', 'ai', 'on', 'an', 'in', 'un', 'oi', 'gn'];
  for (const digraph of digraphs) {
    const row = digraphsTable.insertRow();
    row.insertCell(0).textContent = digraph.toUpperCase();
    row.insertCell(1).textContent = transliterate(digraph);
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