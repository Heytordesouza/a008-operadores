const a = 5 > 20 && 5 < 2
console.log(a); //false, pq 5 não é maior que 20 e nem menor que 2

const b = 5 === 5 || 5 === "5"
console.log(b); /* true, pq 5 é igual a 5. 
a outra afirmação é false, mas é ou (||), então true no final das contas.*/

const c = !(20 > 50)
console.log(c); //true, pois é o oposto de false, é usado ! no início.

const d = !(20 > 50 || 50 > 60)
console.log(d) // true, pois as duas operações são false, mas tem ! no início, invertendo.



