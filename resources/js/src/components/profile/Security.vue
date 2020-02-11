<template>
  <v-card class="elevation-0 pl-5 pr-5">
    <v-card-title primary-title>Google Two Factor Authenticator</v-card-title>
    <v-card-text>
      <v-skeleton-loader :loading="loading" class="mx-auto" height="50vh" type="paragraph@1, image">
        <div v-if="!securityIsEnabled">
          <p>
            Two-factor authentication (2FA) enhances access security by requiring two methods (also called factors) to verify your identity.
            Two-factor authentication protects against phishing, social engineering and passwords,
            and also protects your username from intruders using weak or stolen credentials.
          </p>
          <p>To enable two-factor authentication in your account, you need to follow these steps:</p>
          <p>1. Scan this barcode with your Google Authenticator App</p>
          <img :src="qrCode" alt="googleQrCode" />
          <p>2.Enter the pin the code to Enable 2FA</p>
          <toggle-security-form btnTitle="Enable" btnColor="success"></toggle-security-form>
        </div>

        <div v-else>
          <p>If you want to disable two-factor authentication. Please confirm your code and click the Disable button.</p>
          <toggle-security-form btnTitle="Disable" btnColor="warning"></toggle-security-form>
        </div>
      </v-skeleton-loader>
    </v-card-text>
  </v-card>
</template>

<script>
import Loading from "@/mixins/loading.mixin";
import ToggleSecurityForm from "@/components/g2fa/ToggleSecurityForm";

export default {
  name: "security",
  components: {
    ToggleSecurityForm
  },
  mixins: [Loading],
  data: () => ({
    serverError: false,
    messageError: {
      title: "An error occurred on the server",
      message: "Try again later.",
      type: "error",
      timeOut: 10000
    }
  }),
  computed: {
    securityIsEnabled() {
      return this.$store.getters["auth/securityIsEnabled"];
    },
    qrCode() {
      return this.$store.getters["auth/qrCode"];
    }
  },
  methods: {
    async init() {
      if (!this.securityIsEnabled && !this.qrCode) {
        this.$store.dispatch("setLoading", true);
        try {
          await this.$store.dispatch("auth/security");
        } catch (e) {
          this.$store.dispatch("setMessage", this.messageError);
        }
        this.$store.dispatch("setLoading", false);
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>

