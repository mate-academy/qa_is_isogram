'use strict';

function isIsogram(word) {
  if (typeof word !== 'string') {
    return false;
  }

  const lowerWord = word.toLowerCase();
  const letters = new Set(lowerWord);

  return letters.size === lowerWord.length;
}

module.exports = { isIsogram };
