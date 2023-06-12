var a;
function show_hide() {
    if (a == 1)
    {
        document.getElementById("textInput").style.display="none";
        return a = 0;
    }
    else
    {
        document.getElementById("textInput").style.display="block";
        return a = 1;
    }
} 

function showText() {
    const userName = document.getElementById("name").value;
    const text = document.getElementById("text");
    

    const myHeading = document.querySelector("h1");
    myHeading.textContent = "Mozilla is cool, " + userName;

    document.getElementById("textInput").style.display="none";
}

function change() {
    const text2 = document.querySelector("h1");
    text2.textContent = "Is Brave even cooler?";
    const body = document.getElementsByTagName("body")[0].style.background="white";
    const image = document.getElementById("logo");
    image.setAttribute("src", "./images/brave-logo.png");
}

function changeOut() {
    const text2 = document.querySelector("h1");
    text2.textContent = "Mozilla is cool";
    body = document.getElementsByTagName("body")[0].style.background="#ff9500";
    const image = document.getElementById("logo");
    image.setAttribute("src", "./images/firefox_PNG16.png")
}