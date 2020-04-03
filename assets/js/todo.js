let todos = ["Gaming", "Sleep", "Eat", "Travel"];

let loopingTodos = todo => {
  let todoResult = "";

  for (let index = 0; index < todo.length; index++) {
    todoResult += `${index + 1}. ${todo[index]} \n`;
  }

  alert(todoResult);
};

let showTodos = todo => {
  loopingTodos(todo);

  let isAddTodo = confirm("Do You want add todo ?");

  if (isAddTodo === true) {
    let newTodo = prompt("Fill your todo here", "Todo");

    todos.push(newTodo);

    loopingTodos(todo);
  } else if (isAddTodo === false) {
    editTodo(todo);
  }
};

let editTodo = todo => {
  let isEditTodo = confirm("Do You want to edit todo ?");

  if (isEditTodo === true) {
    let indexTodo = prompt("Select todos number");
    let editTodo = prompt("Insert edit todo");

    todos.splice(indexTodo - 1, 1, editTodo);

    loopingTodos(todo);
  }
};

showTodos(todos);
