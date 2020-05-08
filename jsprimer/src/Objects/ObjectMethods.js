let myData = {
	name: "Sherman",
	weather: "sunny",
	/*printMessages: function() {
		console.log(`Hello ${myData.name}.`);
		console.log(`Today is ${myData.weather}.`);
	}*/
	printMessages: () => {  // Alternatively, we can also use lambda expressions.
		console.log(`Hello ${myData.name}.`);
		console.log(`Today is ${myData.weather}.`);
	}
};

myData.printMessages();