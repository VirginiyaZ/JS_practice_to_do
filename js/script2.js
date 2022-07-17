'use strict';

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


for (let i = 0; i < 2; i++){
    const ans =  prompt('Один из последних просмотренных фильмов?', ''), 
          ans2 = prompt("На сколько оцените его?", '');

    if (ans != null && ans2 != null && ans != '' && ans2 != '' && ans.length < 50){
        personalMovieDB.movies[ans] = ans2;
        console.log('done');
    } else {
        console.log('Error');
        i--;
    }
  
}

if (personalMovieDB.count < 10) {
    console.log('You watched a few movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('You are awesome movie -watcher');
} else if (personalMovieDB.count >= 30) {
    console.log('You are Cinemaddict');
} else {
    console.log('Error');
}

console.log(personalMovieDB);