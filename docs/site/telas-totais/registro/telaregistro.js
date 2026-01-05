// Carrega as atividades salvas no localStorage e mostra na tela
function carregarAtividades() {
  const lista = document.getElementById("listaRegistros");
  if (!lista) return;

  lista.innerHTML = "";

  let atividades = JSON.parse(localStorage.getItem("atividades")) || [];

  // Ordenar por data e horário
  atividades = atividades.sort((a, b) => {
    const d1 = a.data || "";
    const d2 = b.data || "";
    if (d1 !== d2) return d1.localeCompare(d2);
    return (a.horario || "").localeCompare(b.horario || "");
  });

  atividades.forEach((atividade, index) => {
    const item = document.createElement("div");
    item.classList.add("registro-item");
    item.style.borderColor = atividade.cor || "#000";

    // Conteúdo da atividade
    const conteudo = document.createElement("div");
    conteudo.classList.add("registro-conteudo");
    conteudo.innerHTML = `
      <h3>${atividade.titulo}</h3>
      <p>${atividade.descricao || ""}</p>
      <p><strong>Data:</strong> ${atividade.data || "--/--/----"}</p>
      <p><strong>Horário:</strong> ${atividade.horario || "--:--"}</p>
    `;

    // Área de ações (botão concluir)
    const acoes = document.createElement("div");
    acoes.classList.add("registro-acoes");

    const btnConcluir = document.createElement("button");
    btnConcluir.textContent = "Concluir";
    btnConcluir.classList.add("btn-concluir");
    btnConcluir.addEventListener("click", () => concluirAtividade(index));

    acoes.appendChild(btnConcluir);

    item.appendChild(conteudo);
    item.appendChild(acoes);
    lista.appendChild(item);
  });
}

// Marca uma atividade como concluída (e REMOVE do localStorage)
function concluirAtividade(index) {
  const atividades = JSON.parse(localStorage.getItem("atividades")) || [];
  if (!atividades[index]) return;

  // remove a atividade do array
  atividades.splice(index, 1);

  // salva de volta sem essa atividade
  localStorage.setItem("atividades", JSON.stringify(atividades));

  // atualiza a lista na tela
  carregarAtividades();
}

// Salva uma nova atividade no localStorage
function salvarAtividade(event) {
  event.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const horario = document.getElementById("horario").value;
  const data = document.getElementById("data").value;  // CAMPO NOVO
  const cor = document.getElementById("cor").value;

  if (!titulo) {
    alert("O título da atividade é obrigatório!");
    return;
  }

  const atividades = JSON.parse(localStorage.getItem("atividades")) || [];

  const novaAtividade = {
    titulo,
    descricao,
    horario,
    data,       // SALVAR DATA
    cor
  };

  atividades.push(novaAtividade);
  localStorage.setItem("atividades", JSON.stringify(atividades));

  document.getElementById("formAtividade").reset();
  carregarAtividades();
}

// Só roda depois que o HTML estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formAtividade");
  if (form) form.addEventListener("submit", salvarAtividade);

  carregarAtividades();

  // Router dos botões da sidebar
  document.querySelectorAll(".bnt-route").forEach((botao) => {
    botao.addEventListener("click", () => {
      const rota = botao.getAttribute("data-route");
      if (rota) window.location.href = rota;
    });
  });
});
