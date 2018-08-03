$(document).ready(function() {

	//Declear variable - Global Variables
	var numberGuess;
	var yourScore = 0;
	var wins = 0;
	var losses = 0;
	var crystal1Num;
	var crystal2Num;
	var crystal3Num;
	var crystal4Num;
	var crystalvalue;
	newGame(); //start of game function. 
	
	//function to generate random numbers of crystals and number to guess
	function randomNumbers() {
		numberGuess = Math.floor(Math.random() * 101) + 19;
		crystal1Num = Math.ceil(Math.random() * 12) + 1;
		crystal2Num = Math.ceil(Math.random() * 12) + 1;
		crystal3Num = Math.ceil(Math.random() * 12) + 1;
		crystal4Num = Math.ceil(Math.random() * 12) + 1;
	}

	//function to start.  Gets randomize number to guess and crystal values
	function newGame() {
		yourScore = 0;

		randomNumbers();
		$("#numberGuess").text(numberGuess);
		$("#yourScore").text(yourScore);
		$("#crystal1").attr("crystalvalue", crystal1Num);
		$("#crystal2").attr("crystalvalue", crystal2Num);
		$("#crystal3").attr("crystalvalue", crystal3Num);
		$("#crystal4").attr("crystalvalue", crystal4Num);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");
	}


	//function to display if Lose
	function youLose() {
		$("#winOrLose").text("* * * YOU LOSE * * *");
		losses++;
		$("#losses").text(losses);
		return;
	}


	//function to display if Win
	function youWin() {
		$("#winOrLose").text("* * * YOU WIN * * *");
		wins++;
		$("#wins").text(wins);
		return;
	}


	// Function to add the crystal values together
	$(".crystalimage").on("click", function() {
		if (yourScore >= numberGuess) {
			return;
		}

		var crystalValue = $(this).attr("crystalvalue");

		crystalValue = parseInt(crystalValue);
		//  console.log("crystalValue" +crystalValue);  value of each crystal
		yourScore += crystalValue;
		
		//  console.log("yourscore" +yourScore);   sum value of each crystal pressed
		$("#yourScore").text(yourScore);

		if (yourScore === numberGuess) {
			youWin();
		} else if (yourScore > numberGuess) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});