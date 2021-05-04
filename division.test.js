const division = require('./division');

test('adds 6 / 3 to equal 2', () => {
  expect(division(6, 3)).toBe(2);
});
test('adds 2.20 / 1.11 to equal 1.981981981981982', () => {
  expect(division(2.2, 1.11)).toBe(1.981981981981982);
});
