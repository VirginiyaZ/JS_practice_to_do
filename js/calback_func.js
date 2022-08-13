"use strict";

function first(){
    // do smth
    setTimeout(function(){
        console.log(1);
    },500);
}

function second(){
    console.log(2);
}

first();
second();


function learnJS(lang, callback){
    console.log(`Я учу ${lang}`);
    callback();
}
function done(){
    console.log('я прошла этот урок');
}
learnJS('Python и JS', done);