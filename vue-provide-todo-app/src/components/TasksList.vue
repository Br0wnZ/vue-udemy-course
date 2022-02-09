<template>
  <div>
    <h1>Task List</h1>
    <TaskForm />
    {{ tasks }}
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { provide } from 'vue'
import providers from '../utils/providers';
import TaskForm from './TaskForm.vue'
export default {
    setup() {
        const tasks = ref([]);
        provide(providers.tasks, tasks)
        return { tasks };
    },
    components: { TaskForm }
}
</script>
