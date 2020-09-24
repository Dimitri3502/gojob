const {closestToZero} = require('../src/closestToZero');

test('when input is [8, 5, 10] it must returns 5', () => {
    expect(closestToZero([8, 5, 10])).toBe(5);
});
test('when input is [5, 4, -9, 6, -10, -1, 8] it must return -1', () => {
    expect(closestToZero([5, 4, -9, 6, -10, -1, 8])).toBe(-1);
});
test('when input is [8, 2, 3, -2] it must return 2', () => {
    expect(closestToZero([8, 2, 3, -2] )).toBe(2);
});
test('when input is [2, 0], it must returns 0, as 0 is ... the closest number to 0', () => {
    expect(closestToZero([2, 0])).toBe(0);
});
test('if the closest number in input could be either negative or positive, the function returns the positive one', () => {
    expect(closestToZero([2, -2])).toBe(2);
    expect(closestToZero([-2, 2])).toBe(2);
});
test('if the input array is undefined or empty, the function returns 0', () => {
    expect(closestToZero()).toBe(0);
    expect(closestToZero([])).toBe(0);
});