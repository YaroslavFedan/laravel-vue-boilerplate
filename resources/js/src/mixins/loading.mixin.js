export default {
  computed: {
    loading() {
      return this.$store.getters["loading"];
    },
    disabled(){
      return this.loading;
    }
  },
}
