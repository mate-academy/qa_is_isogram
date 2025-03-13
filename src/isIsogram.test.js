'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  // Базова перевірка існування функції
  it('має бути оголошена як функція', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  // Перевірка порожнього рядка
  // eslint-disable-next-line max-len
  it('повертає true для порожнього рядка, оскільки це ізограма за умовою', () => {
    expect(isIsogram('')).toBe(true);
  });

  // Перевірка слова без повторюваних літер
  it('повертає true для слова "playgrounds" як ізограми без повторів', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  // Перевірка слова з повторюваними літерами
  it('повертає false для слова "look" через повтор літери "o"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  // Перевірка нечутливості до регістру
  // eslint-disable-next-line max-len
  it('повертає false для слова "Adam", де "a" та "A" вважаються однаковими', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  // Перевірка слова з повторюваними літерами в іншому порядку
  // eslint-disable-next-line max-len
  it('повертає false для слова "Oops" через повтор літери "o" незалежно від позиції', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  // Перевірка короткого слова без повторів
  it('повертає true для слова "cat" як ізограми з унікальними літерами', () => {
    expect(isIsogram('cat')).toBe(true);
  });

  // Перевірка слова з усіма однаковими літерами
  it('повертає false для слова "aaa" через багаторазові повтори', () => {
    expect(isIsogram('aaa')).toBe(false);
  });

  // Перевірка слова з різним регістром без повторів
  // eslint-disable-next-line max-len
  it('повертає true для слова "LuMp" як ізограми з унікальними літерами', () => {
    expect(isIsogram('LuMp')).toBe(true);
  });

  // Перевірка односимвольного рядка
  it('повертає true для слова "x" як ізограми з однією літерою', () => {
    expect(isIsogram('x')).toBe(true);
  });
});
