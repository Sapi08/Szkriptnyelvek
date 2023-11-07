function clear(tomb = []) {
    if (typeof tomb === undefined) {
        return 0;
    } else {
        eredmeny = [];

        for (elem in tomb) {
            if (Number.isInteger(elem)) {
                eredmeny += elem;
            } else if (typeof elem === null || typeof elem === undefined) {
                continue;
            } else if (typeof elem === "string"){
                for (egy in eredmeny) {
                    if (typeof egy === "string") {
                        continue;
                    } else {
                        eredmeny += (elem[0] + elem[1]).toUpperCase();
                    }

                }
            }
        }
        return eredmeny.reverse();
    }
}