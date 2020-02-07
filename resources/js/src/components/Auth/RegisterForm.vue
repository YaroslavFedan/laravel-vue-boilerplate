<template>
  <v-card :loading="loading" class="elevation-12 pl-5 pr-5">
    <v-card-title primary-title>Home accounting</v-card-title>

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
          v-model="form.password"
          :rules="passwordRules"
          :error-messages="checkError('password')"
          :type="show_password ? 'text' : 'password'"
          @click:append="show_password = !show_password"
          :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
          required
        ></v-text-field>

        <v-text-field
          id="password_confirmation"
          label="Confirm password"
          name="password_confirmation"
          prepend-icon="lock"
          v-model="form.password_confirmation"
          :rules="passwordConfirmationRules"
          :type="show_password_confirmation ? 'text' : 'password'"
          @click:append="show_password_confirmation = !show_password_confirmation"
          :append-icon="show_password_confirmation ? 'mdi-eye' : 'mdi-eye-off'"
          required
        ></v-text-field>

        <v-checkbox
        v-model="form.rules"
        :rules="agreeRules"
        label="I agree with the rules"
        required
      ></v-checkbox>

      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn
        block
        type="submit"
        color="primary"
        form="register-form"
        :loading="loading"
      >Registration</v-btn>
    </v-card-actions>

    <v-card-actions>
 <v-spacer></v-spacer>
      <div class="pt-2 pb-2">
        Already have an account?
        <router-link :to="{name:'login'}" upper>Sign in</router-link>
      </div>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import CheckErrors from "../../mixins/check-errors.mixin";
import Loading from "../../mixins/loading.mixin";

export default {
  name: "register-form",
  mixins: [CheckErrors, Loading],
  data() {
    return {
      show_password: false,
      show_password_confirmation: false,
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        rules:false
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
      agreeRules: [v => !!v || 'You must agree to the rules!'],
      messageSuccess: {
        title: "Registered Successfully!",
        message: "You can login here.",
        type: "success"
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
            this.$store.dispatch("setMessage", this.messageSuccess);
            this.$router.push({ name: "login" });
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
