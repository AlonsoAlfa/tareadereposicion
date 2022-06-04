const canciones = ["Voto Latino", "Que no te haga bobo jacabo", "Frijolero", "Here we Kum", "Gimme the power"];

const nombre = canciones.findIndex(cancion => cancion === "Voto Latino");

console.log(nombre); 
console.log(canciones[nombre]); 