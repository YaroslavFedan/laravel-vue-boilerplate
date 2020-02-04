<template>
  <v-layout align-center justify-center class="page-wrapper">
    <v-flex xs12 sm8 md4>
      <v-card :loading="loading">
        <v-card-title primary-title>Registration</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="onRegister" ref="form" id="register-form" lazy-validation>
            <v-text-field
              id="name"
              label="Name"
              name="name"
              prepend-icon="person"
              type="text"
              v-model="form.name"
              :rules="nameRules"
              :error-messages="checkError('name')"
              required
            ></v-text-field>

            <v-text-field
              id="email"
              label="Email"
              name="email"
              prepend-icon="email"
              type="email"
              v-model="form.email"
              :rules="emailRules"
              :error-messages="checkError('email')"
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
              :error-messages="checkError('password')"
              required
            ></v-text-field>

            <v-text-field
              id="password_confirmation"
              label="Confirm password"
              name="password_confirmation"
              prepend-icon="lock"
              type="password"
              v-model="form.password_confirmation"
              :rules="passwordConfirmationRules"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            type="submit"
            color="primary"
            form="register-form"
            :disabled="disabled"
          >Registration</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import CheckErrors from "../../mixins/CheckErrors";
import Loading from "../../mixins/Loading";

export default {
  name: "register-form",
  mixins: [CheckErrors, Loading],
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      nameRules: [v => !!v || "The name field is required."],
      emailRules: [
        v => !!v || "The email field is required.",
        v => /.+@.+\..+/.test(v) || "The email must be a valid email address."
      ],
      passwordRules: [v => !!v || "The password field is required."],
      passwordConfirmationRules: [
        v => !!v || "The password confirmation field is required.",
        v => v === this.form.password || "The passwords does not match."
      ],
      messageSuccess: {
        show: true,
        color: "success",
        text: "Registration completed successfully"
      }
    };
  },
  methods: {
    onRegister() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("setLoading", true);

        this.$store
          .dispatch("auth/register", this.form)
          .then(response => {
            this.$store.dispatch("setLoading", false);
            this.$router.push({
              name: "login",
              params: { message: this.messageSuccess }
            });
          })
          .catch(error => {
            this.$store.dispatch("setLoading", false);
            this.serverErrors = error.response.data.errors;
          });
      }
    }
  }
};
</script>
