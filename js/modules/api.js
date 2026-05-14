export let movies = []

export async function loadMovies(){

const res = await fetch("./data/movies.json")

movies = await res.json()

return movies

}