'use strict';

/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
  const wordToLower = word.toLowerCase().trim();

  if (wordToLower.includes(' ')) {
    return false;
  }

  for (let i = 0; i < wordToLower.length; i++) {
    const letter = wordToLower[i];

    if (wordToLower.includes(letter, i + 1)) {
      return false;
    }

    if (letter.toLowerCase() === letter.toLocaleUpperCase()) {
      return false;
    }
  }

  return true;
}

module.exports = { isIsogram };
