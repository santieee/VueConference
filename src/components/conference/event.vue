<template>
   <v-timeline dense>
        <v-timeline-item
          v-for="(event, i) in data.EventSessions"
          :key="i"
          small
          right
        >
          <div 
            class="time" 
            v-text="event.TimePeriod"
          ></div>
          <v-expansion-panels v-if="event.EventSessionModerators.length > 0">
           <v-expansion-panel>
            <v-expansion-panel-header  class="eventCaption">{{event.Caption}}</v-expansion-panel-header>        
              <v-expansion-panel-content>
                
                <div class="moderators" v-for="(person,i) in event.EventSessionModerators" :key="i">
                  <div v-if="i == 0"><b>Модераторы:</b></div>
                  {{person.Person.Caption}}
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <div v-else class="eventCaption">{{event.Caption}}</div>
        </v-timeline-item>
      </v-timeline>
</template>

<script>
export default {
  data: () => ({
   //
  }),
  props:{
    data: Object,
  },
};
</script>
<style scoped type="text/css">
  .eventCaption{
    padding:0 24px;
    display: inline-block;
    text-transform: lowercase;
    text-wrap: nowrap;
  }
  .eventCaption::first-letter{
    text-transform: uppercase;
  }
  .v-expansion-panel::before{
    position: relative;
  }
  .moderators .v-expansion-panel-content__wrap{
    padding: 30px !important;
  }
  .time{
    padding: 0 24px;
  }
  .moderators{
    font-size: .8em;
  }
</style>