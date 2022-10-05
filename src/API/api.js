export const URLAPI = 'https://pokeapi.co/api/v2/pokemon';
export const LIMITE_POKEMONES = 20;

export async function agregarPokemonAPI(offset = 0, limit = LIMITE_POKEMONES){
   const link= await fetch (`${URLAPI}/?offset=${offset}&limit=${limit}`)
   const respuestaJSON = link.json();
   return respuestaJSON;
}

export async function mostrarDatosPokedexAPI(id){
   if(id === undefined){
      throw new Error('Se necesita un seleccionar un pokemon para cargarlo');
   }
   const link = await fetch(`${URLAPI}/${id}`)
   const respuestaJSON = link.json();
   return respuestaJSON;
}


    