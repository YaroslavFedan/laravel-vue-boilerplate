<template>
  <v-layout align-center justify-center>
      <v-progress-circular :size="80" :color="color" indeterminate></v-progress-circular>
    </v-layout>
</template>

<script>
export default {
  computed:{
    color(){
      const colors = ["primary","red","purple","green","amber"];
      let rand = Math.floor( Math.random() * colors.length );
      return colors[rand];
    }
  }
};
</script>
