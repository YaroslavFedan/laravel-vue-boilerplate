<template>
  <v-app-bar class="primary" dark app>
    <v-app-bar-nav-icon @click.native.stop="toggle"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <div class="datetime">
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
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item :to="{name:'profile-security'}">
          <v-list-item-title>Security</v-list-item-title>
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
  data: () => ({
    date: new Date(),
    interval: null
  }),
  methods: {
    toggle() {
      eventBus.$emit("toggleNavbar");
    },
    async logout() {
      try {
        await this.$store.dispatch("auth/logout");
        this.$router.push({ name: "login" });
      } catch (error) {
        this.$store.dispatch("setError", error);
      }
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
</style>
