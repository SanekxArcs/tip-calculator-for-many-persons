'use strict';

const slideValue = document.querySelector(".sliderValue span");
const inputSlider = document.querySelector(".field input");

slideValue.style.display = 'none';

inputSlider.oninput = (()=>{
  let value = inputSlider.value;
  slideValue.style.display = '';
  if (value < 5){
    slideValue.textContent = value;
    slideValue.style.width = (10) + "%";
    slideValue.style.left = (10) + "%";
  }else {
    slideValue.textContent = value;
  slideValue.style.width = (value*2) + "%";
  slideValue.style.left = `calc(${(value*2) + "%"})`;
  }
  slideValue.classList.add("show");
});

//personInput.addEventListener("input", () => {
  //   let clearDivs = document.querySelectorAll(".container-for-persons");
    
  //   clearDivs.forEach((e) => {
  //     e.innerHTML = "";
  //   });
  
  //   let clearResurtDivs = document.querySelectorAll('.js-list-of-person-results');
  
  //   clearResurtDivs.forEach((e) => {
  //     e.innerHTML = "";
  //   });
  
  //   let valuePersons = personInput.value;
  
  //   for (let index = 1; index <= valuePersons; index++) {
  //     const element = document.createElement('div');
  
  //     element.classList.add('list-of-person');
  
  //     element.innerHTML =`
  //     <p class="number number-text" id="${index}">${index}</p>
  //     <input type="text" class="person-name input" placeholder="Person name">
  //     <input type="number" class="person-bill input" placeholder="Bill">`;
  //     personsWindow.append(element);
  
  //     const element2 = document.createElement('div');
  
  //     element2.classList.add('list-of-person-results');
  
  //     element2.innerHTML = `<input id="${index}" type="checkbox" class="material_checkbox">
  //     <p class="number-result" id="${index}">${index}</p>
  //     <p class="person-name-result">Name</p>
  //     <p class="person-bill-result">Bill</p>`;
  //     resultText.append(element2);
  //   }
  //   return;
  // });






