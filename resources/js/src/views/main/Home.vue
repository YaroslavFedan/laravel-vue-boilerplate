<template>
  <v-layout row wrap>
    <v-flex d-flex xs12 md4 class="pa-2">
      <home-convert-form :exchange="exchange"></home-convert-form>
    </v-flex>
    <v-flex d-flex xs12 md8 child-flex class="pa-2">
      <home-exchange-rates :exchange="exchange"></home-exchange-rates>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    messageError: {
      title: "An error occurred on the server",
      message: "Try again later.",
      type: "error",
      timeOut: 10000
    }
  }),
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
        this.$store.dispatch("setMessage", this.messageError);
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
