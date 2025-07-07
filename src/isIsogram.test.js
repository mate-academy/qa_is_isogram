'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  test('повертає true для порожнього рядка', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('повертає true для слова без повторень літер', () => {
    expect(isIsogram('machine')).toBe(true);
    expect(isIsogram('Dermatoglyphics')).toBe(true); // кейс insensitive
  });

  test('повертає false для слова з повторенням літер', () => {
    expect(isIsogram('aba')).toBe(false);
    expect(isIsogram('moOse')).toBe(false); // кейс insensitive
  });

  test('повертає true для одного символу', () => {
    expect(isIsogram('a')).toBe(true);
  });

  test('повертає true для чисел, які не повторюються', () => {
    expect(isIsogram('12345')).toBe(true);
  });

  test('повертає false для чисел, які повторюються', () => {
    expect(isIsogram('112')).toBe(false);
  });

  test('ігнорує регістр літер', () => {
    expect(isIsogram('AbCDefG')).toBe(true);
    expect(isIsogram('aA')).toBe(false);
  });

  test('працює з символами та пунктуацією', () => {
    expect(isIsogram('abc-def')).toBe(true); // не враховується дефіс
  });
});
