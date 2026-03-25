const fs = require("fs")

const API_KEY = "b70690222683bfe6d80d5d3113e21683"
const BASE_URL = "https://api.themoviedb.org/3"

let movies = []

async function fetchMovies(yearStart, yearEnd, page){

const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}
&primary_release_date.gte=${yearStart}-01-01
&primary_release_date.lte=${yearEnd}-12-31
&vote_count.gte=100
&sort_by=popularity.desc
&page=${page}
&language=es-ES`

const res = await fetch(url)
const data = await res.json()

return data.results
}

async function buildDatabase(){

const ranges = [
[1980,1985],
[1986,1990],
[1991,1995],
[1996,2000],
[2001,2005],
[2006,2010],
[2011,2015],
[2016,2020],
[2021,2025]
]

for (const range of ranges){

const [start,end] = range

console.log(`Descargando rango ${start}-${end}`)

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}// Espera 1 segundo entre cada solicitud para evitar saturar la API

for(let page = 1; page <= 50; page++){

console.log(`pagina ${page}`)

const results = await fetchMovies(start,end,page)

if(!results || results.length === 0) break

results.forEach(movie => {

movies.push({
id: movie.id,
title: movie.title,
year: movie.release_date ? movie.release_date.split("-")[0] : "",
rating: movie.vote_average,
votes: movie.vote_count,
poster: movie.poster_path,
backdrop: movie.backdrop_path,
overview: movie.overview
})

})
await delay(1000) // Espera 1 segundo entre cada solicitud para evitar saturar la API
}

}

fs.writeFileSync("./data/movies-large.json", JSON.stringify(movies,null,2))

console.log("Base grande creada:", movies.length)

}

buildDatabase()