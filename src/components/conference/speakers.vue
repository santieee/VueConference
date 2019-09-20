<template>
   <v-card class="speaker">
     <div class="duration">{{data.Duration}}</div>
     <v-avatar size="70" class="avatar">
       <img src="https://st2.depositphotos.com/4226061/9064/v/950/depositphotos_90647784-stock-illustration-male-doctor-avatar-icon.jpg" alt="avatar">
     </v-avatar>
     <div class="speaker-data">
      <div><b>{{showName(data.Speaker)}}</b></div>
       <div class="speakerCountry">
        <img src="https://siterscs.com/content/lp/conf2018/images/flags/248-russia.svg" width="20px" height="20px">
        <div>Russia</div>
       </div>
       
       <div>{{showCaption(data)}}</div>
       <div class="videolink" v-if="data.VideoUrl">
        <a :href="'https://siterscs.com/'+data.VideoUrl" target="_blank">
          <i class="fa fa-video-camera" aria-hidden="true"></i>{{this.$store.getters.isLang? 'See lecture':'Посмотреть лекцию'}}
        </a> 
       </div>    
     </div>
     
   </v-card>
</template>

<script>
export default {
  data: () => ({
   //
  }),
  props:{
    data: Object,
  },
  computed:{
    lang(){
      return this.$store.state.lang
    }
  },
  methods:{
    showName(speaker){
      if(this.$store.getters.isLang){
        try{
          return this.firstUp(speaker.ComponentName.split('-').join(' '));
        }catch{
          return speaker.Caption;
        }
      }else{
        return speaker.Caption;
      }
    },
    showCaption(caption){
      if(this.$store.getters.isLang){
       try{
          return caption.ObjectDataVersionList[0].Value;
        }catch{
          return caption.Caption;
        }
      }else{
        return caption.Caption;
      }       
    }
  }
};
</script>
<style scoped lang="scss">
  .speaker{
    margin-top: 30px;
    display: flex;
    display: -webkit-flex;
    padding: 15px 10px;
    background-color: white;
    position: relative;
    box-shadow: 1px 2px 7px 0px rgba(0, 0, 0, 0.2);
    -webkit-transition: box-shadow 0.3s, border-top 0.3s;
    font-size: .7em;
    font-weight: 400;
    div{
      margin: .3em 0;
    }
  }
  .speakerCountry{
    display: flex;
    align-items: center;
    div{
      padding: 0 0 0 .4em;
    }
  }
  .videolink{  
    margin-top: 2em !important; 
    a{
      color: grey;
      text-decoration: none;
    }
  }
  .avatar{
    flex: 0 0 100px;
    -webkit-flex: 0 0 100px;
    padding-right: 10px;
  }
  .duration{
    position: absolute;
    left: -100px;
    top: calc(40%);
    background-color: lightgray;
    color: white;
    display: inline-block;
    padding: 0px 10px;
    width: 50px;
    text-align: center;
  }
  .duration::after{
    content: "";
    border-top: 1px solid #dcdcdc;
    position: absolute;
    z-index: 0;
    width: 50px;
    top: 50%;
    right: -50px;
  }
  .fa-video-camera{
    margin-right: .5em;
  }
  @media screen and (max-width: 770px) {
    .duration{
      display: none;
    }
  }
</style>