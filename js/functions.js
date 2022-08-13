"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
    
}
showFirstMessage('Hello world!');
console.log(num);


// function calc(a,b){
//     return (a + b);

// }
// console.log(calc(4, 3));


function ret(){
    let num = 50;
    // 
    return num;
}
const anotherNum = ret();
console.log(anotherNum);


const logger = function(){
    console.log('Hello');
};
logger();


const calc = (a, b) =>  a + b;

// or 
const calculate = (a, b) => {
    return a + b;
};


const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr){
    return  curr * amount;
}

function promotion(result){
    console.log(result * discount);
   
}

const res = convert(500, usdCurr);
promotion(res);

// promotion(convert(500, usdCurr));

convert(500, usdCurr);
convert(500, eurCurr);


// function test(){
//     for (let i =0; i <5; i++){
//         console.log(i);
//         if (i ===3) return
//     }
//     console.log('done');
// }
// test();


function doNothing() {}
console.log(doNothing() === undefined);


function sayHello(name){
    return `Hello, ${name}!`;
}
console.log(sayHello('Alex'));


function returnNumber(num){
    return [num -1, num, num +1];
}
console.log(returnNumber(5));


function getMathResult(a, b){
    if (typeof(b) !== 'number' || b <= 0){
        return a;
    }
    let str = '';
    for (let i =1; i <=b; i++){
        if ( i === b) {
            str += `${a*i}`;
        } else {
            str += `${a*i}---`;
        }
    }
    return str;
}

console.log(getMathResult(5,3));


function calculateVolumeAndArea(num){
    if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)){
        return `При вычислении произошла ошибка`;
    }
    let volume = 0;
    let area = 0;
    volume = num * num * num;
    area = 6 * (num * num);
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}
console.log(calculateVolumeAndArea(5));


function getVagonNumber (seat){
    if (typeof(seat) !== 'number' || seat < 0 || !Number.isInteger(seat)){
        return `Ошибка. Проверьте правильность введенного номера места`;
    }
    if (seat === 0 || seat > 36){
        return `Таких мест в вагоне не существует`;
    }
    for (let i = 4; i <=36; i += 4){
        if (seat <= i){
            return Math.ceil(i/4);
        }
    }
}
console.log(getVagonNumber (33));


function getTimeForMinutes(min){
    if (typeof(min) !== 'number' || min <0 || !Number.isInteger(min)){
        return "Error. Check your data";
    }

    const minutes = min % 60;
    const hours = (min - minutes)/60;
    let countStr = '';

    switch (hours){
        case 0: 
            countStr = 'часов';
            break;
        case 1: 
            countStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            countStr = 'часа';
            break;
        default:
            countStr = 'часов';
    }
    return `Это ${hours} ${countStr} и ${minutes}`;

}
console.log(getTimeForMinutes(150));


function findMax(a, b, c, d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
            return 0;
        } else {
            return Math.max(a, b, c, d);
        }
}
console.log(findMax(7, 2, 10, 48));


function finfFib(num){
    if (typeof(num) !== 'number' || num <0 ||!Number.isInteger(num)){
        return "";
    }
    let result = '';
    let a = 0;
    let b = 1;

    for (let i = 0; i < num; i++){
        if (i + 1 === num){
            result += `${a}`;
        } else {
            result += `${a} `;
        }
        let c = a + b;
        a=b;
        b=c;
    }
    return result;
}
    
console.log(finfFib(4));