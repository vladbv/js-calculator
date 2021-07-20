"use strict";

var input = document.getElementById('input'),
	number = document.querySelectorAll('.numbers div'),
	operator = document.querySelectorAll('.operators div'),
	result = document.getElementById('result'),
	clear = document.getElementById('clear'),
	resultDisplayed = false;

// adding click handlers to number buttons
for(var i = 0; i < number.length; i++){

	number[i].addEventListener('click', function(e){

var currentString = input.innerHTML;
var lastChar = currentString[currentString.length - 1];

//if result is not displayed, we should keep adding
		if(resultDisplayed === false){

input.innerHTML += e.target.innerHTML;
		} else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/")

		{
// if user clicked an operator, we should add to the current set


			resultDisplayed = false;
			input.innerHTML += e.target.innerHTML;

		} else{
// if the result is displayed and the user pressed a number
			// we should clear the input string and add the new input to start new operations
		resultDisplayed = false;
			input.innerHTML = "";
			input.innerHTML += e.target.innerHTML;
		}

	});

}

// Adding click handlers to number buttons

for(var i = 0; i < operator.length; i++){
operator[i].addEventListener('click', function(e){

var currentString = input.innerHTML;
	var lastChar = currentString[currentString.length - 1];
	
	// if the last character that is entered is an operator, we should replace it with the current one

	if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
		var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
		input.innerHTML = newString;
	} else if ( currentString.length == 0){
console.log("Enter a number first");

} else{
input.innerHTML += e.target.innerHTML;
}
});
}

// When the equal button is clicked 

result.addEventListener('click', function(e){

var inputString = input.innerHTML;
// forming the array of numbers
	var numbers = inputString.split(/\+|\-|\×|\÷/g);
// forming the array of operators

	var operators = inputString.replace(/[0-9]|\./g, "").split("");
	
	console.log(inputString);
	console.log(operators);
	console.log(numbers);
	console.log("-----------------");
// Let's loop through the array and do one operation at a time
	// First is division, then multiplication, then subtraction and then addition
	// the output is the final element that remains

	var divide = operators.indexOf("/");
	while(divide != -1){
numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
		operators.splice(divide, 1);
	divide = operators.indexOf("/");
	}
var multiply = operators.indexOf("*");
	while(multiply != -1){
numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
		operators.splice(multiply, 1);
		multiply = operators.indexOf("*");
	}

	var subtract = operators.indexOf("-");
	while(subtract != -1){

numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
operators.splice(subtract, 1);
		subtract = operators.indexOf("-");
	}
	var add = operators.indexOf("+");

	while(add != -1){

numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]) );
	operators.splice(add, 1);
		add = operators.indexOf("+");
	}

//OUTPUT
	input.innerHTML = numbers[0];
	resultDisplayed = true; 

});

clear.addEventListener('click', function(){
input.innerHTML = "";
});
