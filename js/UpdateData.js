import { buildDatabase } from "./BuildDataBase.js";
import { buildMovieDatabase } from "./fetchapi.js";
import { DataMovies } from "./data_api.js";

console.log("🔄 Iniciando actualización de bases de datos...\n");

async function updateAllDatabases() {
  try {
    // 1. Construir base de datos grande (películas de 1980-2025)
    console.log("📥 Paso 1: Descargando películas de 1980-2025...");
    await buildDatabase();
    
    // 2. Construir base de datos de películas populares (películas.json)
    console.log("\n📥 Paso 2: Descargando películas populares...");
    await buildMovieDatabase();
    
    // 3. Obtener lista de películas desde API
    console.log("\n📥 Paso 3: Actualizando lista de películas...");
    await DataMovies();
    
    console.log("\n✅ ¡Todas las bases de datos han sido actualizadas correctamente!");
  } catch (error) {
    console.error("\n❌ Error durante la actualización:", error);
    process.exit(1);
  }
}

updateAllDatabases();