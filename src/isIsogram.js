'use strict';

/*
isIsogram('playgrounds') === true
isIsogram('look') === false
isIsogram('Adam') === false
isIsogram('') === true
isIsogram('Oops') === false
*/
/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
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
