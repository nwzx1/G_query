import $G from "../Gost/gost.js";

new $G('body')
    .setStyle({
        "padding": "0px",
        "margin": "0px",
    }).$next('#root', ($) => {
        $.setStyle({
            "width": "100vw",
            "height": "100vh",
            "background-color": "yellow"
        }).createBox('#root', {
            Tag: 'button',
            content: "submit"
        }, ($) => {
            $.addEvent('click', (e) => console.log(e.target))
                .setStyle({
                    "width": "10rem",
                    "height": "6rem",
                    "background": "red"
                })
        })
    })