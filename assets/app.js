// Questions Array

var questions  = [
     "What is the name of the camp where Friday the 13th takes place in the first installment of the series?",
     , 
     "What street does Freddy Krueger terrorize?",
     "What is the name of the main character in Halloween?",
     "What type of doll is Chucky?",
     "What Friends actress starred in the original Leprauchan movie?",
     "In what movie does Jason Voorhies get his infmous hockey mask?",
     "Who is the real killer in the original Friday the 13th?",
     "What is the name of the clown in Stephen King's it?",

     ]



var counter = 0;

$("#start").click(Start);

// setTimeout function to rotate through array



// generate buttons to select correct answer


// create slideshow to show if correct or incorrect using an if/else statement
	function displayQuestion (){
 	 $('.trivia').html(questions[counter]);
}
	function nextQuestion(){
		counter++;
		setTimeout(displayQuestion, 500)
		if(counter === questions.length){
			counter = 0;
		}

	}

	function Start(){
		showQuestion = setInterval(nextQuestion, 2000);

	}

	function stopQuestion (){
		if(counter === questions.length){
			counter = 0;}
		clearInterval(showQuestion);
	}

// Log correct and incorrect answers to display at end of game

