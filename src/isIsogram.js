'use strict';

/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
  word.split('').forEach(letter => {
    if (letter.toLowerCase() === letter.toUpperCase()) {
      throw new Error('word must contains only letters');
    }
  });

  if (word === '') {
    return true;
  }

  const wordToLower = word.toLowerCase();

  for (let i = 0; i < wordToLower.length; i++) {
    const letter = wordToLower[i];

    if (wordToLower.includes(letter, i + 1)) {
      return false;
    }
  }

  return true;
}

module.exports = { isIsogram };
