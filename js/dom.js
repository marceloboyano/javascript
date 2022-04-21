//let texto = "hola Soy Marcelo Programando";
//const hablar = (texto) =>
//  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
//hablar(texto);

// const $linkDOM = document.querySelector(".link-dom");
// $linkDOM.setAttribute("target", "_blank");
// $linkDOM.setAttribute("rel", "noopener");
// $linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
// /// manejador de clases/////////////////////////////////////////////////////////////
// const $card = document.querySelector(".card");
// console.log($card);
// //$card.classList.toggle("rotate-3d");
// //interactuar con texto y codigo HTML///////////////////////////////////////////////
// const $whatIsDOM = document.getElementById("que-es");
// let text = `
// <p>
// El Modelo de Objetos del Documento (<b><i>DOM- Document Object Model</i></b>) es un API para documentos HTML Y XML.
// </p>
// <p>
// Este proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
// </p>
// <p>
// <mark> El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores</mark></p>`;
// $whatIsDOM.textContent = text;
// $whatIsDOM.innerHTML = text;
// $whatIsDOM.outerHTML = text;
// //recorriendo el DOM - DOM TRAVERSING///////////////////////////////////////////////
// const $cards = document.querySelector(".cards");
// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);
// console.log($cards.closest("div"));
// console.log($cards.closest("body"));
// console.log($cards.children[3].closest("section"));
//creando elementos y fragmentos en el DOM//////////////////////////////////////////
// const $figure = document.createElement("figure"),
//   $img = document.createElement("img"),
//   $figcaption = document.createElement("figcaption"),
//   $figcaptionText = document.createElement("Animals"),
//   $cards1 = document.querySelector(".cards");

// $img.setAttribute("src", "https://placeimg.com/200/200/animals");
// $img.setAttribute("alt", "Animals");
// $figure.classList.add("card");

// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards1.appendChild($figure);

// //creando estaciones X CADA CONTENIDO ESTA MODIFICANDO EL DOM ENTONCES SE HACE LENTO SI HAY MUCHOS
// const estaciones = ["Primaver", "Verano", "Otoño", "Invierno"],
//   $ul = document.createElement("ul");
// document.write("<h3>Estaciones del Año</h3>");
// document.body.appendChild($ul);
// estaciones.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $ul.appendChild($li);
// });

// //MODIFICAR EL DOM DE UNA SOLA VEZ SIN HACERLO LENTO
// const meses = [
//     "Enero",
//     "Febrero",
//     "Marz",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre",
//   ],
//   $ul3 = document.createElement("ul"),
//   $fragment = document.createDocumentFragmentc();

// meses.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $fragment.appendChild($li);
// });
// document.write("<h3>Meses del Año</h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);

// //etiquetas TEMPLATE HTML///////////////////////////////////////////////////////////
// const $cards = document.querySelector(".cards"),
//   $template = document.getElementById("template-card").content,
//   $fragment = document.createDocumentFragment(),
//   cardContent = [
//     {
//       title: "Tecnología",
//       img: "https://placeimg.com//200/200/tech",
//     },
//     {
//       title: "Animales",
//       img: "https://placeimg.com//200/200/Animals",
//     },
//     {
//       title: "Arquitectura",
//       img: "https://placeimg.com//200/200/Arch",
//     },
//     {
//       title: "Gente",
//       img: "https://placeimg.com//200/200/People",
//     },
//     {
//       title: "Naturaleza",
//       img: "https://placeimg.com//200/200/Nature",
//     },
//   ];
// cardContent.forEach((el) => {
//   $template.querySelector("img").setAttribute("src", el.img);
//   $template.querySelector("img").setAttribute("alt", el.title);
//   $template.querySelector("figcaption").textContent = el.title;

//   let $clone = document.importNode($template, true);
//   $fragment.appendChild($clone);
// });
// $cards.appendChild($fragment);

// MODIFICAR ELEMENTOS (COOL STYLE)/////////////////////////////////////////////////
/*
    insertAdjacent...
        .insertAdjacentElement (position, el);
        .insertAdjacentHTML (position, html);
        .insertAdjacentText(position, text);

    posiciones:
        beforebegin (hermano anterior);
        afterbegin(primer hijo);
        beforeend(ultimo hijo);
        afterenf(hermano siguiente);
*/
// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure");
// $newCard.innerHTML = `
// <img src="https://placeimg.com/200/200/any" alt="Any">
// <figcaption>Any</figcaption>`;
// $newCard.classList.add("card");
// $cards.insertAdjacentElement("beforebegin", $newCard);

/// 3 tipos de manejadores de eventos///////////////////////////////////////////////

// function holaMundo(event) {
//   alert("Hola Mundo");
//   console.log(event);
// }
// const $eventoSemantico = document.getElementById("evento-semantico"),
//   $eventoMultiple = document.getElementById("evento-multiple");

// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (event) {
//   alert("Hola Mundo Manejador de Eventos Semantico");
//   console.log(event);
// };
// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (event) => {
//   alert("hola Mundo Manejador de Eventos Multiple");
//   console.log(event);
//   console.log(event.type);
//   console.log(event.target);
// });
// EVENTOS CON PARAMETROS Y REMOVEDOR DE EVENTOS////////////////////////////////////
// function holaMundo(event) {
//   alert("Hola Mundo");
//   console.log(event);
// }
// function saludar(nombre = "Desconocido") {
//   alert(`Hola ${nombre}`);
// }
// const $eventoMultiple = document.getElementById("evento-multiple"),
//   $eventoRemover = document.getElementById("evento-remover");
// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (event) => {
//   alert("hola Mundo Manejador de Eventos Multiple");
//   console.log(event);
//   console.log(event.type);
//   console.log(event.target);
// });
// $eventoMultiple.addEventListener("click", () => {
//   saludar();
//   saludar("Jon");
// });

