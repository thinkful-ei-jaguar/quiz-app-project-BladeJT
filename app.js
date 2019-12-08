/* eslint-disable no-undef */
'use strict';

//The store where almost every variable lives.
const STORE = {
  questions: [
    {
      question: 'Jaguars\' spots resemble:',
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
        'Crack a sea turtle\'s shell',
        'Prepare your crab for dinner',
        'Bite through a piece of paper',
        'Puncture solid steel'
      ],
      correctAnswer: 'Crack a sea turtle\'s shell'
    },
    {
      question: 'Do jaguars live alone, in small groups, or in big ones?',
      answers: [
        'Alone',
        'Small groups',
        'Cohorts of around 18 or so',
        'All of the above'
      ],
      correctAnswer: 'Alone'
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
  score: 0,
  gotItRight: true,
  answerUserChose: undefined
};

//This keeps track of what page we're on.  Maybe we should move this
//into the STORE or track it by the "score."  For now we use this
//global variable - which we know isn't always the best practice.
let currentPage = 'startPage';

// Our render function.  Calls the big boy html generation function.

function render(){  
  console.log('`render function` ran');
  const createdHtml = generateHtml(STORE);  
  $('main').html(createdHtml);
}

//This is our big boy html generation function.
//It chooses the appropriate html generation function
//depending on which event listener function was activated.

function generateHtml(toBeCreated) {
  //console.log('generateHtml function ran');  
  if (currentPage === 'startPage') {
    return startPage();
  } else if (currentPage === 'questionPage') {
    return questionPage();
  } else if (currentPage === 'resultsPage') {
    return resultsPage();
  } else if (currentPage === 'feedbackPage') { 
    return feedbackPage();
  }
}
  
//This is called to create the html for the start page.
function startPage(){
  console.log('`startQuiz function` ran');

  return `
  <body>
  <h2>Test your jaguar knowledge!</h2>

      
  <button id = 'begin-button'>Begin the quiz</button>
  
</body>`;
  
}

//This is called to create the html for the question pages.
function questionPage(){
  let questionToDisplay = STORE['questions'][STORE.questionNumber - 1].question;
  let answerIndexToDisplay = STORE['questions'][STORE.questionNumber - 1].answers;
  let scoreSoFar = STORE.score;
  let currentQuestionNumber = STORE.questionNumber;
  return `
  <body>
  <header>
          
  </header>
  <form class = 'question-section'>
    <h2 class = 'question-text'>${questionToDisplay}</h2>
  </form>
  <form class = 'radio-questions'>
    
    <!-- We'll clean this up with dynamic stuff later-->
    <label for = 'option1' class = 'answers'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option1' value ='0' checked required>
      <span class = 'choices'>${answerIndexToDisplay[0]}</span>
    </label>
    <label for = 'option2' class = 'answers'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option2' value = '1' required>
      <span class = 'choices'>${answerIndexToDisplay[1]}</span>
    </label>
    <label for = 'option3' class = 'answers'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option3' value = '2' required>
      <span class = 'choices'>${answerIndexToDisplay[2]}</span>
    </label>  
    <label for = 'option4' class = 'answers'>
      <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option4' value = '3' required>
      <span class = 'choices'>${answerIndexToDisplay[3]}</span>
    </label>
    <div class = 'score-container'>
        <p id = 'current-score'>Your score so far: ${scoreSoFar} points out of 5</span>
        <p id = 'current-question'>Question #: ${currentQuestionNumber}</span>
    </div>
    <!-- We will remove all anchors and use event listeners in the final app-->  
    <button id = 'submit-answer-button'>Submit Answer</button>
  </form>
</body>
  `;
}

//This is called to create the html for the feedback pages.
function feedbackPage(){
  console.log('feedbackPage function ran');
  let questionToDisplay = STORE['questions'][STORE.questionNumber - 1].question;
  let answerIndexToDisplay = STORE['questions'][STORE.questionNumber - 1].answers;
  let scoreSoFar = STORE.score;
  let currentQuestionNumber = STORE.questionNumber;
  return `
  <body>
  <header>
          
  </header>
  <form class = 'question-section'>
    <h2 class = 'question-text'>${questionToDisplay}</h2>
  </form>
  <form class = 'radio-answers'>
    
      <!-- We'll clean this up with dynamic stuff later-->
      <label for = 'option1' class = 'answers'>
        <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option1' value = '0' required disabled>
        <span class = 'choices'>${answerIndexToDisplay[0]}</span>
      </label>
  
      <label for = 'option2' class = 'answers'>
        <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option2' value = '1' required disabled>
        <span class = 'choices'>${answerIndexToDisplay[1]}</span>
      </label>
  
      <label for = 'option3' class = 'answers'>
        <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option3' value = '2' required disabled>
        <span class = 'choices'>${answerIndexToDisplay[2]}</span>
      </label>  
  
      <label for = 'option4' class = 'answers'>
        <input class = 'radio-button' type = 'radio' name = 'answer' id = 'option4' value = '3' required disabled>
        <span class = 'choices'>${answerIndexToDisplay[3]}</span>
      </label>
      ${didTheyGetItRight()}
  
      <div class = 'score-container'>
          <p id = 'current-score'>Your score so far: ${scoreSoFar} points out of 5</span>
          <p id = 'current-question'>Question #: ${currentQuestionNumber}</span>
      </div>
      
      <button id = 'next-question-button'>Next question</button>
    </form>
</body>
  `;
}

//Calls the store to see if they got it right on the question page, 
//so that we can render the right html for the feedbackPage
function didTheyGetItRight() {
  let answer = STORE['questions'][STORE.questionNumber - 1].correctAnswer;
  if (STORE.gotItRight === true) {
    return `
    <label for = 'correct-answer' class = 'correct-answer'>
    <span class = 'correct-answer-text'>Congratulations! You chose the correct answer of "${answer}."</span>
  </label>`;
  }
  else {
    return `
     <label for = 'correct-answer' class = 'correct-answer'>
    <span class = 'correct-answer-text'>Sorry, you chose "${STORE.answerUserChose}" but the correct answer was: "${answer}."</span>
  </label>
  `;
  }
}


//This is called to create the html for the results page.
function resultsPage(){
  let finalScore = STORE.score;
  return `
  <body>
  <h2>The results are in...</h2>
  <div class = 'score-container'>
      <span id = 'current-score'>Your final score was ${finalScore} out of 5.</span>
  </div>
    
    <button id = 'restart-button'>Restart quiz?</button>     
 
</body>
  `;
}

//This listens to the start page for clicks to start the quiz.
function startPageHandler() {
  $('main').on('click', '#begin-button', function() {
    event.preventDefault();
    console.log('begin button clicked');
    currentPage = 'questionPage';
    STORE.questionNumber = 1;
    console.log(STORE.questionNumber);
    render();
  });
  
  
  console.log('`startPageHandler function` ran');
}

//This listens to the question page for clicks to submit an answer.
function questionPageHandler(){
  console.log('`questionPageHandler function` ran');
  
  $('main').on('submit', 'form.radio-questions', function(event) {
    event.preventDefault();
    console.log('submit answer button clicked');

    let radioValue = parseInt(document.querySelector('input[name="answer"]:checked').value);
    console.log(`The radioValue is: ${radioValue}.`);
      

    let answerUserChose = STORE['questions'][STORE.questionNumber-1].answers[radioValue];
    console.log(`The answer the user chose is: ${answerUserChose}`);
    STORE.answerUserChose = answerUserChose;


    let currentCorrectAnswer = STORE['questions'][STORE.questionNumber-1].correctAnswer;
    console.log(`The current correct answer is: ${currentCorrectAnswer}`);

    if (answerUserChose === currentCorrectAnswer) {
      console.log('checked correct answer');
      STORE.score += 1;
      STORE.gotItRight = true;
    } else {
      STORE.gotItRight = false;
    }
    currentPage = 'feedbackPage';
    console.log(`Question number is ${STORE.questionNumber}`);
    return render();
  });
}     


//This listens to the feedback page for clicks to go to the next
//question or to the end of the quiz, depending on which question
//the user is on.
function feedbackPageHandler(){
  $('main').on('submit', 'form.radio-answers', function() {
    event.preventDefault();
    console.log('next question button clicked');
    STORE.questionNumber += 1;
    if (STORE.questionNumber === 6) {
      currentPage = 'resultsPage';
      return render();
    } else {
      currentPage = 'questionPage';
      return render();
    }         
  });
}

//This listens on the results page for clicks to restart the quiz.
function resultsPageHandler() {
  $('main').on('click', '#restart-button', function() {
    console.log('restart button clicked');
    event.preventDefault();
    currentPage = 'startPage';
    STORE.questionNumber = 0;
    STORE.score = 0;
    render();
    
  });
}
   
// The big beefy grandaddy function that calls the listener functions.

function handleQuizApp() {
  
  render();
  startPageHandler();
  questionPageHandler();
  feedbackPageHandler();
  resultsPageHandler();
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