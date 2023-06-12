function change() {
    var rivit = document.getElementById("eka");
    rivit.classList.add("rivit-vierekkain");

    var links = document.links;

    for(var i = 0; i < links.length; i++) {
        links[i].classList.add("dotted");
    }

    var img1 = document.getElementById("fa-file-pdf").style.display = "inline";
    var img2 = document.getElementById("fa-envelope").style.display = "inline";
    var img3 = document.getElementById("fa-circle-info").style.display = "inline";
    var img4 = document.getElementById("fa-circle-info2").style.display = "inline";

    var table1 = document.getElementById("toka");
    table1.classList.add("table-js1");

    var table1 = document.getElementById("kolmas");
    table1.classList.add("table-js2");
}