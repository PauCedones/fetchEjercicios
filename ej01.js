// 01 HACER UNA FUNCION PARA OBTENER LA LISTA ENTERA
// 02 HACER UNA FUNCION PARA OBTENER UNO EN PARTICULAR
// 03 HACER UNA FUNCION PARA CREAR
// 04 HACER UNA FUNCION MODIFICAR
// 05 HACER UNA FUNCION PARA BORRAR

// USAR LA LISTA DE TODOS

//01 
let list = []

const getTodos = async () =>{
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        //el console.log es a modo ejem
        list=res.data;
        //la funcion de abajo invocada aca!
        mostrarLista();
    } catch (err){
        err =>{
            alert(`Hubo un error. ${err}`);
        }
    }
}
    
   // .then(res => {
     //   list = res.data;
    //})
    //.catch(err => console.log(err));
//}

// HACER UNA FUNCION QUE AGARRE LOS DATOS Y LOS MUESTRE, LOS 200 DATOS

const mostrarLista = () =>{
    const ul = document.querySelector("#todo-list");
    //reinicia la lista, sino cada vez que estuviesemos poniendo algo nuevo se imprimiria abajo de vuelta
    ul.innerHTML=""
    //crear cada elemento, cada span y los botones
    //se usa un bucle para que se cree por cada item de la lista
    for(let todo of list){
        const li = document.createElement("li");
        const title = document.createElement("span");  
        const eliminar = document.createElement("button");
        // crear lo que dice adentro del boton
        eliminar.innerText = "Eliminar";
        //poner clases a los elementos creados
        li.className = "todo-item";
        //otra forma de poner la clase
        title.setAttribute("class","todo-title");
        //creamos un nodo de texto, agregando texto al span
        const titleText = document.createTextNode(todo.title);

        //vinculamos cada elemento
        title.appendChild(titleText);
        title.innerText = todo.title;

        //agregamos un evento al boton de eliminar
        eliminar.addEventListener("click", ()=>{
            deleteTodo(todo.id);
        });

        //vinculamos
        li.appendChild(title);
        ul.appendChild(li);
    }
}
    getTodos();

    //getTodos().then(mostrarLista);
    /*
    Se hace con .then es porque 
    la primera función devuelve una promesa, 
    entonces el then es para que la segunda 
    sepa que debe esperar que se cumpla 
    la promesa para ejecutarse
    */


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
