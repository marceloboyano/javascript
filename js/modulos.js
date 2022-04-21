//import { PI } from "./constantes.js";
//console.log("Archivo modulos.js");
//console.log(PI);
import {
  cuenta,
  cuentaRecortada,
  muestracomoarreglo,
  repitecadena,
  pruebametodoslice,
  cadenainvertida,
  repitepalabra,
  palindromo,
  eliminar,
  aleatorio,
  capicua,
  factorial,
  primo,
  parImpar,
  grados,
  convertirBinarioDecimal,
  descuento,
  calcularAnios,
  vocalesYConsonantes,
  validaNombre,
  validaemail,
  arregloCuadrado,
  mayoMenor,
  arregloParImpar,
  ordenarArreglo,
  eliminaDuplicados,
  promedio,
  Pelicula,
} from "./constantes.js";
//cuenta("hola ejercicio 1");
//cuentaRecortada("hola ejercicio 2", 10);
//muestracomoarreglo("hola este es el ejercicio 3", " ");
//repitecadena("hola ejercicio 4 ", 3);
//pruebametodoslice();
//cadenainvertida("hola soy marcelo");
//repitepalabra("hola *** * * 1 hola 1 hola 1 hola mundoi", "*");
//palindromo("SAlas");
//eliminar("xyz1 xyz2 xyz3 xyz4 xyz5", "xy");
//aleatorio();
//capicua(131231);
//factorial(5);
//primo(15);
//parImpar(29);
//grados(20, "F");
//convertirBinarioDecimal(114, 10);
//descuento(1000, 20);
//fechas(-1, 2, 3);
//calcularAnios(new Date(2023, 3, 31));
//vocalesYConsonantes("hola mundo");
//validaNombre("Marcelo Boyanosky,35");
//validaemail("marcelo@gmai");
//arregloCuadrado([1,4,8]);
//mayoMenor([1, 4, 5, 99, -60]);
//arregloParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
//ordenarArreglo([7, 5, 7, 8, 6]);
//eliminaDuplicados(["x", 10, "x", 2, "10", 10, true, true]);
//promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
const misPelis = [
  {
    id: "tt0758758",
    titulo: "Into the Wild",
    director: "Sean Penn",
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1,
  },
  {
    id: "tt0758758",
    titulo: "Ilkasjdaklsdd",
    director: "Sean Penn",
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1,
  },
];
misPelis.forEach((el) => new Pelicula(el).fichaTecnica());
