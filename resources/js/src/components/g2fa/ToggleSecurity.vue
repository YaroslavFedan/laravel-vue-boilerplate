<template>
  <v-form id="security-form" ref="form" @submit.prevent="submitHandler" lazy-validation>
    <v-text-field
      id="code"
      label="Enter the 6-digit code in your Google Authenticator app"
      name="code"
      v-mask="mask"
      v-model="code"
      :rules="codeRules"
      :error-messages="formError('code')"
      type="text"
      required
    ></v-text-field>
    <v-flex xs12 mt-2 text-xs-right>
      <v-btn type="submit" :color="btnColor" :loading="loading">{{btnTitle}}</v-btn>
    </v-flex>
  </v-form>
</template>

<script>
import { mask } from "vue-the-mask";
import errors from "@/mixins/form-errors.mixin";

export default {
  name: "toggle-security-form",
  props: {
    btnTitle: {
      type: String,
      required: true
    },
    btnColor: {
      type: String,
      default: "primary"
    }
  },
  mixins: [errors],
  directives: { mask },
   data: () => ({
    loading: false,
    mask: "######",
    code: null,
    codeRules: [
      v => !!v || "Code is required",
      v => {
        if (v !== null && v.length !== 6) {
          return "Сode length should be 6 characters";
        }
        return true;
      }
    ]
  }),
  computed: {
    securityIsEnabled() {
      return this.$store.getters["auth/securityIsEnabled"];
    }
  },
  methods: {
    async submitHandler() {
      this.$store.dispatch("clearError");

      if (this.$refs.form.validate()) {
        this.loading = true;

        try {
          await this.$store.dispatch("auth/toggleSecurity", this.code);
          this.showMessage();
          this.code = null;
        } catch (error) {
          this.$store.dispatch("setError", error);
        }

        this.loading = false;
      }
    },
    showMessage() {
      if (this.securityIsEnabled) {
        this.$store.dispatch("setMessage", { code: "security_enabled" });
      } else {
        this.$store.dispatch("setMessage", {
          code: "security_disabled",
          type: "warning"
        });
      }
    }
  }
};
</script>

<style>
</style>
