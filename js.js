let numberOfFilms = prompt("Сколько фильмов вы уже смотрели?");
console.log(numberOfFilms);
let message = (numberOfFilms < 10) ? 'Просмотренно довольно мало фильмов' :
    (numberOfFilms > 10 && numberOfFilms < 30) ? 'Вы классический зритель' :
    (numberOfFilms > 30) ? 'Вы киноман' :
    'Произошла ошибка';
alert(message);


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    let lastWatchFilm = prompt('Один из последних просмотренных фильмов?');
    let ratingFilm = prompt('На сколько оцените его?');
    if (!lastWatchFilm || !ratingFilm || lastWatchFilm.length > 50) {
        i--;
    } else {
        personalMovieDB.movies[lastWatchFilm] = ratingFilm;
    }

}
console.log(personalMovieDB);

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