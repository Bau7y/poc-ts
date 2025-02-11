let obj: any = {
    x: 0,
    c: "donald"
}

const n: number = obj;

async function test(): Promise<number>{ //una promesa es una función de la cual el programa no necesariamente espera que se cumpla para seguir en funcionamiento 
    return 1
        //setTimeOut (por lo general se establece con tipos de datos de acuerdo a la solicitud y seguidamente un tiempo de espera en ms)
        //resolve (condición verdadera)
        //reject (falsa)
        //then 
}
const list = [1, 2, 3];

list.forEach(function val(){
    console.log(val)
})

list.forEach((val) => {
    console.log(val)
});

function printobj(ob: {ob1: string | number, ob2?: number}){ //el simbolo ? significa que el parametro seleccionado es opcional
    if (ob.ob2 != undefined) {
        console.log("Los objetos establecidos son " + ob.ob1, " ",  ob.ob2)
    } else{
        console.log("El parametro es: ", ob.ob1)
    }
    
}
printobj({ob1: "sebas"})


//typeof

function verify(type1: string | boolean){
    if (typeof type1 === "boolean"){
        async function dbTrue(param:string): Promise<number> {
            return 1;
        }
    }
}

function valdtaNum(val: number | string){
    if (typeof val === "string"){
        console.log(val.toUpperCase) //se trata val como string
    }else{
        console.log(val) //se trata val como un numero 
    }
}

function myArray(fabian: string[] | string){ //aqui se declara el array y se tipea el tipo de datos que va a recibir el array 
    if (Array.isArray(fabian)){
        console.log("Hello " + fabian.join(" and "));
    } else{
        console.log("Hello " + fabian.toUpperCase() + "!!");
    };
}

