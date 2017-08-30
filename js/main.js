console.log("main.js active");
poond = "";

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var poondButton = document.getElementById("poondInput")

// Assign a function to be executed when the button is clicked
button.addEventListener("click", currencyType);
poondButton.addEventListener("click", poondConverter);

//Conversion based on scale chosen via radio buttons
function currencyType (clickEvent) {
  var scale = document.getElementsByName('numScale');

  if(scale[0].checked) {
  	toUSD();
  } else {
  	toINR();
  	}
}


//Dollar to Rupee: 1 USD = 63.9 INR
function toINR () {
let currencyNum = document.getElementById("numIn").value;
	currencyNum = Number(currencyNum);
	let numC = currencyNum * 64;

	//Font color for converted currency
	document.getElementById("numOut").style.color = "green";
	

	//Output
	let numCOut = document.getElementById("numOut");
	numCOut.value = numC.toFixed(0);
}



//Rupee to Dollar
function toUSD () {
let currencyNum = document.getElementById("numIn").value;
	currencyNum = Number(currencyNum);

	let numF = (currencyNum / 64);


//Font color of converted currency
document.getElementById("numOut").style.color = "green";


	//Output	
	let numFOut = document.getElementById("numOut");
	numFOut.value = numF.toFixed(0);
}



//Convert currency to poond (BLP)

  var arrName = new Array(10);
  arrName[0] = "🐸";
  arrName[1] = "🐟";
  arrName[2] = "🐡";
  arrName[3] = "🦆";
  arrName[4] = "🍤";
  arrName[5] = "🦈";
  arrName[6] = "🐳";
  arrName[7] = "🏊";
  arrName[8] = "🦀";
  arrName[9] = "🏄";

  function poondConverter() {
	  var firstRandomNumber = (Math.round((Math.random()*8)+1))
	  var secondRandomNumber = (Math.round((Math.random()*8)+1))
	  var thirdRandomNumber = (Math.round((Math.random()*8)+1))

	  let printpoond = document.getElementById("poondOutput");
	  console.log("printpoond", printpoond);

	  printpoond.innerHTML = `${arrName[firstRandomNumber]}  
	  	 ${arrName[secondRandomNumber]}  
	  	 ${arrName[thirdRandomNumber]}`;
}


//--------- CLEAR BUTTON ---------
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", erase)

function erase (clickEvent) {
 	document.getElementById("numIn").value = "";
 	document.getElementById("numOut").value = "";
}



