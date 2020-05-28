class MyData {
	constructor() {
		this.name = "Sherman";
		this.weather = "sunny";
	}
	
	printMessages = () => {
		console.log(`Hello ${this.name}.`);
		console.log(`Today is ${this.weather}.`);
	}
}

// let myData = new MyData();

// let secondObject = {};

// Copying properties from one object to another.
// Object.assign(secondObject, myData);
//
// secondObject.printMessages();
//
// myData.printMessages();