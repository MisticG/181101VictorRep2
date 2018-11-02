

function inSite() {
    newButton();
}

buttonDiv = document.createElement("div");
numberDiv = document.createElement("div");


document.body.appendChild(buttonDiv);

function newButton() {
    var button = document.createElement("button");
    button.innerText = "Click here for new password";
    button.classList.add("btn", "btn-info");
    button.setAttribute("type", "button");
    buttonDiv.appendChild(button);
    button.onclick = function () { output() };
        
}



function output() {
    var inputNumber = Math.floor(Math.random()* 100000000);
    var outputNumber = document.createElement("div");
    outputNumber.classList.add("container");
    outputNumber.innerHTML = "<p>" + inputNumber + "</p>";
    buttonDiv.appendChild(outputNumber);
    
}



/*button.onclick = function(newButton) {
    var randomNumber = Math.floor(Math.random()* 1000000);
    var numberInput = randomNumber.setAttribute("type", "number") + randomNumber;
    randomNumber.innerText = toString(numberInput);
    return numberInput;
}

*/



    

