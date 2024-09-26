const transliterate = require('./transliterate');

describe('transliterate', () => {
  test('transliterates single letters correctly', () => {
    expect(transliterate('a')).toBe('ا');
    expect(transliterate('b')).toBe('ب');
    expect(transliterate('f')).toBe('ف');
  });

  test('transliterates diagraphs correctly', () => {
    expect(transliterate('ou')).toBe('و');
    expect(transliterate('ch')).toBe('ش');
    expect(transliterate('eu')).toBe('ۏ');
  });

  test('handles context-dependent transliterations', () => {
    expect(transliterate('ce')).toBe('سۏ');
    expect(transliterate('ca')).toBe('كا');
    expect(transliterate('je')).toBe('جۏ');
    expect(transliterate('ga')).toBe('غا');
  });

  test('handles nasal sounds correctly', () => {
    expect(transliterate('on')).toBe('وَن');
    expect(transliterate('an')).toBe('ان');
    expect(transliterate('in')).toBe('ىن');
    expect(transliterate("bon")).toBe("بوَن");
    expect(transliterate("Bonne")).toBe('بوَنّ');
  });

  test('omits silent letters at the end of words', () => {
    expect(transliterate('tres')).toBe('ترىسْ');
    expect(transliterate('ils jouent')).toBe('يلسْ جوتْ');
  });

  test('transliterates a full sentence', () => {
    const input = "Bonjour! Je m'appelle Claude.";
    const expected = "بوَنجور! جۏ م'اپىل كلوَد.";
    expect(transliterate(input)).toBe(expected);
  });

  test('transliterates successive consonants', () => {
    expect(transliterate("c'est")).toBe("س'ىتْ");
  });
});