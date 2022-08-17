const URLAPI = 'https://pokeapi.co/api/v2/pokemon';

export async function agregarPokemonAPI(offset, limit){
   const link= await fetch (`${URLAPI}/?offset=${offset}&limit=${limit}`)
   const respuestaJSON = link.json();
   return respuestaJSON;
}

export async function mostrarDatosPokedexAPI(pokemonSeleccionado){
   const link = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSeleccionado}`)
   const respuestaJSON = link.json();
   return respuestaJSON;
}


    