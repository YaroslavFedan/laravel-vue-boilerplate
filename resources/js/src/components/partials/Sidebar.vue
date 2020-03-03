<template>
  <v-navigation-drawer
    :mini-variant="miniVariant"
    :clipped="clipped"
    :permanent="$vuetify.breakpoint.mdOnly"
    :temporary="$vuetify.breakpoint.smAndDown"
    v-model="drawer"
    app
  >
    <partials-account-badge></partials-account-badge>

    <v-divider></v-divider>
    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="{name:item.name}"
        :exact="item.exact"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      miniVariant: false,
      temporary: this.isMobile()
    };
  },
  computed: {
    items() {
      return this.$store.getters.navbar;
    }
  },
  methods: {
    toggleDrawer() {
      let mobile = this.isMobile();

      if (mobile) {
        this.drawer = !this.drawer;
        this.miniVariant = false;
      } else {
        this.drawer = true;
        this.miniVariant = !this.miniVariant;
      }
    },
    isMobile() {
      return window.innerWidth < 993;
    }
  },
  mounted() {
    eventBus.$on("toggleNavbar", this.toggleDrawer);
  }
};
</script>
<style lang="scss">
.v-navigation-drawer {
  top: 64px !important;
  max-height: calc(100% - 64px) !important;
  &--is-mobile {
    top: 0 !important;
    max-height: 100% !important;
  }
}
</style>
