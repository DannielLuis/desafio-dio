//
let xp = parseInt(Math.random() * 10100);
console.log(xp)
let heroi = "Pedro";

const matriz = [
    ["Ferro", 1, 1000],
    ["Bronze", 1001, 2000],
    ["Prata", 2001, 5000],
    ["ouro", 5001, 7000],
    ["platina", 7001, 8000],
    ["Ascendente", 8001, 9000],
    ["Imortal", 9001, 10000],
    ["Radiante", 10001, 10100]
];

for(let contador = 0; contador < matriz.length; contador++){
    //console.log(matriz[0][0])
    //console.log(contador)
    if(xp >= matriz[contador][1] && xp <= matriz[contador][2]){
        //console.log(matriz[contador][1])
        console.log("O heroi " + heroi + " é nivel " + matriz[contador][0])
    }
}

