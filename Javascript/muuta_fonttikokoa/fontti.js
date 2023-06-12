document.getElementById("fontti-koko").style.fontSize = "16px";
document.getElementById("tietoa").innerHTML = "Fontin koko on: 16px";
var clicks = 0;

function myFunction() {
    clicks += 1;
    document.getElementById("fontti-koko").style.fontSize = "20px";
    document.getElementById("tietoa").innerHTML = "Fontin koko on: 20px";
    
    if (clicks === 2) {
        document.getElementById("fontti-koko").style.fontSize = "24px";
        document.getElementById("tietoa").innerHTML = "Fontin koko on: 24px";
    }
    if (clicks === 3) {
        document.getElementById("fontti-koko").style.fontSize = "28px";
        document.getElementById("tietoa").innerHTML = "Fontin koko on: 28px";
    }
    if (clicks === 4) {
        document.getElementById("fontti-koko").style.fontSize = "32px";
        document.getElementById("tietoa").innerHTML = "Fontin koko on: 32px";
    }
    if (clicks === 5) {
        document.getElementById("fontti-koko").style.fontSize = "16px";
        document.getElementById("tietoa").innerHTML = "Fontin koko on: 16px";
        clicks = 0;
    }
}

