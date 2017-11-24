// 1. Пересечения

/**
 * Найти пересечение двух массивов
 * @return {number[]}
 * @param leftArray
 * @param rightArray
 */
function intersection(leftArray, rightArray) {

    if(!isValid(leftArray) || !isValid(rightArray)){
        return null;
    }

    let lengthLeftArray = leftArray.length;
    let sameElementsArray = [];

    for (let index = 0; index < lengthLeftArray; index++) {
        if (isContain(leftArray[index], rightArray)) {
            sameElementsArray.push(leftArray[index]);
        }
    }

    return sameElementsArray;
}

console.log(`${intersection(
    [1, 2, 3, 4, 5],
    [2, 8, 3]
)}`); //должно вернуть [2, 3]

console.log(`${intersection(
    [1, 2, 3, 4, 5]
)}`);//null

function isContain(value, arrayOfValues) {
    return arrayOfValues.includes(value);
}

function isValid(values = []) {
    return Array.isArray(values) && values.length;
}