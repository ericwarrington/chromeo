"use strict";

function blurImage(image, val)
{
	//image.setAttribute("style", "filter: blur(" + val + "px); -webkit-filter: blur(" + val + "px)");
	addFilter("blur", val + "px");
	applyFilters(image);
}

function setImageOpacity(image, val)
{
	// I want to add a second UI to adjust opacity
	//image.setAttribute("style", "filter: opacity(" + val + "%); -webkit-filter: opacity(" + val + "%)");
	addFilter("opacity", val + "%");
	applyFilters(image);
}

function setImageSat(image, val)
{
	//image.setAttribute("style", "filter: blur(" + val + "px); -webkit-filter: blur(" + val + "px)");
	addFilter("saturate", val + "%");
	applyFilters(image);
}

function addImageFilter(image, filtername, val)
{
	//image.setAttribute("style", "filter: blur(" + val + "px); -webkit-filter: blur(" + val + "px)");
	addFilter(filtername, val);
	applyFilters(image);
}


var filters={"blur": "", opacity: "", saturate: ""};

//note: val must be a String containing the units (e.g. %, px, etc.)
function addFilter(filter, val)
{
	console.debug(filter);
	//if(filter && filter instanceof String)
		filters[filter]=val;
	console.debug(filters[filter]);
}

function applyFilters(image)
{
	var filterstyle="";
	console.debug(filters);
	
	for(var prop in filters)
	{
		if(filters[prop] && filters.hasOwnProperty(prop))
		{
			filterstyle+=prop + "(" + filters[prop] + ") ";
		}
	}
	
	console.debug("filter style: " + filterstyle);
	image.setAttribute("style", "filter: " + filterstyle + "; -webkit-filter: " + filterstyle);
}
