<template>
  <div>
    <h1>Task List</h1>
    <TaskForm />
    <div class="mt-3">
      <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
    </div>
    <div class="alert alert-dark mt-3" v-if="!tasks.length">No pending tasks 👌</div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { provide, watchEffect } from 'vue'
import providers from '../utils/providers'
import storage from '../utils/storage'
import TaskForm from './TaskForm.vue'
import TaskItem from './TaskItem.vue'
export default {
  setup() {
    const tasks = ref([])
    provide(providers.tasks, tasks)
    if (localStorage.getItem(storage.tasks)) {
      tasks.value = JSON.parse(localStorage.getItem(storage.tasks))
    }
    watchEffect(() => localStorage.setItem(storage.tasks, JSON.stringify(tasks.value)))
    return { tasks }
  },
  components: { TaskForm, TaskItem }
}
</script>
