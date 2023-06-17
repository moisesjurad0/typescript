(() => {

    let avengers;
    console.log({ avengers })

    const villians: number = 20;
    console.log({ villians })

    if (avengers < villians) {
        //if (avengers < villians) { //'avengers' is possibly 'undefined'.ts(18048)
        console.log('problemas');
    } else {
        console.log('todo bien');
    }

    avengers = Number('55A');
    console.log({ avengers });
})()