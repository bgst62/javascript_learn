const readline = require("readline");

function convertMoney() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

    rl.question("Masukkan jumlah uang dalam Rupiah (1000, 10000, 100000, 1000000 dst): ", (rupiah) => {
        rl.question("Masukkan mata uang tujuan (USD, EUR, POUND :)", (currency) => {
        
            const amount = parseFloat(rupiah);
            const targetCurrency = currency.toUpperCase()
            let jadinya;

            //logika convert
            if (targetCurrency === "USD") jadinya = amount / 15000;
            else if (targetCurrency === "EUR") jadinya = amount / 17000;
            else if (targetCurrency === "POUND") jadinya = amount / 20000;
            else jadinya = "Mata uang tidak valid";

            console.log("hasil:" + jadinya);
            rl.question("Apakah anda ingin menggunakan program ini lagi? (y/n):", (ulang) => {
                if (ulang.toLowerCase() === 'y') 
                    convertMoney(); // Panggil fungsi lagi untuk mengulan
                     else {
                        console.log("thx for using this program");
                        rl.close();
                    }
            });
        });
    });
}
convertMoney();
