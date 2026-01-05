const daysContainer = document.getElementById("days");
const monthName = document.getElementById("month-name");
const monthNumber = document.getElementById("month-number");
const yearDisplay = document.getElementById("year");
const monthSelect = document.getElementById("month-select");
const modal = document.getElementById("note-modal");
const modalDate = document.getElementById("modal-date");
const noteText = document.getElementById("note-text");
const saveNoteBtn = document.getElementById("save-note");
const closeModalBtn = document.getElementById("close-modal");

const months = [
  "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL",
  "MAIO", "JUNHO", "JULHO", "AGOSTO",
  "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
];

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let selectedDate = null;

// dia selecionado (para o número grande lá em cima)
let selectedDay = null;
let selectedMonth = null;
let selectedYear = null;

// ----------------- LOCALSTORAGE -----------------

function getNotes() {
  return JSON.parse(localStorage.getItem("notes") || "{}");
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function getAtividades() {
  // mesmas atividades salvas na tela de registro
  return JSON.parse(localStorage.getItem("atividades") || "[]");
}

// ----------------- CALENDÁRIO -----------------

function renderCalendar(month, year) {
  daysContainer.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  monthName.textContent = months[month];
  yearDisplay.textContent = year;
  monthSelect.value = month;

  // Define qual dia mostrar em destaque no topo
  let dayToShow;

  if (
    selectedDay !== null &&
    selectedMonth === month &&
    selectedYear === year
  ) {
    dayToShow = selectedDay;
  } else if (
    month === currentDate.getMonth() &&
    year === currentDate.getFullYear()
  ) {
    dayToShow = currentDate.getDate();
  } else {
    dayToShow = 1;
  }

  monthNumber.textContent = dayToShow.toString().padStart(2, "0");

  const notes = getNotes();
  const atividades = getAtividades();

  // espaços em branco antes do 1º dia
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    daysContainer.appendChild(emptyDiv);
  }

  for (let day = 1; day <= lastDate; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = day;

    // chave antiga das notas (mantida)
    const dateKey = `${year}-${month + 1}-${day}`;

    // chave ISO usada nas atividades: "YYYY-MM-DD"
    const isoKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    // dia de hoje
    if (
      day === currentDate.getDate() &&
      month === currentDate.getMonth() &&
      year === currentYear
    ) {
      dayDiv.classList.add("today");
    }

    // tem anotação?
    if (notes[dateKey]) {
      dayDiv.classList.add("day-has-note");
    }

    // tem pelo menos uma atividade neste dia?
    const hasActivity = atividades.some((atividade) => atividade.data === isoKey);
    if (hasActivity) {
      dayDiv.classList.add("day-has-activity");
    }

    // clique no dia -> abre modal com lista de atividades + anotação
    dayDiv.addEventListener("click", () => {
      selectedDate = dateKey;
      selectedDay = day;
      selectedMonth = month;
      selectedYear = year;

      monthNumber.textContent = day.toString().padStart(2, "0");

      openNoteModal(dateKey, isoKey);
    });

    daysContainer.appendChild(dayDiv);
  }
}

// anotação + listinha de tarefas) 

function openNoteModal(dateKey, isoKey) {
  const notes = getNotes();
  const atividades = getAtividades();
  const tasksContainer = document.getElementById("day-tasks");

  modalDate.textContent = `Dia ${isoKey}`;
  noteText.value = notes[dateKey] || "";

  if (tasksContainer) {
    const tarefasDia = atividades.filter((atividade) => atividade.data === isoKey);

    if (tarefasDia.length === 0) {
      tasksContainer.innerHTML =
        '<p class="sem-tarefas">Nenhuma atividade registrada para este dia.</p>';
    } else {
      const items = tarefasDia
        .map((t) => {
          const hora = t.horario || "--:--";
          const titulo = t.titulo || "Sem título";
          return `<li><strong>${hora}</strong> — ${titulo}</li>`;
        })
        .join("");

      tasksContainer.innerHTML = `
        <h4>Atividades do dia</h4>
        <ul>${items}</ul>
      `;
    }
  }

  modal.style.display = "flex";
}

saveNoteBtn.addEventListener("click", () => {
  const notes = getNotes();
  if (noteText.value.trim()) {
    notes[selectedDate] = noteText.value.trim();
  } else {
    delete notes[selectedDate];
  }
  saveNotes(notes);
  modal.style.display = "none";
  renderCalendar(currentMonth, currentYear);
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// fecha o modal clicando fora
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// altera mês
monthSelect.addEventListener("change", () => {
  currentMonth = parseInt(monthSelect.value, 10);
  renderCalendar(currentMonth, currentYear);
});

// render inicial
renderCalendar(currentMonth, currentYear);
