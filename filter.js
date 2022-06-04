let musicos = [
	{
  		nombre: "alonso",
    	rol: "baterista"
 	 },
  	{
  		nombre: "alex",
        rol: "vocalista"
  	},
  	{
        nombre: "kike",
        rol: "guitarra ritmica"
  	},
 	{
        nombre: "tury",
        rol: "bajista"
 	 },
  	{
        nombre: "framcis",
        rol: "guitarra líder"
  	},
  	{
  		nombre: "jake",
    	rol: "baterista"
  	},
  	{
  		nombre: "george",
    	rol: "guitarra líder"
  },

]

let roles = musicos.filter(miembro => miembro.rol == "baterista")

console.log(roles);