
async function test(): Promise<number>{ //una promesa es una función de la cual el programa no necesariamente espera que se cumpla para seguir en funcionamiento 
    return 1
        //setTimeOut (por lo general se establece con tipos de datos de acuerdo a la solicitud y seguidamente un tiempo de espera en ms)
        //resolve (condición verdadera)
        //reject (falsa)
        //then 
}

//typeof

function verify(type1: string | boolean){
    if (typeof type1 === "boolean"){
        async function dbTrue(param:string): Promise<number> {
            return 1;
        }
    }
}