import { getField } from "vuex-map-fields";

export default {
  profile: state => state.profile,
  avatar: state => state.profile.avatar || null,
  getProfileField: state => getField(state.profile),
};
