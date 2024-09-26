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

module.exports = transliterate;