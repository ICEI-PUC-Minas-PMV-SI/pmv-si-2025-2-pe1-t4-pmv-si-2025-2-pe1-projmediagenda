// Troca de idioma
document.getElementById("idioma-select").addEventListener("change", function () {
    const idioma = this.value;
    const msg = document.getElementById("mensagem");

    if (idioma === "pt") msg.textContent = "Idioma alterado para Português.";
    else if (idioma === "en") msg.textContent = "Language changed to English.";
    else if (idioma === "es") msg.textContent = "Idioma cambiado a Español.";
});

// Modo noturno
const modoNoturno = document.getElementById("modo-noturno");

modoNoturno.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", this.checked);
});

// Anexar calendário
document.getElementById("anexar-btn").addEventListener("click", function () {
    const link = document.getElementById("link-calendario").value.trim();
    const msg = document.getElementById("mensagem");

    if (link) {
        msg.textContent = "Calendário anexado com sucesso!";
        msg.style.color = "#63783D";
    } else {
        msg.textContent = "Por favor, insira um link válido.";
        msg.style.color = "red";
    }
});
