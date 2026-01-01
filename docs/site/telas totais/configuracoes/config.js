// Chave usada no localStorage para o modo noturno
const THEME_KEY = "modoNoturnoAtivo";

document.addEventListener("DOMContentLoaded", () => {
  const idiomaSelect = document.getElementById("idioma-select");
  const mensagem = document.getElementById("mensagem");
  const modoNoturnoCheckbox = document.getElementById("modo-noturno");
  const anexarBtn = document.getElementById("anexar-btn");
  const linkCalendario = document.getElementById("link-calendario");

  // --------- IDIOMA ---------
  if (idiomaSelect) {
    idiomaSelect.addEventListener("change", function () {
      const idioma = this.value;

      if (idioma === "pt") mensagem.textContent = "Idioma alterado para Português.";
      else if (idioma === "en") mensagem.textContent = "Language changed to English.";
      else if (idioma === "es") mensagem.textContent = "Idioma cambiado a Español.";
    });
  }

  // --------- MODO NOTURNO ---------

  // 1) Ao carregar a página de Configurações, aplica o tema salvo
  const temaSalvo = localStorage.getItem(THEME_KEY) === "true";

  if (temaSalvo) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  // Ajusta o checkbox de acordo com o que está salvo
  if (modoNoturnoCheckbox) {
    modoNoturnoCheckbox.checked = temaSalvo;

    modoNoturnoCheckbox.addEventListener("change", function () {
      const ativado = this.checked;

      // Adiciona/remove a classe no body
      document.body.classList.toggle("dark-mode", ativado);

      // Salva a preferência no localStorage
      localStorage.setItem(THEME_KEY, ativado);

      // Mensagem opcional
      mensagem.textContent = ativado
        ? "Modo noturno ativado."
        : "Modo noturno desativado.";
      mensagem.style.color = "#63783D";
    });
  }

  // --------- ANEXAR CALENDÁRIO EXTERNO ---------
  if (anexarBtn) {
    anexarBtn.addEventListener("click", function () {
      const link = linkCalendario.value.trim();

      if (link) {
        mensagem.textContent = "Calendário anexado com sucesso!";
        mensagem.style.color = "#63783D";
      } else {
        mensagem.textContent = "Por favor, insira um link válido.";
        mensagem.style.color = "red";
      }
    });
  }
});

