function blurImage()
{
	var x = document.getElementById("myRange").value;
	document.getElementById("value").innerHTML = x;
	
	document.getElementById("bg").setAttribute("style", "filter: blur(" + x + "px); -webkit-filter: blur(" + x + "px)");
}

function openSettings()
{
	
}