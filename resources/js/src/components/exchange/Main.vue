<template>
  <v-layout row wrap>
    <v-flex d-flex xs12 md4 class="pa-2">
      <exchange-convert :exchange="exchange"></exchange-convert>
    </v-flex>
    <v-flex d-flex xs12 md8 child-flex class="pa-2">
      <exchange-rates :exchange="exchange"></exchange-rates>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    exchange() {
      return this.$store.getters["exchange/exchange"];
    }
  },
  methods: {
    async fetchExchangeData() {
      try {
        await this.$store.dispatch("exchange/fetch");
      } catch (e) {
        this.$store.dispatch("setMessage", {
          code: "service_not_responded",
          type: "warning"
        });
      }
    }
  },
  mounted() {
    this.fetchExchangeData();
    eventBus.$on("refreshExchangeData", () => {
      this.fetchExchangeData();
    });
  }
};
</script>
