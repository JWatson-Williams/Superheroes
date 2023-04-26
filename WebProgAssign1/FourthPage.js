function update(previewPic)
{
    document.getElementById("Image").innerHTML = previewPic.alt;
    document.getElementById("Image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("Image").style.fontSize = "250%";
}

function undo()
{
    document.getElementById("Image").innerHTML = "Hover over a villain to see name+image";
    document.getElementById("Image").style.backgroundImage = "url('')";
    document.getElementById("Image").style.fontSize = "80%";

}

function replaceText(thatDiv)
{
    document.getElementById("Backstory").innerHTML = thatDiv.querySelector("p").innerHTML;

}

function undoText()
{
    document.getElementById("Backstory").innerHTML = "";
}