/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document.querySelector("#test").innerHTML = test();
  function test() {
    let pronouns = ["the", "our"];
    let adjs = ["great", "big"];
    let nouns = ["jogger", "racoon"];
    let domains = [".com", ".net", ".gov", ".dog"];

    for (let pronoun of pronouns) {
      for (let adj of adjs) {
        for (let noun of nouns) {
          for (let domain of domains) {
            console.log(pronoun + adj + noun + domain);
          }
        }
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
