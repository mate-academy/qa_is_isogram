'use strict';

describe('isIsogram',
  () => {
    const { isIsogram } = require('./isIsogram');

    it(`should be declared`, () => {
      expect(isIsogram).toBeInstanceOf(Function);
    });

    it('should return true with empty string', () => {
      expect(isIsogram('')).toBeTruthy();
    });

    it(
      'should return false if word includes the same char'
      + 'in upper and lower cases',
      () => {
        expect(isIsogram('Oops')).toBeFalsy();
      }
    );

    it('should return true if word contains consists of different characters',
      () => {
        expect(isIsogram('Hey, man')).toBeTruthy();
      }
    );

    it('should return false if at least one char is repeating in the word',
      () => {
        expect(isIsogram('Hello, friend')).toBeFalsy();
      }
    );
  });
