// script.js
const questions = [
    {
        question: "Who was the first prophet to prophesy the birth of Jesus?",
        options: ["Elisha", "Isaiah", "Elijah", "Nehemiah"],
        answer: "Isaiah"
    },
    {
        question: "Who is the Father of James and John?",
        options: ["Zebedee", "Lazarus", "Kenan", " Joram"],
        answer: "Zebedee"
    },
    {
        question: "How many days did the creation take?",
        options: ["7", "8", "6", "14"],
        answer: "6"
    },
    {
        question: "What is the name of the prophet who confronted King Ahab and Queen Jezebel, and was taken up to heaven in a whirlwind?",
        options: ["Moses", "Elisha", "Enoch", "Elijah"],
        answer: "Elijah"
    },
    {
        question: "in What book is the shortest verse found?",
        options: ["Psalm", "john", "Ezra", "3 John"],
        answer: "john"
    }
];


function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `
            <h2>Question ${index + 1}</h2>
            <p>${q.question}</p>
            ${q.options.map((option, i) => `
                <label class="quiz">
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
}

function getResults() {
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    const resultElement = document.getElementById('result');
    resultElement.textContent = `You got ${score} out of ${questions.length} correct!`;
}

document.getElementById('submit').addEventListener('click', getResults);

document.addEventListener('DOMContentLoaded', loadQuiz);
