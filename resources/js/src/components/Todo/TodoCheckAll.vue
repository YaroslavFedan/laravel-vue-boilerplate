<template>
  <div>
    <v-checkbox :checked="!anyRemaining" @change="allChecked($event)" label="Checked All"></v-checkbox>
  </div>
</template>

<script>
export default {
  name: "todo-check-all",
  data() {
    return {
      updateSuccess: {
        show: true,
        color: "success",
        text: "The tasks list update was successful"
      }
    };
  },
  computed: {
    anyRemaining() {
      return this.$store.getters["todo/anyRemaining"];
    }
  },
  methods: {
    allChecked(val) {
      this.$store
        .dispatch("todo/allChecked", val)
        .then(res => {
          this.$store.dispatch("updateNotice", this.updateSuccess);
        })
        .catch(error => {
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
