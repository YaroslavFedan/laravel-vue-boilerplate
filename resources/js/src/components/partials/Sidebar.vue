<template>
  <v-navigation-drawer :mini-variant="mini" absolute permanent app>

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
import desktop from "@/mixins/desktop.mixin";
export default {
  name: "sidebar",
  mixins: [desktop],
  props: ["items", "value"],
  data: () => ({
    mini: null
  }),
  computed: {},
  mounted() {
    if (this.mini === null) {
      this.mini = !this.desktop;
    }
    eventBus.$on("toggleNavbar", () => {
      this.mini = !this.mini;
    });
  }
};
</script>
<style lang="scss">
nav {
  top: 64px !important;
  max-height: calc(100% - 64px) !important;
}
.mt-max {
  margin-top: 60px;
}
</style>
