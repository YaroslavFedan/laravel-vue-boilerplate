<template>
  <v-skeleton-loader :loading="!info.name" class="mx-auto" height="70px" type="list-item-avatar-two-line">
    <v-list-item two-line>
      <v-list-item-avatar>
        <img src="https://randomuser.me/api/portraits/women/81.jpg" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{info.name}}</v-list-item-title>
        <v-list-item-subtitle>{{info.email}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-skeleton-loader>
</template>

<script>
export default {

  computed: {
    info() {
      return this.$store.getters["user/info"] || false;
    },
  }
};
</script>
