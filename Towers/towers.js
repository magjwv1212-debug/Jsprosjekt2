const brett = document.getElementById("brett");
const startBtn = document.getElementById("startBtn");
const nivaa = document.getElementById("nivaa");

const poengEl = document.getElementById("poeng");
const radNrEl = document.getElementById("radNr");
const meldingEl = document.getElementById("melding");

const BREDDER = {
    lett: 5,
    medium: 3,
    vanskelig: 2
};

let poeng = 0;
let aktivRad = 0;
let spillOver = false;
let bomber = [];

startBtn.addEventListener("click", startSpill);

function startSpill() {
    poeng = 0;
    aktivRad = 0;
    spillOver = false;
    bomber = [];

    poengEl.textContent = poeng;
    radNrEl.textContent = aktivRad + 1;
    meldingEl.textContent = "Velg en rute i rad 1";

    const bredde = BREDDER[nivaa.value] || 2;

    lagBomber(bredde);
    lagBrett(bredde);
}

function lagBomber(bredde) {
    for (let rad = 0; rad < 10; rad++) {
        const bombePlass = Math.floor(Math.random() * bredde);
        bomber.push(bombePlass);
    }
}

function lagBrett(bredde) {
    brett.innerHTML = "";

    for (let rad = 0; rad < 10; rad++) {
        const radDiv = document.createElement("div");
        radDiv.className = "rad";

        radDiv.style.gridTemplateColumns = `repeat(${bredde}, 1fr)`;

        for (let kolonne = 0; kolonne < bredde; kolonne++) {
            const knapp = document.createElement("button");
            knapp.className = "rute";
            knapp.textContent = "?";

            radDiv.appendChild(knapp);
        }

        brett.appendChild(radDiv);
    }
}