const quizData = [
    { question: "What is HTML?", answers: { a: "Programming Language", b: "Markup Language", c: "Database" }, correct: "b" },
    { question: "CSS stands for?", answers: { a: "Cascading Style Sheets", b: "Computer Style System", c: "Creative Styling Syntax" }, correct: "a" }
];

function buildQuiz() {
    const output = [];
    quizData.forEach((q, i) => {
        const answers = [];
        for (let letter in q.answers) {
            answers.push(`<label><input type="radio" name="question${i}" value="${letter}"> ${letter}: ${q.answers[letter]}</label>`);
        }
        output.push(`<div class="question">${q.question}</div><div class="answers">${answers.join("")}</div>`);
    });
    document.getElementById("quiz").innerHTML = output.join("");
}

function showResults() {
    const answerContainers = document.querySelectorAll(".answers");
    let score = 0;
    quizData.forEach((q, i) => {
        const selected = (answerContainers[i].querySelector(`input[name=question${i}]:checked`) || {}).value;
        if (selected === q.correct) score++;
    });
    document.getElementById("results").innerText = `You scored ${score} out of ${quizData.length}`;
}

document.getElementById("submit").addEventListener("click", showResults);
buildQuiz();
