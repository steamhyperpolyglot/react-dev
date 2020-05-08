const myData = {
	name: "Sherman",
	location: {
		city: "Singapore",
		country: "Singapore"
	},
	employment: {
		title: "Manager",
		dept: "Training Curriculum"
	}
}

/*function printDetails(data) {
	console.log(`Name: ${data.name}, City: ${data.location.city}, Role: ${data.employment.title}`);
}*/

// Selecting specific properties from the object.
function printDetails({ name, location: {city}, employment: { title }}) {
	console.log(`Name: ${name}, City: ${city}, Role: ${title}`);
}

printDetails(myData);