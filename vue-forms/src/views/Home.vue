<template>
  <div class="home">
    <form>
      <input type="text" class="form-control my-2" placeholder="Task Name" v-model="task.name" />
    </form>
    <p>{{ task }}</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    task: {
      name: '',
      description: ''
    }
  }),
  components: {
  }
}
</script>
