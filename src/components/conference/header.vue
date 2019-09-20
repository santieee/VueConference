<template>
  <div>  <v-tabs v-if="data">
    <v-tab v-for="(day,i) in data" :key="i" @click="showContent(day)">{{showDate(day)}}</v-tab>
    <v-spacer></v-spacer>
    <span class="langname">{{`${isEng? 'English': 'Русский'}`}}</span><v-switch v-model="isEng" inset></v-switch>
  </v-tabs>
  <v-subheader id='subheader'>{{showDate(date)}}</v-subheader>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isEng: false,
      date: this.data[0]
    }  
  },
  props:{
    data: Array,
  },
  watch:{
    isEng(){
      this.$store.commit('changeLang')
    }
  },
  methods:{
    showContent(content){
      this.date = content;
      this.$emit('content', content);
    },
    showDate(day){
      if(this.$store.getters.isLang){
        try{
          return day.ObjectDataVersionList[0].Value;
        }catch{
          return day.Caption;
        }
      }else{
        return day.Caption;
      }
    }
  }
};
</script>
<style lang="scss">
  .v-tabs{
    flex: 0 !important;
  }
  .langname{
    margin-top: 16px;
    margin-right: 15px;
    padding-top: 4px;
  }
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