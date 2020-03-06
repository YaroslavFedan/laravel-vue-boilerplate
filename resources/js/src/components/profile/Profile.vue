<template>
  <v-container border-top class="my-4">
    <profile-edit-profile v-if="!editAvatar"></profile-edit-profile>
    <profile-edit-avatar v-else></profile-edit-avatar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    editAvatar: false
  }),
  mounted() {
    eventBus.$on("toggleEditAvatar", () => {
      this.editAvatar = !this.editAvatar;
    });
  }
};
</script>

<style lang="scss" scoped>
.v-avatar {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
