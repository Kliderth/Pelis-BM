import {loadMovies, movies, initNavMenu, createCarousel, createMovieList} from "./app.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    // 1. Cargar películas primero
    await loadMovies()
    
    // 2. Una vez cargadas, crear carousel y lista
    createCarousel(movies)
    createMovieList(movies)
    
    // 3. Inicializar menú responsivo
    initNavMenu()
    
    // 4. TODO: Inicializar Supabase cuando esté configurado
    // SupabaseClient()
    
  } catch (error) {
    console.error("Error al cargar la aplicación:", error)
  }
})