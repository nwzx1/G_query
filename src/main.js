import $G from "../Gost/gost.js";

new $G('button')
    .addEvent('click', (e) => {
        new $G('#root')
            .setStyle({
                "background": 'red',
                "margin":"2rem"
            })
    })