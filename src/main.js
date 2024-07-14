import $G from "../Gost/gost.js";

new $G('button')
    .setStyle({
        "width": "10rem",
        "height": '4rem'
    }).addEvent('click', (e) => {
        new $G('#btn')
            .setStyle({
                "transition": "0.5s",
                "width": "20rem",
                "height": '6rem',
                "background": "red"
            })
    })