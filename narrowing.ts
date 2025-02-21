function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}

function printAll(strs: string | string[] | null){
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

function multiply(
    values: number[] | undefined,
    factor: number
): number[] | undefined{
    if (!values) return values; //Basicamente si esto se cumple termina la funcion
    return values.map((x) => x * factor); //Esta linea solamente se reaaliza si el if no se cumple (Es como un else) y el .map, crea una matriz en base a la orden que se le indique 
}

function seaOfThieves(logs: number | number[]){
    if (typeof logs === "number") return;
    return logs.map((x) => x * 2);
}

let x = Math.random() < 0.5 ? 10 : "hello world"; // primero va la condicion, despues del ? va lo

x = 2;
