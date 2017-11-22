// 2. Пропущенные значения

/**
 * Найти пропущеное значение в неотсортированном массиве.
 * @param  {number[]} values
 * @return {boolean}
 */

// function missing(arrayOfValues) {
//     // let maxValue = Math.max.apply(null, arrayOfValues);
//     let maxValue = arrayOfValues.reduce( (prevValue, currentValue) => {
//         return Math.max(prevValue, currentValue);
//     });
//     let lengthOfValues = arrayOfValues.length;
//
//     if( maxValue !== lengthOfValues ){
//         let sumOfValues = arrayOfValues.reduce((resultSum, currentValue) =>{
//             return resultSum += currentValue;
//         });
//         let checkSum = (1 + maxValue)*maxValue/2;
//
//         let missingNumber = checkSum - sumOfValues;
//
//         return missingNumber;
//     }
// }

function missing(arrayOfValues) {

    if(!isValid(arrayOfValues)){
        return null;
    }

    let maxValue = arrayOfValues.reduce((prevValue, currentValue) => {
        return Math.max(prevValue, currentValue);
    });
    let lengthOfValues = arrayOfValues.length;

    if (maxValue !== lengthOfValues) {
        for (let number = 1; number <= maxValue; number++) {
          if(!isContains(number, arrayOfValues)){
              return number;
          }
        }
    }
}

// /*если считать от произвольного числа */
// function missing(arrayOfValues) {
//
//     if(!isValid(arrayOfValues)){
//         return null;
//     }
//
//     let maxValue = arrayOfValues.reduce((prevValue, currentValue) => {
//         return Math.max(prevValue, currentValue);
//     });
//     let minValue = arrayOfValues.reduce((prevValue, currentValue) => {
//         return Math.min(prevValue, currentValue);
//     });
//     let lengthOfValues = arrayOfValues.length;
//
//     if (maxValue !== lengthOfValues) {
//         for (let index = minValue; index <= maxValue; index++) {
//             console.log(isContains(index, arrayOfValues) );
//             if(!isContains(index, arrayOfValues)){
//                 return index;
//             }
//         }
//     }
// }

console.log(missing([1, 3, 4])); // 2
console.log(missing([5, 1, 4, 2])); // 3
console.log(missing([1, 2, 3, 4])); // undefined

function isContains(value, arrayOfValues) {
    let returnIsContains = false;

    if(arrayOfValues.indexOf(value) !== -1){
        returnIsContains = true;
    }

    return returnIsContains;
}

function isValid(arrayOfValues) {
    let lengthOfValue = arrayOfValues.length;

    return arrayOfValues && Array.isArray(arrayOfValues) && lengthOfValue && isArrayOfNumber(arrayOfValues);
}

function isArrayOfNumber(arrayOfValues) {

    return arrayOfValues.every( (element) => {
        return typeof element === 'number';
    });
}