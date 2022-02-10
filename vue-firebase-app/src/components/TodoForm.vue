<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" class="form-control my-3" placeholder="Task" v-model.trim="todoText" />
    <button class="btn btn-primary w-100" type="submit">Add Todo</button>
  </form>
</template>

<script setup lang="ts">
import { useDB } from '@/composables/useDB'
import { ITodo } from '@/models/todo'
import { inject, Ref, ref } from 'vue'

const { addTodo } = useDB()
const todoText: Ref<string> = ref('')

const todos: any = inject<Ref<ITodo[]>>('todos')
const error: any = inject<Ref<boolean>>('error')

const handleSubmit = async () => {
  const todo = await addTodo(todoText.value)
  if (todo.res) {
    error.value = todo.error
    todoText.value = ''
    return
  }
  todos.value = [...todos.value, todo]
  todoText.value = ''
}
</script>

<style lang="scss" scoped>
</style>