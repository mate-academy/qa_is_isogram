'use strict';

/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
  // Given the requirements of the task, based on the TDD method,
  // I supplemented the function with checks for input values.

  // Checking that "word" is a string
  if (typeof (word) !== 'string' && word !== '') {
    return false;
  }

  const lettersString = 'qwertyuiopasdfghjklzxcvbnm';
  const wordToLower = word.toLowerCase();

  for (let i = 0; i < wordToLower.length; i++) {
    const letter = wordToLower[i];

    // Checking that "word" contains only letters
    if (!lettersString.includes(letter)) {
      return false;
    }

    if (wordToLower.includes(letter, i + 1)) {
      return false;
    }
  }

  return true;
}

module.exports = { isIsogram };
