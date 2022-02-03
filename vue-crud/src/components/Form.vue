<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <input
        type="text"
        class="form-control my-2"
        placeholder="Task Name"
        v-model.trim="task.name"
        required
      />

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

      <div class="mt-2 d-grid">
        <button type="submit" class="btn btn-dark btn-block" :disabled="disabled">{{ isEditing ? 'Edit' : 'Save'}}</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Uid from 'short-unique-id'

const uid = new Uid({ length: 5 });
export default {
  name: 'Form',
  data: () => ({
    checkOptions: [
      { name: 'JavaScript', value: 'javascript' },
      { name: 'NodeJS', value: 'nodejs' },
    ],
    radioOptions: [
      { name: 'Priority', id: 'priority' },
      { name: 'Normal', id: 'normal' },
    ]
  }),
  computed: {
    ...mapState(['task', 'isEditing']),
    disabled() {
      return this.task.name.trim() === ''
    }
  },
  methods: {
    ...mapActions(['addTask']),
    handleSubmit() {
      this.addTask({ ...this.task, id: !this.isEditing ? uid() : this.task.id })
    }
  },
}
</script>