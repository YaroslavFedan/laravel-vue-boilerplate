<template>
  <v-app id="app">
    <div>
      <v-app-bar color="primary" dense dark>
        <v-toolbar-title>
          <router-link to="/" class="white--text tnd">Laravel Vue App</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn text :to="{ name: 'todo' }" v-if="loggedIn">Todo</v-btn>
        <v-btn text :to="{ name: 'login' }" v-if="!loggedIn">Login</v-btn>
        <v-btn text :to="{ name: 'register' }" v-if="!loggedIn">Register</v-btn>
        <v-btn text @click.prevent="logout" v-if="loggedIn">Logout</v-btn>
      </v-app-bar>
    </div>
    <transition
      name="router-animation"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>

    <v-snackbar
      top
      left
      :timeout="notice.timeout"
      v-model="notice.show"
      :color="notice.color"
      :multi-line="notice.multiLine"
    >
      {{ notice.text }}
      <v-btn dark text @click.native="notice.show = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  computed: {
    notice() {
      return this.$store.getters["notice"];
    },
    loggedIn() {
      return this.$store.getters["auth/loggedIn"];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("todo/clearTodos");
      this.$store.dispatch("auth/logout").then(response => {
        this.$router.push("/").catch(err => {});
      });
    }
  }
};
</script>
<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
.tnd {
  text-decoration: none !important;
}
.v-snack--top {
  top: 60px !important;
}
.page-wrapper {
  animation-duration: 0.2s;
}
</style>
