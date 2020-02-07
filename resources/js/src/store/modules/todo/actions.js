export default {
  retrieveTodos(context) {
    return new Promise((resolve, reject) => {
      axios
        .get("/todos")
        .then(response => {
          context.commit("RETRIEVE_TODOS", response.data);
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  },
  addTodo({ commit }, title) {
    return new Promise((resolve, reject) => {
      axios
        .post("/todos", {
          title,
          completed: false
        })
        .then(response => {
          commit("ADD_TODO", response.data);
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  },
  updateTodo({ commit }, todo) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`/todos/${todo.id}`, todo)
        .then(response => {
          commit("UPDATE_TODO", response.data);
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  },
  deleteTodo({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/todos/${id}`)
        .then(response => {
          commit("DELETE_TODO", id);
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  },
  updateFilter({ commit }, filter) {
    commit("UPDATE_FILTER", filter);
  },
  allChecked({ commit }, checked) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`/todosCheckAll/`, { completed: checked })
        .then(response => {
          commit("ALL_CHECKED", checked);
          resolve(response);
        })
        .catch(error => reject(error));
    });
  },
  deleteCompleted({ commit, state }) {
    const completed = state.todos.filter(t => t.completed).map(t => t.id);

    return new Promise((resolve, reject) => {
      axios
        .delete("todosDeleteCompleted", {
          data: {
            todos: completed
          }
        })
        .then(response => {
          commit("DELETE_COMPLETED");
          resolve(response);
        })
        .catch(error => reject(error));
    });
  }
};
