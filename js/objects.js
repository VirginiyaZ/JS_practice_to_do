"use strict";

const obj = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border:'black',
        bg: "red"
    },
    makeTest: function(){
        console.log('Test');
    }
};
obj.makeTest();
// console.log(Object.keys(obj).length);
// деструтуризация объекта : передаем в const св-тва объекта 
// которые хотим вытащить через {} и присваиваем = obj.colors;
const {border,bg} = obj.colors;
console.log(border,bg);
// console.log(obj.name);
// delete obj.name;
    
// console.log(obj);
// test
// { width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }

// console.log(obj["colors"]["border"]);
let counter = 0;
for (let key in obj){
    if (typeof(obj[key])=== 'object'){
        for (let i in obj[key]){
            console.log(`result ${i} has the follows: ${obj[key][i]}`);
            counter++;
        }
    }else{
        console.log(`result ${key} has the follows: ${obj[key]}`);
        counter++;
    }
}
console.log(counter);
// result name has the follows: test
// result width has the follows: 1024
// result height has the follows: 1024
// result border has the follows: black
// result bg has the follows: red
// 5

