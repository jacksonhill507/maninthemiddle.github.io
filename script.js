const quizData = [
  {
      question: "Which of the following is a temporary or volatile memory?",
      a: "CD-ROM",
      b: "HDD",
      c: "RAM",
      d: "SSD",
      correct: "c",
  },
  {
      question: "Which of the following is an input device?",
      a: "Printer",
      b: "CPU",
      c: "Keyboard",
      d: "ROM",
      correct: "c",
  },
    {
      question: "What does SSD stand for?",
      a: "Secure State Drive",
      b: "Solid State Drive",
      c: "Solid Safe Drive",
      d: "Secure Safe Drive",
      correct: "b",
    },
  {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
  },
  {
    question: "Which of the following language does the computer understand?",
    a: "Computer understands only C Language",
    b: "Computer understands only Assembly Language",
    c: "Computer understands only Binary Language",
    d: "Computer understands only BASIC",
    correct: "c",
  },
  {
      question: "Which of the following is referred to as the brain of a computer?",
      a: "RAM",
      b: "HDD",
      c: "SSD",
      d: "CPU",
      correct: "d",
  },
  {
      question: "Which of the following is the smallest unit of data in a computer?",
      a: "Bit",
      b: "KB",
      c: "Nibble",
      d: "Byte",
      correct: "a",
  },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}


submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }

     currentQuiz++

     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>

         <button onclick="location.reload()">Reload</button>
         `
     }
  }
})