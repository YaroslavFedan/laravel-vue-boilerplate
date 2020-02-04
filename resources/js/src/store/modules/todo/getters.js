

export default {
  remaining(state) {
   return state.todos.filter(t => !t.completed).length;
  },
  anyRemaining(state, getters) {
      return getters.remaining !== 0;
  },
  todosFiltered(state) {
      if (state.filter === "all") {
          return state.todos;
      } else if (state.filter === "active") {
          return state.todos.filter(t => !t.completed);
      } else if (state.filter === "completed") {
          return state.todos.filter(t => t.completed);
      }

      return state.todos;
  },
  showCompletedButton(state) {
    return state.todos.filter(t => t.completed).length > 0;
  }
}
