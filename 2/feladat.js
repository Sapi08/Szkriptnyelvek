// Nev: Kucsera Milan
// Neptun: UDVFHZ
// h: h266874


function matek(parameter) {

    if (parameter == null) {
        return 0;
    } else if (typeof parameter === 'string') {
        return 1;
    } else if (Number.isInteger(parameter)) {
        if (parameter % 2 === 0) {
            return parameter**parameter;
        } else if (parameter % 2 !== 0) {
            return (parameter - 1)**parameter;
        }
    } else
        return null;
}
