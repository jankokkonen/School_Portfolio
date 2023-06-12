document.getElementById("fontti").style.fontSize = "16px";
document.getElementById("fontti").style.fontFamily = "Courier new";

document.getElementById("tietoa").innerHTML = "Courier new";

var clicks = 0;

function myFunction() {
    clicks += 1;
    document.getElementById("fontti").style.fontFamily = "Roboto";
    document.getElementById("tietoa").innerHTML = "Roboto";
    
    if (clicks === 2) {
        document.getElementById("fontti").style.fontFamily = "Mansalva";
        document.getElementById("tietoa").innerHTML = "Mansalva";
    }
    if (clicks === 3) {
        document.getElementById("fontti").style.fontFamily = "Grenze";
        document.getElementById("tietoa").innerHTML = "Grenze";
    }
    if (clicks === 4) {
        document.getElementById("fontti").style.fontFamily= "Turret road";
        document.getElementById("tietoa").innerHTML = "Turret road";
    }
    if (clicks === 5) {
        document.getElementById("fontti").style.fontFamily = "Courier new";
        document.getElementById("tietoa").innerHTML = "Courier new";
        clicks = 0;
    }
}

