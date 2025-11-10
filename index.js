// const num = 3;

// if (num < 3) {
//     console.log("Il numero è minore di 3");
// }else if(num <= 3){
//     console.log("Il numero è uguale a 3");
// }else{
//     console.log("Il numero è maggiore di 3");
// }

// for (let index = 0; index <= 10; index++) {
//     console.log(index);
//     ;
    
// }

// ----------------------------------------------------------------------------------------------------------------------------------

// const saluta = require('../corso-node/moduli/moduli');
// const nomi = require('../corso-node/moduli/nomi')

// console.log(nomi);

// saluta('Andrea');
// saluta(nomi.person1);

// ----------------------------------------------------------------------------------------------------------------------------------

// const {readFileSync, writeFileSync} = require('fs');
// console.log('Comincio');

// const prova = readFileSync('./modulo-fs/prova.txt', 'utf8');
// const ciao = readFileSync('./modulo-fs/ciao.txt', 'utf8');

// writeFileSync('./modulo-fs/ciao.txt' , 'testo aggiunto a ciao.txt' , {flag: 'a'})
// writeFileSync('./modulo-fs/file-nuovo.txt' , 'nuovo file di testo')

// console.log(prova);
// console.log(ciao);

// console.log('Ho finito');
// console.log('Passo al prossimo compito');

// ----------------------------------------------------------------------------------------------------------------------------------

console.log('Comincio');
const {readFile, writeFile} = require('fs');

readFile('./modulo-fs/ciao.txt' , 'utf8' , (error,result) => {
    if (error) {
        console.log(error);
        return
    }
    const ciao = result;

    readFile('./modulo-fs/prova.txt' , 'utf8' , (error,result) => {
        if (error) {
            console.log(error);
            return
        }
        const prova =  result;
        console.log('Ho finito');
    })
})
console.log('Passo al prossimo compito');