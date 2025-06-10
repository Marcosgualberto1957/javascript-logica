//vetores ou array
let notas = [7.5, 6.3, 4.2, 9.5];

console.log("Notas iniciais", notas);

//Ordernar em ordem crescente
notas.sort((a, b) => a - b);

console.log("Notas ordenadas (crescente):", notas);

//Ordenar em ordem decrescente
notas.sort((a, b) => b - a);

console.log("Notas ordenadas (decrescente):", notas);

//vetor de string
let frutas = ["banana", "maçã", "laranja", "abacaxi"];

console.log("Coleção de frutas:", frutas);

//ordenando em ordem alfabética
frutas.sort();
console.log("Frutas ordenadas:", frutas);

//ordenando em ordem decrescente
frutas.reverse();
console.log("Frutas ordenadas (decrescente):", frutas);