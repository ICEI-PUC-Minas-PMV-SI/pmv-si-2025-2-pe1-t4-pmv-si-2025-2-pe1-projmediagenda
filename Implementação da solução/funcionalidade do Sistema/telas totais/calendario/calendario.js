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

function getNotes() {
  return JSON.parse(localStorage.getItem("notes") || "{}");
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderCalendar(month, year) {
  daysContainer.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  monthName.textContent = months[month];
  monthNumber.textContent = (month + 1).toString().padStart(2, "0");
  yearDisplay.textContent = year;
  monthSelect.value = month;

  const notes = getNotes();

  // espaços em branco
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    daysContainer.appendChild(emptyDiv);
  }

  for (let day = 1; day <= lastDate; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = day;

    const dateKey = `${year}-${month + 1}-${day}`;

    // marca dia atual
    if (
      day === currentDate.getDate() &&
      month === currentDate.getMonth() &&
      year === currentDate.getFullYear()
    ) {
      dayDiv.classList.add("today");
    }

    // marca se tiver anotação
    if (notes[dateKey]) {
      dayDiv.classList.add("day-has-note");
    }

    // abrir modal
    dayDiv.addEventListener("click", () => openNoteModal(dateKey));

    daysContainer.appendChild(dayDiv);
  }
}

function openNoteModal(dateKey) {
  selectedDate = dateKey;
  const notes = getNotes();
  modalDate.textContent = `Anotações de ${dateKey}`;
  noteText.value = notes[dateKey] || "";
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
  currentMonth = parseInt(monthSelect.value);
  renderCalendar(currentMonth, currentYear);
});

// render inicial
renderCalendar(currentMonth, currentYear);
