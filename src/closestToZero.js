/**
 *  function “closestToZero” described by the following specifications:
 *      - given an array of positive and negative integers, it returns the closest number to zero
 *      - if the closest number in input could be either negative or positive, the function returns the positive one
 *      - if the input array is undefined or empty, the function returns 0
 * @param {Array<number>} integerArray
 * @returns {number}
 */
function closestToZero(integerArray) {
    let result = 0;

    if (integerArray && Array.isArray(integerArray) && integerArray.length > 0) {
        let current = integerArray[0]
        integerArray.forEach((element) => {
            if (Math.abs(current) > Math.abs(element)) {
                current = element;
            } else if (Math.abs(current) === Math.abs(element)) {
                current = element < 0 ? current : element;
            }
        });
        result = current;
    }
    return result;
}

module.exports = {
    closestToZero
};