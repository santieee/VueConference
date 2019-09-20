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
      this.dayContent = content;
    }
  }
  
};
</script>
<style type="scss">
  body{
    display: flex;
    justify-content: center;
    font-size: 16px;
  }
  #app{
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    #app{
      width: 80%;
    }
  }
  @media screen and (max-width: 770px) {
    #app{
      width: 100%;
    }
  }
</style>