<template>
  <v-tabs centered v-if="data">
    <v-tab v-for="(day,i) in data" :key="i" @click="showContent(day)">{{day.Caption}}</v-tab>
    <v-spacer></v-spacer>
    <span>{{`${isEng? 'English': 'Русский'}`}}</span><v-switch v-model="isEng" inset></v-switch>
  </v-tabs>
</template>

<script>
export default {
  data(){
    return{
      isEng: false,
    }  
  },
  props:{
    data: Array,
  },
  watch:{
    isEng(){
      this.setLang(this.isEng)
    }
  },
  methods:{
    showContent(content){
      this.$emit('content', content);
    },
    setLang(lang){
      this.$store.commit('changeLang')
    }
  }
};
</script>
<style type="text/css">
  .v-tabs{
    flex: 0 !important;
  }
</style>