//[ ] convert if-else to switch

console.log("main.js active");

/***********  SCRIPT  ***************/


//°F to °C: Deduct 32, then multiply by 5, then divide by 9
function toCelsius () {
let tempNum = document.getElementById("tempIn").value;
	tempNum = Number(tempNum);

	let tempC = (((tempNum - 35) * 5) / 9);

	//Font color for the converted temperature.
	if(tempC >= 32) {
		document.getElementById("tempOut").style.color = "red";
	} else {
		if(tempC < 0){
			document.getElementById("tempOut").style.color = "blue";		
		} else {
			document.getElementById("tempOut").style.color = "green";
		}
	}

	let tempCOut = document.getElementById("tempOut");
	tempCOut.value = tempC.toFixed(0);
}

//°C to °F:	Multiply by 9, then divide by 5, then add 32
function toFahrenheit () {
let tempNum = document.getElementById("tempIn").value;
	tempNum = Number(tempNum);

	let tempF = (((tempNum * 9) / 5) + 32);

//Font color for the converted temperature
	if(tempF >= 90) {
		document.getElementById("tempOut").style.color = "red";
	} else {
		if(tempF < 32){
			document.getElementById("tempOut").style.color = "blue";		
		} else {
			document.getElementById("tempOut").style.color = "green";
		}
	}

	//Output	
	let tempFOut = document.getElementById("tempOut");
	tempFOut.value = tempF.toFixed(0);
}



// Get a reference to the button element in the DOM
var button = document.getElementById("converter");



// This function should determine which conversion should
// happen based on which radio button is selected.

function determineConverter (clickEvent) {
	event.preventDefault();//prevents the default submit-refresh on button click.

  var scale = document.getElementsByName('tempScale');

  	let i = 0;

  if(scale[0].checked) {
  	toFahrenheit();
  } else {
  	toCelsius();
  	}
}

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", erase)

function erase (clickEvent) {
 	document.getElementById("tempIn").value = "";
 	document.getElementById("tempOut").value = "";
}



// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// [_] The below keypress code doesnt allow me to enter a number in the field. Fix.
// enterKey = document.getElementById("tempIn");
// enterKey.addEventListener("keypress", determineConverter);











