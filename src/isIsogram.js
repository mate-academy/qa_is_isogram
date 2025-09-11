'use strict';

/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
  const lowerCasedWord = word.toLowerCase(); // Convert the word to lowercase
  const letters = new Set();

  for (const char of lowerCasedWord) {
    if (letters.has(char)) {
      return false; // Return false if a duplicate letter is found
    }
    letters.add(char);
  }

  return true; // If no duplicates are found, return true
}

module.exports = { isIsogram };
