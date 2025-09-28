let NomedoHeroi = "O conquistador"
let NiveldoHeroi = 8500
let nivel;

if (NiveldoHeroi < 1000) {
    nivel = `ferro`;
} else if (NiveldoHeroi >= 1001 && NiveldoHeroi <= 2000) {
    nivel = `bronze`;
} else if (NiveldoHeroi >= 2001 && NiveldoHeroi <= 5000) {
    nivel = `prata`;
} else if (NiveldoHeroi >= 5001 && NiveldoHeroi <= 7000) {
    nivel = `ouro`;
} else if (NiveldoHeroi >= 7001 && NiveldoHeroi <= 8000) {
    nivel = `platina`;
} else if (NiveldoHeroi >= 8001 && NiveldoHeroi <= 9000) {
    nivel = `ascendente`;
} else if (NiveldoHeroi >= 9001 && NiveldoHeroi <= 1000) {
    nivel = `imortal`; 
} else { 
    nivel = `Radiante`
}

console.log("O Héroi de nome " + NomedoHeroi + " está no nível " + nivel);
    




