"use strict";

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];


// function showFamily(arr){
    
//     let str = '';

//     arr.length === 0 ? str = 'No members of family' : str = 'Family consist of: ';

//     arr.forEach(member => {
//         str += `${member} `;
//     });
//     return str;
// }
// console.log(showFamily(family));

const favoriteCities = ['lisbon', 'ROME', 'milan', 'Dublin'];

function standardizeStrings(arr){
    arr.forEach(city =>{
        console.log(city.toLowerCase());
    });
}
console.log(standardizeStrings(favoriteCities));



const someString = 'This is some strange string';

function reverse(str){
    if (typeof(str) !== 'string'){
        return 'Vistake';
    }
    return str.split('').reverse().join('');
}
console.log(reverse(someString));



// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr){
//     let str = '';

//     arr.length === 0 ? str = 'No many' : str = 'Currency is: ';

//     for (let i = 0 ; i <arr.length; i++){
//         if (arr[i] === missingCurr){
//             continue;
//         }
//         str += `${arr[i]}\n`;
//     }
//     return str;
// }
// console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));