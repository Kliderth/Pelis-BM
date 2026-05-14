/* ======================
CAROUSEL
====================== */

export function createCarousel(movies){

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
//funcion para mover el carousel cada 4 segundos
export function moveCarousel() {
  const carousel = document.getElementById("carouselTrack")
  const slides = carousel.querySelectorAll(".slide")
  
  if (slides.length === 0) return
  
  const firstSlide = slides[0]
  carousel.appendChild(firstSlide)
}

setInterval(moveCarousel, 4000)