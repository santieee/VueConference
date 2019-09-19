<template>
  <v-expansion-panel>
    <v-expansion-panel-header>{{data.Caption}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <event-cp :data="data"></event-cp>    
      </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import eventCp from "./event.vue"
export default {
  components: {
    eventCp
  },
  props:{
    data: Object,
  },
};
</script>
