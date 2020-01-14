/*
function myFunc(name, weather) {
	console.log("Hello " + name + ".");
	console.log("It is " + weather + " today.");
}

myFunc("Sherman", "sunny");*/

function myFunc(name, weather, ...extraArgs)
{
	console.log("Hello " + name + ".");
	console.log("It is " + weather + " today.");
	
	for (let i = 0; i < extraArgs.length; i++) {
		console.log("Extra arg: " + extraArgs[i]);
	}
}

myFunc("Sherman", "sunny",
	"one", "two", "three");