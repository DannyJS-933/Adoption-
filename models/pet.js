const { threadId } = require("worker_threads");

class Pet{

    constructor(name, age, species, race, picture, description) {
        this.name = name;
        this.age = age; 
        this.species = species; 
        this.race = race;
        this.picture = picture; 
        this.description = description;


    }

}

module.exports = Pet; //exportando la clase Pet 