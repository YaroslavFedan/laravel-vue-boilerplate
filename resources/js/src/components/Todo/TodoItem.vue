<template>
  <v-list-item>
    <v-list-item-action v-if="!editing">
      <v-checkbox v-model="completed" @change="doneEdit"></v-checkbox>
    </v-list-item-action>

    <v-list-item-content>
      <v-list-item-title v-if="!editing" v-text="title" :class="{ completed : completed }"></v-list-item-title>

      <v-text-field
        v-if="editing"
        @blur="doneEdit"
        @keyup.enter="doneEdit"
        @keyup.escape="cancelEdit"
        hint="Key press Escape - cancel editing. Key press Enter - finish edit."
        name="title"
        type="text"
        v-model="title"
        :counter="255"
        :rules="todoRules"
        :error-messages="checkError('title')"
        ref="input"
        required
        autofocus
      ></v-text-field>
    </v-list-item-content>

    <v-list-item-icon v-if="!editing">
      <v-icon color="green mr-2 ml-2" @click="editTodo">edit</v-icon>
      <v-icon color="red mr-2 ml-2" @click="removeTodo(id)">delete</v-icon>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
import CheckErrors from "../../mixins/check-errors.mixin";

export default {
  name: "todo-item",
  mixins: [CheckErrors],
  props: {
    todo: {
      type: Object,
      required: true
    },
    checkAll: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      editing: this.todo.editing,
      beforeEditCache: "",
      todoRules: [
        v => !!v || "Title is required",
        v => v.length <= 255 || "Todo must be less than 10 characters"
      ],
      message: {
        updateSuccess: {
          show: true,
          color: "success",
          text: "The task update was successful"
        },
        deleteSuccess: {
          show: true,
          color: "success",
          text: "The task delete was successful"
        }
      }
    };
  },
  watch: {
    checkAll() {
      this.completed = this.checkAll ? true : this.todo.completed;
    }
  },
  methods: {
    removeTodo(id) {
      this.$store
        .dispatch("todo/deleteTodo", id)
        .then(res => {
          this.$store.dispatch("updateNotice", this.message.deleteSuccess);
        })
        .catch(error => {
          this.$store.dispatch("updateNotice", {
            show: true,
            color: "danger",
            text: error.response.data
          });
        });
    },
    doneEdit() {
      this.$emit("onLoading", true);
      this.$store
        .dispatch("todo/updateTodo", {
          id: this.id,
          title: this.title,
          completed: this.completed,
          editing: this.editing
        })
        .then(res => {
          this.$emit("onLoading", false);
          this.editing = false;
          this.$store.dispatch("updateNotice", this.message.updateSuccess);
        })
        .catch(error => {
          this.$emit("onLoading", false);
          this.serverErrors = error.response.data.errors;
        });
    },
    editTodo() {
      this.beforeEditCache = this.title;
      this.editing = true;
    },
    cancelEdit() {
      this.title = this.beforeEditCache;
      this.editing = false;
    }
  }
};
</script>
<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
