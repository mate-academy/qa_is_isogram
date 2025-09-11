'use strict';

/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
  const wordToLower = word.toLowerCase();

  const set = new Set(wordToLower.split(''));

  return set.size === wordToLower.length;
}

module.exports = { isIsogram };
