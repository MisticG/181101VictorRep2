
function inSite() {
    biii();
};

var i;

divForLuckor = document.createElement("div");

document.body.appendChild(divForLuckor);

/*
function lucka() {
    var utseendePaLucka = document.createElement("div");
    utseendePaLucka.classList.add("container", "height-auto", "width-100%", "col", "row");
    utseendePaLucka.classList.add("bg-secondary", "text-white", "font-weight-bold");
    utseendePaLucka.innerText = "hello";
    divForLuckor.appendChild(utseendePaLucka);
    lotsOfLuckor();
}
*/

var julkalender = [];
var i;
function biii(){
var julkalender = document.getElementsByClassName("kalender")[0];
for(i = 0; i <= julkalender.length; i++) {
    julkalender.innerHTML = "<div>" + julkalender[i] + "</div>";
    divForLuckor.appendChild(julkalender);


}
}


