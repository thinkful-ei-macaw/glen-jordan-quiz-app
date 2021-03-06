/* eslint-disable no-undef */
/* eslint-disable strict */
/**
 * Example store structure
 */

const store = {
  // 5 or more questions are required
  questions: [{
      question: "What does wubba lubba dub dub mean?",
      answers: ['Please leave', 'I\'m a genius', 'Let\'s Party', 'I\'m in great pain'],
      correctAnswer: 'I\'m in great pain'
    },
    {
      question: ' Name the song Rick uses to save the earth',
      answers: ['Rock Hortz', 'Get Schwifty', 'Do the Bingortz', 'Stop, Drop, and Slitz'],
      correctAnswer: 'Get Schwifty'
    },
    {
      question: 'Which implement does Rick use to travel between dimensions?',
      answers: ['Rift Ray', 'Jump Laser', 'Interdimensional Ray', 'Portal Gun'],
      correctAnswer: 'Portal Gun'
    },
    {
      question: 'Morty does accidentally have a child who is half alien. What species is his non-human half?',
      answers: ['Smarkian', 'Cromulan', 'Gazorpazorp', 'Gromflomite'],
      correctAnswer: 'Gazorpazorp'
    },
    {
      question: 'What is Scary Terry\'s catchphrase?',
      answers: ['I\'m your worst nightmare!', 'Welcome to your nightmare, bitch!', 'This is your nightmare!', 'You can run, but you\'ll still die!'],
      correctAnswer: 'Welcome to your nightmare, bitch!'
    }
  ],
  questionNumber: 0,
  score: 0,
  wrong: 0,
  quizStart: false
};

function clickMe() {
  $('#js-start-btn').click(function () {
    $(location).attr('href', renderQuestion);
  });
}

function getCurrentQuestion() {
  const questionArr = store.questions;
  console.log(questionArr);
  let currentQuestion = questionArr[store.questionNumber];
  console.log(currentQuestion);
  return currentQuestion;
}

function generateQuestion(question) {
  return `<section>${question.question}</section>
      <form>  
        ${question.answers
          .map((e, index) => {
            return `<input id="answer${index}" name="questionDisplay" type="radio" value="${e}">
            <label for="answer${index}">${e}</label>`;
          })
          .join('')}
          <button type="submit" id="submit-button">Submit</button>
          <button type="button" id="next-question">Next</button>
      </form>`
}

function renderQuestion() {
  let currentQuestion = getCurrentQuestion();
  let html = generateQuestion(currentQuestion);
  $('main').html(html);
  
}

function registerListeners(){
  $('main').on('submit', 'form', function (e) {
    e.preventDefault();
    let currentQuestion = getCurrentQuestion();
    let userAnswer = $('input:checked').val()
    console.log(currentQuestion.correctAnswer, userAnswer)
    if (userAnswer === currentQuestion.correctAnswer) {
      store.score += 1;
      $('main').append('correct')
    } else {
      store.wrong += 1;
      $('main').append('incorrect')
    }
    store.questionNumber += 1;
    $('#submit-button').hide()
    $('#next-question').show()
    console.log(`correct answer ${store.score}`);
    console.log(`wrong answer ${store.wrong}`);

  });

  $('main').on("click", "#next-question", function(e) {
    e.preventDefault();
    renderQuestion();
  })
  
}



function renderFirstPage() {
  $('main').html(`
  
  <header id="rick-intro">
  
  <h1>THE RICK AND MORTY QUIZ</h1>
  
  </header>

<div id="intro-page">

<img class="circle" src=https://media0.giphy.com/media/OFbrZqxNMu7Ic/giphy.webp?cid=790b7611ebb9f60c4e01f9c285354c380cf85dadcbefabed&rid=giphy.webp />

</div>

<div id="intro-info">
<h3>
It's time to do some Rick and Morty trivia and only the Rickest of Ricks will be able to pass.
</h3>
</div>

<div id="schwift">

<button id="js-start-btn">GET SCHWIFTY</button>

</div>

`);
}

$(registerListeners);
$(renderFirstPage);
$(clickMe);

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