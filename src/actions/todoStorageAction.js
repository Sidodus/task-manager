export const getStorageTodos = () => {
  if (
    localStorage.getItem("todos") === null ||
    localStorage.getItem("todos") === ""
  ) {
    localStorage.setItem("todos", JSON.stringify([]));
  }

  if (
    localStorage.getItem("todos_length") === null ||
    localStorage.getItem("todos_length") === ""
  ) {
    localStorage.setItem("todos_length", JSON.stringify(0));
  }

  const data = JSON.parse(localStorage.getItem("todos"));

  //  Save Length Of Todo
  localStorage.setItem("todos_length", JSON.stringify(data.length));

  if (
    localStorage.getItem("completedTodos") === null ||
    localStorage.getItem("completedTodos") === ""
  ) {
    localStorage.setItem("completedTodos", JSON.stringify([]));
  }

  if (
    localStorage.getItem("completedTodos_length") === null ||
    localStorage.getItem("completedTodos_length") === ""
  ) {
    localStorage.setItem("completedTodos_length", JSON.stringify(0));
  }

  return data;
};

export const getCompletedStorageTodos = () => {
  const data = JSON.parse(localStorage.getItem("completedTodos"));
  //  Save Length Of Todo
  localStorage.setItem("completedTodos_length", JSON.stringify(data.length));

  return data;
};

export const get_EditStorageTodo = site_ID => {
  const todos = getStorageTodos();
  // Filter Out Todo
  const newTodos = todos.filter(todo => todo.id === site_ID);

  return newTodos;
};

export const get_EditCompletedStorageTodo = site_ID => {
  const todos = getCompletedStorageTodos();
  // Filter Out Todo
  const newTodos = todos.filter(todo => todo.id === site_ID);

  return newTodos;
};

export const addStorageTodo = newTask => {
  const data = getStorageTodos();
  // Add New Task To List
  data.push(newTask);
  // Save To Storage
  localStorage.setItem("todos", JSON.stringify(data));

  return data;
};

export const addCompletedStorageTodo = newTask => {
  // debugger;
  const data = getCompletedStorageTodos();

  data.push(newTask);
  // Save To Storage
  localStorage.setItem("completedTodos", JSON.stringify(data));
  //  Save New Length Of Todo
  localStorage.setItem("completedTodos_length", JSON.stringify(data.length));

  return data;
};

export const updateStorageTodo = newTask => {
  const todos = getStorageTodos();
  const data = todos.filter(todo => todo.id !== newTask.id);
  // Add New Task To List
  data.push(newTask);
  // Save To Storage
  localStorage.setItem("todos", JSON.stringify(data));
  //  Save New Length Of Todo
  localStorage.setItem("todos_length", JSON.stringify(data.length));

  return data;
};

export const updateCompletedStorageTodo = newTask => {
  const todos = getCompletedStorageTodos();
  const data = todos.filter(todo => todo.id !== newTask.id);
  // Add New Task To List
  data.push(newTask);
  // Save To Storage
  localStorage.setItem("completedTodos", JSON.stringify(data));
  //  Save New Length Of Todo
  localStorage.setItem("completedTodos_length", JSON.stringify(data.length));

  return data;
};

export const deleteStorageTodo = id => {
  const todos = getStorageTodos();
  const data = todos.filter(todo => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(data));
  //  Save New Length Of Todo
  localStorage.setItem("todos_length", JSON.stringify(data.length));

  return data;
};

export const deleteCompletedStorageTodo = id => {
  const todos = getCompletedStorageTodos();
  const data = todos.filter(todo => todo.id !== id);
  localStorage.setItem("completedTodos", JSON.stringify(data));
  //  Save New Length Of Todo
  localStorage.setItem("completedTodos_length", JSON.stringify(data.length));

  return data;
};
