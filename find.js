let bandas = [{
    nombre: "Nirvana",
    años: "6 años"
  },

  {
    nombres: "Beatles",
    años: "10 años"
  },

  {
    nombre: "Bunkers",
    años: "15 años"
  },
]

 //Declaro las variables las cuales voy a utilizar 

function encuentraMiband(bandfav) {
  return bandfav.nombres === "Beatles"
}

//hago una función para especificar lo que quiero buscar

let mibanda = bandas.find(mibanda => encuentraMiband(mibanda));

//cuando terminó el otro proceso por ultimo creo una variable para poder utilizar el filter especificando que es lo que 
//quiero que me find y por ultimo pongo la variable que quiero 

console.log(mibanda);


