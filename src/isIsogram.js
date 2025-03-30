'use strict';

/**
 * @param {string} word
 *
 * @returns {boolean}
 */

function isIsogram(word) {
  const letters = new Set(word.split('').map(l => l.toLowerCase()));

  if (letters.size !== word.length) {
    return false;
  }

  return true;
};

module.exports = { isIsogram };
