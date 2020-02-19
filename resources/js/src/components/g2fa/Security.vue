<template>
  <material-card color="success" title="Google Two Factor Authenticator">
    <v-skeleton-loader :loading="loading" class="mx-auto" height="50vh" type="paragraph@1, image">
      <v-container v-if="!securityIsEnabled">
        <v-row>
          <v-col :cols="12" :sm="12" :md="9">
            <p class="pr-4 pt-4">
              Two-factor authentication (2FA) enhances access security by requiring two methods (also called factors) to verify your identity.
              Two-factor authentication protects against phishing, social engineering and passwords,
              and also protects your username from intruders using weak or stolen credentials.
              To enable two-factor authentication in your account, you need to follow these steps:
            </p>
            <ol class="mt-3 pl-4 primary--text">
              <li>Scan this barcode with your Google Authenticator App</li>
              <li>Enter the pin the code to Enable 2FA</li>
            </ol>
          </v-col>
          <v-col :sm="12" :md="3">
            <img :src="qrCode" alt="googleQrCode" />
          </v-col>
        </v-row>
        <v-row>
          <v-col :cols="12" :sm="12" :md="9">
            <g2-fa-toggle-security btnTitle="Enable" btnColor="success"></g2-fa-toggle-security>
          </v-col>
        </v-row>
      </v-container>

      <v-container v-else>
        <p>If you want to disable two-factor authentication. Please confirm your code and click the Disable button.</p>
        <v-col md="9">
          <g2-fa-toggle-security btnTitle="Disable" btnColor="warning"></g2-fa-toggle-security>
        </v-col>
      </v-container>
    </v-skeleton-loader>
  </material-card>
</template>

<script>
import loading from "@/mixins/loading.mixin";

export default {
  mixins: [loading],
  computed: {
    securityIsEnabled() {
      return this.$store.getters["auth/securityIsEnabled"];
    },
    qrCode() {
      return this.$store.getters["auth/qrCode"];
    }
  },
  async mounted() {
    if (!this.securityIsEnabled && !this.qrCode) {
      this.$store.dispatch("setLoading", true);
      try {
        await this.$store.dispatch("auth/security");
        this.$store.dispatch("setLoading", false);
      } catch (error) {
        this.$store.dispatch("setError", error);
      }
    }
  }
};
</script>

