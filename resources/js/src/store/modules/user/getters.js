import { getField } from "vuex-map-fields";

export default {
  profile: state => state.profile,
  getProfileField: state => getField(state.profile)
};
