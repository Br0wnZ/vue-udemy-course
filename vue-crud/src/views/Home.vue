<template>
  <div class="home">
      <Form />
      <hr>
      <TaskList />
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import TaskList from '@/components/TaskList.vue'

export default {
  name: 'Home',
  components: {
    TaskList,
    Form
  },
}
</script>
