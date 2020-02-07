<template>
  <v-btn
    text
    small
    class="warning"
    v-if="showCompletedButton"
    @click="deleteCompleted"
  >Clear completed</v-btn>
</template>

<script>
export default {
  name: "todo-delete-completed",
  data() {
    return {
      deleteCompletedSuccess: {
        show: true,
        color: "success",
        text: "The tasks list update was successful"
      }
    };
  },
  computed: {
    showCompletedButton() {
      return this.$store.getters["todo/showCompletedButton"];
    }
  },
  methods: {
    deleteCompleted() {
      this.$emit("onLoading", true);
      this.$store
        .dispatch("todo/deleteCompleted")
        .then(res => {
          this.$emit("onLoading", false);
          this.$store.dispatch("updateNotice", this.deleteCompletedSuccess);
        })
        .catch(error => {
          this.$emit("onLoading", false);
          this.$store.dispatch("updateNotice", {
            show: true,
            color: "danger",
            text: error.response.data
          });
        });
    }
  }
};
</script>

