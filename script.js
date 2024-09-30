// Import the transliterate function from transliterate.js
import { transliterate } from './transliterate.mjs';

// Fonction pour obtenir les exemples de phrases françaises correctes
function getExampleSentences() {
  return [
    "Le soleil brille dans le ciel bleu.",
    "J'aime me promener dans la forêt.",
    "Les oiseaux chantent au printemps.",
    "La musique adoucit les mœurs.",
    "L'eau coule sous le pont.",
    "Les enfants jouent dans le parc.",
    "Le chat dort sur le canapé.",
    "Je lis un livre intéressant.",
    "Nous mangeons au restaurant ce soir.",
    "Elle peint un magnifique tableau."
  ];
}

// Fonction pour peupler le tableau d'exemples
async function populateExamples() {
  const exampleTable = document.getElementById('example-table').getElementsByTagName('tbody')[0];
  const examples = getExampleSentences();
  for (const example of examples) {
    const row = exampleTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = example;
    cell2.textContent = await transliterate(example);
  }
}

// Fonction pour générer des exemples pour le résumé des lettres
async function generateLetterExample(jamiadeLetter, latinEquivalent) {
  const words = {
    'ا': ['ami', 'chat', 'arbre'],
    'ب': ['bon', 'bébé', 'bateau'],
    'ت': ['tu', 'tête', 'tout'],
    'د': ['dent', 'doux', 'dur'],
    'ۏ': ['le', 'peur', 'petit'],
    'ف': ['feu', 'fort', 'fille'],
    'غ': ['gare', 'guerre', 'gâteau'],
    'ه': ['homme', 'héros', 'heure'],
    'ي': ['lit', 'ici', 'île'],
    'ج': ['jeu', 'jour', 'joli'],
    'ك': ['kilo', 'kayak', 'koala'],
    'ل': ['lune', 'lit', 'loin'],
    'م': ['maman', 'mer', 'main'],
    'ن': ['non', 'nuit', 'neuf'],
    'وَ': ['mot', 'beau', 'chose'],
    'پ': ['papa', 'peur', 'porte'],
    'ر': ['rue', 'rire', 'rouge'],
    'س': ['sol', 'soir', 'sous'],
    'ۊ': ['tu', 'lune', 'rue'],
    'ڤ': ['vent', 'vrai', 'voir'],
    'و': ['kiwi', 'wagon', 'web'],
    'ى': ['mais', 'lait', 'vrai'],
    'ز': ['zoo', 'zéro', 'zone']
  };

  const letterWords = words[jamiadeLetter] || words[latinEquivalent.toLowerCase()];
  if (letterWords && letterWords.length > 0) {
    const word = letterWords[Math.floor(Math.random() * letterWords.length)];
    return `${word} → ${await transliterate(word)}`;
  } else {
    return `No example available for '${jamiadeLetter}'`;
  }
}

// Fonction pour peupler le tableau de résumé des lettres
async function populateLetterSummary() {
  const letterSummaryTable = document.getElementById('jamiade-letters');
  if (!letterSummaryTable) {
    console.error("Couldn't find the jamiade-letters element");
    return;
  }
  const tbody = letterSummaryTable.getElementsByTagName('tbody')[0];
  if (!tbody) {
    console.error("Couldn't find the tbody element in jamiade-letters");
    return;
  }
  const jamiadeLetters = [
    { jamiade: 'ا', latin: 'A' },
    { jamiade: 'ب', latin: 'B' },
    { jamiade: 'ت', latin: 'T' },
    { jamiade: 'د', latin: 'D' },
    { jamiade: 'ۏ', latin: 'E' },
    { jamiade: 'ف', latin: 'F' },
    { jamiade: 'غ', latin: 'G' },
    { jamiade: 'ه', latin: 'H' },
    { jamiade: 'ي', latin: 'I' },
    { jamiade: 'ج', latin: 'J' },
    { jamiade: 'ك', latin: 'K' },
    { jamiade: 'ل', latin: 'L' },
    { jamiade: 'م', latin: 'M' },
    { jamiade: 'ن', latin: 'N' },
    { jamiade: 'وَ', latin: 'O' },
    { jamiade: 'پ', latin: 'P' },
    { jamiade: 'ر', latin: 'R' },
    { jamiade: 'س', latin: 'S' },
    { jamiade: 'ۊ', latin: 'U' },
    { jamiade: 'ڤ', latin: 'V' },
    { jamiade: 'و', latin: 'W' },
    { jamiade: 'ى', latin: 'É' },
    { jamiade: 'ز', latin: 'Z' }
  ];

  for (const { jamiade, latin } of jamiadeLetters) {
    const row = tbody.insertRow();
    row.insertCell(0).textContent = jamiade;
    row.insertCell(1).textContent = getPronunciation(jamiade, latin);
    row.insertCell(2).textContent = await generateLetterExample(jamiade, latin);
  }
}

