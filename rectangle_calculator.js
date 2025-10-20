const readline = require("readline"); // modul untuk input dari user

// buat interface input/output di console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan panjang persegi panjang: ", (pnjg) => {
  rl.question("Masukkan lebar persegi panjang: ", (lbr) => {

        // ubah string jadi number
        const p = parseFloat(pnjg);
        const l = parseFloat(lbr);
        let luas;
        // logika utama
        luas = p * l;
        console.log(` luas persegi panjang adalah : ${luas}`);
        rl.close();
    });
  });