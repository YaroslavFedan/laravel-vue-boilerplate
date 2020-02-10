<template>
  <v-app>
    <component :is="layout">
      <router-view></router-view>
    </component>
  </v-app>
</template>


<script>
import AuthLayout from "./src/layouts/AuthLayout";
import MainLayout from "./src/layouts/MainLayout";

export default {
  name: "app",
  components: {
    AuthLayout,
    MainLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "auth") + "-layout";
    },
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "UPDATE_MESSAGE") {
        const { type } = state.message;
        this.$toast[type](state.message);
      }
    });
  }
};
</script>
<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
html {
  overflow-y: auto !important;
}
</style>
