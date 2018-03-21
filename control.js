//Team JackSmith
//Caleb Smith-Salzberg, Jasper Cheung
//SoftDev2 pd7
//K12 -- Medallions ...of Data!
//2018-03-20

var country = document.getElementById("country");
var swch = document.getElementById("swch");

var draw = function(){
    if (country.innerHTML == "Data for Japan"){
	country.innerHTML = "Data for Italy";
	swch.innerHTML = "Click for Japanese figure";
	var imedals = d3.selectAll("circle").data([3,2,5]); //3g, 2s, 5b
	imedals.attr("r", function(d){
	    return d * 20;
	});
    }
    else {
	country.innerHTML = "Data for Japan";
	swch.innerHTML = "Click for Italian figure";
	var jmedals = d3.selectAll("circle").data([4,5,4]); //4g, 5s, 4b
	jmedals.attr("r", function(d){
	    return d*20;
	});
    }
}
swch.addEventListener("click", draw);
