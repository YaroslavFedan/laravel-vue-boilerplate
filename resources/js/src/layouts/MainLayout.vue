<template>
  <div>
    <Navbar />
    <Sidebar :items="menuItems" />

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
        <v-btn class="mx-2" fab bottom right fixed dark color="primary" >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Sidebar from "@/components/partials/Sidebar";
import Navbar from "@/components/partials/Navbar";
export default {
  components: {
    Sidebar,
    Navbar
  },
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
  }
};
</script>
<style lang="scss" >
.cxlt-toastr-container {
  margin-top: 70px;
}
</style>


