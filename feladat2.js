function matek(parameter) {
    if (typeof parameter === "undefined") {
        return 0;
    } else if (typeof parameter === "string") {
        return 1;
    } else if (Number.isInteger(parameter)) {
        if (parameter % 2 === 0) {
            return Math.pow(parameter, parameter)
        } else if (parameter % 2 !== 0) {
            return Math.pow(parameter - 1, parameter);
        }
    } else
        return null;
}