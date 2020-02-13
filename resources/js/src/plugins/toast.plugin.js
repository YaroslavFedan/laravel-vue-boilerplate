import Vue from "vue";
import CxltToastr from "cxlt-vue2-toastr";
import "cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css";

const opt = {
  position: "top right",
  showDuration: 1000,
  timeOut: 50000,
  progressBar: false,
  showMethod: "fadeIn",
  hideMethod: "fadeOut"
};

Vue.use(CxltToastr, opt);
