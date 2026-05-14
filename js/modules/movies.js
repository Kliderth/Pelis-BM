/* ======================
LISTA DE PELICULAS
====================== */

export function createMovieList(movies){


const list = document.getElementById("movieList")

movies.forEach(movie => {

const card = document.createElement("div")

card.className = "movieCard"

card.innerHTML = `

<img src="${movie.poster}">

<h3>${movie.title}</h3>

<p>⭐ ${movie.rating_tmdb}</p>

<a href="${movie.trailer}" target="_blank">Trailer</a>

`

list.appendChild(card)

})

}