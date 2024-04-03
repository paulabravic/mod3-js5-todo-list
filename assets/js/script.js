const listaDeTareas = document.querySelector("#tareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
const lblTotal = document.querySelector("#total");
const lblRealizadas = document.querySelector("#realizadas");

const tareas = [{
    id: 1,
    titulo: "Pasear al perro",
    estado: false

},
{
    id: 2,
    titulo: "Hacer el Desafío",
    estado: false

},
{
    id: 3,
    titulo: "Lavar la ropa",
    estado: false
},
{
    id: 4,
    titulo: "Pagar las cuentas",
    estado: false
}
];


const fxMostrarListado = () => {

    listaDeTareas.innerHTML = `<div class="titulo-listado flex-listado">
                                <span>ID</span> 
                                <span>Nombre</span>
                                <span></span>
                                <span></span>
                               </div>`;

    tareas.forEach(tarea => {

        // Div registro
        const div = document.createElement('div');
        div.classList.add('flex-listado');
        div.innerHTML = `<span>${tarea.id}</span> 
                         <span>${tarea.titulo}</span>
                        `;

        //Checkbox
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = tarea.estado;

        checkbox.addEventListener('click', () => {
            if (tarea.estado) {
                tarea.estado = false;
            } else {
                tarea.estado = true;
            }
            fxMostrarListado();
        });

        // Imagen Eliminar
        const img = document.createElement('img');
        img.setAttribute('src', 'assets/img/eliminar.png');
        img.setAttribute('alt', 'Eliminar');
        img.classList.add('img-eliminar');

        img.addEventListener('click', () => {
            tareas.splice(tareas.indexOf(tarea), 1);
            fxMostrarListado();
        });

        // Asociaciones
        div.appendChild(checkbox);
        div.appendChild(img);
        listaDeTareas.appendChild(div);
    });

    lblTotal.innerHTML = tareas.length;
    lblRealizadas.innerHTML = tareas.filter(x => x.estado === true).length;
}


btnAgregar.addEventListener("click", () => {
    
    const nuevaTarea = tareaInput.value;

    if (nuevaTarea != "") {

        const maxId = tareas.length > 0 ? Math.max(...tareas.map(tarea => tarea.id)) : 0;

        const nuevoObj = {
            id: maxId + 1,
            titulo: nuevaTarea,
            estado: false
        }

        tareas.push(nuevoObj);

        tareaInput.value = "";

        fxMostrarListado();
    }
});


fxMostrarListado();
