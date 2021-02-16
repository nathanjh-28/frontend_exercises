const quizData = [
    {
        question: "How many different flags have flown over Texas?",
        a: "5",
        b: "3",
        c: "4",
        d: "6",
        correct: "d",
    }, {
        question: "Can Texas legally fly the state flag at the same height as the United States?",
        a: "Yes",
        b: "No",
        c: "It depends",
        d: "N/A",
        correct: "a",
    }, {
        question: "Who is considered by many to be the father of Texas Education?",
        a: "Sam Houston",
        b: "Moses Austin",
        c: "Stephen F Austin",
        d: "Mirabeau B Lamar",
        correct: "d",
    }, {
        question: "Which lake in Texas is the only natural lake, rather than man made?",
        a: "Lake Travis",
        b: "Lake Texoma",
        c: "Lady Bird Lake",
        d: "Caddo Lake",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
        loadQuiz()
    }
    else {
        quiz.innerHTML = `
        <br>
        <h2> You answered correctly at ${score} / ${quizData.length} questions. </h2>
        <br>
        <button onclick="location.reload()">Reload</button>
        `
    }
})