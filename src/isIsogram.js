'use strict';

/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
  const wordToLower = word.toLowerCase(); // Перетворюємо всі літери на малі
  console.log(`wordToLower: ${wordToLower}`); // Додаємо логування

  const seen = new Set();

  for (let i = 0; i < wordToLower.length; i++) {
    const letter = wordToLower[i];
    console.log(`Checking letter: ${letter}`); // Логування літери

    if (seen.has(letter)) {
      return false;
    }

    seen.add(letter);
  }

  return true;
}

module.exports = { isIsogram };
