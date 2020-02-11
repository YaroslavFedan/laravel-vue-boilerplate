import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.min.css";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: "mdiSvg"
  },
  theme: {
    themes: {
      light: {
        primary: colors.blue.darken2, // #1976D2
        danger: colors.red.darken4 // #B71C1C
      }
    }
  }
};

export default new Vuetify(opts);
