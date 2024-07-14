import $s from './gost/gost.js'
new $s('#btn')
    .click((e) => {
        console.log(e.target)
    })