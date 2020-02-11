<template>
  <v-card class="elevation-12 pl-5 pr-5" :loading="loading">
    <v-card-title primary-title>Home accounting</v-card-title>

    <div class="d-flex desc">
      <img class="desc__img" :src="icon" alt="googleIcon" />
      <div class="desc__title">
        <h3>Code google authenticator</h3>
      </div>
    </div>

    <v-card-text>
      <v-form ref="form" @submit.prevent="submitHandler" lazy-validation>
        <v-text-field
          id="code"
          label="Enter the 6-digit code in your Google Authenticator app"
          name="code"
          v-mask="mask"
          v-model="code"
          :rules="codeRules"
          :error-messages="checkError('code')"
          type="text"
          ref="input"
          required
        ></v-text-field>

        <v-card-actions class="pl-0 pr-0">
          <v-spacer></v-spacer>
          <v-btn type="submit" block :loading="loading" color="primary">Send</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mask } from "vue-the-mask";
import googleIcon from "@/assets/image/google-icon";
import CheckErrors from "@/mixins/check-errors.mixin";
import Loading from "@/mixins/loading.mixin";

export default {
  name: "verify-security-form",
  directives: {
    mask
  },
  mixins: [CheckErrors, Loading],
  data: () => ({
    mask: "######",
    code: null,
    icon: googleIcon.icon,
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
  methods: {
    async submitHandler() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("setLoading", true);

        try {
          //валидируем Google Two Factor Authentication
          await this.$store.dispatch("auth/securityVerify", this.code);
          // сохраняем токен авторизации
          this.$store.dispatch("auth/authorize");
          this.$router.push({ name: "home" });
        } catch (error) {
          this.serverErrors = error.response.data.errors;
        }

        this.$store.dispatch("setLoading", false);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.desc {
  align-items: center;
  margin-left: 13px;
  &__img {
    width: 24px;
  }
  &__title {
    margin-left: 15px;
  }
}
</style>
