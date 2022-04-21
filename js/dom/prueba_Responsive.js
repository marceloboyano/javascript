const d = document;
export function responsiveTester(form) {
  const $form = document.getElementById(form);
  let tester;
  d.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target === $form) {
      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) tester.close();
  });
}
