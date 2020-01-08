// 01 HACER UNA FUNCION PARA OBTENER LA LISTA ENTERA
// 02 HACER UNA FUNCION PARA OBTENER UNO EN PARTICULAR
// 03 HACER UNA FUNCION PARA CREAR
// 04 HACER UNA FUNCION MODIFICAR
// 05 HACER UNA FUNCION PARA BORRAR

// USAR LA LISTA DE TODOS

//01 
let list;
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
const newTodo = (id,titulo,body,user) =>{
    axios.post(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        title: titulo,
        body: body,
        userId: user
    })
    .then(res => {
        usuarioNuevo = res.data;
    })
    .catch(err => {throw err;});
}

//04
let usuarioMod;
const updateTodo = (id, titulo, body,user) =>{
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        title: titulo,
        body: body,
        userId: user
    })
    .then(res => {
        usuarioMod = res.data
    })
    .catch(err => {throw err;});
}

//05
let usuarioBorrado;
const deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
        usuarioBorradoS = res.data
    })
    .catch(err => {throw err;});
}