//for user inputs
const display = document.getElementById("display");
function appendToDisplay(input){
    const startPos = display.selectionStart;
    const endPos = display.selectionEnd;

    // Insert the input at the cursor position (replaces selection if there is one)
    display.value = display.value.substring(0, startPos) + input + display.value.substring(endPos);

    // Move the cursor to the end of the inserted text
    const newPos = startPos + input.length;
    display.selectionStart = newPos;
    display.selectionEnd = newPos;

    // Ensure the display stays focused
    display.focus();
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
