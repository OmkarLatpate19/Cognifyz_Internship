//Addition

var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("result");

document.getElementById("add").addEventListener("click", function(){
    res.value = parseInt(n1.value) + parseInt(n2.value);
});

//Changing Background Color
var changeColorBtn = document.getElementById("changeColor");
var colors = ["lightpink", "lightblue", "lightgreen", "lightyellow"];
var currentColorIndex = 0;

changeColorBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = colors[currentColorIndex];
    changeColorBtn.style.backgroundColor = colors[currentColorIndex]; // Change button color
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});


// Get current hour
var currentTime = new Date().getHours();

// Greeting message based on time
var greeting = '';
if (currentTime < 12) {
    greeting = 'Good morning!';
} else if (currentTime < 18) {
    greeting = 'Good afternoon!';
} else {
    greeting = 'Good evening!';
}

// Show greeting message in an alert box
alert(greeting);