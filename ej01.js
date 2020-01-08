// 01 HACER UNA FUNCION PARA OBTENER LA LISTA ENTERA
// 02 HACER UNA FUNCION PARA OBTENER UNO EN PARTICULAR
// 03 HACER UNA FUNCION PARA CREAR
// 04 HACER UNA FUNCION MODIFICAR
// 05 HACER UNA FUNCION PARA BORRAR

// USAR LA LISTA DE TODOS

//01 
let list = []

const getTodos = () =>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res => {
        list = res.data;
    })
    .catch(err => console.log(err));
}

//02

let usuario;
const getTodo = (id) =>{
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
        usuario = res.data;
    })
    .catch(err => console.log(err));


}

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
    .catch(err => {throw err;});
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
    .catch(err => {throw err;});
}

////////////////////

// HACER UNA FUNCION QUE AGARRE LOS DATOS Y LOS MUESTRE, LOS 200 DATOS

const mostrarLista = () =>{
    let lista = document.querySelector("#todo-list");
//crear cada elemento, cada span y los botones
// vincular cada elemtno
//esta funcion se llama desde dentro de la funcion de getTodos!!!!!!!
document.createElement