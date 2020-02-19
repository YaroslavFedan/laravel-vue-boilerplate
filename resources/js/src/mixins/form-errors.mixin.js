export default {
  computed: {
    errors() {
      return this.$store.getters["formErrors"];
    }
  },
  methods: {
    formError(field) {
      return this.errors.hasOwnProperty(field) ? this.errors[field] : [];
    }
  },
  mounted() {
    this.$store.dispatch("clearError");
  }
};
