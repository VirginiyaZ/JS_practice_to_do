"use strict";

// const arr = [1,2,3,4,5,8];

// dell the last element
// arr.pop();
// [ 1, 2, 3, 4, 5 ]

// add element into arr
// arr.push(10);
// [
//     1, 2,  3, 4,
//     5, 8, 10
//   ]


const arr = [1,12,43,64,5,8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
    return a-b;
}


// 100 output of arr[99] = 0;console.log(arr.length);
// [ 1, 2, 3, 4, 5, 8, <93 empty items>, 0 ]   >>> console.log(arr);
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr){
//     console.log(`${i} : ${item} inside array ${arr}`);
// });

//  output
// 0 : 1 inside array 1,2,3,4,5,8
// 1 : 2 inside array 1,2,3,4,5,8
// 2 : 3 inside array 1,2,3,4,5,8
// 3 : 4 inside array 1,2,3,4,5,8
// 4 : 5 inside array 1,2,3,4,5,8
// 5 : 8 inside array 1,2,3,4,5,8


// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// //  output 1 2 3 4 5 8

// for (let value of arr){
//     console.log(value);
// }

// const str = prompt('Enter product name:','');
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));