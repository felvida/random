// Math.random() devuelve numeromero aleatorio entre 0 y 1.
var numero = Math.random();
var str =' MAYOR que 0,5';
if (numero <= 0.5){
  str = ' MENOR o IGUAL que 0,5';
}
console.log('\n' + numero + str + '\n');
