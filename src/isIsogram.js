'use strict';

/**
 * @param {string} word
 * @returns {boolean}
 */
function isIsogram(word) {
  const clean = word.toLowerCase().replace(/[^a-z]/g, '');
  const seen = new Set();

  for (const char of clean) {
    if (seen.has(char)) {
      return false;
    }
    seen.add(char);
  }

  return true;
}

module.exports = isIsogram;
