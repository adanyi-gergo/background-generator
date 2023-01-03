var leftColor = document.getElementById("leftColor");
var rightColor = document.getElementById("rightColor");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");

function setGradient(){
    body.style.backgroundImage = "linear-gradient(to right, "
    +leftColor.value
    +", "
    +rightColor.value
    +")";

    css.textContent = body.style.backgroundImage + ";";
}

leftColor.addEventListener('input', setGradient);
rightColor.addEventListener('input', setGradient);

