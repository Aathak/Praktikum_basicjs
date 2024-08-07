//memasukkan semua data menggunakan variabel
let panjang = 20.5
let lebar = 30
let hargaprmeter = 1500000


let luas = panjang * lebar
    

let hargasblmppn = luas * hargaprmeter 
    

let ppn = hargasblmppn * 0.15

let  hargastlhppn = hargasblmppn + ppn

console.log ("Luas tanah adalah: Rp" + hargastlhppn.toLocaleString())