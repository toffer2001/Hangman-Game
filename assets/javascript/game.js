

var wordChoices = ["TAIDEN", "KRIS", "MCKENZIE", "DECLAN", "BABY", "KRISTOFFER", "KENZ", "TAIDSTER", "DEXTER", "SOLANA"];
var userGuesses = [];
var placeholder = [];

var userGuessesCounter = 0;
var guessesRemainingCounter = 10;
var wins = 0;

document.getElementById("lettersGuessed").innerHTML = userGuesses;
document.getElementById("lines").innerHTML = "";
document.getElementById("remainingGuesses").innerHTML = guessesRemainingCounter;
document.getElementById("wins").innerHTML = wins;



// After the user pushes the start button
function startGame() {

	var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)]; 
	var n = randomWord.length;
	var answer = [randomWord];

	// split word to array
	var answerCharArray =  randomWord.split("");
	

	// displays word/answer
	// document.getElementById("word").innerHTML = randomWord;



    console.log("The answer is: " + randomWord);
    console.log("This is the # of letters in the word: " + n);
    console.log("Converted word to an array: " + answerCharArray);



	for (i=0; i < n; i++) {
		placeholder[i] = "_";
	}

	x = placeholder.join("  ");
		document.getElementById("lines").innerHTML = x;
		console.log ("x: " + x);

	// Displays what letters the user has guessed so far
    document.onkeyup = function(event) {
		var letter = String.fromCharCode(event.keyCode).toUpperCase();
		userGuessesCounter++;
		pauseAudio()


		console.log("User guessed: " + letter);
		console.log("User guessed: " + userGuessesCounter + " times");
		document.getElementById("remainingGuesses").innerHTML = guessesRemainingCounter;



			for (var j=0; j < n; j++) {	
				if (answerCharArray[j] === letter) {
				 	placeholder[j] = letter;
				 	console.log(placeholder);
				 	document.getElementById("lines").innerHTML = placeholder.join(" ");
				}
			}
			var letterCharacter = letter.valueOf();
				var a = answerCharArray.indexOf(letterCharacter);
				console.log("Index of letter: " + a);

			if(a === -1) {
				userGuesses.push(letterCharacter);
				document.getElementById("lettersGuessed").innerHTML = userGuesses;
				console.log(userGuesses);
				guessesRemainingCounter--;
				document.getElementById("remainingGuesses").innerHTML = guessesRemainingCounter;
				}

			if(guessesRemainingCounter < 1) {
				document.getElementById("response").setAttribute("class", "gameOver");
				document.getElementById("response").innerHTML = "The word is: " + answer + "\n Press any key to start a new game";
			}

			if(guessesRemainingCounter < 0) {
				resetGame();
			}
				console.log("answer: " + answer);
				console.log("placeholder: " + placeholder);

			var checkCompleted = placeholder.join("");
			console.log("check: " + checkCompleted);

			if(answer == checkCompleted & guessesRemainingCounter !== 0) {
				wins++;
				resetGame();
				playAudio()

			}

			// for (var k=o; k<n; k++) {
			// 	if (placeholder[k] != "_")
			// }

		document.getElementById("wins").innerHTML = wins;

		}



	
}



function resetGame() {
	userGuesses = [];
	placeholder = [];
	userGuessesCounter = 0;
	guessesRemainingCounter = 10;
	document.getElementById("lettersGuessed").innerHTML = userGuesses;
	document.getElementById("lines").innerHTML = "";
	document.getElementById("remainingGuesses").innerHTML = guessesRemainingCounter;
	document.getElementById("response").innerHTML = "--------------";
	document.getElementById("response").setAttribute("class", "reset");
	startGame ();
}




var audio = document.getElementById("myAudio"); 

function playAudio() { 
    audio.play(); 
} 

function pauseAudio() { 
    audio.pause(); 
} 








	// extra code as placeholder


//     function myFunction()

//     for (i=0; i < wordChoices.length; i++) {
//         document.write("Guess: " + randomWord + "<br>");
//     }

//     function myFunction(p1, p2) {
//     return p1 * p2;
// }
