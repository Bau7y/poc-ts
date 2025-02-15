//first use

interface Animal {
    name: string;
    kind: string;
    isItOnGroup: boolean;
    dangerous: boolean;
}

function guessAnimal(animal: Animal, animalList: string[]){
    console.log("El animal es: " + animal.name + " y es de tipo " + animal.kind);
    if (animal.dangerous){
        animalList.forEach(element => {
            return element.concat(animal.name + " ")
        });
    }
}

let animal: Animal = {
    name: "Leon",
    kind: "Felino",
    isItOnGroup: true,
    dangerous: true
}
let animalList: string[] = ["Leon", "Tigre", "Gato", "Perro", "Oso"];

let info = guessAnimal(animal, animalList);
console.log(info);

//second use

interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    sexo: string;
    aprobado: boolean;
}

function examenCsv(persona1: Persona){
    if (persona1.aprobado){
        console.log("La persona " + persona1.nombre + "Ha aprobado el examen");
        return true;
    }else{
        console.log("El examen se ha reprobado");
        return false;
    }
}

let persona1: Persona = {
    nombre: "Sebas",
    apellido: "Rojas",
    edad: 19,
    sexo: "M",
    aprobado: true
}
let resultado:boolean = examenCsv(persona1);

// third use, using type

type Point = {
    point1: number;
    point2: number;
}

function prntP(pt: Point){
    console.log("El type es similar a la interface por ", pt.point1, " ", pt.point2);
}

prntP({point1: 1, point2: 2});