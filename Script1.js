// JavaScript source code
/* Question 1

var firstNumber = 3;
var secondNumber = 5;

function add(firstNumber, secondNumber){
	return firstNumber + secondNumber;
}
*/

/* Question 2

var num1 = 4;
var num2 = 7;

function checkNums(num1, num2){
	if(num1 > num2){
		return true;
	}
	else if(num2 > num1){
		return false;
	}
	else if(num1 == num2){
		console.log("values are equal");
	}
}
*/

/* Question 3

var arr = new Array(4);
arr[0] = "Cat";
arr[1] = "Dog";
arr[2] = "Snake";
arr[3] = "Mouse";

document.write(arr);

*/

/* Question 4

String.prototype.minsToHHMM = function () {
	var mins_num = parseFloat(this,10);
	var hours = Math.floor(mins_num / 60);
	var minutes = Math.floor((mins_num - ((hours * 3600)) / 60 ));

	if (hours < 10){ hours = "0" + hours;}
	if (minutes < 10) { minutes = "0" + minutes;}
	return hours +':' + minutes;
}

*/

/* Question 5

function circle(radius) {
	this.radius = radius;
	this.area = function (){
		return Math.PI * this.radius * this.radius;
	};
	this.perimeter = function(){
		return 2 * Math.PI * this.radius;
	};
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));

*/

/* Question 6

function ConvertMilesToKM(dist){
	var distC = dist * 1;
	var distKM = dist * 1.609344;
	var distMiles = distC.toFixed(2);
}

*/

/* Question 7

function calcBMI(){

	var weight = document.bmiForm.weight.value

	var height = document.bmiForm.height.value

	if(weight > 0 && height > 0){
		var finalBmi = weight/(height/100*height/100)
		document.bmiForm.bmi.value = finalBmi

		if(finalBmi < 18.5){
			document.bmiForm.meaning.value = "Underweight"
		}

		if(finalBmi > 18.5 && finalBmi < 25){
			document.bmiForm.meaning.value = "Healthy"
		}

		if(finalBmi > 25){
			document.bmiForm.meaning.value = "Overweight"
		}
	}
}

*/

/* Question 9

function isPalindrome(s,i) {
	return (i=i¦¦0)<0¦¦i>=s.length>>1¦¦s[i]==s[s.length-1-i]&&isPalindrome(s, ++i);
}


*/





