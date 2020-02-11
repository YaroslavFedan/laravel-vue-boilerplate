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
        <v-btn class="mx-2" fab bottom right fixed dark color="primary" :to="{name:'record'}">
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
        },
        {
          title: "Categories",
          icon: "mdi-shape",
          name: "categories"
        },
        {
          title: "History",
          icon: "mdi-history",
          name: "history"
        },
        {
          title: "Planning",
          icon: "mdi-calendar-clock",
          name: "planning"
        },
        {
          title: "New record",
          icon: "mdi-grease-pencil",
          name: "record"
        },
        {
          title: "Tasks",
          icon: "mdi-clipboard-list-outline",
          name: "task"
        },
        {
          title: "My Account",
          icon: "mdi-account",
          children: [
            {
              title: "Profile",
              name: "profile",
              exact: true
            },
            {
              title: "Security",
              name: "profile-security"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    // if(!Object.keys(this.$store.getters.user).length){
    //   //console.log(this.$store.getters.user)
    //   // this.$store.dispatch("auth/fetchUser").catch( error => {
    //   //     this.$router.push({name:"login"})
    //   // })
    // }
  }
};
</script>
<style lang="scss">
.cxlt-toastr-container {
  margin-top: 70px;
}
</style>


