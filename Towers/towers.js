const brett = document.getElementById("brett");
const startBtn = document.getElementById("startBtn");
const nivaa = document.getElementById("nivaa");

const BREIDDEER = { lett: 5, medium: 3, vanskelig: 2 };

startBtn.addEventListener("click", () => {
    const bredde = BREIDDEER[nivaa.value] || 2;
    lagBrett(bredde);
});

function lagBrett(bredde) {
    brett.innerHTML = "";

    for (let r = 0; r < 10; r++) {
        const radDiv = document.createElement("div");
        radDiv.className = "rad";
        radDiv.style.gridTemplateColumns = `repeat(${bredde}, 1fr)`;

        for (let i = 0; i < bredde; i++) {
            const knapp = document.createElement("button");
            knapp.className = "rute";
            knapp.textContent = "?";
            radDiv.appendChild(knapp);
        }

        brett.appendChild(radDiv);
    }
}
