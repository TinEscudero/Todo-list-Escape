<template>
  <v-dialog v-model="open" max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline teal-text">
        Create new task
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation :rules="rules">
          <v-text-field v-model="form.title" label="Title" required />
          <v-text-field v-model="form.description" label="Description" required />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="save">Save</v-btn>
        <v-btn color="secondary" @click="cancelTask">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AddTaskItem",
  data() {
    return {
      open: false,
      form: {
        title: null,
        description: null,
      },
      rules: {
        title: [
          v => !!v || "Title is required",
          v => (!!v && v.length > 2) || "Title must be at least 3 characters",
        ],
        description: [
          v => !!v || "Description is required",
          v =>
            (!!v && v.length > 5) ||
            "Description must be at least 6 characters",
        ],
      },
    };
  },
  methods: {
    save() {
      if(this.$refs.form.validate()){
        this.$store.dispatch('task/add', { title: this.form.title, description: this.form.description })
        this.$refs.form.reset()
        this.open = false
      }
    },
    cancelTask() {
      this.$refs.form.reset()
      this.open = false
    }
  }
};
</script>

<style scoped>
