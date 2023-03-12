const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayQuadrado=[];

// a funçào vai pegar todos os numeros do arrayNumeros e multiplicar por 2
const dobro=arrayNumeros.map(numero=>{
    return numero*2;
})
//O arrayQuadrado irá receber os numeros da função dobro.
arrayQuadrado = dobro;
console.log(arrayQuadrado)