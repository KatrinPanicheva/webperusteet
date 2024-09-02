// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here


const lista = document.querySelector('#target');
const addBtn = document.querySelector('.add-btn');
const dialogi = document.querySelector('dialog');

const buildHTML = function (todo, checkAtrr) {
  return `<li id="list-${todo.id}">
          <button id="delete-${todo.id}">x</button>
          <input type"ckeckbox" id="todo-${todo.id}" ${checkAtrr}>
          <label for="todo-${todo.id}">${todo.task}</label>
          </li>`;
}

const deleteBtnListener = function(todo) {
  const deleteBtn = document.querySelector(`#delete-${todo.id}`);
  deleteBtn.addEventListener('click', function() {
    const todoIndex = todoList.findIndex(function (deleteItem) {
      return deleteItem.id === todo.id;
    });
    todoList.splice(todoIndex, 1);
    lista.removeChild(document.querySelector(`#list-${todo.id}`));
    console.log('Listalta poistettu' + todo.id);
  })
}

const checkboxBtnListener = function (todo){
  const checkbox = document.querySelector(`#todo-${todo.id}`);
  checkbox.addEventListener('click', function () {
    todo.completed = !todo.completed;
    console.log(todo);
  });
}

for (let todo of todoList) {
  let checkAtrr = '';
  if (todo.completed === true) {
    checkAtrr = 'checked';
  } else {
    todo.completed === false;
    checkAtrr = 'unchecked';
  }
  console.log(todo);

  let html = buildHTML(todo, checkAtrr);

  lista.insertAdjacentHTML('beforeend', html);


  deleteBtnListener(todo);
  checkboxBtnListener(todo);
}

addBtn.addEventListener('click', function () {
  dialogi.showModal();
});


const save = document.querySelector('#save-btn');
save.addEventListener('click', function () {
  const id = todoList[todoList.concat.length - 1].id + 1;
  let todo = {
    id: id,
    task: document.querySelector('#input').value,
    completed: false,
   };
   let html = buildHTML(todo, 'unchecked');
   lista.insertAdjacentHTML('beforeend', html);
   todoList.push(todo);
   deleteBtnListener(todo);
   checkboxBtnListener(todo);
   dialogi.close();
});

