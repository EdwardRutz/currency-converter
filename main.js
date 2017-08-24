console.log("main.js active");

/***********  SCRIPT  ***************/


//°F to °C: Deduct 32, then multiply by 5, then divide by 9
function toCelsius () {
	console.log("toCelsius");
let tempNum = document.getElementById("tempIn").value;
	tempNum = Number(tempNum);

	let tempC = (((tempNum - 35) * 5) / 9);
	console.log("tempC", tempC);

	let tempCOut = document.getElementById("tempOut");
	tempCOut.value = tempC;
}

//°C to °F:	Multiply by 9, then divide by 5, then add 32
function toFahrenheit () {
	console.log("toFahrenheit");
let tempNum = document.getElementById("tempIn").value;
	tempNum = Number(tempNum);
	console.log("tempNum", tempNum);

	let tempF = (((tempNum * 9) / 5) + 32);
	console.log("tempF", tempF);

	let tempFOut = document.getElementById("tempOut");
	tempFOut.value = tempF;
}



// Get a reference to the button element in the DOM
var button = document.getElementById("converter");



// This function should determine which conversion should
// happen based on which radio button is selected.

function determineConverter (clickEvent) {
	event.preventDefault();//prevents the default submit-refresh on button click.
  	console.log("submit received", clickEvent);

  var scale = document.getElementsByName('tempScale');
  	console.log("scale", scale);

  	let i = 0;
  	console.log("scale[i]", scale[i].checked);

  if(scale[0].checked) {
  	console.log("scale[0]-F", scale[i]); //scale[0] is fahrenhiet
  	toFahrenheit();
  } else {
  	console.log("scale[1]-C", scale[i]);
  	toCelsius();
  	}
}

// Assign a function to be executed when the button is clicked
console.log("button", button);
button.addEventListener("click", determineConverter);

// document.addEventListener(keyup, determineConverter);



/***********  SCRIPT  ***************/


/***********  SCRIPT  ***************/


