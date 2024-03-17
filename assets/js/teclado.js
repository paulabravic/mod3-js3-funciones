let colorAsignado = 'white';

const divKey = document.createElement('div');
let fila1 = document.querySelector('#fila1');
let fila2 = document.querySelector('#fila2');

fila1.style.display = "flex";
fila1.style.flexDirection = "row";
fila1.style.justifyContent = "center";

fila2.style.display = "grid";
fila2.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr";

divKey.id = "key";
divKey.style.width = "200px";
divKey.style.height = "200px";
divKey.style.border = "1px solid black";
divKey.style.backgroundColor = "white";
divKey.style.marginTop = "10px";

fila1.appendChild(divKey);


const crearDiv = (color) => {
    const newDiv = document.createElement('div');
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.border = "1px solid black";
    newDiv.style.backgroundColor = color;
    newDiv.style.marginTop = "10px";
    fila2.appendChild(newDiv);
}

document.addEventListener('keydown', function (event) {
    let divKeySelected = document.querySelector('#key');
    if (event.key === 'a') {
        colorAsignado = 'pink';   
        divKeySelected.style.backgroundColor = colorAsignado;     
    } 
    else if (event.key === 's') {
        colorAsignado = 'orange';
        divKeySelected.style.backgroundColor = colorAsignado;
    }
    else if (event.key === 'd') {
        colorAsignado = 'skyblue';
        divKeySelected.style.backgroundColor = colorAsignado;
    }
    else if (event.key === 'q') {
        colorAsignado = 'purple';
        crearDiv(colorAsignado);
    }
    else if (event.key === 'w') {
        colorAsignado = 'gray';
        crearDiv(colorAsignado);
    }
    else if (event.key === 'e') {
        colorAsignado = 'brown';
        crearDiv(colorAsignado);
    }            
})

