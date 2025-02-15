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