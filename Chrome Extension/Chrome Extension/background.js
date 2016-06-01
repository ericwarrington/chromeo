function blurImage()
{
	var x = document.getElementById("blurRange").value;
// 	var y = document.getElementById("opacityRange").valueY;
	document.getElementById("value").innerHTML = x;
// 	document.getElementById("valueY").innerHTML = y;
		
	document.getElementById("bg").setAttribute("style", "filter: blur(" + x + "px); -webkit-filter: blur(" + x + "px)");
// 	document.getElementById(
	
	
// I want to add a second UI to adjust opacity

}

function openSettings()
{
	document.getElementById("bg").setAttribute("style", "filter: blur(" + x + "px); -webkit-filter: blur(" + x + "px)");
}