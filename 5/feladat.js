// Nev: Kucsera Milan
// Neptun: UDVFHZ
// h: h266874

function tokeletes(szam) {
    if (typeof szam !== 'number' || szam <= 0 || !Number.isInteger(szam) || typeof szam === null){
        return false;
    }
        let osszeg = 0;

        for (let i = 1; i < szam; i++) {
            if(szam % i === 0){
                osszeg += i;
            }

        }
        return osszeg === szam;
}

class Webbongeszo{

    lapok = [];
    rendmem = 0;
    _memfogy = 0;

    constructor(rendmem = 8192) {
        this.rendmem = rendmem;
    }
    get memoriafogyasztas() {
        return this._memfogy;
    }
    set memoriafogyasztas(value) {
        if (value > this.rendmem){
            this._memfogy = this.rendmem;
        } else if (value === "panic") {
            this._memfogy = 10;
        } else if (value <= 0) {
            this._memfogy = 0;
        } else {
            this._memfogy = value;
        }
    }

    ujLap(url){
            this.lapok.push(url);
        this.memoriafogyasztas = Math.floor(Math.random * (1500 - 100 + 1) + 100);
    }
    lapBezar(){
    this.lapok.splice(this.lapok.length-1, 1)
    }

    panik(){
        this.lapok = [];
        this.memoriafogyasztas = "panic";
    }
}