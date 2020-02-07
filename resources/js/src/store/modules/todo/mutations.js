export default {
  RETRIEVE_TODOS: (state, todos = []) => {
    state.todos = todos;
  },
  ADD_TODO: (state, todo) => {
    state.todos.push({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      editing: false
    });
  },
  UPDATE_TODO: (state, todo) => {
    const index = state.todos.findIndex(t => t.id == todo.id);
    state.todos.splice(index, 1, {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      editing: todo.editing
    });
  },
  DELETE_TODO: (state, id) => {
    const index = state.todos.findIndex(t => t.id === id);
    state.todos.splice(index, 1);
  },
  UPDATE_FILTER: (state, filter) => {
    state.filter = filter;
  },
  ALL_CHECKED: (state, checked) => {
    state.todos.map(t => (t.completed = checked));
  },
  DELETE_COMPLETED: state => {
    state.todos = state.todos.filter(t => !t.completed);
  }
};
