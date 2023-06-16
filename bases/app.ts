

const msg1 = 'hola mundo'; //pasa el mouse por encima de la variable para ver el tipo
console.log('msg1')
console.log(msg1)

let msg2 = 'hola mundo'; //aqui el tipo ya es string
console.log('msg2')
console.log(msg2)

msg2 = 'otra cadena'; //con "let" el tipo se mantiene igual
console.log('msg2')
console.log(msg2)

msg2 = 123; // y no permite cambiarlo, en ejecucion. Dará error de "compilacion" en el editor de texto.
console.log('msg2')
console.log(msg2)
//*mientras typeScript no esté importado tampoco afectará e igual funcionará en runtime

//tambien le puedo definir tipo a la constante
//pero esto es solo de typescript asi q javascript no lo conoce y se cae en runtime
//Uncaught SyntaxError: Missing initializer in const declaration
const msg3 = 'hola mundo';
console.log('msg3')
console.log(msg3)
//si comentas el ": string" funcionará normal.

//para compilar: 
// en cmd: "tsc app"

//*don't use powershell on this scenario. gives error:
//tsc.ps1 cannot be loaded
//https:/go.microsoft.com/fwlink/?LinkID=135170.

