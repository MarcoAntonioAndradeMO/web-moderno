// IIFE -> Immediately Invoked Function Expression

(function() {
    //Escopo Local
    console.log("Será Executado na Hora!");
    console.log("Foge do escopo mais abrangente");
})()


//Escopo Global
console.log("Será Executado na Hora!");
console.log("Foge do escopo mais abrangente");