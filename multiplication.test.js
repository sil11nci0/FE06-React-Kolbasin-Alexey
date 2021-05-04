const multi = require('./multiplication');

test('adds 1 * 2 to equal 2', () => {
  expect(multi(1, 2)).toBe(2);
});
test('adds 1.15 + 2.30 to equal 2.645', () => {
  expect(multi(1.15, 2.3)).toBe(3);
});
