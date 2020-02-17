<template>
  <material-card color="success" title="Exchange rates" min-width="100%">
    <v-skeleton-loader class="mx-auto" type="text, table-row-divider@4" :loading="!exchange.length">
      <v-data-table :headers="header" :items="exchange" hide-default-footer>
        <template v-slot:top>
          <v-layout row>
            <v-flex d-flex justify-end class="pr-4">
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" @click="refresh">refresh</v-icon>
                </template>
                <span>Refresh</span>
              </v-tooltip>
            </v-flex>
          </v-layout>
        </template>
        <template v-slot:item.buy="{ item }">{{ item.buy | currency }}</template>
        <template v-slot:item.sale="{ item }">{{ item.sale | currency }}</template>
      </v-data-table>
    </v-skeleton-loader>
  </material-card>
</template>

<script>
export default {
  props: {
    exchange: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      header: [
        { text: "Currency", value: "ccy" },
        { text: "Buy", value: "buy" },
        { text: "Sale", value: "sale" }
      ],

    };
  },
  methods: {
    refresh() {
      eventBus.$emit("refreshExchangeData");
    }
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

