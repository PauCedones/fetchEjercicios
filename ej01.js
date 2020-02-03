// 01 HACER UNA FUNCION PARA OBTENER LA LISTA ENTERA
// 02 HACER UNA FUNCION PARA OBTENER UNO EN PARTICULAR
// 03 HACER UNA FUNCION PARA CREAR
// 04 HACER UNA FUNCION MODIFICAR
// 05 HACER UNA FUNCION PARA BORRAR

// USAR LA LISTA DE TODOS

//01 
let lista = [];
let todo = {
    id: null,
    title: "",
    userId: null,
    completed: false
};

const todoUl = document.querySelector("#todo-list");


const mostrarLista = (list) =>{
    todoUl.innerHTML=`
    <li>
    <span>ID</span>
    <span>Tarea</span>
    <span>Usuario</span>
    <span>Completada</span>
    <span>Eliminar</span>
    </li>`;

    //crear cada elemento, cada span y los botones
    //se usa un bucle para que se cree por cada item de la lista
    for(let todo of list){
        //creando los elementos a imprimir
        let id = document.createElement("span");
        let title = document.createElement("span");
        let idUser = document.createElement("span");
        let status = document.createElement("span");  

        //aca estamos diciendo que es lo que va a estar adentro de cada item
        // la variable todo es el elemento de la lista de array
        // id, tittle, idUser, completed son items dentro del array que tienen ese nombre para identificarlos
        id.innerHTML = todo.id;
        id.className = "todo-id";
        title.innerHTML = todo.tittle; 
        tittle.className = "todo-tittle";
        idUser.innerHTML = todo.userId;
        idUser.className = "todo-idUser";
        status.innerHTML = todo.completed;
        status.className = "todo-completed";

        //BOTON DE ELIMINAR EN C/ELEMENTO
        //creando el boton
        let eliminar = document.createElement("button");
        // poniendo que dice adentro del boton
        eliminar.innerText = "Eliminar";
        //creando el evento de eliminar cada item del array
        eliminar.addEventListener("click",()=>{
            let li = eliminar.parentElement;
            li.parentNode.removeChild(li);
            deleteTodo(todo.id);
        });

        let li = document.createElement("li");
        li.className = "todo-item";

        //vinculamos
        li.appendChild(id);
        li.appendChild(tittle);
        li.appendChild(userId);
        li.appendChild(status);
        li.appendChild(eliminar);
        if(todo.completed){
            li.classList.add("listo");
        }
        todoUl.appendChild(li);
    }
};

const getTodos = async () =>{
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        //el console.log es a modo ejem
        lista=res.data;
        //la funcion de abajo invocada aca!
        mostrarLista(lista);
    } catch (err){
        err =>{
            alert(`Hubo un error. ${err}`);
        }
    }
}

getTodos();

// HACER UNA FUNCION QUE AGARRE LOS DATOS Y LOS MUESTRE, LOS 200 DATOS




//02

let usuario;
const getTodo = async (id) =>{
    try{
        const data = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        usuario=data
    } catch (err){
        console.log(err);
        }
    console.log("termino fetch async/await")

}  
    //.then(res => {
    //    usuario = res.data;
    //})
  

//03
let usuarioNuevo;
const newTodo = (user, titulo) =>{
    //no hace falta poner el parametro del ID porque no es responsabilidad del frontend decir que numero de ID es, se crea automatico
    axios.post(`https://jsonplaceholder.typicode.com/todos`, {
        userId: user,
        title: titulo,
        completed: false
    })
    .then(res => {
        usuarioNuevo = res.data;
        //aca estas agregando el usuario nuevo al array list
        list.push(usuarioNuevo)
    })
    .catch(err => {throw err;});
}

//04
let usuarioMod;
const updateTodo = (user, id, titulo,completed) =>{
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        userId: user,
        id: id,
        title: titulo,
        completed: completed
    })
    .then(res => {
        usuarioMod = res.data
        for(let i=0; i<list.length; i++){
            if(list[i].id==id){
                list[i]=red.data
            }
        }
    })
    .catch(err => {throw err});
}

//05
let usuarioBorrado;
const deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
        usuarioBorradoS = res.data
        const index = usuarioNuevo.findIndex(usuarioNuevo =>{
            return list.id == id;
        });
        list.splice(index,1);
    })
    .catch(err => {throw err});
}
