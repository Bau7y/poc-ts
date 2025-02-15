const list = [1, 2, 3];

list.forEach(function val(){
    console.log(val)
})

list.forEach((val) => {
    console.log(val)
});

function myArray(fabian: string[] | string){ //aqui se declara el array y se tipea el tipo de datos que va a recibir el array 
    if (Array.isArray(fabian)){
        console.log("Hello " + fabian.join(" and "));
    } else{
        console.log("Hello " + fabian.toUpperCase() + "!!");
    };
}