"use strict";

function blurImage(image, val)
{
//	var x = document.getElementById("blurRange").value;
	//document.getElementById("value").innerHTML = x;
		
//	document.getElementById("bg").setAttribute("style", "filter: blur(" + x + "px); -webkit-filter: blur(" + x + "px)");
	
	image.setAttribute("style", "filter: blur(" + val + "px); -webkit-filter: blur(" + val + "px)");
}