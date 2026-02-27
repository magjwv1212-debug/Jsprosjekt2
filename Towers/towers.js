const brett = document.getElementById("brett");
const startBtn = document.getElementById("startBtn");
const nivaa = document.getElementById("nivaa");

const ANTALL_RADER = 10;

let bredde = 3;

startBtn.addEventListener("click", startSpill);

function startSpill() {

    // nivåene
    if (nivaa.value === "lett") {
        bredde = 5;
    } else if (nivaa.value === "medium") {
        bredde = 3;
    } else {
        bredde = 2;
    }

    lagBrett();
}

function lagBrett() {

    brett.innerHTML = "";

    for (let r = 0; r < ANTALL_RADER; r++) {

        let radDiv = document.createElement("div");
        radDiv.className = "rad";
        radDiv.style.gridTemplateColumns = "repeat(" + bredde + ", 1fr)";

        for (let i = 0; i < bredde; i++) {

            let knapp = document.createElement("button");
            knapp.className = "rute";
            knapp.textContent = "?";

            radDiv.appendChild(knapp);
        }

        brett.appendChild(radDiv);
    }
}