<template>
  <v-app id="app">
    <header-cp @content="showContent" :data="obj.ScheduleDays"></header-cp>
    <body-cp :data="dayContent"></body-cp>
  </v-app>
</template>

<script>
import response from './JSON/response.json';
import headerCp from './components/conference/header.vue'
import bodyCp from './components/conference/body.vue'
export default {
  name: 'App',
  components: {
    headerCp,
    bodyCp
  },
  data: () => ({
    obj: response.Object,
    dayContent: response.Object.ScheduleDays[0]
  }),
  methods:{
    showContent(content){
      console.log(content);
      this.dayContent = content;
    }
  }
  
};
</script>
<style type="text/css">
  body{
    display: flex;
    justify-content: center;
  }
  #app{
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
  }
</style>