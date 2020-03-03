<template>
  <v-form ref="form" @submit.prevent="submitHandler">
    <v-row>
      <v-col :cols="12" :sm="12" :lg="3">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-avatar class="mx-auto d-flex elevation-2" size="130">
              <img :src="avatar" :alt="name" />
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn class="mx-2" fab dark small color="cyan" @click="toggleEditAvatar">
                    <v-icon dark>mdi-pencil</v-icon>
                  </v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-avatar>
          </template>
        </v-hover>
      </v-col>
      <v-col :cols="12" :sm="12" :lg="9">
        <v-text-field
          label="Email Address"
          :value="email"
          :error-messages="formError('username')"
          :rules="emailRules"
          disabled
        />

        <v-text-field
          label="User Name"
          v-model="name"
          :error-messages="formError('name')"
          :rules="[rules.max(50, name)]"
          :counter="50"
        />
        <v-text-field
          label="First Name"
          v-model="first_name"
          :error-messages="formError('first_name')"
          :rules="[rules.max(50, first_name)]"
          :counter="50"
        />
        <v-text-field
          label="Last Name"
          v-model="last_name"
          :error-messages="formError('last_name')"
          :rules="[rules.max(50, last_name)]"
          :counter="50"
        />
        <v-text-field
          label="Company"
          v-model="company"
          :error-messages="formError('company')"
          :rules="[rules.max(100, company)]"
          :counter="100"
        />
        <v-text-field
          label="Address"
          v-model="address"
          :error-messages="formError('address')"
          :rules="[rules.max(100, address)]"
          :counter="255"
        />
      </v-col>
    </v-row>
    <v-flex xs12 mt-2 text-right>
      <v-btn type="submit" color="success" :loading="loading">Save</v-btn>
    </v-flex>
  </v-form>
</template>

<script>
import { createHelpers } from "vuex-map-fields";
import errors from "../../mixins/form-errors.mixin";
import loading from "@/mixins/loading.mixin";

const { mapFields } = createHelpers({
  getterType: "user/getProfileField",
  mutationType: "user/UPDATE_PROFILE_FIELDS"
});

export default {
  mixins: [errors, loading],
  data: () => ({
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    rules: {
      max(max, v) {
        return (
          (v || "").length <= max || `Value may not be greater than ${max}.`
        );
      }
    }
  }),
  computed: {
    ...mapFields([
      "email",
      "name",
      "first_name",
      "last_name",
      "address",
      "company",
      "avatar",
      "user_id"
    ])
  },
  methods: {
    toggleEditAvatar() {
      eventBus.$emit("toggleEditAvatar");
    },
    async submitHandler() {
      this.$store.dispatch("clearError");

      if (this.$refs.form.validate()) {
        this.$store.dispatch("setLoading", true);

        try {
          await this.$store.dispatch(
            "user/editProfile",
            this.$store.getters["user/profile"]
          );
          this.$store.dispatch("setMessage", { code: "profile_updated" });
        } catch (error) {
          this.$store.dispatch("setError", error);
        }

        this.$store.dispatch("setLoading", false);
      }
    }
  }
};
</script>

