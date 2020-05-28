const myFunc = (nameFunction) => ("Hello " + nameFunction() + ".");

const printName = (nameFunction, printFunction) =>
	printFunction(myFunc(nameFunction));

printName(function() { return "Sherman" }, console.log);