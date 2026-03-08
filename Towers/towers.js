const brett = document.getElementById("brett");
const startBtn = document.getElementById("startBtn");
const nivaa = document.getElementById("nivaa");

const BREDDER = {
    lett: 5,
    medium: 3,
    vanskelig: 2
};

startBtn.addEventListener("click", startSpill);

function startSpill() {
    const bredde = BREDDER[nivaa.value] || 2;
    lagBrett(bredde);
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