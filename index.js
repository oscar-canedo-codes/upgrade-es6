// Iteración #1: Arrows

/* Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.*/

const sum = (a = 10, b = 5) => {
    return console.log(a + b);
  };

// 1.1 Ejecuta esta función sin pasar ningún parametro

sum();

// 1.2 Ejecuta esta función pasando un solo parametro

sum(2);

//1.3 Ejecuta esta función pasando dos parametros

sum(2, 3);

// Iteración #2: Destructuring

/* 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto. */

const game = {
    title: 'The last us 2', 
    genre: ['action', 'zombie', 'survival'], 
    year: 2020};

const {title, genre, year} = game;

console.log(title);
console.log(genre);
console.log(year);

/* 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente imprimelo por consola. */

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

/* 2.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola. */

const animalFunction = () => {
    return { animal: "Bengal Tiger", race: "Tiger" };
  };
  
  const { animal, race } = animalFunction();
  
  console.log(animal);
  console.log(race);

/* 2.4 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.*/

const car = { model: "Mazda 6", itv: [2015, 2011, 2020] };

const { model, itv } = car;

const [year1, year2, year3] = itv;

console.log(model);
console.log(itv);
console.log(year1);
console.log(year2);
console.log(year3);

// Iteración #3: Spread Operator

// 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43]

const pointsListCopy = [...pointsList];

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopy = [ ...pointsList ];

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operators.

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const fusion = [ ...pointsList1, ... pointsList2];

console.log(fusion);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const toyFusion = { ...toy, ...toyUpdate };

console.log(toyFusion);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operators.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors];
colorsCopy.splice(2, 1);

console.log(colors);
console.log(colorsCopy);

// Iteración #4: Map

// 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

const users = [

	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map((user) => user.name);
console.log(names);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const usarios = [

    { id: 1, name: "Abel" },
    { id: 2, name: "Julia" },
    { id: 3, name: "Pedro" },
    { id: 4, name: "Amanda" },
  ];

const nombres = usarios.map((usario) => {
    
    if (usario.name[0].includes("A")) {
      usario.name = "Anacleto";
    }
    return usario.name;
  });
  
  console.log(nombres);

//  4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [
    { isVisited: true, name: "Tokyo" },
    { isVisited: false, name: "Madagascar" },
    { isVisited: true, name: "Amsterdam" },
    { isVisited: false, name: "Seul" },
  ];
  
  const cityName = cities.map((city) => {
    if (city.isVisited) {
      city.name += ": (Visitado)";
    }
    return city.name;
  });

  console.log(cityName);

// Iteración #5: Filter

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
  
const olderThan18 = ages.filter((age) => age > 18);

console.log((olderThan18));

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

const numPairs = ages.filter((num) => {
    return num % 2 == 0;
});

console.log(numPairs);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
	
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolPlayers = streamers.filter((player) =>{
    return player.gameMorePlayed == "League of Legends";
});

console.log(lolPlayers);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.

const playerNameWithU = streamers.filter((nameU) => {

    return nameU.name.includes("u");   
});

console.log(playerNameWithU);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35. 

const players = [
	
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const playersLegend = players.filter((player) => {
    const toReturn = player.gameMorePlayed.toLowerCase().includes("legends");

    if (toReturn && player.age > 35) {
        player.gameMorePlayed = player.gameMorePlayed.toUpperCase();
      }

      return toReturn;
});

console.log(playersLegend);

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

/* const showPlayers = (event) => {

    console.log(event);
    const filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(input$$.value.toLowerCase())
    );
  
    console.log(filteredPlayers);
  };
  
  const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
  
  input$$.addEventListener("input", showPlayers); */

  // 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.

 /*  const filterPlayers = (event) => {
    
    const input$$ = event.target.previousElementSibling;
    
    const filteredStreamers = streamers.filter((streamer) =>
      streamer.name.toLowerCase().includes(input$$.value.toLowerCase())
    );
    console.log(filteredStreamers);
  };
  
  const button$$ = document.querySelector(
    '[data-function="toShowFilterStreamers"]'
  );
  
  button$$.addEventListener("click", filterPlayers); */

  // Iteración #6: Find
  
// 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];

const number100 = numbers.find((number) => {
    return number === 100;
  });

  console.log(number100);

// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const movie2010 =  movies.find((year) => {
    return movies.date === 2010; 
});

// 6.3 Dado el siguiente javascript, usa .find() para encontrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación lo queremos meter en la propiedad .mutation del objeto fusionado.

const aliens = [
	
    {name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	
    {
        name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'
    },
	{   name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'
    },
	{   name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'
    },
];

    const cucu = aliens.find((alien) => {
    return alien.name == "Cucushumushu";
  });
  
    const poro = mutations.find((mutation) => {
    return mutation.name == "Porompompero";
  });

  const alien = { ...cucu, mutación: { ...poro } };

  console.log(alien);