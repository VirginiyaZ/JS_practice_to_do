"use script";

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++){
//     if (i === 6){
//         break;
//     }
//     console.log(i);
// }

for (let i = 1; i < 8; i++){
    console.log(i);
    i++;
}

for (let i = 0; i < 3; i++){
    console.log(i);
    for (let j = 0; j < 3; j++){
        console.log(j);
        
    }

}
//  => x-mass tree 
// let result = "";
// const leng = 7;

// for (let i = 1; i < leng; i++){
//     for (let j = 0; j < i; j++){
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);


// first: for (let i = 0; i < 3; i++){
//     console.log(`first level: ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`second level: ${j}`);
//         for (let k = 0; k < 3; k++){
//             if (k === 2) continue first;
//             console.log(`third level: ${k}`);
//         } 
//     }
// }

for (let i = 2; i < 11; i++){
    console.log(i);
    i++;
}

for (let i = 2; i <= 16; i++){
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i =2;
while (i <= 16){
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

const arrOfNumbers = [];
for (let i = 5; i < 11; i++){
    arrOfNumbers[i-5] = i;
    console.log(arrOfNumbers);
}

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
let result = "";
const leng = 5;

for (let i = 0; i <= leng; i++){
    for(let j= 0; j <leng -i; j++){
        result += " ";
    }
    for (let j = 0; j < 2*i +1; j++){
    result +='*';
}
result += "\n";
}

console.log(result);

    
const arr = [3, 5, 8, 16, 20, 23, 50];
const res = [];

for (let i =0; i < arr.length; i++){
    res[i] = arr[i];
}
console.log(res);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }
// console.log(data);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const resul = [];
for (let i =1; i <= data.length; i++){
    resul[i-1] = data[data.length - i];
    }
console.log(resul);