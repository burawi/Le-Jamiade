import { transliterate } from './transliterate.mjs';
// Read text from args
const text = process.argv.slice(2).join(' ');

// Transliterate text
const result = transliterate(text);

// Print result
console.log(result)