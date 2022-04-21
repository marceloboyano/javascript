const d = document,
  n = navigator;
export default function webCam(id) {
  const $video = d.getElementById(id);
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p>Sucedió el siguiente error: <mark>${err}</mark></p>`
        );
        console.log(`Sucedio el siguiente error: ${err}`);
      });
  }
}
