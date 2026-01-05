// Seleciona todas as perguntas
const questions = document.querySelectorAll(".question");

// Array para armazenar respostas
let answers = [null, null, null];

// Adiciona evento em todos os botões
questions.forEach((question, index) => {
  const buttons = question.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // pega o valor selecionado
      const value = parseInt(btn.dataset.value);

      // salva no array
      answers[index] = value;

      // salva no localStorage
      localStorage.setItem("quizAnswers", JSON.stringify(answers));

      // visual de seleção (destacar o escolhido)
      buttons.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });
});

// ===== BOTÃO DE ENVIAR =====
const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
  // Verifica se todas as perguntas foram respondidas
  if (answers.includes(null)) {
    alert("Por favor, responda todas as perguntas antes de enviar.");
    return;
  }

  // Redireciona para o resultado.html
  window.location.href = "../resultado/resultado.html";
});

