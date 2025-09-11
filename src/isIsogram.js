'use strict';

/**
 * @param {string} candidateWord
 *
 * @returns {boolean}
 */
function isIsogram(candidateWord) {
  const wordToLower = candidateWord.toLowerCase();

  for (let i = 0; i < wordToLower.length; i++) {
    const letter = wordToLower[i];

    if (wordToLower.includes(letter, i + 1)) {
      return false;
    }
  }

  return true;
}

module.exports = { isIsogram };
