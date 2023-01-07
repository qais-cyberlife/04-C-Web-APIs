var quiz = document.querySelector(".quiz");
var highscores = document.querySelector(".highscores");
var timer = document.querySelector(".timer");

var title = document.querySelector(".main-title");
var description = document.querySelector(".quiz-description");
var startButton = document.querySelector(".start-button");

var choices = document.querySelector(".choices");
var question = document.querySelector(".question")

var firstChoice = document.createElement("button");
var secondChoice = document.createElement("button");
var thirdChoice = document.createElement("button");
var fourthChoice = document.createElement("button");

var x = 0;

var questions = [
    { id: 1, label: 'Commonly used data types DO NOT include: ' },
    { id: 2, label: 'The condition in an if / else statement is encloded within ___.' },
    { id: 3, label: 'Arrays in JavaScript can be used to store ___.' },
    { id: 4, label: 'String values must be enclosed within  ___ when being assigned variables.' },
    { id: 5, label: 'A very useful too used during development and debugging for pringing content to the debugger is:' }, 
    {id:6, label: ' '}
];

const allChoices = new Array(

    [
        { id: 1, label: '1. Strings', correct: false  },
        { id: 2, label: '2. Booleans', correct: false },
        { id: 3, label: '3. Alerts', correct: true },
        { id: 4, label: '4. Numbers', correct: false },
    ],

    [
        { id: 1, label: '1. Quotes',correct: false },
        { id: 2, label: '2. Curly Brackets', correct: false },
        { id: 3, label: '3. Parantheses', correct: true },
        { id: 4, label: '4. Square Brackets', correct: false },
    ],


    [
        { id: 1, label: '1. Numbers and Strings', correct: false },
        { id: 2, label: '2. Other Arrays', correct: false },
        { id: 3, label: '3. Booleans', correct: false },
        { id: 4, label: '4. All of the Above', correct: true },
    ],


    [
        { id: 1, label: '1. Commas', correct: false },
        { id: 2, label: '2. Curly Bracket', correct: false },
        { id: 3, label: '3. Quotes', correct: true },
        { id: 4, label: '4. Parentheses', correct: false },
    ],

    [
        { id: 1, label: '1. JavaScript', correct: false },
        { id: 2, label: '2. Terminal/ Bash', correct: false },
        { id: 3, label: '3. For Loops', correct: false },
        { id: 4, label: '4. console.log', correct: true },
    ]
)

var secondsLeft = 60;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      
      timer.textContent = "Time: " + secondsLeft;
      secondsLeft--;
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }

function firstQuestion() {
    if (x == 0) {
        title.remove();
        description.remove();
        startButton.remove();  
    }
   
    question.textContent = questions[x].label
    for (let i = 0; i < allChoices[x].length; i++) {
        const button = document.createElement('button');
        const li = document.createElement('li');
        button.innerHTML = allChoices[x][i].label;
        button.setAttribute('id', `${allChoices[x][i].correct}`);
        choices.appendChild(li);
        li.appendChild(button)
    }

    choices.addEventListener('click', function nextQuestion(event) {
    var isCorrect = event.target.id;
    console.log(isCorrect);

    if (isCorrect == "false") {
        secondsLeft = secondsLeft - 10
    }
    choices.innerHTML = "";
    x++
    firstQuestion();
});
}

startButton.addEventListener('click', firstQuestion);
startButton.addEventListener('click', setTime);