export function tampilkanHasil(character) {

    const div = document.createElement("div");

    div.textContent =
        `[${character.rarity}] ${character.name}`;

    if (character.rarity === "Common") {
    div.style.background = "linear-gradient(135deg,#43a047,#66bb6a)";
}

if (character.rarity === "Rare") {
    div.style.background = "linear-gradient(135deg,#1565c0,#42a5f5)";
}

if (character.rarity === "Epic") {
    div.style.background = "linear-gradient(135deg,#6a1b9a,#ab47bc)";
}

if (character.rarity === "Legendary") {
    div.style.background = "linear-gradient(135deg,#ff9800,#ffd54f)";
    div.style.boxShadow = "0 0 20px gold";
}

    document
        .querySelector("#result").append(div);
}

export function updateStat(stats) {

    document.querySelector("#stats").innerHTML = `
        Total Pull : ${stats.total}
        <br>
        Common : ${stats.Common}
        <br>
        Rare : ${stats.Rare}
        <br>
        Epic : ${stats.Epic}
        <br>
        Legendary : ${stats.Legendary}
    `;
}

export function clearUI() {
    document.querySelector("#result").innerHTML = "";
}