'use strict';

/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
  const lowerCased = word.toLowerCase();

  for (let i = 0; i < lowerCased.length; i++) {
    const letter = lowerCased[i];

    if (lowerCased.indexOf(letter, i + 1) !== -1) {
      return false;
    }
  }

  return true;
}

module.exports = { isIsogram };
