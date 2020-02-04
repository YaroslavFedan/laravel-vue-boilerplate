<template>
  <div class="page-wrapper">
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from "../components/Todo/TodoList";

export default {
  name: "todo",
  components: {
    TodoList
  }
};
</script>

