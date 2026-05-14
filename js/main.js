import {loadMovies} from "./modules/api.js";
import {initNavMenu} from "./modules/nav.js";
import {createCarousel} from "./modules/carousel.js";
import {createMovieList} from "./modules/movies.js";
//import {SupabaseClient} from "./modules/supabase.js";


document.addEventListener("DOMContentLoaded", async () => {
  try {
    // 1. Cargar películas primero
    const movies = await loadMovies()
    
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