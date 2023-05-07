<template>
    <v-list-item v-if="task" inactive> 
      <v-list-item-action>
        <v-btn icon :color="iconColor" @click="changueStatus">
          <v-icon v-text="icon"/>
        </v-btn>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="task.title"/>
        <v-list-item-subtitle v-text="task.description"/>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon color="error" @click="remove">
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </template>
  
  <script>
  export default {
    name: "TaskItems",
    props: {
      task: {
        type: Object, 
        default: null
      }
    },
    methods:{
      remove(){
        console.log('remove task' , this.task.id)
    },
    changueStatus(){
      console.log('changue status' , this.task.id)
    }
    }, 
    computed:{
      icon(){
        return this.task.done ? 'mdi-check' : 'mdi-reload-alert'
      },
      iconColor(){
        return this.task.done ? 'success' : 'warning'
      }
      
    }
  }
  </script>
  
  <style scoped>
  </style>
  