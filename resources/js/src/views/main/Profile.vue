<template>
  <material-card color="success" title="Profile">
    <header>
      <v-tabs grow centred class="mt-4" :vertical="$vuetify.breakpoint.smAndDown">
        <v-tab :to="{name:'edit-profile'}" :exact="true">edit</v-tab>
        <v-tab :to="{name:'profile-security'}">security</v-tab>
        <v-tab :to="{name:'change-password'}">change password</v-tab>
      </v-tabs>
    </header>
    <router-view></router-view>
  </material-card>
</template>

<script>
export default {
  data: () => ({
    mobile: false
  }),
  methods: {
    onResize() {}
  }
};
</script>
