document.addEventListener('DOMContentLoaded', function () {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        //Añadir la función de mostrarImagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt( e.target.dataset.imagenId );
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Cuando se da click, cerrar la imagen
    overlay.onclick= () => {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //Boton para cerrar la imagen 
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //Cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = () => {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //Cerrar imagen con tecla ESC
    document.body.addEventListener("keydown", event => {
        if (event.code === 'Escape' || event.keyCode === 27) {
            overlay.remove();
            body.classList.remove('fijar-body');
        }
    });


    overlay.appendChild(cerrarImagen);  

    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}