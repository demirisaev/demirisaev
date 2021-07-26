class UI {
    constructor(firstSelect,secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");

    }
    changeoutputFirst(){
        this.outputFirst.textContent = this.firstSelect.options[firstSelect.selectedIndex].textContent;
    }
    changeoutputSecond(){
        
        this.outputSecond.textContent = this.secondSelect.options[secondSelect.selectedIndex].textContent;
        
    }
    exchangeResult(result){
        this.outputResult.value = result;
    }
    
}