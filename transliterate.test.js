import { transliterate } from './transliterate.mjs';

// Mock functions for browser and Node.js environments
global.fetch = jest.fn();
jest.mock('fs/promises', () => ({
  readFile: jest.fn(),
}));

// Helper function to set up the environment
function setupEnvironment(isBrowser) {
  if (isBrowser) {
    delete global.window;
    global.window = { document: {} };
    global.fetch.mockClear();
  } else {
    delete global.window;
    jest.resetModules();
  }
}

// Mock dictionary data
const mockDictData = {
  'chat': '/ʃa/',
  'chaud': '/ʃo/',
  'grand': '/gʁɑ̃/',
  'faux': '/fo/',
  'est': '/ɛst/, /ɛ/',
  'plus': '/ply/, /plys/',
  'fils': '/fis/, /fil/',
};

describe('transliterate function', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('Browser environment', () => {
    beforeEach(() => {
      setupEnvironment(true);
      global.fetch.mockResolvedValue({
        json: () => Promise.resolve(mockDictData),
      });
    });

    test('transliterates words correctly', async () => {
      expect(await transliterate('chat')).toBe('شا');
      expect(await transliterate('chaud')).toBe('شوَ');
      expect(await transliterate('grand')).toBe('غران');
      expect(await transliterate('faux')).toBe('فوَ');
    });

    test('handles words with multiple IPA values', async () => {
      expect(await transliterate('est')).toBe('ىست (ى)');
      expect(await transliterate('plus')).toBe('پلۊ (پلۊس)');
      expect(await transliterate('fils')).toBe('فيس (فيل)');
    });

    test('handles words not in dictionary', async () => {
      expect(await transliterate('xyz')).toBe('كسيز');
    });

    test('handles multiple words', async () => {
      expect(await transliterate('le chat')).toBe('لى شا');
      expect(await transliterate('il est plus')).toBe('يل ىست (ى) پلۊ (پلۊس)');
    });
  });

  describe('Node.js environment', () => {
    beforeEach(() => {
      setupEnvironment(false);
      const fs = require('fs/promises');
      fs.readFile.mockResolvedValue(JSON.stringify(mockDictData));
    });

    test('transliterates words correctly', async () => {
      expect(await transliterate('chat')).toBe('شا');
      expect(await transliterate('chaud')).toBe('شوَ');
      expect(await transliterate('grand')).toBe('غران');
      expect(await transliterate('faux')).toBe('فوَ');
    });

    test('handles words with multiple IPA values', async () => {
      expect(await transliterate('est')).toBe('ىست (ى)');
      expect(await transliterate('plus')).toBe('پلۊ (پلۊس)');
      expect(await transliterate('fils')).toBe('فيس (فيل)');
    });

    test('handles words not in dictionary', async () => {
      expect(await transliterate('xyz')).toBe('كسيز');
    });

    test('handles multiple words', async () => {
      expect(await transliterate('le chat')).toBe('لى شا');
      expect(await transliterate('il est plus')).toBe('يل ىست (ى) پلۊ (پلۊس)');
    });
  });

  describe('Error handling', () => {
    test('handles missing dictionary file in browser', async () => {
      setupEnvironment(true);
      global.fetch.mockRejectedValue(new Error('File not found'));
      
      console.log = jest.fn(); // Mock console.log to catch the error message
      expect(await transliterate('unknownword')).toBe('ونكنوَونوَرد');
      expect(console.log).toHaveBeenCalled();
    });

    test('handles missing dictionary file in Node.js', async () => {
      setupEnvironment(false);
      const fs = require('fs/promises');
      fs.readFile.mockRejectedValue(new Error('File not found'));
      
      console.log = jest.fn(); // Mock console.log to catch the error message
      expect(await transliterate('unknownword')).toBe('ونكنوَونوَرد');
      expect(console.log).toHaveBeenCalled();
    });
  });
});