//Superclasse
class Animal {

    //atributo
    constructor(nome) {
        this.nome = nome;
}

//Método
fazerSom() {
    console.log("O animal faz um som");
    }
}

//Subclasse
class Cachorro extends Animal{

    }

    let rex = new Cachorro("Rex");
    console.log(rex.nome);
    rex.fazerSom();