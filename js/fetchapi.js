import fs from "fs";
import 'dotenv/config';

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`
  );

  const data = await res.json();
  return data.results;
}

export async function getTrailer(movieId) {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=es-ES`
  );

  const data = await res.json();

  const trailer = data.results.find(
    v => v.type === "Trailer" && v.site === "YouTube"
  );

  return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
}

export async function buildMovieDatabase() {

  const movies = await getPopularMovies();

  const database = [];

  if (!movies || movies.length === 0) {
  console.log("No se encontraron películas");
  return;
}

for (const movie of movies.slice(0, 20)) {

    const trailer = await getTrailer(movie.id);

    database.push({
      id: movie.id,
      title: movie.title,
      year: movie.release_date?.split("-")[0],
      overview: movie.overview,
      rating_tmdb: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop:`https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      trailer
    });

  }

  fs.writeFileSync(
    "./data/movies.json",
    JSON.stringify(database, null, 2)
  );

  console.log("✓ movies.json actualizado");
}

buildMovieDatabase;