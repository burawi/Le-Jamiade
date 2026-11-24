import { describe, expect, test } from '@jest/globals';
import { transliterate } from './transliterate.mjs';

describe('dictionary-backed transliteration', () => {
  test.each([
    ['recueil', 'رۏكۏًي'],
    ['recueils', 'رۏكۏًيزْ'],
    ['accueil', 'اكۏًي'],
    ['feuille', 'فۏًي'],
    ['écureuil', 'ىكۊرۏًي'],
  ])('uses the IPA dictionary for %s', async (input, expected) => {
    await expect(transliterate(input)).resolves.toBe(expected);
  });

  test('preserves alternative pronunciations', async () => {
    await expect(transliterate('est plus')).resolves.toBe('ىتْ (ىست) پلۊزْ (پلۊس)');
  });

  test('preserves punctuation and silent plural letters', async () => {
    await expect(transliterate('recueils,')).resolves.toBe('رۏكۏًيزْ,');
  });

  test('falls back to spelling rules when a dictionary file is absent', async () => {
    await expect(transliterate('zzzxq')).resolves.toBe('ززكسك');
  });

  test('transliterates complete phrases', async () => {
    await expect(transliterate('Le recueil est précieux.')).resolves.toBe(
      'لۏ رۏكۏًي ىتْ (ىست) پرىسيۏَزْ.'
    );
  });
});
