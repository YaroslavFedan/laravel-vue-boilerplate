import Vue from 'vue'
import store from '../store';
import CxltToastr from 'cxlt-vue2-toastr';
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css';

const opt = {
  position: 'top right',
  showDuration: 1000,
  timeOut: 5000,
  progressBar: true,
  showMethod:"bounceInDown",
  hideMethod:"bounceOutUp",
};

Vue.use(CxltToastr, opt);

