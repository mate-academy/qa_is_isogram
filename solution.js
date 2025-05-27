function isIsogram(word) {
  if (word === '') {
    return true;
  }
  const lowerCaseWord = word.toLowerCase();
  const charSet = new Set();
  for (const char of lowerCaseWord) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}

describe('isIsogram', () => {
  test('should return true for a word with no repeating letters (e.g., "playgrounds")', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('should return false for a word with consecutive repeating letters (e.g., "look")', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('should return false for a word with non-consecutive repeating letters (e.g., "banana")', () => {
    expect(isIsogram('banana')).toBe(false);
  });

  test('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return false for words with repeating letters regardless of case (e.g., "Adam")', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('should return false for words with repeating letters regardless of case (e.g., "Oops")', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  test('should return true for a single letter word', () => {
    expect(isIsogram('a')).toBe(true);
  });
