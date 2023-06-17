(() => { //Puedes cambiar la variable "target:ES5" en vez de "target:es2016" para transpilar a una forma más antigua.
    //funcion anonima autoinvocada - INICIO

    const a: number = 10; // si pasas el mouse por encima de la variable, verás que el tipo es 10

    let b: number = 10; // si pasas el mouse por encima verás que el tipo es number

    let c; //esta variable es de tipo any (cualquier cosa, ganamos flexibilidad pero perdemos control.)

    let d: string;

    function sayHello(msg) { //puedes desactivar este warning en el flag: "noImplicitAny:false"
        console.log(msg)
    }

    //funcion anonima autoinvocada - END
})()

