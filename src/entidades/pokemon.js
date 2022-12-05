/**
 * @typedef {import('./estadisticas').default} Estadisticas
 */
 


export default class Pokemon {
    /**
     * @param {Number} id
     * @param {String} nombre
     * @param {String} foto
     * @param {Array<Estadisticas>} estadisticas
     * @param {Array<String>} tipos
     */
    
    constructor(id, nombre, foto, estadisticas = [], tipos = []) {
      this.id = id;
      this.nombre = nombre;
      this.foto = foto;
      this.estadisticas = estadisticas;
      this.tipos = tipos;
    }
  }
  



