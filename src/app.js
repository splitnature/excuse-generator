/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = () => {
  let randomnumber = Math.random() * 10;

  document.querySelector("#excuse").innerHTML = radexcuse();
  console.log("hello");
};

let radexcuse = () => {
  let wh = who[Math.floor(Math.random() * 4)] + " ";
  let ac = action[Math.floor(Math.random() * 4)] + " ";
  let wa = what[Math.floor(Math.random() * 3)] + " ";
  let wn = when[Math.floor(Math.random() * 5)] + " ";
  let excuse = wh + ac + wa + wn;
  return excuse;
};
