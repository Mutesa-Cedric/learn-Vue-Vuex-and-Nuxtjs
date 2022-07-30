<template>
  <AddTask v-show="showAddTask" @submit-form="addTask" />
  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import AddTask from "@/components/AddTask.vue";
import Tasks from "@/components/Tasks.vue";
export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: { AddTask, Tasks },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    // delete task
    async deleteTask(id) {
      if (confirm("Are You sure?")) {
        const res = await fetch(`/api/tasks/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("error deleting task");
      }
    },

    // toggle reminder
    async toggleReminder(id) {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reminder: !this.tasks.find((task) => task.id === id).reminder,
        }),
      });

      res.status === 200
        ? (this.tasks = this.tasks.map((task) => {
            if (task.id === id) {
              task.reminder = !task.reminder;
            }
            return task;
          }))
        : alert("error setting reminder!");
    },

    // add task
    async addTask(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(task),
      });
      const newTask = await res.json();
      this.tasks = [...this.tasks, newTask];
    },

    // fetch tasks
    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();
      return data;
    },

    // fetch a single task
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>

<style>
</style>