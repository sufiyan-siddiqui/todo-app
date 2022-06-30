 
var mouse = document.querySelector("#cursor");
window.addEventListener('mousemove', cursor);
function cursor(e){
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
}
window.addEventListener('load', ()=>{
    var load = document.querySelector(".load");
    load.classList.toggle("active");
});

var todoInput = document.querySelector(".todo-list");
var todobtn = document.querySelector(".todo-btn");
var todoList = document.querySelector(".list");

todobtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(e){
    e.preventDefault();
       //todo div
    var tododiv = document.createElement("div");
    tododiv.classList.add("todo");
    var newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value ;
    newTodo.classList.add('todo-item');
    tododiv.appendChild(newTodo);
    //local storage - saveLocal(todoInput.value);
    //buttons
    var completedbtn = document.createElement("button");
    completedbtn.innerHTML = '<i class="fas fa-check"></i>';
    completedbtn.classList.add("completed-btn");
    tododiv.appendChild(completedbtn);
    
    var trashbtn = document.createElement("button");
    trashbtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashbtn.classList.add("trash-btn");
    tododiv.appendChild(trashbtn);
    
    todoList.appendChild(tododiv);
    
    //clear value
    todoInput.value="";
}
function deleteCheck(e){
    
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
        var todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",()=>{
            todo.remove();
        });
    }
    if(item.classList[0] === 'completed-btn'){
        var todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
// ------------------------------------------- extra features
// var filterOptn = document.querySelector(".filter-item");
// filterOptn.addEventListener('click', filterTodo)
// function filterTodo(e){
//         const todos = todoList.childNodes;
//         todos.forEach(function(todo) {
//                 switch(e.target.value){
//                         case "all":
//                         todo.style.display = "flex";
//                         break;
//                         case "completed":
//                         if(todo.classList.contains("completed")){
//                                 todo.style.display = 'flex';
//                             }
//                             else{
//                                     todo.style.display = 'none';
//                             }
//                             break;
//                         case"incomplete":
//                            }
//     }); 
// }

//  ------------------------------------------- saving to local storage
// function saveLocal(todo){
//     let todos;
//     if(localStorage.getItem('todos') === null){
//         todos = [];
//     }
//     else{
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }

//     todos.push('todo');
//     localStorage.setItem('todos', JSON.stringify(todos));
// }