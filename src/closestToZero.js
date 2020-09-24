function closestToZero(integerArray) {
    let closestToZero = 0;

    if (integerArray && Array.isArray(integerArray) && integerArray.length > 0) {
        let res = integerArray[0]
        integerArray.forEach((element) => {
            if (Math.abs(res) > Math.abs(element)) {
                res = element;
            } else if (Math.abs(res) === Math.abs(element)) {
                res = element < 0 ? res : element;
            }
        });
        closestToZero = res;
    }
    return closestToZero;
}

module.exports = {
    closestToZero
};