'use strict';

describe('isIsogram - input validation (only letters)', () => {
  const { isIsogram } = require('./isIsogram');

  // eslint-disable-next-line max-len
  it('should handle non-letter characters as regular letters (if not restricted)', () => {
    // Поточна функція не перевіряє, чи символи — лише літери
    // Тому такі тести перевіряють фактичну поведінку:
    expect(isIsogram('abc-def')).toBe(true); // "-" не рахується як повтор
    expect(isIsogram('123')).toBe(true); // всі цифри унікальні
    expect(isIsogram('a1a')).toBe(false); // "a" повторюється
  });

  it('should return true for symbols with no repeating letters', () => {
    expect(isIsogram('a!b@c')).toBe(true);
  });

  it('should return false for case-insensitive duplicates with symbols', () => {
    expect(isIsogram('A$a')).toBe(false);
  });

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
    expect(isIsogram('Dermatoglyphics')).toBe(true);
    expect(isIsogram('background')).toBe(true);
    expect(isIsogram('')).toBe(true); // порожній рядок — теж ізограма
  });

  it('should return false for a non-isogram', () => {
    expect(isIsogram('look')).toBe(false); // повторення "o"
    expect(isIsogram('Adam')).toBe(false); // "a" і "A" = одна літера
    expect(isIsogram('moose')).toBe(false);
    expect(isIsogram('aba')).toBe(false);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('AbCdefGh')).toBe(true);
    expect(isIsogram('NoNo')).toBe(false);
  });
});
