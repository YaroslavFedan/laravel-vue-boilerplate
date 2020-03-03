<template>
  <v-skeleton-loader
    :loading="!name"
    class="mx-auto"
    height="70px"
    type="list-item-avatar-two-line"
  >
    <v-list-item two-line>
      <v-list-item-avatar>
        <img :src="avatar" :alt="name" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{name}}</v-list-item-title>
        <v-list-item-subtitle>{{email}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-skeleton-loader>
</template>

<script>
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "user/getProfileField",
  mutationType: "user/updateProfileField"
});

export default {
  computed: {
    ...mapFields(["email", "name", "avatar"])
  }
};
</script>
<style lang="scss" scoped>
.v-list-item {
  &__avatar {
    margin-left: -8px !important;
  }
}
</style>
