import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, eventoTeclado } from "./dom/teclado.js";
import { countdown } from "./dom/countdown.js";
import { scroll } from "./dom/scroll.js";
import { nocheDia } from "./dom/noche_dia.js";
import responsiveMedia from "./dom/objeto_responisve.js";
import { responsiveTester } from "./dom/prueba_Responsive.js";
import userDevice from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import seachFilters from "./dom/filtro_busqueda.js";
import draw from "./dom/sorteo.js";
import slide from "./dom/responsive_slider.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assest/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "apr 9, 2026 12:35:19",
    "Feliz Cumpleaños amigo y docente digital🤓"
  );
  scroll(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href = "https://www.youtube.com/embed/mwPrsBeyxRE" target="_blank" rel="noopener">Ver Video ><a/>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/mwPrsBeyxRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href = "https://goo.gl/maps/aWLP9uTMCe7gHZbo9" target="_blank" rel="noopener">Ver Mapa><a/>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113289.01073674734!2d-59.06538588555017!3d-27.46049165664881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450c62a6f5f70b%3A0xf03ac86511c2cd6d!2sResistencia%2C%20Chaco!5e0!3m2!1ses!2sar!4v1649709232981!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDevice("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  seachFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slide();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  eventoTeclado(e);
  moveBall(e, ".ball", ".stage");
});
nocheDia(".btn-luna-sol", "dark-mode");
networkStatus();
speechReader();
