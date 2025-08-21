'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  test('возвращает true для пустой строки', () => {
    expect(isIsogram('')).toBe(true);
  });

  test.each([
    ['lamp', true, 'обычное слово без повторяющихся букв'],
    ['letter', false, 'повторяющиеся буквы подряд'],
    ['banana', false, 'повторяющиеся буквы не подряд'],
    ['Dermatoglyphics', true, 'длинное слово-изограмма с разным регистром'],
    // eslint-disable-next-line max-len
    ['Alphabet', false, "регистр игнорируется — 'A' и 'a' считаются одинаковыми"],
    ['A', true, 'односимвольная строка'],
    ['subdermatoglyphic', true, 'длинный изограмма без повторов'],
  ])(
    "возвращает %s для '%s' (%s)",
    (word, expected, description) => {
      expect(isIsogram(word)).toBe(expected);
    }
  );
});
