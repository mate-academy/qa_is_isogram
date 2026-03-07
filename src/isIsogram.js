'use strict';

/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
  const lower = word.toLowerCase();
  const letters = new Set(lower);

  return letters.size === lower.length;
}

module.exports = {
  isIsogram,
};
