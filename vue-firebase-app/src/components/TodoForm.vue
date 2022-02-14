<template>
  <form @submit.prevent="handleSubmit">
    <div class="row my-3">
      <div class="col-12 col-md-12 col-lg-12 mt-1">
        <input type="text" class="form-control" placeholder="Task" v-model.trim="todoText" />
      </div>
      <div class="col-12 col-md-12 col-lg-12 mt-1">
        <button class="btn btn-primary w-100" type="submit">Add Todo</button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
import { useDB } from '@/composables/useDB'

const { addTodo } = useDB()
const todoText: Ref<string> = ref('')

const handleSubmit = async () => {
  await addTodo(todoText.value)
}
</script>

<style lang="scss" scoped>
</style>