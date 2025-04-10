//for user inputs
const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}

//for evaluation
const equalTo = doocument.getElementById("equalTo");
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

//for deleting single inputs
function deleteInput(){
    display.value = display.value.slice(0,-1);
}

//for clearing all the inputs
function clearDisplay(){
    display.value = "";
}