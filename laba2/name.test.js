const greetUser = require('./name');

describe('greetUser', () => {
  test('повертає правильне привітання для John Doe', () => {
    expect(greetUser('John', 'Doe')).toBe('Привіт, мене звати John Doe!');
  });
});
