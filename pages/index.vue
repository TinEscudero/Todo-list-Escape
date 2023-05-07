<template>
  <v-row justify="center" align="center" class="background">
    <v-col cols="12" sm="8" md="6">
      <v-card max-width="475" class="mx-auto">
        <v-toolbar color="teal">
          <v-avatar class="mr-3">
            <v-icon>mdi-lock-outline</v-icon>
          </v-avatar>
          <v-toolbar-title class="mx-2">Escape uP</v-toolbar-title>
          <v-spacer/>
          <AddTaskItem/>
        </v-toolbar>
        <v-list>
          <v-subheader>In Progress Tasks</v-subheader>
          <v-list-item-group>
            <TaskItem :task="task" v-for="(task, i) in pendingTasks" :key="i" />
          </v-list-item-group>
          
          <v-subheader>Done Tasks</v-subheader>
          <v-list-item-group>
            <TaskItem :task="task" v-for="(task, i) in doneTasks" :key="i" />
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { computed } from 'vue';
import TaskItem from '../components/TaskItem.vue';
import AddTaskItem from '../components/AddTaskItem.vue';
import {mapGetters} from "vuex";

export default {
  components: { TaskItem, AddTaskItem },
  computed: {...mapGetters({
    doneTasks:'task/doneTasks',
    pendingTasks:'task/pendingTasks',
  })},
}
</script>

<style scoped>

.v-avatar {
  background-color: white;
  color: teal;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.5rem;
}
.v-toolbar-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
}
.v-subheader {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: teal;
  margin-top: 1rem;
}
</style>
