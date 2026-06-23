import { pull, pullTen } from "./gacha.js";

import { tampilkanHasil,updateStat,clearUI} from "./ui.js";

const stats = {
    total: 0,
    Common: 0,
    Rare: 0,
    Epic: 0,
    Legendary: 0
};

updateStat(stats);

document.querySelector("#pull1").addEventListener("click", () => {

        const hasil = pull();

        tampilkanHasil(hasil);

        stats.total++;
        stats[hasil.rarity]++;

        updateStat(stats);
    });

    document.querySelector("#pull10").addEventListener("click", () => {

        const hasil = pullTen();

        hasil.forEach(character => {

            tampilkanHasil(character);

            stats.total++;
            stats[character.rarity]++;
        });

        updateStat(stats);
    });

    document.querySelector("#reset").addEventListener("click", () => {
        stats.total = 0;
        stats.Common = 0;
        stats.Rare = 0;
        stats.Epic = 0;
        stats.Legendary = 0;
        clearUI();
        updateStat(stats);
    });

       