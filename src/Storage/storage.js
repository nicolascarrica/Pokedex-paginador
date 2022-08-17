export function cargarPokemonLocalStorage(offset, limit) {
    const id = `${offset}_${limit}`;
    if (JSON.parse(localStorage.getItem(id)) === null) {
      throw new Error('No se encuentran los pokemones en el local Storage');
    }
    return JSON.parse(localStorage.getItem(id));
  }

  export function guardarPokemonLocalStorage(offset, limit, resultado) {
    const id = `${offset}_${limit}`;
    localStorage.setItem(id, JSON.stringify(resultado));
  }

  export function guardarDatosPokedexLocalStorage(id, resultado) {
    localStorage.setItem(id, JSON.stringify(resultado));
  }
  
  export function cargarDatosPokedexLocalStorage(pokemonSeleccionado) {
    if (JSON.parse(localStorage.getItem(pokemonSeleccionado)) === null) {
      throw new Error(`No hay ${pokemonSeleccionado} en local Storage`);
    }
    return JSON.parse(localStorage.getItem(pokemonSeleccionado));
  }