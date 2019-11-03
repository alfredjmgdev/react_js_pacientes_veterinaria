

class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre){

        let persona = { id,nombre };

        this.personas.push(persona);
        
        return this.personas;

    }

    getpersona( id ) {

        let persona = this.personas.filter( persona => persona.id = id)[0];

        return persona;        

    }

    getPersonas(){
        return this.personas;
    }

    getPersonasPorSala( sala ){
        //
    }

    borrarPersona(id){
         
        this.personas.filter(persona => {
            return persona.id !=!
        });

    }

}

module.exports = {
    Usuarios
}