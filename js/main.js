import {loadMovies} from "./app.js";
import {initNavMenu} from "./app.js";
import {createCarousel} from "./app.js";
import {createMovieList} from "./app.js";

document.addEventListener("DOMContentLoaded", () => {

loadMovies()
initNavMenu()
createCarousel(movies)
createMovieList(movies)

})