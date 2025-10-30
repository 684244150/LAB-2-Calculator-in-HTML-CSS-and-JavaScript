const display = document.getElementById("displa");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculator(){
    try{
        display.value = eva(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}