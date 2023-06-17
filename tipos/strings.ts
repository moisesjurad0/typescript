(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = "linterna Verde";
    const volcanNegro: string = `Héroe Volcan Negro`;

    console.log({ batman })
    console.log({ linternaVerde })
    console.log({ volcanNegro })

    console.log(` I'm ${batman} `)
    console.log(batman.toUpperCase())
    console.log(batman[10]?.toUpperCase || 'no está')

})()    