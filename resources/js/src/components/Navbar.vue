<template>
  <v-app-bar class="primary" :prominent.sync="prominent" dark app>
    <v-app-bar-nav-icon @click.stop="toggle"></v-app-bar-nav-icon>
    <v-toolbar-title>{{pageTitle}}</v-toolbar-title>

    <v-spacer></v-spacer>

    <div class="menu__picker">
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">{{date | date('datetime')}}</v-btn>
        </template>
      </v-menu>
    </div>

    <v-spacer></v-spacer>

    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-account-tie</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item :to="{name:'profile'}">
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "navbar",
  data: () => ({
    date: new Date(),
    interval: null,
    picker: {
      date: new Date().toISOString().substr(0, 10),
      title: true,
      locale: "ru"
    }
  }),
  computed: {
    pageTitle() {
      return this.$route.meta.pageTitle || null;
    },
    prominent() {
      return this.$vuetify.breakpoint.mdAndDown;
    }
  },
  methods: {
    toggle() {
      eventBus.$emit("toggleNavbar");
    },
    logout() {

      this.$store.dispatch("auth/logout").then(response => this.$router.push({ name: "login" }));
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="scss">
header {
  left: 0px !important;
}
.menu {
  &__picker {
    top: 70px !important;
    left: 50% !important;
    margin-left: -130px;
  }
}
</style>
