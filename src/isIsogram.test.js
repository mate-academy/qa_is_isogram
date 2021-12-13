describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('Should return true with empty string', () => {
    expect(isIsogram(''))
    .toEqual(true)
  })

  it('Should return true with empty string', () => {
    expect(isIsogram('Vlad'))
    .toEqual(true)
  })

  it('Should return true with empty string', () => {
    expect(isIsogram('Vladislav'))
    .toEqual(false)
  })
  it('Should return true with empty string', () => {
    expect(isIsogram('Vladislav'))
    .toEqual(false)
  })
  it('Should return true with empty string', () => {
    expect(isIsogram('1234567890-=qwertyuiop[]asdfghjkl;zxcvbnm,.'))
    .toEqual(true)
  })
});
