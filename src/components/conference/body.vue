<template>
  <main>
    <v-subheader id='subheader'>{{data.Caption}}</v-subheader>
    <v-expansion-panels id="expansion-panels">
      <hall-cp v-for="(hall,i) in data.ScheduleLocations" :key="i" :data="hall"></hall-cp>
    </v-expansion-panels>
  </main>
</template>

<script>
import hallCp from './hall.vue'
export default {
  components: {
    hallCp
  },
  props:{
    data: Object,
  },
};
</script>
<style scoped type="text/css">
  #subheader{ 	
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    color: white;
    background-color: rgb(62, 54, 133, .6);
    margin-top: .1em;
  }
  #expansion-panels{
    margin-top: 2em;
    padding: 0 .6em;
  }
</style>