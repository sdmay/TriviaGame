// Questions Array
var quiz = [
	{
		"question": "What is the name of the camp where Friday the 13th takes place in the first installment of the series?",
		"choices": [
			"Camp Candy",
			"Camp Nowhere",
			"Camp Crystal",
			"Camp Scary"
		],
		"correct": "Camp Crystal"
	}
];
var questions = [
	"What is the name of the camp where Friday the 13th takes place in the first installment of the series?",
	"What street does Freddy Krueger terrorize?",
	"What is the name of the main character in Halloween?",
	"What type of doll is Chucky?",
	"What Friends actress starred in the original Leprauchan movie?",
	"In what movie does Jason Voorhies get his infmous hockey mask?",
	"Who is the real killer in the original Friday the 13th?",
	"What is the name of the clown in Stephen King's it?",

];

var randomAnswer = [
	"Jason",
	"Freddy",
	"Jane Fonda",
	"Camp Longhorn",
	"Bad Guy Doll",
	"Bozo",
	"Nightmare Street",
	"Candy Corn",
	"Boo",
	"Michelle Myers"
]
// Answers Array
var answer = [
	"Camp Crystal",
	"Elm Street",
	"Michael Myers",
	"Good Guy Doll",
	"Jennifer Anniston",
	"Fourth movie",
	"Mrs. Voorhies",
	"Pennywise",

];

var answer2 = [
	"Sharon Stone",
	"Babadook",
	"The Shining",
	"Brad Pitt",
	"Vampire",
	"Piggy",
	"Blood",
	"Silver Bullet"
]

var item = randomAnswer[Math.floor(Math.random() * randomAnswer.length - 1)];

var item2 = randomAnswer[Math.floor(Math.random() * randomAnswer.length)];


var userAnswer = [];

var counter = -1;

var score = 0;


$("#start").on("click", function start() {
	$(".score").empty();
	$(".trivia").empty();
	$(".answer").empty();
	showQuestion = setInterval(nextQuestion, 3000);
});

function nextQuestion() {
	counter++;
	setTimeout(displayQuestion, 1000)
}

function displayQuestion() {
	$('.trivia').html(questions[counter]);
	$('.answer').html("<span id ='two'>" + randomAnswer[counter] + "</span>" + " | " + "<span id ='one'>" + answer[counter] + "</span>" + " | " + "<span id ='three'>" + answer2[counter] + "</span>");
	$("#one").click(function () {
		score++
		$(this).css("color", "#5fba7d");
	});
	$("#two").click(function () {
		$(this).css("color", "#5fba7d");
	});
	$("#three").click(function () {
		$(this).css("color", "#5fba7d");
	});
	if (counter === questions.length) {
		$(".trivia").empty();
		$(".answer").empty();
		$(".score").html("You got " + score + " correct, out of " + questions.length)
		$(".trivia").html(userAnswer)
		$(".answer").html(answer.join(" - "))
		stopQuestion();
		// console.log("worj")
	}
}

function stopQuestion() {
	clearInterval(showQuestion);
	counter = -1;
	score = 0;
}
