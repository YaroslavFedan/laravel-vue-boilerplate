<template>
  <v-app-bar class="primary" :prominent.sync="mobile" dark app>
    <v-app-bar-nav-icon @click.stop="toggle"></v-app-bar-nav-icon>
    <v-toolbar-title v-if="!desktop">{{pageTitle}}</v-toolbar-title>

    <div class="datetime" :class="{'mini':!desktop}">
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
import desktop from "@/mixins/desktop.mixin";
export default {
  name: "navbar",
  mixins: [desktop],
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
    mobile() {
      return !this.desktop;
    }
  },
  methods: {
    toggle() {
      eventBus.$emit("toggleNavbar");
    },
    logout() {
      this.$store
        .dispatch("auth/logout")
        .then(response => this.$router.push({ name: "login" }));
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
.datetime {
  margin-left: 60px;
  &.mini {
    margin: 0 auto;
  }
}
</style>
