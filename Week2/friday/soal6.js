let lampu = {
    status: "mati",

    nyalakan: function () {
        // this.status = "menyala";
    },

    matikan: function () {
        // this.status = "mati";
    },

    toggle: function () {
        if (this.status === "menyala") {
            this.status = "mati";
        } else {
            this.status = "menyala";
        }

        console.log("status lampu: " + this.status);
    },

    cekStatus: function () {
        console.log("status lampu: " + this.status);
    }
};

lampu.toggle();
lampu.cekStatus();