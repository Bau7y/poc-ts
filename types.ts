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