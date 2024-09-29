// console.log("ola mundo novamente, voltei")

// Exercício 1
var num1 = 1
var num2 = 1
var num3 = 0

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

//Exercicio 2

if(num1 > num2) {
    console.log("o maior e num1")
} else {
    console.log("o maior e num2")
}

//Exercicio 3
if(num1 > num2 && num1 > num3 ) {
    console.log("num1 e maior que os dois numeros");
} else if(num2 > num1 && num2 > num3) {
    console.log("num2 e maior que os dois numeros ");
} 
  else {
    console.log("num3 e maior que os dois numeros");  
}

// Exercicio 4
let angleOne = 60; 
let angleTwo = 60;
let angleTree = 60;
let confirm = true

if(angleOne + angleTwo + angleTree === 180) {
    console.log(confirm);    

} else {
    confirm = false
    console.log(confirm)

}

// Exercicio 5
//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e 
//retorne os movimentos que ela pode fazer.
let chessPiece = "PEAO" ;
//let chessPieces = chessPiece.toLowerCase()
switch (chessPiece.toLowerCase()) {
    case "peao":
        console.log("move uma casa para frente")
        break;
    case "cavalo":
        console.log("movimento em L")
        break; 
    case "torre":
        console.log("movimento na horizontal")
        break;
    case "bispo":
        console.log("movimento na vertical")
        break;
    case "rainha":
        console.log("movimento para todos os lados")
        break;
     case "rei":
        console.log("movimento para todos os lados apenas uma casa por vez")
        break;
    default:
        break;
}

//Exercício 6: Há um par entre nós
// Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. 
//Caso contrário, o código deve retornar false.
//Faça esse exercício utilizando somente um if.

let numberOne = 2
let numberTwo = 1
let numberTree = 2

if(numberOne % 2 == 0 || numberTwo % 2 == 0 || numberTree % 2 == 0) {
    console.log(true)
} else {
    console.log(false)
}

// Exercício 7
//Utilize if...else para escrever um código que, dado um salário bruto, 
//calcule o salário líquido a ser recebido.
//uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).


/*



 if(salaryGross <= 1556.94) {
    aliquotaInss = (8 / 100) * salaryGross;
    salaryBase = salaryGross - aliquotaInss;
    console.log(`o salario liquido R$ ${salaryBase}`)
 } else if (salaryGross > 1556.94 && salaryGross <= 2594.92){
    aliquotaInss = (9 / 100) * salaryGross;
    salaryBase = salaryGross - aliquotaInss;
    if(salaryBase <= 1903.98) {
        console.log(`salario liquido R$ ${salaryBase} , voce esta insento de IR`)
    }
  else if(salaryBase > 1903.98 && salaryBase <= 2826.65) {
     aliquotaIr = ((7.5 / 100) * salaryBase - 142.80);
     salaryLiquido = salaryBase - aliquotaIr
     console.log(`o salario liquido é R$ ${salaryLiquido.toFixed(2)} , voce paga 7,5% de IR`)
    }  
} else if(salaryGross >= 2594.93 && salaryGross <= 5189.82) {
    aliquotaInss = (11 / 100) * salaryGross
    salaryBase = salaryGross - aliquotaInss
    console.log("entrou na condiçao")
    if(salaryBase >= 2826.66 && salaryBase <= 3751.05) {
        aliquotaIr = ((15 / 100) * salaryBase - 354.80)
        salaryLiquido = salaryBase - aliquotaIr
        console.log(`o salario liquido R$ ${salaryLiquido} , voce paga 15% de IR`)
    }
} */

    let salaryGross = 5189.82;
    let aliquotaInss ;
    let aliquotaIr;
    let parcela;
    let salaryBase;
    let salaryLiquido;

    if(salaryGross <= 1556.94) {
        aliquotaInss = (8 / 100) * salaryGross;
        salaryBase = salaryGross - aliquotaInss;
        console.log(`o salario liquido R$ ${salaryBase}`)
     } else if (salaryGross > 1556.94 && salaryGross <= 2594.92){
        aliquotaInss = (9 / 100) * salaryGross;
        salaryBase = salaryGross - aliquotaInss;
        if(salaryBase <= 1903.98) {
            console.log(`salario liquido R$ ${salaryBase} , voce esta insento de IR`)
        }
      else if(salaryBase > 1903.98 && salaryBase <= 2826.65) {
         aliquotaIr = ((7.5 / 100) * salaryBase - 142.80);
         salaryLiquido = salaryBase - aliquotaIr
         console.log(`o salario liquido é R$ ${salaryLiquido.toFixed(2)} , voce paga 7,5% de IR`)
        }  
    } else if(salaryGross >= 2594.93 && salaryGross <= 5189.82) {
        aliquotaInss = (11 / 100) * salaryGross
        salaryBase = salaryGross - aliquotaInss
        
        if(salaryBase >= 2826.66 && salaryBase <= 3751.05) {
            aliquotaIr = ((15 / 100) * salaryBase - 354.80)
            salaryLiquido = salaryBase - aliquotaIr
            console.log(`o salario liquido R$ ${salaryLiquido} , voce paga 15% de IR`)

        }
        if(salaryBase >=3751.06 && salaryBase <= 4664.68) {
            aliquotaIr = ((22.5 / 100) * salaryBase - 636.13)
            salaryLiquido = salaryBase - aliquotaIr
            console.log(`o salario liquido R$ ${salaryLiquido} , voce paga 22.5% de IR`)
        }
    } else if(salaryBase > 4668.68 && salaryGross > 5189.82){
        aliquotaInss = 570.88
        aliquotaInss = ((27.5 / 100) * salaryBase - 869.36)
    }
    
  
    /* f(salaryGross > 5189.81) {
        aliquotaInss = 570.88
        salaryBase =  salaryGross - aliquotaInss
        console.log("entrou na condiçao", salaryBase)
        if(salaryBase >= 3751.06 && salaryBase <= 4664.68) {
            aliquotaIr = ((22.5 / 100) * salaryBase - 636.13)
            salaryLiquido = salaryBase - aliquotaIr
            console.log(`o salario liquido R$ ${salaryLiquido} , voce paga 22.5% de IR`)
        } 
    }
/*  */
/* } if(salaryBase >= 4664.68) {
    aliquotaIr = ((27.5 / 100) * salaryBase - 869.36)
    salaryLiquido = salaryBase - aliquotaIr
    console.log(`o salario liquido R$${salaryLiquido} , voce paga 27.5% de IR`)
}
 */




/* tem que descontar o inss e IR */

/* if(salaryGross <= 1556.94){
    aliquota = "aliquota 8%"
    console.log(aliquota)
} else if (salaryGross >= 1556.95 && salaryGross <= 2594.92) {
    aliquota = "aliquota 11%"
    console.log(aliquota)
} else if ( salaryGross >= 5189.82) {
    aliquota = "aliquota maxima de 570,88"
    console.log(aliquota)
} */
