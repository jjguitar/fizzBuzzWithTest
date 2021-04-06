const fizzbuzz = require('./fizzbuzz')
describe('fizzbuzz', () => {
  test('Should print an error message if argument is not a number', () => {
    const expected = 'Error: the argument is not a number';
    const result = fizzbuzz('16');
    expect(expected).toBe(result);
  })

  test('Should print 0 if they receive 0', () => {
    const expected = 0;
    const result = fizzbuzz(0);
    expect(expected).toBe(result);
  });

  test('Should print 1 if they receive 1', () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(expected).toBe(result);
  });

  test('Should print fizz if they receive multiple of 3', () => {
    const expected = 'fizz';
    const result = fizzbuzz(6);
    expect(expected).toBe(result);
  })

  test('Should print buzz if they receive multiple of 5', () => {
    const expected = 'buzz';
    const result = fizzbuzz(10);
    expect(expected).toBe(result);
  })

  test('Should print fizzbuzz if they receive multiple of 3 and 5', () => {
    const expected = 'fizzbuzz';
    const result = fizzbuzz(15);
    expect(expected).toBe(result);
  })
})