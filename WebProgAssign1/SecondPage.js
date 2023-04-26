function update(previewPic)
{
    document.getElementById("Image").innerHTML = previewPic.alt;
    document.getElementById("Image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("Image").style.fontSize = "250%";
}

function undo()
{
    document.getElementById("Image").innerHTML = "Hover over a hero to display their real name here";
    document.getElementById("Image").style.backgroundImage = "url('')";
    document.getElementById("Image").style.fontSize = "70%";

}

function replaceText(thatDiv)
{
    document.getElementById("Test").innerHTML = thatDiv.querySelector("p").innerHTML;
}