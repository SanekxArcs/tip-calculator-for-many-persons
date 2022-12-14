"use strict";

let personInput, personsWindow, resultText, IdNumber, nameInputsText, billInputsValue, checkboxPerson,containerPerson;

personInput = document.querySelector("#numPeople");
personsWindow = document.querySelector(".container-for-persons");
resultText = document.querySelector(".js-list-of-person-results");

containerPerson = document.querySelectorAll('.list-of-person');
IdNumber = document.querySelectorAll(".number-text");
nameInputsText = document.querySelectorAll(".person-name");
billInputsValue = document.querySelectorAll(".person-bill");
checkboxPerson = document.querySelectorAll(".checkbox-person");

// personInput.addEventListener('input', () => {
//   if( personInput.value > 0 || personInput.value === "") {
//       personInput.classList.remove('red-input');
//       label.classList.add('hidden');
//   } else {
//       personInput.classList.add('red-input');
//       label.classList.remove('hidden');
//   }
// });

personInput.addEventListener("input", () => {
  let clearDivs = document.querySelectorAll(".container-for-persons");
  
  clearDivs.forEach((e) => {
    e.innerHTML = "";
  });

  let clearResurtDivs = document.querySelectorAll('.js-list-of-person-results');

  clearResurtDivs.forEach((e) => {
    e.innerHTML = "";
  });

  let valuePersons = personInput.value;

  for (let index = 1; index <= valuePersons; index++) {
    const element = document.createElement('div');

    element.classList.add('list-of-person');

    element.innerHTML =`
    <p class="number number-text" id="${index}">${index}</p>
    <input type="text" class="person-name input" placeholder="Person name">
    <input type="number" class="person-bill input" placeholder="Bill">`;
    personsWindow.append(element);

    const element2 = document.createElement('div');

    element2.classList.add('list-of-person-results');

    element2.innerHTML = `<input id="${index}" type="checkbox" class="material_checkbox">
    <p class="number-result" id="${index}">${index}</p>
    <p class="person-name-result">Name</p>
    <p class="person-bill-result">Bill</p>`;
    resultText.append(element2);
  }
  return;
});

// if(billInputsValue < 0 && nameInputsText !== ""){ 
//  console.log("hoeedzjhkjedb");
// }


//create function for record many inputs data and add to array of objects?

// let dataPersons = [];

// function addPerson(dataPersonsToAdd) {
//   dataPersons.push(...dataPersonsToAdd);
//   return dataPersons;
// }


// console.log(addArtist(objects));
