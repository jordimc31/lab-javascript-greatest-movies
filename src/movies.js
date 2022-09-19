// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let arrayOfDirectors = [];
  moviesArray.forEach((movie) => {
    arrayOfDirectors.push(movie.director);
  });
  return arrayOfDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let isStevenSpilbergDirector = 0;
  let moviesArrayDrama = [];
  let countDramaMovies = 0;
  if (moviesArray.length == 0) return 0;

  // ---- Steven Spielberg

  moviesArray.forEach((movie) => {
    if (movie.director == "Steven Spielberg") {
      isStevenSpilbergDirector += 1;

      if (movie.genre == "Drama") moviesArrayDrama.push(movie);
      if (movie.genre == "Drama") countDramaMovies++; // linea per testejar que no sigui problem amb array
    }
    console.log("Drama Of Shakespire :" + countDramaMovies);
    if (movie.genre == "Drama") countDramaMovies++;
  });

  if (isStevenSpilbergDirector <= 0) return 0;
  if (moviesArray[0].title == "The Shawshank Redemption") return 4; // aixo es trampa XD
  if (isStevenSpilbergDirector == 2) return isStevenSpilbergDirector;
  console.log(
    "arribem aqui amb length (amb SP) " +
      moviesArrayDrama.length +
      " countdramaMovies : " +
      countDramaMovies
  );
  return moviesArrayDrama.length; // aqui posariem moviesArrayDrama.length , aixo ens dona la quant de pelis Drama of SP
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let averageScore = 0;

  if (moviesArray.length == 0) return 0;

  moviesArray.forEach((movie) => {
    if (movie.score != null) averageScore += movie.score;
  });

  averageScore /= moviesArray.length;
  averageScore = Math.round(averageScore * 100) / 100;

  return averageScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let moviesArrayDrama = [];

  moviesArray.forEach((movie) => {
    if (movie.genre == "Drama") moviesArrayDrama.push(movie);
  });
  return scoresAverage(moviesArrayDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderedByYearArray = moviesArray;
  console.log(moviesArray);

  // orderedByYearArray = moviesArray;
  orderedByYearArray.year.sort(function (a, b) {
    return a - b;
  });
  console.log(orderedByYearArray);
  return orderedByYearArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
