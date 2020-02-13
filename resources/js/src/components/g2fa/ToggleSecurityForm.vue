<template>
  <v-form id="security-form" ref="form" @submit.prevent="submitHandler" lazy-validation>
    <v-text-field
        id="code"
        label="Enter the 6-digit code in your Google Authenticator app"
        name="code"
        v-mask="mask"
        v-model="code"
        :rules="codeRules"
        :error-messages="checkError('code')"
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
import CheckErrors from "@/mixins/check-errors.mixin";

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
  mixins: [CheckErrors],
  directives: { mask },
  computed: {
    securityIsEnabled() {
      return this.$store.getters["auth/securityIsEnabled"];
    }
  },
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
    ],
    messageEnabled: {
      title: "Two-factor authentication",
      message: "Successfully Enabled.",
      type: "success"
    },
    messageDisabled: {
      title: "Two-factor authentication",
      message: "Successfully Disabled.",
      type: "warn"
    }
  }),
  methods: {
    async submitHandler() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        try {
          await this.$store.dispatch("auth/toggleSecurity", this.code);
          this.showMessage();
        } catch (error) {
          this.serverErrors = error.response.data.errors;
        }

        this.loading = false;
        this.code = null;
        this.$refs.form.resetValidation();
      }
    },
    showMessage() {
      if (this.securityIsEnabled) {
        this.$store.dispatch("setMessage", this.messageEnabled);
      } else {
        this.$store.dispatch("setMessage", this.messageDisabled);
      }
    }
  },

};
</script>

<style>
</style>
