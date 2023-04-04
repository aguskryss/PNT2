const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
    ];

    var nuevosPersonajes = [
      {
        nombre: "Ned Flanders",
        edad: 60,
        rol: "Vecino"
      },
      {
        nombre: "Milhouse Van Houten",
        edad: 10,
        rol: "Estudiante"
      }
    ];
    
    // Utilizar el operador spread para combinar ambos arrays de personajes en un nuevo array
    var todosLosPersonajes = [...personajesSimpsons, ...nuevosPersonajes];
    
    console.log(todosLosPersonajes); // Muestra el nuevo array combinado