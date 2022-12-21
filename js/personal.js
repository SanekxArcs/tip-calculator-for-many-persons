'use strict';
const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'wrapper');

const wrapperInner = document.createElement('div');
      wrapperInner.setAttribute('class', 'wrapper_inner');

const wrapperInnerContainer = document.createElement('div');
      wrapperInnerContainer.setAttribute('class', 'wrapper_inner_container');

const inputs = document.createElement('div');
      inputs.setAttribute('class', 'inputs');

const peopleDivH = document.createElement('div');
      peopleDivH.setAttribute('id', 'peopleDiv');
      peopleDivH.setAttribute('class', 'num-people-container');
            
const peopleLabel = document.createElement('label');
      peopleLabel.setAttribute('for', 'people');
      peopleLabel.setAttribute('class', 'num-people text');
      peopleLabel.innerHTML = 'Number of people';

const peopleH = document.createElement('input');
      peopleH.setAttribute('type', 'number');
      peopleH.setAttribute('id', 'people');
      peopleH.setAttribute('min', '1');
      peopleH.setAttribute('max', '20');
      peopleH.setAttribute('step', '1');            
      peopleH.setAttribute('class', 'input people');

const selectTipContainer = document.createElement('div');
      selectTipContainer.setAttribute('class', 'select-tip-container');      

const inputRangeContainer = document.createElement('div');
      inputRangeContainer.setAttribute('class', 'input-range-container');

const tipLabel = document.createElement('label');
      tipLabel.setAttribute('for', 'tip');
      tipLabel.setAttribute('class', 'select-tip text');
      tipLabel.innerHTML = 'Select Tip %';

const range = document.createElement('div');
      range.setAttribute('class', 'range');

const sliderValue = document.createElement('div');
      sliderValue.setAttribute('class', 'sliderValue show');

const spanIndicator = document.createElement('span');
      spanIndicator.innerHTML = '0';

const field = document.createElement('div');
      field.setAttribute('class', 'field');

const tipH = document.createElement('input');
      tipH.setAttribute('type', 'range');
      tipH.setAttribute('id', 'tip');
      tipH.setAttribute('value', '0');
      tipH.setAttribute('min', '0');
      tipH.setAttribute('max', '50');
      tipH.setAttribute('step', '5');
      tipH.setAttribute('class', 'custom input');

const listOfPersons = document.createElement('div');
      listOfPersons.setAttribute('class', 'list-of-persons');

const topLabelPersons = document.createElement('div');
      topLabelPersons.setAttribute('class', 'top-label-persons');

const numberName = document.createElement('p');
      numberName.setAttribute('class', 'name-text text');
      numberName.innerHTML = '№';


const nameText = document.createElement('p');
      nameText.setAttribute('class', 'name-text text');
      nameText.innerHTML = 'Name';


const billText = document.createElement('p');
      billText.setAttribute('class', 'bill-text text');
      billText.innerHTML = 'Bill';

const containerForPersons = document.createElement('div');
      containerForPersons.setAttribute('class', 'container-for-persons');

const resultsH = document.createElement('div');
      resultsH.setAttribute('class', 'results');      
      resultsH.setAttribute('id', 'results');

const containerResults = document.createElement('div');
      containerResults.setAttribute('class', 'container-results');

const topLabelPersonsResults = document.createElement('div');
      topLabelPersonsResults.setAttribute('class', 'top-label-persons-results');

const numberNameR = document.createElement('p');
      numberNameR.setAttribute('class', 'name-text text');
      numberNameR.innerHTML = '№';


const nameTextR = document.createElement('p');
      nameTextR.setAttribute('class', 'name-text text');
      nameTextR.innerHTML = 'Name';


const billTextR = document.createElement('p');
      billTextR.setAttribute('class', 'bill-text text');
      billTextR.innerHTML = 'Bill';

const listOfPersonResults = document.createElement('div');
      listOfPersonResults.setAttribute('class', 'js-list-of-person-results');

const resultsBillTotal = document.createElement('p');
      resultsBillTotal.setAttribute('class', 'total-text text');
      resultsBillTotal.innerHTML = 'TOTAL';

const resultsBillTotalSpan = document.createElement('span');
      resultsBillTotalSpan.setAttribute('class', 'span_total')
      resultsBillTotalSpan.innerHTML = '$0.00';
      
const btnReset = document.createElement('button');
      btnReset.setAttribute('class', 'btn btn-reset');
      btnReset.setAttribute('onClick', 'window.location.reload()');
      btnReset.innerHTML = 'Reset';

const resultsName = document.createElement('div');
      resultsName.setAttribute('id', 'resultsName');
      resultsName.setAttribute('class', 'resultsName');
      resultsName.innerHTML ='Results';
const calculateH = document.createElement('button');
      calculateH.setAttribute('id', 'calculate');
      calculateH.setAttribute('class', 'btn calculate')
      calculateH.innerHTML = 'Calculate';
      

      // ! Fotter
const attribution = document.createElement('div');
      attribution.setAttribute('class', 'attribution');
      attribution.innerHTML = 'Coded by';

const linkSA = document.createElement('a');
      linkSA.setAttribute('href', 'https://github.com/SanekxArcs/TipCalculator-SA');
      linkSA.innerHTML = ' Sanekx Arcs';
