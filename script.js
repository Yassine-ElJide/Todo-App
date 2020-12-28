const input = document.getElementById('todo');
const todos = document.querySelector('.todos');

function store(){
	const todosLi = document.querySelectorAll('li');
	const todos = [];
	todosLi.forEach(todo =>{
		todos.push(todo.innerText);
	});
	localStorage.setItem('todos', JSON.stringify(todos));
}


input.addEventListener('keypress', (e) => {
	if(e.keyCode === 13 && input.value !== ''){
		addToDo();
		store()
	}
})

window.addEventListener('DOMContentLoaded' , () =>{
	const todosLS = JSON.parse(localStorage.getItem("todos"));
	todosLS.forEach(todo => {
		addToDo(todo);
	})
})


function addToDo(todo){
	var value = input.value
	if (todo){
		var value = todo;
	}	
	const li = document.createElement('li');
	li.className = 'todo';
	li.textContent = `${value}`;
	document.querySelector('ul').append(li);
	input.value = '';
	if (true){
			li.addEventListener('click', () =>{
					li.classList.toggle('underline');
			});
			li.addEventListener('contextmenu' ,(e) =>{
				if(e.which === 3){
					e.preventDefault();
					li.remove()
					store();	
				}
			});	
	}
}















