'use strict';

let numberOfFilms;


function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const ans =  prompt('Один из последних просмотренных фильмов?', '').trim(), 
              ans2 = prompt("На сколько оцените его?", '');
    
        if (ans != null && ans2 != null && ans != '' && ans2 != '' && ans.length < 50){
            personalMovieDB.movies[ans] = ans2;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
    }
}
rememberMyFilms();


function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('You watched a few movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('You are awesome movie -watcher');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are Cinemaddict');
    } else {
        console.log('Error');
    }
}
detectPersonalLevel();


function showMyDB(privatCheck){
    if (!privatCheck) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`ваш любимый жанр под номеро ${i}`);
    }
}
writeYourGenres();