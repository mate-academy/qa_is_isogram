'use strict';

/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
  const wordToUpper = word.toUpperCase();

  for (let i = 0; i < wordToUpper.length; i++) {
    const letter = wordToUpper[i];

    if (wordToUpper.includes(letter, i + 1)) {
      return false;
    } 
  }

  return true;
}

module.exports = { isIsogram };
