var button = document.querySelector("#mButton");
var counter = 0;
var time = 500;

randomizer();
button.addEventListener("mouseover", ()=>setTimeout(randomizer, time));

var btn = document.getElementById("mButton");
btn.onclick = function() {
	counter++;
	if(counter == 3) {
		alert("Level 2")
		time = time - 100;
	}
	else if(counter == 6) {
		alert("Level 3")
		time = time - 100;
	}
	else if(counter == 9) {
		alert("Level 4")
		time = time - 100;
	}
	else if(counter == 12) {
		alert("Level 5")
		time = time - 100;
	}
	else if(counter == 15) {
		alert("Level 6")
		time = time - 100;
	}
}

function randomizer() {
let x = Math.floor(Math.random()*300)+1;
let y = Math.floor(Math.random()*300)+1;
    button.style.left = x + "px";
    button.style.top = y + "px";
};