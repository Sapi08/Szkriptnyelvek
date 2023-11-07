// Nev: Kucsera Milan
// Neptun: UDVFHZ
// h: h266874

class Nyuszi {
    constructor(repa = 0, vendegek = []) {
        this._repa = repa;
        this.vendegek = vendegek;
    }
    get repa() {
        return this._repa;
    }
    set repa(value) {
        this._repa = value;
    }
    ultet(mennyiseg){
        if (mennyiseg == null){
            mennyiseg = 1;
        }
        return this._repa += mennyiseg;
    }

    vendeg(nev) {
        if (typeof nev === "string") {
            this.vendegek.push(nev);
        }
    }

    etet() {
        /*let i = 0;
        while ((this.vendegek)[i] !== null && this._repa !== 0){
            this.vendegek.splice(i, 1);
            this._repa--;
        }*/

        const vendegekSzama = this.vendegek.length;
        if (vendegekSzama > this._repa) {
            this.vendegek.splice(0, this._repa);
            this._repa = 0;
        } else {
            this.vendegek = [];
            this._repa -= vendegekSzama;
        }
    }

}

/*// nincs répája Nyuszinak.
var nyusz = new Nyuszi(0);
//ültet egy répát.
nyusz.ultet(1);
console.log(nyusz.repa); // 1.
console.log(nyusz.vendegek); //még nincs vendége az eredmény [].
nyusz.vendeg('Robert Gida'); // Róbert Gida megérkezik Nyuszihoz.
nyusz.vendeg('Malacka'); // Malacka megérkezik Nyuszihoz.
console.log(nyusz.vendegek); ['Robert Gida', 'Malacka']
nyusz.etet(); // Mivel van egy 1 répa, Robert Gida kap egyet és utána haza megy. Malackának már nem jutott répa, ezért neki várnia kell.
console.log(nyusz.repa) // 0
console.log(nyusz.vendegek); // ['Malacka']*/

