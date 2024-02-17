// DOM Elements
const inputPassword = document.getElementById('password');
const lengthInput = document.getElementById('passwordLength');
const upperCaseBox  = document.getElementById('upperCase');
const lowerCaseBox  = document.getElementById('lowerCase');
const numberBox  = document.getElementById('numbers');
const symbolBox  = document.getElementById('symbols');

const randomCharset = {
    upper: randomUpperCase,
    lower: randomLowerCase,
    number: randomNumber,
    symbols: randomSymbol,
}

function valueElements() {
    // checkboxes & DOM ELEMENTS
    const length = +lengthInput.value;
    const upperCase = upperCaseBox.checked;
    const lowerCase = lowerCaseBox.checked;
    const numbers = numberBox.checked;
    const symbols = symbolBox.checked;
    
    inputPassword.value = generatePassword(
        upperCase, 
        lowerCase, 
        numbers, 
        symbols, 
        length
    );
}

function generatePassword(upper, lower, number, symbols, length) {
    let generatePassword = "";
    // all the charset added;
    const allCharacter = upper + lower + number + symbols;

    if (length < 10 || length > 20) {
        alert("Please input number at 'Password Length' from 10 - 20");
        if (allCharacter === 0) {
            return '';
        }
        return '';
    } else {
        // object it will filter the uncheck Checkboxes or the false.
        const checkCounts = [ { upper },  { lower }, { number },  { symbols } ].filter
        (
            item=>Object.values(item)[0]
        );
        // LOOP the checkCounts if the checkbox is true then add all the allChar with the true or check checkbox
        for (let i = 0; i < length; i += allCharacter) {
            checkCounts.forEach(type => {
                const keyNames = Object.keys(type)[0];
    
                generatePassword += randomCharset[keyNames]();
            });
        }
        const finalPassword = generatePassword.slice(0, length);
        return finalPassword;
    }
}


// Generate random ABC / abc / numbers / symbols
function randomUpperCase() {
    const randomUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return randomUpperCase[Math.floor(Math.random() * randomUpperCase.length)];
}
function randomLowerCase() {
    const randomLowerCase = "abcdefghijklmnopqrstuvwxyz";
    return randomLowerCase[Math.floor(Math.random() * randomLowerCase.length)];
}
function randomNumber() {
    const randomNumber = "0123456789";
    return randomNumber[Math.floor(Math.random() * randomNumber.length)];
}
function randomSymbol() {
    const symbols = "{}()[]#:;^,.?!|&_`~@$%/\=+-*'";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function copyPassword() {
    inputPassword.select();
    document.execCommand("copy");
}
