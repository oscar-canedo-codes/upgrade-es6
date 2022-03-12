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