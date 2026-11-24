import { transliterate } from './transliterate.mjs';
import { transliterate as trasnliteratePhenetically } from './transliteratePhonetically.mjs';
// Read text from args
const text = process.argv.slice(2).join(' ');

// Transliterate text
const result = await transliterate(text);

// Print result
console.log(result)