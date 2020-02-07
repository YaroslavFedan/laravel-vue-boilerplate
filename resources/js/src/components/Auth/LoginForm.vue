<template>
  <v-card :loading="loading" class="elevation-12 pl-5 pr-5">
    <v-card-title primary-title>Home accounting</v-card-title>

    <v-card-text>
      <v-form @submit.prevent="submitHandler" ref="form" id="login-form" lazy-validation>
        <v-text-field
          id="email"
          label="Email"
          name="email"
          prepend-icon="email"
          type="email"
          v-model="form.username"
          :rules="emailRules"
          required
        ></v-text-field>

        <v-text-field
          id="password"
          label="Password"
          name="password"
          prepend-icon="lock"
          v-model="form.password"
          :rules="passwordRules"
          :type="show_password ? 'text' : 'password'"
          @click:append="show_password = !show_password"
          :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
          required
        ></v-text-field>
        <v-alert dense outlined type="error" v-if="serverError">{{serverError}}</v-alert>
      </v-form>
    </v-card-text>

    <v-card-actions justify-center>
      <v-spacer></v-spacer>
      <v-btn type="submit" block color="primary" :loading="loading" form="login-form">Login</v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-spacer></v-spacer>
      <div class="pt-2 pb-2 mr-1">
        No account?
        <router-link :to="{name:'register'}">Sign up</router-link>
      </div>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import Loading from "../../mixins/loading.mixin";

export default {
  name: "login-form",
  mixins: [Loading],
  data() {
    return {
      show_password: false,
      form: {
        username: "",
        password: ""
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [v => !!v || "Password is required"],
      serverError: ""
    };
  },
  methods: {
    async submitHandler() {
      if (this.$refs.form.validate()) {

        this.$store.dispatch("setLoading", true);
        try {
          await this.$store.dispatch("auth/login", this.form);
        } catch (error) {
          this.$store.dispatch("setLoading", false);
          this.serverError = error.response.data;
        }

        this.$router.push({ name: "home" });
        // try{
        //    console.log('fetching start');
        //   const user = await this.$store.dispatch("auth/fetchUser");
        //   console.log('user', user);
        //   console.log('fetchUser success');
        // }catch( error ){
        //     console.log(error)
        // }
        //






        // this.$store
        //   .dispatch("auth/login", this.form)
        //   .then(response => {
        //     this.$store.dispatch("setLoading", false);

        //     this.$router.push({ name: "home" });
        //   })
        //   .catch(error => {
        //     this.$store.dispatch("setLoading", false);
        //     this.serverError = error.response.data;
        //   });
      }
    }
  }
};
</script>
