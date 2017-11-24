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

    const ABBREVIATIONS = {
        'AL': 'Alabama',
        'AK': 'Alaska',
        'AZ': 'Arizona',
        'AR': 'Arkansas',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DE': 'Delaware',
        'FL': 'Florida',
        'GA': 'Georgia',
        'HI': 'Hawaii',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'IA': 'Iowa',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'ME': 'Maine',
        'MD': 'Maryland',
        'MA': 'Massachusetts',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MS': 'Mississippi',
        'MO': 'Missouri',
        'MT': 'Montana',
        'NE': 'Nebraska',
        'NV': 'Nevada',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexico',
        'NY': 'New York',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PA': 'Pennsylvania',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VT': 'Vermont',
        'VA': 'Virginia',
        'WA': 'Washington',
        'WV': 'West Virginia',
        'WI': 'Wisconsin',
        'WY': 'Wyoming'
    };

    for (let abbreviation in ABBREVIATIONS) {
        if (nameOfState === abbreviation || nameOfState === ABBREVIATIONS[abbreviation]) {

            return abbreviation;
        }
    }
}

console.log(`${getAbbreviation('Florida')}`); // 'FL'
console.log(`${getAbbreviation('FL')}`); // 'FL'
console.log(`${getAbbreviation('hgfdg')}`); // 'undefined'
console.log(`${getAbbreviation('Alask')}`); // 'undefined'
console.log(`${getAbbreviation('Wyoming')}`); // 'WY'
console.log(`${getAbbreviation('Rhode Island')}`); // 'PI'

function isValid(value  = '') {
    return isString(value) && value.length;
}

function isString(value) {
    return typeof value === 'string';
}