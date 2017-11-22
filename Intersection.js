// 1. Пересечения

/**
 * Найти пересечение двух массивов
 * @param  {number[]} left
 * @param  {number[]} right
 * @return {number[]}
 */
function intersection(leftArray, rightArray) {
    if(isValid(leftArray) || isValid(rightArray)){
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

console.log(intersection(
    [1, 2, 3, 4, 5],
    [2, 8, 3]
)); //должно вернуть [2, 3]

console.log(intersection(
    [1, 2, 3, 4, 5]
)); //должно вернуть [2, 3]

function isContain(value, arrayOfValues) {
    return arrayOfValues.indexOf(value) !== -1;
}

function isValid(value) {
    let lengthOfValue = value.length;
    return value || Array.isArray(value) || lengthOfValue;
}