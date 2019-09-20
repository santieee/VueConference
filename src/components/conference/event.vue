<template>
  <div class="timeline">
    <div 
      class="event"
      v-for="(event, i) in data.EventSessions"
      :key="i"
    >
    <div class="time">{{event.TimePeriod}}</div>
    <div class="session">
      <v-expansion-panels v-if="event.EventSessionModerators.length > 0">
        <v-expansion-panel>
          <v-expansion-panel-header  class="eventCaption">{{showCaption(event)}}</v-expansion-panel-header>      
            <v-expansion-panel-content>
                
              <div class="moderators" v-for="(person,i) in event.EventSessionModerators" :key="i">
                <div v-if="i == 0"><b class="headLi">{{$store.getters.isLang ? 'Moderators':'Модераторы'}}:</b></div>
                {{showModerator(person.Person)}}
              </div>
              <speakers-cp v-for="speaker in event.EventSessionItems" :data="speaker" :key="speaker.ComponentId"></speakers-cp>

              
              <div v-if="event.Url" class="blockBtnLink"><hr><a class="btnLink" :href="'https://siterscs.com/'+event.Url">{{$store.getters.isLang ? 'More info':'Подробнее о мероприятии'}}</a></div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <div v-else class="eventCaption word">{{ showCaption(event) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import speakersCp from './speakers.vue'
export default {
  data: () => ({
   //
  }),
  components: {
    speakersCp
  },
  props:{
    data: Object,
  },
  methods:{
    showCaption(event){
      if(this.$store.getters.isLang){
        try{
          return event.ObjectDataVersionList[0].Value
        }catch{
          return event.Caption
        }
      }else{
        return event.Caption
      }
    },
    showModerator(moder){
      if(this.$store.getters.isLang){
        try{
          return moder.ComponentName.split('-').map(e => this.firstUp(e)).join(' ');
        }catch{
          return moder.Caption;
        }
      }else{
        return moder.Caption;
      }
    },
    firstUp(word){
      return word[0].toUpperCase() + word.substr(1);
    }
  }
};
</script>
<style scoped lang="scss">
    .v-expansion-panel-header:before {
      opacity: 1;
      background-color: inherit;
      top:14px;
    }
    .v-expansion-panels {
      transition: inherit;
    }
    .v-expansion-panel {
      transition: inherit;
    }
    .eventCaption{
      position: relative;
      padding: 0 24px;
      font-size: 1em;
      font-weight: 300;
      display: inline-block;
      text-transform: lowercase;
      min-height: inherit !important;
      margin-bottom: 3em;
    }
    .eventCaption:hover{
      cursor: pointer;
    }
    .word{
      background-color: #FFFFFF;
    }
    .eventCaption::first-letter{
      text-transform: uppercase;
    }
    .v-expansion-panel::before{
      position: relative;
    }
    .blockBtnLink{
      margin-top: 2em;
      hr{
        opacity: .4;
      }
    }
    .btnLink{
      display: inline-block;
      margin-top: 2em;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 1px solid transparent;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      border-radius: 4px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      color: #333;
      background-color: #fff;
      border-color: #ccc;
      text-decoration: none;
      float: right;
    }
    .moderators{
      font-size: .8em;
      margin: .2em;
      font-weight: 300;
    }
    .headLi{
      font-size: 1.1em;
      font-weight: 400;
    }
 @media screen and (min-width: 768px) {
    .timeline{
      display: flex;
      flex-direction: column;
    }
    .v-expansion-panel-header:before {
      opacity: 1;
      background-color: inherit;
      top:14px;
    }
    .event{
      position: relative;
      padding: 40px 20px 20px 0;
      margin-left: 200px;
      border-left: 1px solid #dcdcdc;
    }
    .event::before{
      content: "";
      border-top: 1px solid #dcdcdc;
      position: absolute;
      z-index: 0;
      left: -200px;
      width: 220px;
      top: 55px;
    }
    .event:after{
      content: "";
      border: 6px solid #dcdcdc;
      position: absolute;
      z-index: 1;
      left: -50px;
      width: 19px;
      height: 19px;
      background-color: white;
      top: 46px;
      border-radius: 50%;
    }    
    .time{
      position: absolute;
      left: -200px;
      width: 120px;
      background-color: #52ae32;
      font-size: 14px;
      line-height: 2.3;
      color: white;
      text-align: center;
      box-shadow: 1px 2px 7px 0px rgba(0, 0, 0, 0.2);
      -webkit-transition: box-shadow 0.3s, border-top 0.3s;
      font-weight: 300;
    }
  }
  @media screen and (max-width: 770px) {
    .event{
      position: relative;
      border-left: 1px solid #dcdcdc;
      padding: 40px 0 0 0;
      margin-bottom: 0px;
    }
    .time{
      padding: 5px 0px;
      display: block;
      margin-bottom: 20px;
      background-color: #52ae32;
      color: white;
      text-align: center;
      box-shadow: 1px 2px 7px 0px rgba(0, 0, 0, 0.2);
      -webkit-transition: box-shadow 0.3s, border-top 0.3s;
    }
    .v-expansion-panel-header__icon{
      display: inherit;
    }
  }
</style>