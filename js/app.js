// Boton Añadir Nota
const buttonAddNote = document.getElementById('button_addNote');
buttonAddNote.addEventListener('click', addNote);

// Contenedor de las Notas
const contenedor = document.getElementById('contenedor');

// Logica del Boton Añadir Nota
function addNote() {
    // Crear elemento DIV
    let div = document.createElement('DIV');
    div.className = 'notas';

    // Crear elemento TEXTAREA para el texto
    let textaerea = document.createElement('TEXTAREA');
    textaerea.rows = '10';

    //Crear elemento BUTTON para el color
    let buttonColor = document.createElement('BUTTON');
    buttonColor.innerHTML = 'Color'
    let pos = 0;
    buttonColor.addEventListener('click', () => {
        let tcolores = colores.length - 1;
        if(pos <= tcolores) {
            pos++;
            textaerea.style.color = '#fff';
        } else {
            pos = 0;
            textaerea.style.color = '#000';    
        }
        textaerea.style.background = colores[pos];
    });

    // Crear elemento BUTTON para elimnar
    let buttonDelete = document.createElement('BUTTON');
    buttonDelete.innerHTML = 'Delete';
    buttonDelete.addEventListener('click', () => {
        div.remove();
    });

    // Añadir al DIV contenedor
    div.appendChild(textaerea);
    div.appendChild(buttonColor);
    div.appendChild(buttonDelete);
    contenedor.appendChild(div);
}

// Arreglo de los colores para el TEXTAREA
var colores = ['white', 'blue', 'red', 'green', 'gray', 'purple'];
