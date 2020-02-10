export default {
  computed: {
    desktop() {
      return !this.$vuetify.breakpoint.mdAndDown;
    }
  },
}
