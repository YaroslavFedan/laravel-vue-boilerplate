import Vue from "vue";
import CxltToastr from "cxlt-vue2-toastr";
import "cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css";



/*
=== POSITION ===
"top right"
"bottom right"
"bottom left"
"top left"
"top center"
"bottom center"
"top full width"
"bottom full width"
*/

const opt = {
  position: "top right",
  showDuration: 1000,
  timeOut: 5000,
  progressBar: false,
  showMethod: "fadeIn",
  hideMethod: "fadeOut"
};

Vue.use(CxltToastr, opt);
