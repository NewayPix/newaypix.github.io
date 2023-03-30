'use strict'

// Array of modals available
var M = ['modal-caio', 'modal-rafael', 'modal-yago', 'modal-manoel']

document.getElementById('m-caio').onclick = event => {
    document.getElementById('modal-caio').classList.add("is-active")
}

document.getElementById('m-rafael').onclick = event => {
    document.getElementById('modal-rafael').classList.add("is-active")
}

document.getElementById('m-yago').onclick = event => {
    document.getElementById('modal-yago').classList.add("is-active")
}

document.getElementById('m-manoel').onclick = event => {
    document.getElementById('modal-manoel').classList.add("is-active")
}

var dbutton = document.getElementsByClassName('delete')

for (var i = 0; i < dbutton.length; i++) {
    dbutton[i].onclick = event => {
        M.forEach(function (e) {
            document.getElementById(e).classList.remove('is-active')
        })
    }
}