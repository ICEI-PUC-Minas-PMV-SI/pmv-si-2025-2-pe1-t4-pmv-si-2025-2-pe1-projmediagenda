function carregarAtividades() {
  const lista = document.getElementById("listaRegistros");
  lista.innerHTML = ""; 

  const atividades = JSON.parse(localStorage.getItem("atividades")) || [];

  atividades.forEach((atividade, index) => {
    const item = document.createElement("div");
    item.classList.add("registro-item");
    item.style.borderColor = atividade.cor;

    item.innerHTML = `
      <h3>${atividade.titulo}</h3>
      <p>${atividade.descricao}</p>
      <p><strong>Horário:</strong> ${atividade.horario}</p>
    `;

    lista.appendChild(item);
  });
}

// Função para salvar atividade
function salvarAtividade(event) {
  event.preventDefault(); 

  const titulo = document.getElementById("titulo").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const horario = document.getElementById("horario").value;
  const cor = document.getElementById("cor").value;

  if (!titulo) {
    alert("O título da atividade é obrigatório!");
    return;
  }

  const atividades = JSON.parse(localStorage.getItem("atividades")) || [];

  const novaAtividade = { titulo, descricao, horario, cor };
  atividades.push(novaAtividade);

  localStorage.setItem("atividades", JSON.stringify(atividades));

  document.getElementById("formAtividade").reset(); 

  carregarAtividades(); 
}


document.getElementById("formAtividade").addEventListener("submit", salvarAtividade);

// Carrega atividades ao abrir a página
window.addEventListener("DOMContentLoaded", carregarAtividades);

//Router dos botões da sidebar 
document.querySelectorAll(".bnt-route").forEach(botao => {
  botao.addEventListener("click", () => {
    const rota = botao.getAttribute("data-route");
    window.location.href = rota;
  });
});