// Fonction pour obtenir la prononciation d'une lettre
function getPronunciation(jamiadeLetter, latinEquivalent) {
  const pronunciations = {
    'ا': '[a] comme dans "chat"',
    'ب': '[b] comme dans "bon"',
    'ت': '[t] comme dans "tu"',
    'د': '[d] comme dans "dent"',
    'ۏ': '[ə] comme dans "le" ou [œ] comme dans "peur"',
    'ف': '[f] comme dans "feu"',
    'غ': '[g] comme dans "gare"',
    'ه': '[h] aspiré comme dans "héros"',
    'ي': '[i] comme dans "lit"',
    'ج': '[ʒ] comme dans "jeu"',
    'ك': '[k] comme dans "kilo"',
    'ل': '[l] comme dans "lune"',
    'م': '[m] comme dans "maman"',
    'ن': '[n] comme dans "non"',
    'وَ': '[o] comme dans "mot"',
    'پ': '[p] comme dans "papa"',
    'ر': '[ʁ] comme dans "rue"',
    'س': '[s] comme dans "sol"',
    'ۊ': '[y] comme dans "tu"',
    'ڤ': '[v] comme dans "vent"',
    'و': '[u] comme dans "vous" ou [w] comme dans "kiwi"',
    'ى': '[e] comme dans "été ou [ɛ] comme dans "mais"',
    'ز': '[z] comme dans "zoo"'
  };
  return pronunciations[jamiadeLetter] || `[${latinEquivalent.toLowerCase()}] comme dans "${latinEquivalent.toLowerCase()}at"`;
}

// Fonction pour générer des exemples pour les digrammes
async function generateDigraphExample(digraph) {
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
    return `${word} → ${await transliterate(word)}`;
  } else {
    return `No example available for '${digraph}'`;
  }
}

// Fonction pour peupler le tableau des digrammes
async function populateDigraphs() {
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
    'ai': 'È, Ê, É',
    'on': '-',
    'an': 'EN',
    'in': 'AIN, EIN, YN',
    'un': '-',
    'oi': 'oy',
    'gn': '-'
  };
  for (const [digraph, pronunciation] of Object.entries(digraphPronunciations)) {
    const row = digraphsTable.insertRow();
    row.insertCell(0).textContent = digraph.toUpperCase();
    row.insertCell(1).textContent = pronunciation;
    row.insertCell(2).textContent = await generateDigraphExample(digraph);
    row.insertCell(3).textContent = digraphHomophones[digraph] || '-';
  }
}

// Fonction pour peupler les règles spéciales
async function populateSpecialRules() {
  const specialRules = [
    {
      rule: "Toutes les voyelles sont écrites, il n'y a pas de voyelles courtes comme en arabe.",
      example: "table → " + await transliterate("table")
    },
    {
      rule: "Les voyelles muettes à la fin des mots sont omises.",
      example: "table → " + await transliterate("table")
    },
    {
      rule: "Les consonnes muettes à la fin des mots ont un ْ (Soukoune) au-dessus d'elles. Ces lettres sont gardées pour indiquer la liaison.",
      example: "petit → " + await transliterate("petit")
    },
    {
      rule: "Le S muet à la fin d'un mot s'écrit زْ puisque la liaison d'un s est toujours prononcée z.",
      example: "les amis → " + await transliterate("les amis")
    },
    {
      rule: "Toutes les lettres muettes qui précèdent une lettre muette à la fin du mot ne sont pas écrites.",
      example: "temps → " + await transliterate("temps")
    },
    {
      rule: "Les sons nasaux sont représentés par des combinaisons spécifiques de lettres arabes.",
      example: "bon → " + await transliterate("bon") + ", pain → " + await transliterate("pain")
    }
  ];

  const specialRulesList = document.getElementById('special-rules');
  for (const {rule, example} of specialRules) {
    const li = document.createElement('li');
    li.textContent = `${rule} Exemple : ${example}`;
    specialRulesList.appendChild(li);
  }
}

// Translittération en temps réel
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const output = document.getElementById('output');

  input.addEventListener('input', async () => {
    output.textContent = await transliterate(input.value);
  });

  // Peupler les tableaux et les règles
  populateLetterSummary();
  populateDigraphs();
  populateSpecialRules();
  populateExamples();
});