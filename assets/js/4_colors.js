function pintarNegro(elemento) {
    elemento.style.backgroundColor = 'black';
}

const div1 = document.querySelector("#div01")
div1.addEventListener("click", function() {
    pintarNegro(div1);
});

const div2 = document.querySelector("#div02")
div2.addEventListener("click", function() {
    pintarNegro(div2);
});

const div3 = document.querySelector("#div03")
div3.addEventListener("click", function() {
    pintarNegro(div3);
});

const div4 = document.querySelector("#div04 ")
div4.addEventListener("click", function() {
    pintarNegro(div4);
});

