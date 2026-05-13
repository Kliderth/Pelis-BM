// Importamos el módulo de sistema de archivos con soporte para promesas
import fs from "fs/promises";
require ("dotenv").config();

export async function DataMovies() {
  // Configuración de la API (Debes obtener tu clave en la configuración de TMDB) [10]
  const apiKey = process.env.TMDB_API_KEY;
  const idioma = "es-ES";
  const urlLista = `https://api.themoviedb.org/3/movie/?api_key=${apiKey}&language=${idioma}`;

  try {
    // 1. Llamada a la API para obtener la lista [1, 2, 11]
    const respuesta = await fetch(urlLista);
    
    // 2. Conversión de la respuesta al formato de datos JSON [1, 12, 13]
    const datos = await respuesta.json();

    // 3. Serialización de los datos a una cadena de texto plana [14, 15]
    // Se usa el campo 'results' que contiene el arreglo de películas
    const contenidoJson = JSON.stringify(datos.results, null, 2);

    // 4. Escritura del archivo .json en el sistema local [4, 5, 16]
    await fs.writeFile("./data/moviesList.json", contenidoJson);
    
    console.log("✓ moviesList.json actualizado.");
  } catch (error) {
    // Manejo de errores en caso de fallos de red o de la API [7, 17, 18]
    console.error("Error al procesar la solicitud:", error);
  }
}

DataMovies;