attribution.appendChild(linkSA);

wrapper.appendChild(wrapperInner);
      wrapperInner.appendChild(wrapperInnerContainer);
            wrapperInnerContainer.appendChild(inputs);
                  inputs.appendChild(peopleDivH);
                        peopleDivH.appendChild(peopleLabel);
                        peopleDivH.appendChild(peopleH);
                  inputs.appendChild(selectTipContainer);
                        selectTipContainer.appendChild(inputRangeContainer);
                              inputRangeContainer.appendChild(tipLabel);
                              inputRangeContainer.appendChild(range);
                                    range.appendChild(sliderValue);
                                          sliderValue.appendChild(spanIndicator);
                                    range.appendChild(field);
                                          field.appendChild(tipH);
                  inputs.appendChild(listOfPersons);
                        listOfPersons.appendChild(topLabelPersons);
                              topLabelPersons.appendChild(numberName);
                              topLabelPersons.appendChild(nameText);
                              topLabelPersons.appendChild(billText);
                        listOfPersons.appendChild(containerForPersons);
            wrapperInnerContainer.appendChild(resultsH);
            resultsH.appendChild(resultsName);
                  resultsH.appendChild(containerResults);                        
                  resultsH.appendChild(listOfPersonResults);         
                  resultsH.appendChild(resultsBillTotal);
                              resultsH.appendChild(resultsBillTotalSpan);
                              resultsH.appendChild(calculateH);
                              resultsH.appendChild(btnReset);
document.body.appendChild(wrapper);       
document.body.appendChild(attribution);

const peopleDiv = document.getElementById('peopleDiv');
const people = document.getElementById('people');
let peopleValue = people.value;
const results = document.getElementById('results');
const resultsList = document.getElementById('resultsList');
const tip = document.getElementById('tip');
const btnResetF = document.getElementsByClassName('btn-reset'); 
let tipValue = tip.value;
const calculate = document.getElementById('calculate');

people.addEventListener('input', function() {
      peopleValue = people.value;
            while (containerForPersons.firstChild) {
                  containerForPersons.removeChild(containerForPersons.firstChild);
            }
            while (listOfPersonResults.firstChild) {listOfPersonResults.removeChild(listOfPersonResults.firstChild);
            }
            for (let i = 0; i < peopleValue; i++) {
                  const name = document.createElement('input');
                  name.setAttribute('type', 'text');
                  name.setAttribute('id', 'name' + i);
                  name.setAttribute('placeholder', 'Name');
                  name.setAttribute('class', 'input');    
                  name.setAttribute('class', 'person-name input');
                  
                  const bill = document.createElement('input');
                  bill.setAttribute('type', 'number');
                  bill.setAttribute('id', 'bill' + i);
                  bill.setAttribute('placeholder', 'Bill');
                  bill.setAttribute('class', 'person-bill input');
                  
                  bill.setAttribute('class', 'input');
                  
                  const newDiv = document.createElement('div');
                  newDiv.setAttribute('id', 'newDiv' + i);
                  newDiv.setAttribute('class', 'new_div_center');
                  
                  const idToDiv = document.createElement('p');
                  idToDiv.setAttribute('id', i+1);
                  idToDiv.setAttribute('class', 'number number-text')
                  idToDiv.innerHTML = i+1;
                  
                  newDiv.appendChild(idToDiv);
                  newDiv.appendChild(name);
                  newDiv.appendChild(bill);
                  containerForPersons.appendChild(newDiv);
            }
});

tip.addEventListener('input', calculateTip);
            
calculate.addEventListener('click', calculateTip);

function calculateTip () {
            topLabelPersons.appendChild(numberName);
            topLabelPersons.appendChild(nameText);
            topLabelPersons.appendChild(billText);
      containerResults.appendChild(topLabelPersonsResults);
            topLabelPersonsResults.appendChild(numberNameR);
            topLabelPersonsResults.appendChild(nameTextR);
            topLabelPersonsResults.appendChild(billTextR);
    while (listOfPersonResults.firstChild) {listOfPersonResults.removeChild(listOfPersonResults.firstChild);
    }
    let sum = 0;
    for (let i = 0; i < peopleValue; i++) {
      let name = document.getElementById('name' + i);
      let bill = document.getElementById('bill' + i);

      const resultsListItem = document.createElement('div');
            resultsListItem.setAttribute('class', 'list-of-person-results');

      const resultName = document.createElement('p');
            resultName.setAttribute('class', 'person-name-result');
      const resultBill = document.createElement('p');
            resultBill.setAttribute('class', 'person-bill-result');
      const resultID = document.createElement('p');
            resultID.setAttribute('class', 'number-result');

            resultsListItem.appendChild(resultID);
            resultsListItem.appendChild(resultName);
            resultsListItem.appendChild(resultBill);
            let tipResult = ((bill.value * tip.value) / 100);
            resultID.innerHTML = i+1;
            resultName.innerHTML = name.value;
            resultBill.innerHTML = (Number(bill.value) + Number(tipResult)).toFixed(2);
            listOfPersonResults.appendChild(resultsListItem);

            sum += (Number(bill.value) + Number(tipResult));
      }
      resultsBillTotalSpan.innerHTML = `${sum.toFixed(2)}$`;
    };
