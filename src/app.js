import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const excusa = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const frase = `${excusa(who)} ${excusa(action)} ${excusa(what)} ${excusa(when)}`;
  document.getElementById('excuse').innerHTML = frase;
};