// const removerDobleClick = (event) => {
//   alert(`Removiendo el evento de tipo ${event.type}`);
//   console.log(event);
//   $eventoRemover.removeEventListener("dblclick", removerDobleClick);
//   $eventoRemover.disabled = true;
// };
// $eventoRemover.addEventListener("dblclick", removerDobleClick);
//FLUJO DE EVENTOS (BURBUJA Y CAPTURA)//////////////////////////////////////////////
// const $divEventos = document.querySelectorAll(".eventos-flujo div");
// function flujoEventos(event) {
//   console.log(
//     `Hola te saluda ${this.className}, el click lo origino ${event.target.className}`
//   );
// }
// console.log($divEventos);
// $divEventos.forEach((div) => {
//   //fase de burbuja
//   //div.addEventListener("click", flujoEventos);
//   // otro modo
//   //div.addEventListener("click", flujoEventos, false);
//   //fase de captura
//   //div.addEventListener("click", flujoEventos, true);
//   //otra forma con capture le das si queres que sea burbuja o captura y once hace que repita una sola vez el evento
//   //   div.addEventListener("click", flujoEventos, {
//   //     capture: false,
//   //     once: true,
//   //   });
// });

// //STOP PROPAGATION & PREVENT DEFAULT)//////////////////////////////////////////////
// const $divEventos = document.querySelectorAll(".eventos-flujo div"),
//   $linkEventos = document.querySelector(".eventos-flujo a");
// function flujoEventos(event) {
//   console.log(
//     `Hola te saluda ${this.className}, el click lo origino ${event.target.className}`
//   );
// }
// console.log($divEventos);
// $divEventos.forEach((div) => {
//   //fase de burbuja
//   div.addEventListener("click", flujoEventos);
//   // otro modo
//   //div.addEventListener("click", flujoEventos, false);
//   //fase de captura
//   //div.addEventListener("click", flujoEventos, true);
//   //otra forma con capture le das si queres que sea burbuja o captura y once hace que repita una sola vez el evento
//   //   div.addEventListener("click", flujoEventos, {
//   //     capture: false,
//   //     once: true,
//   //   });
// });
// $linkEventos.addEventListener("click", (event) => {
//   alert("Hola soy tu amigo y docente digital jonathan mircha");
//   event.preventDefault(); //evita el comportamiento por defecto
//   event.stopPropagation();//para la propagacion del flujo
// });

//DELEGACION DE EVENTOS - MEJORA EL RENDIMIENTO PARA FLUJOS DINAMICOS Y PETICIONES ASINCRONAS Y CUANDO NO SE PUEDE CREAR LISTENER DE ELEMENTOS INDEFINIDOS///////////////
// function flujoEventos(e) {
//   console.log(
//     `Hola te saluda ${this}, el click lo originó ${e.target.className}`
//   );
// }
// document.addEventListener("click", (e) => {
//   console.log("click en ", e.target);
//   if (e.target.matches(".eventos-flujo div")) {
//     flujoEventos(e);
//   }
//   if (e.target.matches(".eventos-flujo a")) {
//     alert("Hola soy tu amigo y docente digital.. Jonathan Mircha");
//     e.preventDefault();
//   }
// });

// //PROPIEDADES Y EVENTOS BOM/////////////////////////////////////////////////////////
// window.addEventListener("resize", (e) => {
//   console.clear();
//   console.log("********************Evento Resize**************");
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
//   console.log(window.outerWidth);
//   console.log(window.outerHeight);
//   console.log(e);
// });
// window.addEventListener("scroll", (e) => {
//   console.clear();
//   console.log("********************Evento Scroll**************");
//   console.log(window.scrollX);
//   console.log(window.scrollY);
//   console.log(e);
// });
// window.addEventListener("load", (e) => {
//   console.log("********************Evento Load**************");
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// });
// //evento del dom mas rapido para LOAD que el anterior
// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log("********************DOMContentLoaded**************");
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// });
// METODOS DEL BOM/////////////////////////////////////////////////////////////////////////////
// window.confirm("confirmacion");
// window.alert("alerta");
// window.prompt("aviso");
// const $btnAbrir = document.getElementById("abrir-ventana"),
//   $btnCerrar = document.getElementById("cerrar-ventana"),
//   $btnImprimir = document.getElementById("imprimir-ventana");
// let ventana;
// $btnAbrir.addEventListener("click", (e) => {
//   ventana = window.open("https://jonmircha.com");
// });
// $btnCerrar.addEventListener("click", (e) => {
//   ventana.close();
// });
// $btnImprimir.addEventListener("click", (e) => {
//   window.print();
// });
// console.log(
//   "******************Objeto URL (location)*****************************"
// );
// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.pathname);
// //location.reload();

// // console.log("*************Objeto Historial (History)********");
// // console.log(history);
// // console.log(history.length);
// // console.log(history.forward(3));
// // console.log(history.go(-3));
// // console.log(history.back(2));

// console.log(
//   "********************Obejto Navegador (Navigator)*****************"
// );
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.onLine);
// console.log(navigator.mimeTypes);
// console.log(navigator.serviceWorker);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);
