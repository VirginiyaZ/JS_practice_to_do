// аперсанд/&&  или логический оператор И /and 

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log('Iam not hungry');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3  && cola && fries);

// if (hamburger === 3  && cola === 1 && fries) {
//     console.log('All is ok');
// } else {
//     console.log('We are gone');
// }


// логический оператор ИЛИ/ or => || 
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries ===3 && nuggets) {
//     console.log('All is nice');
// } else {
//     console.log('We are gone');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';
console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);

console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5); 
console.log( NaN || null && !3 && undefined || 5); 
console.log( 5 === 5 && 3 > 1 || 5);
console.log( NaN || 2 || undefined );

let hamburger; 
const fries = NaN; 
const cola = 0; 
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!');
}
// if (hamburger || cola || fries === 3 || nuggets) { 
//     console.log('Done!');
// }