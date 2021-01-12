document.getElementById("startGame").style.display = "none";
var talking = 0;
function cellTalk() {
	talking += 1;
	if (talking == 1) {
		document.getElementById("cellText").innerHTML = "Hallo, I am Cell WB#12,403.";
	}
	else if (talking == 2) {
		document.getElementById("cellText").innerHTML = "I'm a white blood cell.";
		document.getElementById("name").innerHTML = "Cell WB#12,403";
	}
	else if (talking == 3) {
		document.getElementById("cellText").innerHTML = "I need your help to take down Covid at Stage 4";
	}
	else if (talking == 4) {
		document.getElementById("cellText").innerHTML = "There are 3 stages we need to learn about covid before we can beat him";
	}
	else if (talking == 5) {
		document.getElementById("cellText").innerHTML = "Click Begin and head to Stage 1";
		document.getElementById("nextButton").style.display = "none";
		document.getElementById("startGame").style.display = "block";
	}
}