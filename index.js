//
// Adicionei um random para facilitar os testes.
let xp = parseInt(Math.random() * 10100);
let nome = "Pedro";

const nivel = [
    ["Ferro", 1, 1000],
    ["Bronze", 1001, 2000],
    ["Prata", 2001, 5000],
    ["ouro", 5001, 7000],
    ["platina", 7001, 8000],
    ["Ascendente", 8001, 9000],
    ["Imortal", 9001, 10000],
    ["Radiante", 10001, 10100]
];

for(let contador = 0; contador < nivel.length; contador++){
    if(xp >= nivel[contador][1] && xp <= nivel[contador][2]){
        console.log(`O xp do herói é ${xp}`)
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[contador][0]}.`)
        break
    }
}

