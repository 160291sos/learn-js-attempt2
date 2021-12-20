let numberOfFilms;

function start() {
    numberOfFilms = prompt("Сколько фильмов вы уже смотрели?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже смотрели?");
    }
}
start();

let message;

function detectPersonalLevel() {
    message = (numberOfFilms < 10) ? 'Просмотренно довольно мало фильмов' :
        (numberOfFilms > 10 && numberOfFilms < 30) ? 'Вы классический зритель' :
        (numberOfFilms > 30) ? 'Вы киноман' :
        'Произошла ошибка';
    alert(message);
}
detectPersonalLevel();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastWatchFilm = prompt('Один из последних просмотренных фильмов?');
        let ratingFilm = prompt('На сколько оцените его?');
        if (!lastWatchFilm || !ratingFilm || lastWatchFilm.length > 50) {
            i--;
        } else {
            personalMovieDB.movies[lastWatchFilm] = ratingFilm;
        }

    }
}
rememberMyFilms();

let filmGenres;

function writeYourGenres (){
    let i = 1;
while (i<4){
    filmGenres = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres.push(filmGenres);
    i++;
}
}
writeYourGenres();

function showMyDB (){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB();


//console.log(personalMovieDB);

/*let i = 0;
while (i<2){
    let lastWatchFilm = prompt('Один из последних просмотренных фильмов?');
    if (!lastWatchFilm || lastWatchFilm.length>50){
       // break
    }
     let   ratingFilm = prompt('На сколько оцените его?');
    personalMovieDB.movies[lastWatchFilm] = ratingFilm;
    i++;
}
console.log(personalMovieDB);
*/
/*
do {
    let lastWatchFilm = prompt('Один из последних просмотренных фильмов?');
    if (!lastWatchFilm || lastWatchFilm.length>50){
     //   break
    }
     let   ratingFilm = prompt('На сколько оцените его?');
    personalMovieDB.movies[lastWatchFilm] = ratingFilm;
    i++;
}while (i<2);
console.log(personalMovieDB);
*/