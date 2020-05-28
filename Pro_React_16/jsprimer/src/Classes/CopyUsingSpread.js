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

let myData = new MyData();

let secondObject = { ...myData, weather: "cloudy" };

console.log(`myData: ${myData.weather}, secondObject: ${secondObject.weather}`);