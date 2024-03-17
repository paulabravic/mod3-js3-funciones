function pintarNegro(elemento) {
    elemento.style.backgroundColor = 'black';
}

const div1 = document.querySelector("#div01");
div1.style.width = "200px";
div1.style.height = "200px";
div1.style.backgroundColor = "blue";
div1.addEventListener("click", function() {
    pintarNegro(div1);
});

const div2 = document.querySelector("#div02");
div2.style.width = "200px";
div2.style.height = "200px";
div2.style.backgroundColor = "red";
div2.addEventListener("click", function() {
    pintarNegro(div2);
});

const div3 = document.querySelector("#div03");
div3.style.width = "200px";
div3.style.height = "200px";
div3.style.backgroundColor = "green";
div3.addEventListener("click", function() {
    pintarNegro(div3);
});

const div4 = document.querySelector("#div04 ");
div4.style.width = "200px";
div4.style.height = "200px";
div4.style.backgroundColor = "yellow";
div4.addEventListener("click", function() {
    pintarNegro(div4);
});
