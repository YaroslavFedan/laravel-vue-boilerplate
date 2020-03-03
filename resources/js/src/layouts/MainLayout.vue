<template>
  <v-container>
    <partials-navbar />
    <partials-sidebar />
    <v-content app>
      <v-container>
        <v-responsive class="mx-auto overflow-visible">
          <transition
            name="router-animation"
            :duration="200"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in"
          >
            <router-view></router-view>
          </transition>
        </v-responsive>
        <!-- <v-btn class="mx-2" fab bottom right fixed dark color="primary">
            <v-icon dark>mdi-plus</v-icon>
        </v-btn>-->
      </v-container>
    </v-content>
  </v-container>
</template>
<script>
export default {
  mounted() {
    if (!Object.keys(this.$store.getters["user/profile"]).length) {
      this.$store.dispatch("user/fetchProfile");
    }
  }
};
</script>
<style lang="scss" >
.cxlt-toastr-container {
  top: 15px !important;
  .toast {
    opacity: 1 !important;
  }
  .toast-icon {
    top: 17px !important;
  }
}
</style>


