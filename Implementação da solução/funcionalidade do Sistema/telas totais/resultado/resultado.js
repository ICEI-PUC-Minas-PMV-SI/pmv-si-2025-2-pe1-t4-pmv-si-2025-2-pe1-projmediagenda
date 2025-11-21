// pega valores do localStorage
const respostas = JSON.parse(localStorage.getItem("quizAnswers")) || [0, 0, 0];

// calcula média
const media = (respostas.reduce((a, b) => a + b, 0) / 3).toFixed(1);

// mostra no html
document.getElementById("media").textContent = media;

// função de animação do ponteiro
function setSpeed(valor) {
  const ponteiro = document.getElementById("pointer");
  const texto = document.getElementById("speed-value");

  const angIni = -140; // esquerda total
  const angFim = 40;   // direita total

  const novoAngulo = angIni + (valor / 10) * (angFim - angIni);

  ponteiro.style.transform = `rotate(${novoAngulo}deg)`;
  texto.textContent = valor.toFixed(1);
}

// anima usando a média
setTimeout(() => { setSpeed(parseFloat(media)); }, 300);
