import Entry from './journal.js';
function handleEntry(event) {
  event.preventDefault();
  document.querySelector('#number').innerText = null;
  const title = document.querySelector('#title').value;
  console.log(title);
  const body = document.querySelector('#body').value;
  console.log(body);
  const entry = new Entry(title, body);
  console.log(entry);
  const number = entry.countWords();
  const pTag = document.createElement("p");
  pTag.append(number);
  // let br = document.createElement("br");
  document.querySelector('#number').append(pTag);
  // document.querySelector('#number').append(br);
  document.querySelector('#vowel-const').innerText = null;
  const vowelsConst = entry.countVowelsOrConsonants();
  const pTag2  = document.createElement("p");
  pTag2.append(vowelsConst);
  document.querySelector('#vowel-const').append(pTag2);
  const pTag3 = document.createElement("p");
  let teaser = entry.getTeaser();
  pTag3.append(teaser);
  document.getElementById("teaser").append(teaser);
}


// window.addEventListener("load", function () {
document.querySelector("#journal-entry").addEventListener("submit", handleEntry);
// });

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';