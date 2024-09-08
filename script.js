const questions = [
    {
        question: "What is the capital of France?",
        answers: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Jupiter", "Venus", "Saturn"],
        correctAnswer: "Mars"
    }
];

function createQuestionList() {
    const questionList = document.getElementById("question-list");
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<h3>Question ${index + 1}: ${q.question}</h3>`;
        
        const answersDiv = document.createElement("div");
        answersDiv.classList.add("answers");
        
        q.answers.forEach(answer => {
            const answerDiv = document.createElement("div");
            answerDiv.classList.add("answer");
            if (answer === q.correctAnswer) {
                answerDiv.classList.add("correct");
            }
            answerDiv.textContent = answer;
            answersDiv.appendChild(answerDiv);
        });
        
        questionDiv.appendChild(answersDiv);
        questionDiv.addEventListener("click", () => {
            answersDiv.style.display = answersDiv.style.display === "none" ? "block" : "none";
        });
        
        questionList.appendChild(questionDiv);
    });
}

document.addEventListener("DOMContentLoaded", createQuestionList);
