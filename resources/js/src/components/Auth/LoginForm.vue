<template>
  <v-layout align-center justify-center class="page-wrapper">
    <v-flex xs12 sm8 md4>
      <v-card :loading="loading">
        <v-card-title primary-title>Login</v-card-title>

        <v-card-text>
          <v-form @submit.prevent="onLogin" ref="form" id="login-form" lazy-validation>
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
              type="password"
              v-model="form.password"
              :rules="passwordRules"
              required
            ></v-text-field>
            <v-alert dense outlined type="error" v-if="serverError">{{serverError}}</v-alert>
          </v-form>
        </v-card-text>
        <v-card-actions justify-center>
          <v-spacer></v-spacer>
          <v-btn type="submit" color="primary" form="login-form" :disabled="disabled">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Loading from "../../mixins/Loading";

export default {
  name: "login-form",
  mixins: [Loading],
  data() {
    return {
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
    onLogin() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("setLoading", true);

        this.$store
          .dispatch("auth/login", this.form)
          .then(response => {
            this.$store.dispatch("setLoading", false);
            this.$router.push({ name: "todo" });
          })
          .catch(error => {
            this.$store.dispatch("setLoading", false);
            this.serverError = error.response.data;
          });
      }
    }
  },
  mounted() {
    const { message } = this.$route.params;
    if (message) {
      this.$store.dispatch("updateNotice", message);
    }
  }
};
</script>
