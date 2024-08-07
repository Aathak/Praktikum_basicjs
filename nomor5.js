class Lingkaran {
    constructor(r) {
        this.r = r;
    }

    luas() {
        return Math.PI * this.r * this.r
    }

    keliling() {
        return 2 * Math.PI * this.r;
    }
}

class Tabung extends Lingkaran {
    constructor(r, t) {
        super(r);
        this.t = t;
    }

    volume() {
        return this.luas() * this.t;
    }

    luasPermukaan() {
        return 2 * this.luas() + this.keliling() * this.t;
    }

    luasSelimut() {
        return this.keliling() * this.t;
    }
}

let tabung = new Tabung(7.5, 50);
console.log("Tabung Volume: " + tabung.volume().toFixed(2) + " cm³");
console.log("Tabung Luas Permukaan: " + tabung.luasPermukaan().toFixed(2) + " cm²");


class Kerucut extends Lingkaran {
    constructor(r, t) {
        super(r);
        this.t = t;
    }

    volume() {
        return (1/3) * this.luas() * this.t;
    }

    luasPermukaan() {
        return this.luas() + this.luasSelimut();
    }

    luasSelimut() {
        let s = Math.sqrt(Math.pow(this.r, 2) + Math.pow(this.t, 2)); 
        //math.sqrt untuk mengakarkan bilangan, mathpow untuk memangkatkan bilangan
        return Math.PI * this.r * s;
    }
}

let kerucut = new Kerucut(10, 40);
console.log("Kerucut Volume: " + kerucut.volume().toFixed(2) + " cm³");
console.log("Kerucut Luas Permukaan: " + kerucut.luasPermukaan().toFixed(2) + " cm²");



class Bola extends Lingkaran {
    constructor(r) {
        super(r);
    }

    volume() {
        return (4/3) * Math.PI * Math.pow(this.r, 3);
    }

    luasPermukaan() {
        return 4 * this.luas();
    }
}


let bola = new Bola(15);
console.log("Bola Volume: " + bola.volume().toFixed(2) + " cm³");
console.log("Bola Luas Permukaan: " + bola.luasPermukaan().toFixed(2) + " cm²");