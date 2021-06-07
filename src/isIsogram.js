'use strict';

/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
  const wordToLower = word.toLowerCase();

  for (let i = 0; i < wordToLower.length; i++) {
    for (let j = i + 1; j < wordToLower.length; j++) {
      if (wordToLower[i] === wordToLower[j]) {
        return false;
      }
    }
  }

  return true;
}

module.exports = isIsogram;
