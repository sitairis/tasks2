// 2. Пропущенные значения

/**
 * Найти пропущеное значение в неотсортированном массиве.
 * @return {boolean}
 * @param arrayOfValues
 */

function missingSum(arrayOfValues) {
    let maxValue = Math.max.apply(null, arrayOfValues);
    // let maxValue = arrayOfValues.reduce( (prevValue, currentValue) => Math.max(prevValue, currentValue));
    let lengthOfValues = arrayOfValues.length;

    if( maxValue !== lengthOfValues ){
        // let sumOfValues = arrayOfValues.reduce((resultSum, currentValue) => resultSum += currentValue);
        let sumOfValues = sum(arrayOfValues);
        let checkSum = (1 + maxValue)*maxValue/2;

        return checkSum - sumOfValues;
    }
}

function missing(arrayOfValues) {

    if(!isValid(arrayOfValues)){
        return null;
    }
    let maxValue = Math.max.apply(null, arrayOfValues);
    // let maxValue = arrayOfValues.reduce((prevValue, currentValue) => Math.max(prevValue, currentValue));
    let lengthOfValues = arrayOfValues.length;

    if (maxValue !== lengthOfValues) {
        for (let number = 1; number <= maxValue; number++) {
          if(!isContains(number, arrayOfValues)){
              return number;
          }
        }
    }
}

/*если считать от наименьшего числа */
function missingFromMinValue(arrayOfValues) {

    if(!isValid(arrayOfValues)){
        return null;
    }

    // let maxValue = arrayOfValues.reduce((prevValue, currentValue) => Math.max(prevValue, currentValue));
    // let minValue = arrayOfValues.reduce((prevValue, currentValue) =>  Math.min(prevValue, currentValue));
    let maxValue = Math.max.apply(null, arrayOfValues);
    let minValue = Math.min.apply(null, arrayOfValues);

    for (let number = maxValue; number >= minValue; number--){
        if (!isContains( number, arrayOfValues)){
            return number;
        }
    }
}

console.log(`missing ()`);

console.log(`${missingSum([ 1, 3, 4])}`); // 2
console.log(`${missingSum([5, 1, 4, 2])}`); // 3
console.log(`${missingSum([1, 2, 3])}`); // undefined

console.log(`${missing([ 1, 3, 4])}`); // 2
console.log(`${missing([5, 1, 4, 2])}`); // 3
console.log(`${missing([1, 2, 3])}`); // undefined

console.log(`${missingFromMinValue([-1, 0, 1, 3, 4])}`); // 2
console.log(`${missingFromMinValue([5, 1, 4, 2])}`); // 3
console.log(`${missingFromMinValue([1, 2, 3])}`); // undefined


function isContains(value, arrayOfValues) {
    let isContains = false;

    if(arrayOfValues.indexOf(value) !== -1){
        isContains = true;
    }

    return isContains;
}

function isValid(arrayOfValues = []) {

    return Array.isArray(arrayOfValues) && arrayOfValues.length && isArrayOfNumber(arrayOfValues);
}

function isArrayOfNumber(arrayOfValues) {

    return arrayOfValues.every( (element) => typeof element === 'number' );
}

function sum(arrayOfValues) {
    return [].reduce.call(arrayOfValues, (a, b) => a + b);
}