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