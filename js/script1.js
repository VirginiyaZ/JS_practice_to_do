"use strict";

// console.log('arr'+'-object');
// console.log(4 + '5');
// console.log(4 + +'5');
// +4 or +'5' when close to string/integer called унарный плюс

// оператор инкремента incr++  и оператор декремента decr--
// let incr = 10,
//     decr = 10;
//  такая форма записи называется постфиксной >>> 11 and 9
// incr++;
// decr--;
// така] форма записи называется префиксной >>> 11 and 9
// ++incr;
// --decr;
//  но если обявить их внутри лога то ответ будет  >>>10 and 10 console.log(incr++ / decr--);
// а если поставить как префиксный тип тогда ответ будет >>> 11 and 9 console.log(--decr / ++incr)

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);
// console.log(4*2 == 8);

// //  && => and ; || => or ; ! => not;
// const isChecked = false;
// const isClose = false;

// console.log(isChecked || !isClose);

if (4 == 9) {
    console.log('ok');
} else {
    console.log('Error');
}


// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100){
//     console.log('Too much');
// } else {
//     console.log('OK');
// }

const num = '50';
switch (num) {
    case '49': 
        console.log('False');
        break;
    case '100':
        console.log('False');
        break;
    case '50':
        console.log('True');
        break;
    default:
        console.log('Not today');
        break;
}

// (num === 50) ? console.log('OK') : console.log('ERROR');

