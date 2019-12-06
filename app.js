/* eslint-disable no-undef */
'use strict';
/**
 * Example store structure
 */
const STORE = {
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

let currentPage = 'resultsPage';

// Our basic render function.  Ultimately generates our html.
// Interacts with the STORE object on all but the start page.

/*
function render() {
  console.log('`render function` ran');
  const htmlString = '<p>Test html input</p>';
  $('main').html(htmlString);
}
*/

function render(){  
  console.log('`render function` ran');
  const createdHtml = generateHtml(STORE);  
  $('main').html(createdHtml);
}

function generateHtml(toBeCreated) {
  console.log('generateHtml function ran');

  
  if (currentPage === 'startPage') {
    return startPage();
  } else if (currentPage === 'questionPage') {
    return questionPage();
  } else if (currentPage === 'resultsPage') {
    return resultsPage();
  } else {
    return feedbackPage();
  }
}
  


function generateQuestionForm(formInput){
  console.log('generateQuestionForm function ran');  
}




//This is called to display the startpage
function startPage(){
  return `
  <body>
  <h2>Test your jaguar knowledge!</h2>

  <img src = 'data:image/jpeg;base64,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' alt = 'scary jaguar looking at you'>
  
      
    <button id = 'begin-button'>Begin the quiz</button>
  
</body>`;
  console.log('`startQuiz function` ran');
}

//disable other answers when submit answer

//submit - submit answer button - will tell you correct answer and give fact to support
function questionPage(){
  return `
  <body>
  <header>
    <h1 class = 'quiz-title'>Jaguar Facts Quiz</h1>      
  </header>

  <form class = 'question-section'>
    <h2 class = 'question-text'>Question here</span>
  </form>

  <form class = 'radio-answers'>
    
    <!-- We'll clean this up with dynamic stuff later-->
    <label for = 'option1' class = 'answers'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option1' checked required>
      <span class = 'choices'>Answer 1</span>
    </label>

    <label for = 'option2' class = 'answers'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option2' required>
      <span class = 'choices'>Answer 2</span>
    </label>

    <label for = 'option3' class = 'answers'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option3' required>
      <span class = 'choices'>Answer 3</span>
    </label>  

    <label for = 'option4' class = 'answers'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option4' required>
      <span class = 'choices'>Answer 4</span>
    </label>

    <div class = 'score-container'>
        <p id = 'current-score'>Your score so far: x/5</span>
        <p id = 'current-question'>Question #: x</span>
    </div>
    <!-- We will remove all anchors and use event listeners in the final app-->  
    <button id = 'next-question-button'>Next Question</button>
  </form>
</body>
  `;
}

function resultsPage(){
  return `
  <body>
  <h1>The results are in...</h1>
  <img src = 'data:image/jpeg;base64,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' alt = 'scary jaguar looking at you'>

  <div class = 'score-container'>
      <span id = 'current-score'>Your final score was x/5</span>
  </div>
    
    <button id = 'restart-button'>Restart quiz?</button>     
 
</body>
  `;
}

function feedbackPage(){
  return `
  <body>
  <header>
    <h1 class = 'quiz-title'>Jaguar Facts Quiz</h1>      
  </header>

  <form class = 'question-section'>
    <h2 class = 'question-text'>Question here</span>
  </form>

  <form class = 'radio-answers'>
    
      <!-- We'll clean this up with dynamic stuff later-->
      <label for = 'option1' class = 'answers'>
        <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option1' required disabled>
        <span class = 'choices'>Answer 1</span>
      </label>
  
      <label for = 'option2' class = 'answers'>
        <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option2' required disabled>
        <span class = 'choices'>Answer 2</span>
      </label>
  
      <label for = 'option3' class = 'answers'>
        <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option3' required disabled>
        <span class = 'choices'>Answer 3</span>
      </label>  
  
      <label for = 'option4' class = 'answers'>
        <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option4' required disabled>
        <span class = 'choices'>Answer 4</span>
      </label>

      <label for = 'correct-answer' class = 'correct-answer'>
        <span class = 'correct-answer-text'>That's right/Sorry, the correct answer is: (correct answer).</span>
      </label>
  
      <div class = 'score-container'>
          <p id = 'current-score'>Your score so far: x/5</span>
          <p id = 'current-question'>Question #: x</span>
      </div>
      
      
      <button id = 'submit-button'>Next question</button>
    
</body>
  `;
}
function startQuiz() {
  $('main').on('click', '#restart-button', function() {
    event.preventDefault();
    console.log('restart button clicked');
    currentPage = 'startPage';
    render();
    STORE.questionNumber = 0;
  });
}

function submitAnswer(){
  if ((STORE.questionNumber) < 6) {
    $('main').on('click', '#begin-button', function() {
      event.preventDefault();
      console.log('begin button clicked');
      currentPage = 'questionPage';
      render();
      STORE.questionNumber += 1;
    });
    //Need an else if?
    $('main').on('click', '#submit-button', function() {
      event.preventDefault();
      console.log('next question button clicked');
      currentPage = 'feedbackPage';
      render();
      STORE.questionNumber += 1;
      console.log(STORE.questionNumber);
    });
  }
  console.log('`submitAnswer function` ran');
}
  

function showCorrectAnswer(){
  console.log('`showCorrectAnswer function` ran');
}

function nextQuestion(){
  console.log('`nextQuestion function` ran');
  if ((STORE.questionNumber) < 6) {
    $('main').on('click', '#next-question-button', function() {
      event.preventDefault();
      console.log('next question button clicked');
      currentPage = 'questionPage';
      render();
    });     
  }
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


// The big function that calls the others
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