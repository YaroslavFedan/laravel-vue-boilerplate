<template>
  <v-navigation-drawer :mini-variant="mini" absolute permanent app>

    <v-list>
      <v-list-item class="px-2">
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

    <v-list dense class="mt-2">
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
  name: "sidebar",
  props: ["items", "value"],
  data: () =>({
    mini: false
  }),
  computed:{

  },
  mounted(){
    eventBus.$on('toggleNavbar', ()=>{ this.mini = !this.mini})
  }
};
</script>
<style lang="scss">
.v-navigation-drawer {
  top: 64px !important;
  min-height: calc(100% - 64px) !important;
}
</style>
