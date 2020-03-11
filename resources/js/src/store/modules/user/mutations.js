import avatars from "@/utils/avatars";
import { updateField } from "vuex-map-fields";

export default {
  SET_PROFILE: (state, payload) => {
    let { name, email, ...data } = payload;

    if (!data.profile || !data.profile.avatar) {
      data.profile = {};
      let rand = Math.floor(Math.random() * avatars.length);
      data.profile.avatar = avatars[rand];
    }

    state.profile = {
      name,
      email,
      ...data.profile
    };
  },
  SET_AVATAR: (state, avatar) => {
    state.profile.avatar = avatar;
  },
  CLEAR_PROFILE: state => (state.profile = {}),
  UPDATE_PROFILE_FIELDS: (state, field) => {
    updateField(state.profile, field);
  }
};
