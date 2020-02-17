<template>
  <material-card color="warning" title="Convert" min-width="100%">
    <v-skeleton-loader class="mx-auto" type="list-item@4" :loading="!exchange.length">
      <v-form ref="form" lazy-validation>
        <v-layout row wrap>
          <v-flex xs6 class="px-3">
            <v-select v-model="sale_ccy" :items="sale_currency" item-text="ccy" label="Sale"></v-select>
          </v-flex>
          <v-flex xs6 class="px-3">
            <v-select v-model="buy_ccy" :items="buy_currency" item-text="ccy" label="Buy"></v-select>
          </v-flex>
        </v-layout>

        <v-text-field
          id="amount"
          label="Enter amount"
          name="amount"
          v-model="amount"
          v-mask="mask"
          :rules="amountRules"
          type="text"
          autocomplete="on"
          required
        ></v-text-field>

        <v-text-field
          :value="result | currency(buy_ccy)"
          outlined
          disabled
          label="Result"
          class="mt-4"
          :class="{'calculate--result': result}"
        ></v-text-field>
      </v-form>
    </v-skeleton-loader>
  </material-card>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  props: {
    exchange: {
      type: Array,
      required: true
    }
  },
  directives: {
    mask
  },
  data() {
    let ccy = this.$store.getters["exchange/base_ccy"];
    return {
      sale_ccy: ccy,           // код валюты, по умолчанию - базовая
      buy_ccy: ccy,            // код валюты, по умолчанию - базовая
      amount: null,            // введенная сумма
      sale: [],                // объект выбранной валюты для продажи
      buy: [],                 // объект выбранной валюты для покупки
      mask: "##########",      // маска для ввода суммы
      amountRules: [v => !!v]  // правила валидации
    };
  },
  computed: {
    base() {
      return this.$store.getters["exchange/base"];
    },
    sale_currency() {
      return [...[this.base], ...this.exchange];
    },
    buy_currency() {
      return [...this.exchange, ...[this.base]];
    },
    result() {
      let sale = this.sale_currency.find(item => item.ccy === this.sale_ccy);
      let buy = this.buy_currency.find(item => item.ccy === this.buy_ccy);

      // не делаем ничего
      if (sale.ccy === buy.ccy) return this.amount;

      // продаем базовую валюту
      if (sale.ccy === this.base.ccy) return this.amount / buy.sale;

      // покупаем базовую валюту
      if (buy.ccy === this.base) return this.amount * sale.buy;

      // производим обмен
      return (this.amount * sale.buy) / buy.sale;
    }
  }
};
</script>

<style lang="scss" >
.calculate {
  &--result {
    input {
      color: #1976d2 !important;
    }
  }
}
</style>
