<template>
  <div>
    <h1>Task List</h1>
    <TaskForm />
    <div class="mt-3">
      <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
    </div>
    <div class="alert alert-dark mt-3" v-if="!tasks.length">
      No pending tasks 👌
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { provide } from 'vue'
import providers from '../utils/providers';
import TaskForm from './TaskForm.vue'
import TaskItem from './TaskItem.vue';
export default {
  setup() {
    const tasks = ref([]);
    provide(providers.tasks, tasks)
    return { tasks };
  },
  components: { TaskForm, TaskItem }
}
</script>
