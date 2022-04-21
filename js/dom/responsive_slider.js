const d = document;

export default function slide() {
  const $nextBtn = d.querySelector(".slider-btns .next"),
    $prevBtn = d.querySelector(".slider-btns .prev"),
    $slides = d.querySelectorAll(".slider-slide"),
    $play = d.querySelector(".btn-auto .play"),
    $stop = d.querySelector(".btn-auto .stop");
  let i = 0,
    intervalo;

  d.addEventListener("click", (e) => {
    function pasarFoto() {
      $slides[i].classList.remove("active");
      i++;

      if (i >= $slides.length) {
        i = 0;
      }
      $slides[i].classList.add("active");
    }

    if (e.target === $prevBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add("active");
    }
    if (e.target === $nextBtn) {
      e.preventDefault();
      pasarFoto();
    }
    if (e.target === $play) {
      e.preventDefault();
      intervalo = setInterval(pasarFoto, 2000);
    }
    if (e.target === $stop) {
      e.preventDefault();
      clearInterval(intervalo);
    }
  });
}
