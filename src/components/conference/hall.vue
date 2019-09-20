<template>
  <v-expansion-panel>
    <v-expansion-panel-header>{{showCaption(data.Caption)}}</v-expansion-panel-header>
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
  methods:{
    showCaption(caption){
      if(!this.$store.getters.isLang){
        return caption;
      }
      switch(caption){
        case 'Большой зал':
        return 'Big hall';
        case 'Средний зал':
        return 'Medium hall';
        case 'Пресс-зал':
        return 'Press hall';
        case 'Малый зал':
        return 'Small hall';
      }
    }
  }
};
</script>