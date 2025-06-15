const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
      answer: "Delhi"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: ["Colorful Style Sheet", "Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet"],
      answer: "Cascading Style Sheet"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let username = "";
  
  function goToLogin() {
    showPage("login-page");
  }
  
  function startQuiz() {
    const nameInput = document.getElementById("username");
    if (nameInput.value.trim() === "") {
      alert("Please enter your name!");
      return;
    }
    username = nameInput.value.trim();
    document.getElementById("greeting").innerText = `Hello, ${username}!`;
    showPage("quiz-page");
    loadQuestion();
  }
  
  function showPage(id) {
    document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }
  
  function loadQuestion() {
    const current = questions[currentQuestionIndex];
    document.getElementById("question").textContent = current.question;
  
    const optionsEl = document.getElementById("options");
    optionsEl.innerHTML = "";
  
    current.options.forEach(option => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => selectAnswer(option);
      li.appendChild(button);
      optionsEl.appendChild(li);
    });
  }
  
  function selectAnswer(selected) {
    const correct = questions[currentQuestionIndex].answer;
    if (selected === correct) score++;
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    showPage("result-page");
    document.getElementById("final-score").innerHTML = `<p>${username}, you scored <strong>${score}</strong> out of <strong>${questions.length}</strong>.</p>`;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    username = "";
    document.getElementById("username").value = "";
    showPage("welcome-page");
  }
  