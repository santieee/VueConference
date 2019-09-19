<template>
  <v-tabs centered v-if="data">
    <v-tab v-for="(day,i) in data" :key="i" @click="showContent(day)">{{day.Caption}}</v-tab>
  </v-tabs>
</template>

<script>
export default {
  props:{
    data: Array,
  },
  methods:{
    showContent(content){
      this.$emit('content', content);
    }
  }
};
</script>
<style type="text/css">
  .v-tabs{
    flex: 0 !important;
  }
</style>