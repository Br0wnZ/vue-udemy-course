<template>
  <div>
    <form @submit.prevent="addTask">
      <input class="form-control" type="text" placeholder="Write your task" v-model.trim="tasktext" />
      <button class="btn btn-primary w-100 mt-1" type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { inject } from 'vue'
import providers from '../utils/providers'
export default {
  setup() {
    const tasks = inject(providers.tasks)
    const tasktext = ref('')
    const addTask = () => tasks.value.push({
      text: tasktext.value,
      status: false,
      id: Date.now()
    })


    return { tasktext, addTask }
  }
}
</script>
