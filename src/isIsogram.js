'use strict';

/**
 * @param {number} cents
 *
 * @returns {number[]}
 */
function getCoinCombination(cents) {
  let remaining = cents;

  const values = [1, 5, 10, 25];
  const coins = [0, 0, 0, 0];

  for (let i = 3; i >= 0; i--) {
    coins[i] = Math.floor(remaining / values[i]);
    remaining -= coins[i] * values[i];
  }

  return coins;
}

module.exports = { getCoinCombination };
