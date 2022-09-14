/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#test").innerHTML = testGen();
};

function testGen() {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let domains = [".com", ".net", ".gov", ".dog"];
  let testme = "";
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let domain of domains) {
          testme += pronoun + adj + noun + domain + "<br>";
        }
      }
    }
  }
  return testme;
}
console.log("Hello Rigo from the console!");
