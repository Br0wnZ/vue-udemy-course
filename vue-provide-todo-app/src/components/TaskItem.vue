<template>
  <div class="alert alert-warning d-flex justify-content-between align-items-center">
    <span :class="{ 'strike': task.status }">{{ task.text }}</span>
    <div>
      <i
        @click="editTask(task.id)"
        :class="[task.status ? 'fa-undo-alt' : 'fa-check-circle']"
        class="fas text-success mx-2"
        role="button"
      ></i>
      <i @click="deleteTask(task.id)" class="fas fa-minus-circle text-danger" role="button"></i>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import providers from '../utils/providers'
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup() {
    const tasks = inject(providers.tasks)
    const done = computed((done) => {
      return done ? strike : ''
    })
    const deleteTask = (taskId) => tasks.value = tasks.value.filter(({ id }) => id !== taskId)
    const editTask = (taskId) => tasks.value = tasks.value.map(t => {
      if (t.id === taskId) {
        t.status = !t.status
      }
      return t
    })
    return { deleteTask, editTask, done }
  }
}
</script>

<style scoped>
.strike {
  text-decoration: line-through;
}
</style>