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

    <v-list dense v-for="item in items" :key="item.title">
      <v-list-item :to="{name:item.name}" :exact="item.exact" v-if="!item.children">
        <template v-if="!item.children">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>

      <v-list-group v-else :prepend-icon="item.icon">
        <template v-slot:activator>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </template>

        <v-list-item
          v-for="child in item.children"
          :key="child.title"
          :to="{name:child.name}"
          :exact="child.exact"
        >
          <v-list-item-title v-text="child.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["items", "value"],
  data() {
    return {
      clipped: true,
      drawer: true,
      miniVariant: false,
      temporary: this.isMobile()
    };
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
