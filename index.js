var readlineSync = require("readline-sync");

var score = 0;

var scores = [
  {
    name: "Prakash",
    score: 4,
  },

  {
    name: "Shivam",
    score: 3,
  },
]

var questions = [{
  question: "Where do I live? ",
  answer: "Bangalore"
}, {
  question: "What's my name? ",
  answer: "Prakash"
},
{
  question: "What is my favourite food?",
  answer: "Pizza"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Prakash?");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  scores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


