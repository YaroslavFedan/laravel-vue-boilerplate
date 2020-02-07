<template>
  <div>

    <Navbar />
    <Sidebar :items="menuItems"/>

    <v-content app>
      <v-container>
        <transition
          name="router-animation"
          :duration="200"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
          <router-view></router-view>
        </transition>

        <v-btn class="mx-2" fab bottom right fixed dark color="primary" :to="{name:'record'}">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-container>
    </v-content>

  </div>
</template>
<script>
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
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
          path: "/",
          exact: true
        },
        {
          title: "Categories",
          icon: "mdi-shape",
          name: "categories",
          path: "/categories"
        },
        {
          title: "History",
          icon: "mdi-history",
          name: "history",
          path: "/history"
        },
        {
          title: "Planning",
          icon: "mdi-calendar-clock",
          name: "planning",
          path: "/planning"
        },
        {
          title: "New record",
          icon: "mdi-grease-pencil",
          name: "record",
          path: "/record"
        },
        {
          title: "Tasks",
          icon: "mdi-clipboard-list-outline",
          name: "task",
          path: "/task"
        },
        {
          title: "My Account",
          icon: "mdi-account",
          name: "profile",
          path: "/profile"
        }
      ],
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

