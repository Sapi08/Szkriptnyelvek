// Nev: Kucsera Milan
// Neptun: UDVFHZ
// h: h266874


function clear(tomb) {
    if (tomb == null) {
        return 0;
    } else {
       let eredmeny = [];

        for (let i = tomb.length; i >= 0; --i) {
            if (Number.isInteger(tomb[i])) {
                eredmeny.push(tomb[i]);
            } else if (typeof tomb[i] === null || typeof tomb[i] === undefined || tomb[i] === "") {

            } else if (typeof tomb[i] === "string") {
                if (tomb[i].length < 3) {
                    eredmeny.push((tomb[i]).toUpperCase());
                } else {
                    eredmeny.push((tomb[i][0] + tomb[i][1]).toUpperCase());
                }
            }
        }
        return eredmeny;
    }
}