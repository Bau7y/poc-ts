let obj: any = {
    x: 0,
    c: "donald"
}

function printobj(ob: {ob1: string | number, ob2?: number}){ //el simbolo ? significa que el parametro seleccionado es opcional
    if (ob.ob2 != undefined) {
        console.log("Los objetos establecidos son " + ob.ob1, " ",  ob.ob2)
    } else{
        console.log("El parametro es: ", ob.ob1)
    }
    
}
printobj({ob1: "sebas"})

function valdtaNum(val: number | string){
    if (typeof val === "string"){
        console.log(val.toUpperCase) //se trata val como string
    }else{
        console.log(val) //se trata val como un numero 
    }
}

type ID = string | number;

function tringTypes(tp: string | number): ID{ //
    if (tp === "string"){
        return tringTypes(tp); // as a string
    }else{
        return tp; //as a number
    }

}
