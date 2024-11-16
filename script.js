document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Who is the current Prime Minister of the United Kingdom?",
            choices: ["Boris Johnson", "David Cameron", "Rishi Sunak", "George Osborne"],
            answer: "Rishi Sunak"
        },
        {
            question: "What is the name of the first woman to climb Mount Everest?",
            choices: ["Junko Tabei", "Kangaroo", "Tenzing Norgay", "Mary Anne"],
            answer: "Junko Tabei"
        },
        {
            question: "What is the name of the first man to walk on the moon?",
            choices: ["Neil Armstrong", "Jerry Springer", "NASA", "Larry Page"],
            answer: "Neil Armstrong"
        },
        {
            question: "What is the name of the first president of Nigeria?",
            choices: ["Tinubu", "Jonathan", "Olusegun Obasanjo", "Nnamdi Azikwe"],
            answer: "Nnamdi Azikwe"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

   

  startBtn.addEventListener("click", startQuiz)
  nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex === questions.length - 1) {
      showResult();
    } else {
      currentQuestionIndex++;
      showQuestion();
    }
  });

 restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz(){
    startBtn.classList.add("hidden")
    resultContainer.classList.add("hidden")
    questionContainer.classList.remove("hidden")
    showQuestion()

  }
  function showQuestion(){
    nextBtn.classList.add("hidden")
    questionText.textContent = questions[currentQuestionIndex].question

    choicesList.innerText = "" // clear previous choice
    questions[currentQuestionIndex].choices.forEach(choice =>{
        const li = document.createElement("li")
        li.textContent = choice
        li.addEventListener("click", ()=> selectAnswer(choice));
        choicesList.appendChild(li);
    })

  }

  function selectAnswer(choice){
    
    const correctAnswer = questions[currentQuestionIndex].answer
    if(choice === correctAnswer){
        score++
    }
    nextBtn.classList.remove("hidden")
  }

 function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `Your score is: ${score} out of ${questions.length}`;
  }
});
   

