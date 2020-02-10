<template>
  <v-col cols="12">
    <v-text-field
      dense
      @keyup.enter="onAddTodo"
      label="What needs to be done"
      hint="Write a task and press Enter."
      name="newTodo"
      prepend-icon="edit"
      type="text"
      v-model="newTodo"
      :counter="255"
      :rules="todoRules"
      :error-messages="checkError('title')"
      ref="input"
      required
    ></v-text-field>
  </v-col>
</template>

<script>
import CheckErrors from "../../mixins/check-errors.mixin";

export default {
  name: "todo-form",
  mixins: [CheckErrors],
  data() {
    return {
      newTodo: "",
      todoRules: [
        v => !!v || "Todo is required",
        v => v.length <= 255 || "Todo must be less than 10 characters"
      ],
      messageSuccess: {
        show: true,
        color: "success",
        text: "New task successfully created"
      }
    };
  },
  methods: {
    onAddTodo() {
      if (this.$refs.input.validate()) {
        this.$emit("onLoading", true);

        this.$store
          .dispatch("todo/addTodo", this.newTodo)
          .then(response => {
            this.$emit("onLoading", false);
            this.clearErrors();
            this.$store.dispatch("updateNotice", this.messageSuccess);
          })
          .catch(error => {
            this.$emit("onLoading", false);
            this.serverErrors = error.response.data.errors;
          });
      }
    },
    clearErrors() {
      this.$refs.input.reset();
      this.$refs.input.blur();
      this.newTodo = "";
      this.serverErrors = {};
    }
  }
};
</script>

<style>
</style>
