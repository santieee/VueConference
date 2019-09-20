<template>
  <main>
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