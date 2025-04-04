'use strict';

/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
  const wordToLower = word.toLowerCase();

  if (/\W/.test(wordToLower)) {
    throw new Error('Invalid word');
  }

  for (let i = 0; i < wordToLower.length; i++) {
    const letter = wordToLower[i];

    if (wordToLower.includes(letter, i + 1)) {
      return false;
    }
  }

  return true;
}

module.exports = { isIsogram };
