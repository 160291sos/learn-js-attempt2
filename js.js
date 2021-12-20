let numberOfFilms = prompt("Сколько фильмов вы уже смотрели?");
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastWatchFilm = prompt('Один из последних просмотренных фильмов?'),
    ratingFilm = prompt('На сколько оцените его?'),
    lastWatchFilm2 = prompt('Один из последних просмотренных фильмов?'),
    ratingFilm2 = prompt('На сколько оцените его?');
personalMovieDB.movies[lastWatchFilm] = ratingFilm;
personalMovieDB.movies[lastWatchFilm2] = ratingFilm2;
console.log(personalMovieDB);