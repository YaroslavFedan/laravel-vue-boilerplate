export default {
  data: function() {
    return {
      serverErrors: {}
    };
  },
  methods: {
    checkError(field) {
      return this.serverErrors.hasOwnProperty(field)
        ? this.serverErrors[field]
        : [];
    }
  }
};
