const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('adds 1.15 + 2.30 to equal 3.45', () => {
  expect(sum(1.15, 2.3)).toBe(3.446666667);
});
