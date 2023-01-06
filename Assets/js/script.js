
var quiz = document.querySelector(".quiz");
var highscores = document.querySelector(".highscores");
var timer = document.querySelector(".timer");

var title = document.querySelector(".main-title");
var description = document.querySelector(".quiz-description");
var startButton = document.querySelector(".start-button");

var choices = document.querySelector(".choices");
var firstChoice = document.createElement("button");
var secondChoice = document.createElement("button");
var thirdChoice = document.createElement("button");
var fourthChoice = document.createElement("button");

var questions = [
    { id: 1, label: 'Commonly used data types DO NOT include: ' },  
    { id: 2, label: 'The condition in an if / else statement is encloded within ___.' },  
    { id: 3, label: 'Arrays in JavaScript can be used to store ___.' },  
    { id: 4, label: 'String values must be enclosed within  ___ when being assigned variables.' },
    { id: 5, label: 'A very useful too used during development and debugging for pringing content to the debugger is:'} 
];

const buttonList = [  
    { id: 1, label: '1. Strings' },  
    { id: 2, label: '2. Booleans' },  
    { id: 3, label: '3. Alerts' },  
    { id: 4, label: '4. Numbers' }, 
];

const choices1 = [  
    { id: 1, label: '1. Quotes' },  
    { id: 2, label: '2. Curly Brackets' },  
    { id: 3, label: '3. Parantheses' },  
    { id: 4, label: '4. Square Brackets' }, 
];


const choices2 = [  
    { id: 1, label: '1. Numbers and Strings' },  
    { id: 2, label: '2. Other Arrays' },  
    { id: 3, label: '3. Booleans' },  
    { id: 4, label: '4. All of the Above' }, 
];


const choices3 = [  
    { id: 1, label: '1. Commas' },  
    { id: 2, label: '2. Curly Bracket' },  
    { id: 3, label: '3. Quotes' },  
    { id: 4, label: '4. Parentheses' }, 
];


const choices4 = [  
    { id: 1, label: 'Button 1' },  
    { id: 2, label: 'Button 2' },  
    { id: 3, label: 'Button 3' },  
    { id: 4, label: 'Button 4' }, 
];


const choices5 = [  
    { id: 1, label: '1. JavaScript' },  
    { id: 2, label: '2. Terminal/ Bash' },  
    { id: 3, label: '3. For Loops' },  
    { id: 4, label: '4. console.log' }, 
];


title.remove();
description.remove();
startButton.remove();


const buttonContainer = document.querySelector('.choices');

for (let i = 0; i < buttonList.length; i++) {
  const button = document.createElement('button');
  const li = document.createElement('li'); 
  
  button.innerHTML = buttonList[i].label;
  button.setAttribute('id', `button-${buttonList[i].id}`);
  choices.appendChild(li);
  li.appendChild(button)
}
