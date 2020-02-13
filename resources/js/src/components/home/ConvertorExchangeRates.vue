<template>
  <material-card color="success" title="Convert exchange rates">
    <v-skeleton-loader
      class="mx-auto"
      type="text, table-row-divider@4"
      :loading="!Object.keys(exchange).length"
    >
      <v-data-table :headers="header" :items="items" hide-default-footer>
        <template v-slot:top>
          <v-layout row>
            <v-flex d-flex>
              <v-card-title>On balance : {{amountBalance | currency(base)}}</v-card-title>
            </v-flex>
            <v-flex d-flex justify-end class="pr-4">
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" @click="fetchExchangeData">refresh</v-icon>
                </template>
                <span>Refresh</span>
              </v-tooltip>
            </v-flex>
          </v-layout>
        </template>
        <template v-slot:item.buy="{ item }">{{ item.buy | currency(base) }}</template>
        <template v-slot:item.sale="{ item }">{{ item.sale | currency(base) }}</template>
        <template v-slot:item.convert="{ item }">{{ item.convert | currency(item.ccy) }}</template>
      </v-data-table>
    </v-skeleton-loader>
  </material-card>
</template>

<script>
export default {
  data() {
    return {
      amountBalance: 10000,
      base: "UAH",
      currencies: ["USD", "EUR", "RUB"],
      header: [
        { text: "Currency", value: "ccy" },
        { text: "Buy", value: "buy" },
        { text: "Sale", value: "sale" },
        { text: "Convert", value: "convert" }
      ],
      exchange: [],
      messageError: {
        title: "An error occurred on the server",
        message: "Try again later.",
        type: "error",
        timeOut: 10000
      }
    };
  },
  computed: {
    items() {
      return this.exchange
        .map(item => {
          if (item.ccy === "RUR") item.ccy = "RUB";

          if (item.buy) item.convert = this.amountBalance / item.buy;
          return item;
        })
        .filter(item => this.currencies.includes(item.ccy));
    }
  },
  methods: {
    async fetchExchangeData() {
      this.exchange = [];
      try {
        this.exchange = await this.$store.dispatch("fetchExchangeRates");
      } catch (e) {
        this.$store.dispatch("setMessage", this.messageError);
      }
    }
  },
  mounted() {
    this.fetchExchangeData();
  }
};
</script>
<style lang="scss">
.refresh {
  text-align: right;
  i {
    cursor: pointer;
  }
}
</style>

