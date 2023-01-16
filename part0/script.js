const firstName = "Sergio";
const firstNameUppercase = firstName.toUpperCase();
const list = [];
const anotherList = list.concat(100);

const myObj = {
    nombre: 'Sergio',
    apellido: 'Destefano',
    youtube: '@sdes0211',
    edad: '32',
    isDeveloper: true,
    links: ['www.youtube.com.ar','www.google.com.ar', '']
}
const field = 'youtube';

// console.log('Mi apellido es: ' + myObj.apellido); 
// console.log(myObj.edad);
// console.log('Página web: ' + myObj.links[1]);
// console.log(myObj[field]);
// console.log(firstNameUppercase);
// console.log(anotherList[0]);
//expresion:
//parámetros de una función
const sumar = (a, b) => {
    console.log(a);
    console.log(b);
    return a + b;
}
console.log(sumar(1, 3));
//argunmentos de la funcion que yo le paso
const op1 = 10;
const op2 = 18;
console.log(sumar(op1, op2));
