export const PI = Math.PI;
export let i = 1;
//ejercicio 1
export function cuenta(cadena) {
  if (typeof cadena === "string") {
    console.log(cadena.length);
  } else {
    console.log("no es una cadena");
  }
}
//ejercicio 2
export function cuentaRecortada(cadena, x) {
  if (typeof cadena === "string") {
    console.log(cadena.substring(0, x));
  } else {
    console.log("no es una cadena");
  }
}
//ejercicio 3
export function muestracomoarreglo(cadena, x) {
  if (typeof cadena === "string") {
    console.log(cadena.split(x));
  } else {
    console.log("no es una cadena");
  }
}
//ejercicio 4
export function repitecadena(cadena, x) {
  if (typeof cadena === "string") {
    console.log(cadena.repeat(x));
  } else {
    console.log("no es una cadena");
  }
}
export const fucionesflecha = (x, y) => console.log(x);
//funcion flecha
export const pruebametodoslice = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("no ingresaste una cadena de texto")
    : console.info(cadena.slice(0, longitud));
//ejercicio 5
export const cadenainvertida = (cadena = "") =>
  !cadena
    ? console.warn("no ingreasas una cadena de texto")
    : console.info(cadena.split("").reverse().join(""));
//ejercicio 6
export const repitepalabra = (cadena = "", palabra = "") => {
  if (!cadena) return console.warn("el texto que ingresas no es una cadena");
  if (!palabra)
    return console.warn("la palabra de busqueda que ingresas no es una cadena");
  let i = 0,
    contador = 0;
  while (i !== -1) {
    i = cadena.indexOf(palabra, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(contador);
};
//ejercicio 7
export const palindromo = (frase = "") => {
  if (!frase) return console.warn("el texto que ingresaste no es una cadena");
  frase = frase.toLowerCase();
  let reverse = frase.split("").reverse().join("");
  if (frase === reverse) {
    return console.info("la palabra es un palindromo true");
  }
  return console.info("la palabra no es un palindromo false");
};
//ejercicio 8
export const eliminar = (texto = "", palabra = "") => {
  if (!texto) return console.warn("el texto que ingresaste no es una cadena");
  if (!palabra)
    return console.warn(
      "la palabra de busqueda que ingresaste no es una cadena"
    );
  console.info(texto.replace(new RegExp(palabra, "ig"), ""));
};
//ejercicio 9
export const aleatorio = () => console.log(Math.random() * (601 - 501) + 501);
//ejercicio 10
export const capicua = (number = undefined) => {
  if (!number) return console.warn("no ingresaste un numero");
  if (typeof number !== "number")
    return console.error("elvalor ingresado no es un numero");
  let alRevez = number.toString().split("").reverse().join("");
  if (number == alRevez) {
    console.info("el numero es capicua: " + number);
  } else {
    console.info("el numero no es capicua: " + number);
  }
};
//ejercicio 11
export const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number")
    return console.error("no ingresaste un numero");
  if (Math.sign(numero) === -1)
    return console.error("el numero no puede ser negativo");
  if (numero === 0) return console.info("el factorial del numero 0 es 1");
  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i; //factorial = factorial * i;
  }
  return console.info("el factorial del numero " + numero + " es " + factorial);
};
//EJERCICIO 12
export const primo = (numero = undefined) => {
  if (numero === undefined) return console.warn("no ingresas un numero");
  if (numero === 0)
    return console.info(
      "el numero 0 es un numero especial que no se considera primo"
    );
  if (typeof numero !== "number")
    return console.error("el valor ingresado no es un numero");
  if (Math.sign(numero) === -1)
    return console.error("el numero no puede ser negativo");

  let contador = 0;
  for (let i = numero; i > 0; i--) {
    if (numero % i === 0) {
      contador += 1;
      if (contador > 2) break;
    }
  }
  if (contador <= 2) {
    return console.info("el numero ingresado " + numero + " es primo");
  } else {
    return console.info("el numero ingresado " + numero + " no es primo");
  }
};
//EJERCICIO 13
export const parImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn("no ingreso ningun numero");
  if (numero === 0) return console.info("el numero ingresado es par " + numero);
  if (typeof numero !== "number")
    return console.error("el valor ingresado no es un numero");
  if (Math.sign(numero) === -1)
    return console.error("el numero no puede ser negativo");
  if (numero % 2 === 0) {
    return console.info("el numero ingresado " + numero + " es par");
  } else {
    return console.info("el numero ingresado " + numero + " es impar");
  }
};
//EJERCICIO 14
export const grados = (numero = undefined, temperatura = undefined) => {
  if (numero === undefined)
    return console.warn("no ingreso los grados a convertir");
  if (typeof numero !== "number")
    return console.warn("los grados a convertir no son un numero");
  if (temperatura === undefined)
    return console.warn("no ingreso la unidad de medida a convertir");
  if (typeof temperatura !== "string")
    return console.warn("la unidad de temperatura no es F o C");
  if (temperatura.length !== 1 || !/(C|F)/.test(temperatura))
    return console.warn("valor de la unidad no reconocido");
  if (temperatura === "C") {
    return console.info(`${numero}°C = ${numero * (9 / 5) + 32} °F`);
  }
  return console.info(`${numero}°F = ${((numero - 32) * 5) / 9} °C`);
};
//EJERCICIO15
export const convertirBinarioDecimal = (
  numero = undefined,
  base = undefined
) => {
  if (numero === undefined)
    return console.warn("no ingreso el numero a convertir");
  if (typeof numero !== "number")
    return console.warn("el valor ingresado a convertir no es un numero");
  if (base === undefined) return console.warn("no ingreso la base a convertir");
  if (typeof base !== "number")
    return console.warn("la base ingresada aconvertir no es un numero");
  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(2)} base 2`
    );
  } else {
    return console.error("el tipo de base a convertir no es valido");
  }
};
//ejercicio 16
export const descuento = (valor = undefined, porcentaje = undefined) => {
  if (valor === undefined)
    return console.warn("no ingreso el valor a calcular");
  if (typeof valor !== "number")
    return console.warn("el valor ingresado a calcular no es un numero");
  if (valor === 0) return console.warn("el monto no puede ser 0");
  if (Math.sign(valor) === -1)
    return console.warn("el monto ingresado no puede ser negativo");
  if (porcentaje === undefined)
    return console.warn("no ingreso el porcentaje del descuento");
  if (typeof porcentaje !== "number")
    return console.warn("el porcentaje ingresado no es un numero");
  if (porcentaje === 0) return console.warn("el descuento no puede ser 0");
  if (Math.sign(porcentaje) === -1)
    return console.warn("el porcentaje ingresado no puede ser negativo");
  return console.info(
    `${valor} - ${porcentaje}% = ${valor - (valor * porcentaje) / 100}`
  );
};
//ejercicio 17
export const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("no ingresaste fecha");
  if (!(fecha instanceof Date))
    return console.warn("el valor que ingresaste no es una fecha valida");
  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMs = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs);
  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `faltan  "${Math.abs(
          aniosHumanos
        )} años para el ${fecha.getFullYear()}.`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`
      )
    : console.info(`estamos en el año actual ${fecha.getFullYear()}.`);
};
//ejercicio 18
export const vocalesYConsonantes = (texto = "") => {
  if (!texto) return console.warn("no ingreso el texto");
  if (typeof texto !== "string")
    return console.warn("el texto ingresado no es una cadena");
  let vocales = 0,
    consonantes = 0;
  texto = texto.toLowerCase();
  for (let letra of texto) {
    if (/[(aeiouáéíóúü)]/.test(letra)) {
      vocales++;
    }
    if (/[(bcdfghjklmnñpqrstvwxyz)]/.test(letra)) {
      consonantes++;
    }
  }
  return console.info({
    texto,
    vocales,
    consonantes,
  });
};
//ejercicio 19
export const validaNombre = (nombre = "") => {
  if (!nombre) return console.warn("no ingreso el nombre");
  if (typeof nombre !== "string")
    return console.warn("el texto ingresado no tiene el formato correcto");
  let expReg = /^[A-Za-zÑñÁÉÍÓÚÜáéíóúü\s]+$/g.test(nombre);
  return expReg
    ? console.info(` "${nombre}", es un nombre valido]`)
    : console.info(` "${nombre}", es un nombre invalido`);
};
//ejercicio 20
export const validaemail = (email = "") => {
  if (!email) return console.warn("no ingreso el email");
  if (typeof email !== "string")
    return console.warn("email ingresado no tiene el formato correcto");
  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );
  return expReg
    ? console.info(` "${email}", es un email valido]`)
    : console.info(` "${email}", es un email invalido`);
};
//ejercicio 21
export const arregloCuadrado = (array = undefined) => {
  if (array === undefined) return console.warn("el arreglo esta vacio");
  if (!(array instanceof Array))
    return console.warn("no ingresaste un arreglo");
  if (array.length === 0) return console.error("el arreglo esta vacio");
  for (let num of array) {
    if (typeof num !== "number")
      return console.error(`el valor "${num}" ingresado, NO es un numero`);
  }
  const newArray = array.map((el) => el * el);
  return console.info(
    `arreglo original:${array},\n Arreglo elevado al cuadrado ${newArray}`
  );
};
//ejercicio 22
export const mayoMenor = (array = undefined) => {
  if (array === undefined) return console.warn("el arreglo esta vacio");
  if (!(array instanceof Array))
    return console.warn("no ingresaste un arreglo");
  if (array.length === 0) return console.error("el arreglo esta vacio");
  for (let num of array) {
    if (typeof num !== "number")
      return console.error(`el valor "${num}" ingresado, NO es un numero`);
  }
  return console.info(
    `arreglo original:${array},\n Arreglo mayor:${Math.max(
      ...array
    )},\nValor menor:${Math.min(...array)}`
  );
};
//ejercicio 23
export const arregloParImpar = (array = undefined) => {
  if (array === undefined) return console.warn("el arreglo esta vacio");
  if (!(array instanceof Array))
    return console.warn("no ingresaste un arreglo");
  if (array.length === 0) return console.error("el arreglo esta vacio");
  for (let num of array) {
    if (typeof num !== "number")
      return console.error(`el valor "${num}" ingresado, NO es un numero`);
  }
  return console.info({
    pares: array.filter((num) => num % 2 === 0 && num !== 0),
    impares: array.filter((num) => num % 2 === 1),
  });
};
//ejercicio 24
export const ordenarArreglo = (array = undefined) => {
  if (array === undefined) return console.warn("el arreglo esta vacio");
  if (!(array instanceof Array))
    return console.warn("no ingresaste un arreglo");
  if (array.length === 0) return console.error("el arreglo esta vacio");
  for (let num of array) {
    if (typeof num !== "number")
      return console.error(`el valor "${num}" ingresado, NO es un numero`);
  }
  return console.info({
    array,
    asc: array.map((el) => el).sort(),
    desc: array
      .map((el) => el)
      .sort()
      .reverse(),
  });
};
//ejercicio 25
export const eliminaDuplicados = (array = undefined) => {
  if (array === undefined) return console.warn("el arreglo esta vacio");
  if (!(array instanceof Array))
    return console.warn("no ingresaste un arreglo");
  if (array.length === 0) return console.error("el arreglo esta vacio");
  if (array.length === 1)
    return console.error("el arreglo debe tener al menos 2 elementos");

  //return console.info({
  // array,
  // sinDuplicados: array.filter(
  //   (value, index, self) => self.indexOf(value) === index
  //  ),
  //});
  //otra forma de resolver con SET
  return console.info({
    array,
    sinDuplicados: [...new Set(array)],
  });
};
//ejercicio 26
export const promedio = (array = undefined) => {
  if (array === undefined) return console.warn("el arreglo esta vacio");
  if (!(array instanceof Array))
    return console.warn("no ingresaste un arreglo");
  if (array.length === 0) return console.error("el arreglo esta vacio");
  for (let num of array) {
    if (typeof num !== "number")
      return console.error(`el valor "${num}" ingresado, NO es un numero`);
  }
  return console.info(
    array.reduce((total, num, index, array) => {
      total += num;
      if (index === array.length - 1) {
        return `el promedio de ${array.join(" + ")} es ${total / array.length}`;
      } else {
        return total;
      }
    })
  );
};
//ejercicio 27
export class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.generos = generos;
    this.pais = pais;
    this.calificacion = calificacion;
    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }
  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality",
      "TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Triller",
      "War",
      "Western",
    ];
  }
  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }
  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado no es una cadena de texto`
      );
    return true;
  }
  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(
          `imdb id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`
        );
  }
  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.errpr(
        `${propiedad} "${valor}"excede el numero de caracteres permitidos (${longitud})`
      );
    return true;
  }
  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo))
      this.validarLongitudCadena("Titulo", titulo, 100);
  }
  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50);
  }
  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingredado, no es un numero`
      );
    return true;
  }
  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (!(valor instanceof Array))
      return console.warn(`${propiedad} "${valor}" no ingresaste un arreglo`);
    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" el arreglo esta vacio`);
    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `el valor "${cadena}" ingresado, NO es una cadena de texto`
        );
    }
    return true;
  }
  validarPais(pais) {
    this.validarArreglo("País: ", pais);
  }
  validarGeneros(generos) {
    if (this.validarArreglo("Generos: ", generos)) {
      for (let genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero/s incorrectos "${generos.join(", ")}`);
          Pelicula.generosAceptados();
        }
      }
    }
  }
  validarEstreno(estreno) {
    if (this.validarNumero("Año de Estreno", estreno))
      if (!/^([0-9]){4}$/.test(estreno))
        return console.error(
          `Año de estreno"${estreno}" no es valido, debe ser un numero de 4 digitos`
        );
  }
  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error(
            "la calificacion tiene que estar en un rango entre 0 y 10"
          )
        : (this.calificacion = calificacion.toFixed(1));
  }
  fichaTecnica() {
    console.info(
      `Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector:"${
        this.director
      }"\nAño: "${this.estreno}"\nPaís: "${this.pais.join(
        ", "
      )}"\nGeneros: "${this.generos.join(", ")}"\nCalificacion: "${
        this.calificacion
      }"\nIMDB id: "${this.id}"`
    );
  }
}
