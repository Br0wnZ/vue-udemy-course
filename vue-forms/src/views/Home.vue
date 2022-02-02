<template>
  <div class="home">
    <form>
      <input type="text" class="form-control my-2" placeholder="Task Name" v-model="task.name" />

      <div class="mt-2 text-start">
        <div
          class="form-check form-check-inline"
          v-for="(option, index) in checkOptions"
          :key="index"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :value="option.value"
            :id="`check${index}`"
            v-model="task.categories"
          />
          <label class="form-check-label" :for="`check${index}`">{{ option.name }}</label>
        </div>
      </div>

      <div class="mt-2 text-start">
        <div
          class="form-check form-check-inline text-start"
          v-for="(option, index) in radioOptions"
          :key="index"
        >
          <input
            class="form-check-input"
            :value="option.id"
            type="radio"
            :id="option.id"
            name="importance"
            v-model="task.status"
          />
          <label class="form-check-label" :value="option.id" :for="option.id">{{ option.name }}</label>
        </div>
      </div>

      <div class="mt-2">
        <input
          class="form-control my-2"
          type="number"
          name="number"
          id="number"
          v-model.number="task.number"
        />
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
      categories: [],
      status: '',
      number: 0
    },
    checkOptions: [
      { name: 'JavaScript', value: 'javascript' },
      { name: 'NodeJS', value: 'nodejs' },
    ],
    radioOptions: [
      { name: 'Priority', id: 'priority' },
      { name: 'Normal', id: 'normal' },
    ]
  }),
  components: {
  }
}
</script>
