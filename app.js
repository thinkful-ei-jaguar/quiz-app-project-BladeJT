/* eslint-disable no-undef */
'use strict';
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: "Jaguars' spots resemble:",
      answers: [
        'Roses',
        'Smiley Faces',
        'Javascript Code',
        'Tulips'
      ],
      correctAnswer: 'Roses'
    },
    {
      question: 'The bite of a jaguar is strong enough to:',
      answers: [
        "Crack a sea turtle's shell",
        'Prepare your crab for dinner',
        'Bite through a piece of paper',
        'Puncture solid steel'
      ],
      correctAnswer: "Crack a sea turtle's shell"
    },
    {
      question: 'Do jaguars live alone, in small groups, or in big ones?',
      answers: [
        'alone',
        'Small groups',
        'Big ole groups',
        'All of the above'
      ],
      correctAnswer: 'alone'
    },
    {
      question: 'What scary ability do jaguars have?',
      answers: [
        'Able to climb trees',
        'Able to breathe underwater',
        'Able to write quiz apps',
        'Able to operate heavy machinery'
      ],
      correctAnswer: 'Able to climb trees'
    },
    {
      question: 'What do jaguars eat?',
      answers: [
        'Organic Lettuce',
        'Other jaguars',
        'Only turtles',
        'Basically anything that moves (maybe including you)'
      ],
      correctAnswer: 'Basically anything that moves (maybe including you)'
    },
  ],
  questionNumber: 0,
  score: 0
};

// Our basic render function.  Ultimately generates our html.
// Interacts with the STORE object on all but the start page.

function render() {
  console.log('`render function` ran');
  const htmlString = '<p>Test html input</p>';
  $('main').html(htmlString);
}

//just added
// startQuiz -to start submit begin quiz
function startQuiz(){
  console.log('`startQuiz function` ran');
}

//disable other answers when submit answer

//submit - submit answer button - will tell you correct answer and give fact to support
function submitAnswer(){
  console.log('`submitAnswer function` ran');
}

function showCorrectAnswer(){
  console.log('`showCorrectAnswer function` ran');
}
function nextQuestion(){
  console.log('`nextQuestion function` ran');    
}
//keep track of score
function keepScore(){
  console.log('`keepScore function` ran');
}
//submit next question button takes you to next question or final results page

// shows results gives opportunity to take quiz again
function showResults(){
  console.log('`showResults function` ran');
}
//retake quiz will take you back to start page.
function retakeQuiz(){
  console.log('`retakeQuiz function` ran');
}


//The big function that calls the others
function handleQuizApp() {
  
  render();
  startQuiz();
  submitAnswer();
  nextQuestion();
  retakeQuiz();
}

$(handleQuizApp);


/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */