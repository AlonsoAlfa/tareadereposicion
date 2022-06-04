const vengadores = [
    { nombre: "Tony", apellidos: "Stark" },
    { nombre: "Peter", apellidos: "Parker" },
    { nombre: "Stephen", apellidos: "Strange" },
    { nombre: "Miles", apellidos: "Morales" },

    //Declaro las contsnates las cualres voy a llamar
 
  ];
  
  function generarNombre({ nombre, apellidos }) {
    return `${nombre} ${apellidos}`;
    //En esta parte declaro la función con las constantes que cree para poder implimirlas
  }
  
  const nombres = vengadores.map(generarNombre);
  
  console.log(nombres); 

  //Por ultimo solo imprimo las variables que cree en la función que estoy asgigando 