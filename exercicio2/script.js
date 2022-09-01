let numb1 = Number (prompt("Insira um número"))
let numb2 = Number (prompt("Insira um número"))

console.log(`
O primeiro numero é maior que segundo? ${numb1>numb2}
O primeiro numero é igual ao segundo? ${numb1===numb2}
O primeiro numero é divisível pelo segundo? ${numb1%numb2===0}
O segundo numero é divisível pelo primeiro? ${numb2%numb1===0}
`)

