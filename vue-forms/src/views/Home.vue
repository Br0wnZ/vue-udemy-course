<template>
  <div class="home">
    <form>
      <input type="text" class="form-control my-2" placeholder="Task Name" v-model="task.name" />

      <div class="form-check text-start" v-for="(option, index) in checkOptions" :key="index">
        <input
          class="form-check-input"
          type="checkbox"
          :value="option.value"
          :id="`check${index}`"
          v-model="task.categories"
        />
        <label class="form-check-label" :for="`check${index}`">{{ option.name }}</label>
      </div>
    </form>

    <hr />

    <p>{{ task }}</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    task: {
      name: '',
      description: '',
      categories: []
    },
    checkOptions: [
      { name: 'JavaScript', value: 'javascript' },
      { name: 'NodeJS', value: 'nodejs' },
    ]
  }),
  components: {
  }
}
</script>
