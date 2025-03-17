'use strict';

function isIsogram(word) {
  if (!word) {
    return true;
  }

  const lowercaseWord = word.toLowerCase();
  const charSet = new Set();

  for (const char of lowercaseWord) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }

  return true;
}
module.exports = { isIsogram };
