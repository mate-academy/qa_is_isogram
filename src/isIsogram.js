'use strict';

/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
  if (typeof word !== 'string') {
    throw new Error('Input must be string');
  }

  const wordToLower = word.toLowerCase().trim();

  for (let i = 0; i < wordToLower.length; i++) {
    const letter = wordToLower[i];

    if (wordToLower.includes(letter, i + 1) || letter === ' ') {
      return false;
    }
  }

  return true;
}

module.exports = { isIsogram };
