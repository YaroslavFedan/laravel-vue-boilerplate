<template>
  <div>
    <v-btn text small :class="{primary : filter == 'all'}" @click="changeFilter('all')">All</v-btn>
    <v-btn text small :class="{primary : filter == 'active'}" @click="changeFilter('active')">Active</v-btn>
    <v-btn text small :class="{primary : filter == 'completed'}" @click="changeFilter('completed')">Completed</v-btn>
  </div>
</template>

<script>
export default {
  name: "todo-filtered",
  computed: {
    filter() {
      return this.$store.state.todo.filter;
    }
  },
  methods: {
    changeFilter(filter) {
      this.$store.dispatch("todo/updateFilter", filter);
    }
  }
};
</script>

