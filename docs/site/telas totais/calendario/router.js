// pega todos os botões do menu lateral
const botoesRota = document.querySelectorAll(".bnt-route");

botoesRota.forEach((botao) => {
  botao.addEventListener("click", () => {
    const rota = botao.dataset.route; // ex: "login/login.html"
    window.location.href = rota;      // abre NA MESMA ABA
  });
});
