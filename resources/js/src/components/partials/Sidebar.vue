<template>
  <v-navigation-drawer :mini-variant="mini" absolute permanent app>
    <v-list>
      <v-list-item class="px-2 mt-15" :class="{ 'mt-max' : !desktop}">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">Sandra Adams</v-list-item-title>
          <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

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
