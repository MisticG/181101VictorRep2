
/*function inSite() {

};

var i;

divForLuckor = document.createElement("div");

document.body.appendChild(divForLuckor);


function lucka() {
    var utseendePaLucka = document.createElement("div");
    utseendePaLucka.classList.add("container", "height-auto", "width-100%", "col", "row");
    utseendePaLucka.classList.add("bg-secondary", "text-white", "font-weight-bold");
    utseendePaLucka.innerText = "hello";
    divForLuckor.appendChild(utseendePaLucka);
    lotsOfLuckor();
}
*/

var lada = "";
var i;

for(i = 1; i <= 24; i++) {
    lada = "<div>" + lada[i] + "</div>";
}

var julkalender = document.getElementsByClassName("kalender");
julkalender.innerHTML = lada;




