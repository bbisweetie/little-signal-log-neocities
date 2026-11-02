(() => {
  "use strict";
  const prompts = [
    "make a tiny window for something you want to remember.",
    "invent a constellation and give it a quiet name.",
    "write four words that sound like moonlight.",
    "draw a small door that leads to a familiar sound.",
    "leave one imperfect line exactly as it is.",
    "find three shades of green and imagine their weather.",
    "make a shelf for a thought that is not finished yet.",
    "give an old photograph a title made of five words.",
    "listen for a sound you usually overlook.",
    "invent a soft signal for the end of a long day.",
    "describe the color of a peaceful silence.",
    "leave a light on for a story you have not written."
  ];
  const button = document.getElementById("sr-new-signal");
  const message = document.getElementById("sr-message");
  const counter = document.getElementById("sr-sequence");
  let sequence = 1;
  let last = -1;
  button?.addEventListener("click", () => {
    if (!message || !counter) return;
    let next = Math.floor(Math.random() * prompts.length);
    if (next === last) next = (next + 1) % prompts.length;
    last = next;
    sequence += 1;
    message.textContent = prompts[next];
    counter.textContent = String(sequence).padStart(3, "0");
    message.classList.remove("is-received");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      void message.offsetWidth;
      message.classList.add("is-received");
    }
  });
  const lamp = document.getElementById("sr-lamp");
  const label = document.getElementById("sr-lamp-label");
  lamp?.addEventListener("click", () => {
    const on = !document.documentElement.classList.contains("sr-lamp-on");
    document.documentElement.classList.toggle("sr-lamp-on", on);
    lamp.setAttribute("aria-pressed", String(on));
    if (label) label.textContent = on ? "lower the lamp" : "turn up the lamp";
  });
})();