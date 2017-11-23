// 3. Аббревиатура штатов США (необязательно через массивы, freestyle задача)

/**
 * Вовзращает аббревиатуру штата США.
 *
 *  в любом виде (правильное/неправильное название, в lowerCase/upperCase, может прийти готовая аббревиатура и т.д.)
 *
 * @return {string} - аббревиатура штата (в upper case)
 * @param nameOfState
 */
function getAbbreviation(nameOfState = '') {

    if (!isValid(nameOfState)) {
        return null;
    }



    let name = nameOfState.toUpperCase();
    const ABBREVIATIONS = {
        'A': ['AL', 'AK', 'AZ', 'AR'],
        'C': ['CA', 'CO', 'CT'],
        'D': ['DE'],
        'F': ['FL'],
        'G': ['GA'],
        'H': ['HI'],
        'I': ['ID', 'IL', 'IN', 'IA'],
        'K': ['KS', 'KY'],
        'L': ['LA'],
        'M': ['ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT'],
        'N': ['NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND'],
        'O': ['OH', 'OK', 'OR'],
        'P': ['PA'],
        'R': ['RI'],
        'S': ['SC', 'SD'],
        'T': ['TN', 'TX'],
        'U': ['UT'],
        'V': ['VT', 'VA'],
        'W': ['WA', 'WV', 'WI', 'WY']
    };
    const STATES = {
        'A': ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
        'C': ['California', 'Colorado', 'Connecticut'],
        'D': ['Delaware'],
        'F': ['Florida'],
        'G': ['Georgia'],
        'H': ['Hawaii'],
        'I': ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
        'K': ['Kansas', 'Kentucky'],
        'L': ['Louisiana'],
        'M': ['Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana'],
        'N': ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota'],
        'O': ['Ohio', 'Oklahoma', 'Oregon'],
        'P': ['Pennsylvania'],
        'R': ['Rhode Island'],
        'S': ['South Carolina', 'South Dakota'],
        'T': ['Tennessee', 'Texas'],
        'U': ['Utah'],
        'V': ['Vermont', 'Virginia'],
        'W': ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    };
    for (let keyLetter in STATES) {

        if (name.charAt(0) === keyLetter) {
            let ar = [];

            let arrayOfNameOfState = name.split('');

            //STATES[keyLetter].reduce((result, currentElement, index) => {
            let result = {begin: 0, end:0, resStr: ''};
            let states = STATES[keyLetter];
            for (let ind = 0; ind < states.length;ind++){
for(let j = 0;j<states[ind].length;j++){

}
                if (isContains(states[ind], arrayOfNameOfState.slice(result.begin, result.end))) {
                    result.resStr = arrayOfNameOfState.slice(result.begin, result.end);
                    // console.log(`${states[ind]} ${result.begin} , ${result.end}`);
                }else {
                    console.log(`${result.begin} , ${result.end}  dsf1`);
                    result.begin = result.end;
                    result.resStr += arrayOfNameOfState.slice(result.begin, result.end);
                    console.log(`${result.begin} , ${result.end}`);
                }
                result.end++;
                // console.log(`${result.begin} , ${result.end}`);
                ar.push(result);
            }
            let maxindex = getvalueOfResstr(ar);
           return ABBREVIATIONS[keyLetter][maxindex];
        }

    }
}


// console.log(getAbbreviation('Florida')); // 'FL'
// console.log(getAbbreviation('FL')); // 'FL'
console.log(getAbbreviation('KDJFDLFJ')); // 'undefined'

function isValid(value  = '') {
    return isString(value) && value.length;
}

function isString(value) {
    return typeof value === 'string';
}

function isContains(state, value) {

    return state.includes(value);
}
function getvalueOfResstr(ar) {
    let array = [];

    for (let i = 0; i < ar.length; i++) {
        array.push(ar[i].resStr.length);
    }
    let max = 0;
    for (let i =0, j = 1;i < array.length; i++, j++){

        if(array[i] > array[j]){
            max = i;
        }
    }
    return max;
}
