let Pertama = 4;
let Ratio = 3;
let JumlahSuku = 10;

let Total = 0;

for (let i = 0; i < JumlahSuku; i++) {
    let Suku = Pertama;
    for (let j = 0; j < i; j++) {
        Suku *= Ratio; 
    Total += Suku;
}
}

console.log("Jumlah 10 suku pertama adalah: " + Total);
