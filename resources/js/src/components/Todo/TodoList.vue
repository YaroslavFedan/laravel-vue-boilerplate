<template>
  <v-layout align-center justify-center class="mt-12">
    <v-flex xs12 sm8 md4>
      <v-card :loading="loading">
        <v-card-title primary-title>Task list</v-card-title>
        <v-card-text>
          <todo-form></todo-form>
          <v-list>
            <v-list-item-group>
              <transition-group
                enter-active-class="animated fadeInUp"
                leave-active-class="animated fadeOutDown"
              >
                <todo-item
                  v-for="todo in todosFiltered"
                  :key="todo.id"
                  :todo="todo"
                  :checkAll="!anyRemaining"
                ></todo-item>
              </transition-group>
            </v-list-item-group>
          </v-list>
        </v-card-text>

        <v-card-actions>
          <div class="extra-container mr-6 ml-6">
            <todo-check-all></todo-check-all>
            <todo-items-remaining></todo-items-remaining>
          </div>
        </v-card-actions>

        <v-card-actions>
          <div class="extra-container mr-6 ml-6">
            <todo-filtered></todo-filtered>
            <div>
              <transition name="fade">
                <todo-delete-completed></todo-delete-completed>
              </transition>
            </div>
          </div>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoCheckAll from "./TodoCheckAll";
import TodoItemsRemaining from "./TodoItemsRemaining";
import TodoFiltered from "./TodoFiltered";
import TodoDeleteCompleted from "./TodoDeleteCompleted";

export default {
  name: "todo-list",
  components: {
    TodoForm,
    TodoItem,
    TodoCheckAll,
    TodoItemsRemaining,
    TodoFiltered,
    TodoDeleteCompleted
  },
  computed: {
    anyRemaining() {
      return this.$store.getters["todo/anyRemaining"];
    },
    todosFiltered() {
      return this.$store.getters["todo/todosFiltered"];
    }
  },
  created() {
    this.$store.dispatch("todo/retrieveTodos");
  }
};
</script>

<style  lang="scss">
a,
input,
button {
  &:hover,
  &:focus {
    outline: none !important;
  }
}
.fade-enter-active,
.fade-leave-active {
  opacity: 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
