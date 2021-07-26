

//Exchange Rate Api

const inputAmount = document.querySelector("#amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const currency = new Currency("EUR","TRY");
const ui = new UI(firstSelect,secondSelect);

eventListener();

function eventListener() {
    inputAmount.addEventListener("input",exchangeCurrency);
    firstSelect.addEventListener("change",function(){
        currency.changefirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeoutputFirst();
        
    });

    secondSelect.addEventListener("change",function(){
        currency.changesecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeoutputSecond();
    });
    // secondSelect.onchange() = function (){
    //     currency.changesecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
    // };
}


function exchangeCurrency() {

  currency.changeAmount(inputAmount.value);
  currency.exchange()
  .then(result => {
      ui.exchangeResult(result)
})
  .catch(err => console.log(err));
    
}





//Exchange Rate Api