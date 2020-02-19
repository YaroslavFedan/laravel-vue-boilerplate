<template>
  <v-container>
    <partials-navbar />
    <partials-sidebar :items="menuItems" />
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
import Loading from "@/mixins/loading.mixin";

export default {
  mixins: [Loading],
  data() {
    return {
      isMini: false,
      initData: {},
      menuItems: [
        {
          title: "Home",
          icon: "mdi-home-city",
          name: "home",
          exact: true
        }
      ]
    };
  },
  mounted() {
    if (!Object.keys(this.$store.getters["user/info"]).length) {
      this.$store.dispatch("user/fetchInfo");
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


