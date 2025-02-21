interface UserNumbers{
    userInp1: number;
    userInp2: string;
    userInp3: number[];
}

let input : UserNumbers = {
    userInp1: 1,
    userInp2: "2",
    userInp3: [1, 2, 3]
}

function numValidation(val: UserNumbers){
    if (!val.userInp3) {
        console.log(val.userInp3);
        return;
    }

    if (typeof val.userInp2 === "string"){
        console.log(parseFloat(val.userInp2));
        return;
    };

    if (!val.userInp1){
        console.log(val.userInp1);
        return;
    }
    console.log("No se han encontrado valores digitados o no coinciden con los buscados");
    
}

numValidation(input);



function printAll2(strs: string | string[] | null) {
    /* if (strs !== null) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    } */
   if (!strs) return;

   if (typeof strs === "string") {
    console.log(strs);
    return;
   } 

   for (const s of strs) {
    console.log(s)
   }  //codigo limpio atte roney
}