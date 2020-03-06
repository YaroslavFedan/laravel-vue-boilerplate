<template>
  <v-container grid-list-xs>
    <v-item-group mandatory v-model="selected">
      <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="4" sm="3" md="2">
          <v-hover v-slot:default="{hover}">
            <v-card :elevation="hover ? 6 : 1" :class="{ 'on-hover': hover }" class="pa-1 pointer">
              <v-item v-slot:default="{ active, toggle}">
                <v-img :src="item" class="text-right" @click="toggle">
                  <v-btn icon dark>
                    <v-icon v-if="active" class="success--text">mdi-check</v-icon>
                  </v-btn>
                </v-img>
              </v-item>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-item-group>
    <v-flex xs12 mt-2 text-right>
      <v-btn @click="toggleEditAvatar">Cancel</v-btn>
      <v-btn @click="submitHandler" color="primary">Change</v-btn>
    </v-flex>
  </v-container>
</template>

<script>
import avatars from "@/utils/avatars";
export default {
  data() {
    return {
      items: avatars,
      currentAvatarIndex: 0,
      idx: null
    };
  },
  computed: {
    currentAvatar(){
      return this.$store.getters['user/avatar'];
    },
    selected: {
      get() {
        if (this.currentAvatar && this.idx === null) {
          this.idx = this.currentAvatarIndex = avatars.findIndex(
            item => item == this.currentAvatar
          );
        }
        return this.currentAvatarIndex;
      },
      set(value) {
        this.currentAvatarIndex = value;
      }
    }
  },
  methods: {
    toggleEditAvatar() {
      eventBus.$emit("toggleEditAvatar");
    },
    submitHandler() {
      var index = parseInt(this.currentAvatarIndex);
      this.$store.dispatch("user/setAvatar", avatars[index]);
      eventBus.$emit("toggleEditAvatar");
    }
  }
};
</script>

<style lang="scss" scoped>
.v-stepper {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  &__header {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
}
</style>
