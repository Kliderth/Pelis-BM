let movies = []

async function loadMovies(){

const res = await fetch("./data/movies.json")

movies = await res.json()

createCarousel(movies)

createMovieList(movies)



}

loadMovies()

/*============================
  nav responsive
=============================*/

const showMenu = (toggleid, navID) => {
const toggleBtn = document.getElementById(toggleid)
const navMenu = document.getElementById(navID)

if(toggleBtn && navMenu){

toggleBtn.addEventListener("click", ()=>{

navMenu.classList.toggle("show-menu")

})

}}
showMenu("menu-toggle", "nav-menu")


/* ======================
CAROUSEL
====================== */

function createCarousel(movies){

const carousel = document.getElementById("carouselTrack")

movies.slice(0,5).forEach(movie => {

const slide = document.createElement("div")

slide.className = "slide"

slide.style.backgroundImage = `url(${movie.backdrop})`

slide.innerHTML = `
<div class="slideContent" style="display: flex; align-items: center;">
  <!-- Imagen a la izquierda -->
  <img src="${movie.poster}" alt="${movie.title}" width="96" height="136" style="margin-right: 10px;">
  
  <!-- Contenedor para el texto a la derecha -->
  <div>
    <h2 style="margin: 0; font-size: 1.2em;">${movie.title}</h2>
    <p style="margin: 0;">⭐ ${movie.rating_tmdb}</p>
  </div>
</div>
`

carousel.appendChild(slide)

})

}


setInterval(moveCarousel, 4000)


/* ======================
LISTA DE PELICULAS
====================== */

function createMovieList(movies){

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

