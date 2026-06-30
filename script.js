const root = document.documentElement;

window.addEventListener("pointermove", (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;
  root.style.setProperty("--mouse-x", x.toFixed(3));
  root.style.setProperty("--mouse-y", y.toFixed(3));
});

const poem = document.querySelector(".signal-poem");
const phrases = [
  "return: home",
  "return: listening",
  "return: warm-static",
  "return: still-here",
  "return: nael-return"
];

let phraseIndex = 0;

setInterval(() => {
  if (!poem) return;
  phraseIndex = (phraseIndex + 1) % phrases.length;
  poem.textContent = `rin / rin / sola
  lumen: hold
  field: listening
  name: little-signal-log
  ${phrases[phraseIndex]}`;
}, 3600);

const atlas = document.querySelector(".signal-atlas");

if (atlas) {
  const atlasImage = atlas.querySelector("img");
  const atlasLabel = atlas.querySelector("figcaption span");
  const atlasButtons = atlas.querySelectorAll("[data-atlas-image]");

  atlasButtons.forEach((button) => {
    button.addEventListener("click", () => {
      atlasButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      atlasImage.src = button.dataset.atlasImage;
      atlasImage.alt = `${button.dataset.atlasLabel} selected for the signal atlas`;
      atlasLabel.textContent = button.dataset.atlasLabel;
    });
  });
}

const listeningWindow = document.querySelector(".listening-window");

if (listeningWindow) {
  const listeningText = listeningWindow.querySelector(".listening-text");
  const listeningButtons = listeningWindow.querySelectorAll("[data-listen-mode]");
  const listeningModes = {
    static: `listen.static {
  input: warm_noise;
  posture: no_rush;
  return: "hold the signal gently";
}`,
    lamp: `listen.lamp {
  light: low;
  edge: visible;
  return: "answer only after the room settles";
}`,
    sky: `listen.sky {
  night: kind;
  distance: open;
  return: "let the small signal travel";
}`
  };

  listeningButtons.forEach((button) => {
    button.addEventListener("click", () => {
      listeningButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      listeningText.textContent = listeningModes[button.dataset.listenMode];
    });
  });
}
