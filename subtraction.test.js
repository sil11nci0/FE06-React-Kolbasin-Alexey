const substr = require('./substr');

test('adds 5 - 3 to equal 2', () => {
  expect(substr(5, 3)).toBe(2);
});
test('adds 2.20 - 1.11 to equal 1.09', () => {
  expect(substr(2.2, 1.11)).toBe(1.09);
});
