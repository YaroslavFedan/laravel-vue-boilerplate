<template>
  <v-form ref="form" @submit.prevent="submitHandler">
    <v-row>
      <v-spacer></v-spacer>
      <v-col :cols="10" :sm="8" :lg="6" class="my-12">
        <v-text-field
          label="Current password"
          v-model="form.current"
          :rules="[rules.min(6, form.current), rules.max(25, form.current)]"
          :type="show_current ? 'text' : 'password'"
          @click:append="show_current = !show_current"
          :append-icon="show_current ? 'mdi-eye' : 'mdi-eye-off'"
          :error-messages="formError('current')"
          required
        />

        <v-text-field
          label="New password"
          v-model="form.password"
          :rules="[rules.min(6, form.password), rules.max(25, form.password)]"
          :type="show_password ? 'text' : 'password'"
          @click:append="show_password = !show_password"
          :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
          :error-messages="formError('password')"
          required
        />

        <v-text-field
          label="Confirm new password"
          v-model="form.password_confirmation"
          :rules="[ rules.min(6, form.password_confirmation),
                    rules.max(25, form.password_confirmation),
                    rules.exact(form.password, form.password_confirmation)]"
          :type="show_password_confirmation ? 'text' : 'password'"
          @click:append="show_password_confirmation = !show_password_confirmation"
          :append-icon="show_password_confirmation ? 'mdi-eye' : 'mdi-eye-off'"
          :error-messages="formError('password_confirmation')"
          required
        />

        <v-flex xs12 mt-2 text-right>
          <v-btn type="submit" color="success" :loading="loading">Change password</v-btn>
        </v-flex>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-form>
</template>

<script>
import errors from "../../mixins/form-errors.mixin";
import loading from "@/mixins/loading.mixin";

export default {
  mixins: [errors, loading],
  data: () => ({
    show_current: false,
    show_password: false,
    show_password_confirmation: false,
    form: {
      current: "",
      password: "",
      password_confirmation: ""
    },
    rules: {
      min(min, v) {
        return (v || "").length >= min || `Value must be at least ${min}`;
      },
      max(max, v) {
        return (
          (v || "").length <= max || `Value may not be greater than ${max}.`
        );
      },
      exact(password, password_confirmation) {
        return (
          (password &&
            password_confirmation &&
            password === password_confirmation) ||
          "The passwords does not match."
        );
      }
    }
  }),
  methods: {
    async submitHandler() {
      this.$store.dispatch("clearError");
      if (this.$refs.form.validate()) {
        this.$store.dispatch("setLoading", true);

        try {
          await this.$store.dispatch("user/changePassword", this.form);
          this.$store.dispatch("setMessage", { code: "change_password" });
        } catch (error) {
          this.$store.dispatch("setError", error);
        }

        this.$store.dispatch("setLoading", false);
      }
    }
  }
};
</script>

<style>
</style>
