	talking = 0;
function cellTalk() {
	talking += 1;
	if (talking == 1) {
		document.getElementById("cellText").innerHTML = "Hallo, I am Cell #12403.";
	}
	else if (talking == 2) {
		document.getElementById("cellText").innerHTML = "I'm a white blood cell.";
		document.getElementById("name").innerHTML = "Cell #12403";
	}
	else if (talking == 3) {
		document.getElementById("cellText").innerHTML = "Covid is hurting my other cell friends!";
	}
	else if (talking == 4) {
		document.getElementById("cellText").innerHTML = "Covid is very bad and I need your help to fight it!";
	}
	else if (talking == 5) {
		document.getElementById("cellText").innerHTML = "Hurry! Click Begin! and stop him!";
		document.getElementById("nextButton").style.display = "none";
	}
}