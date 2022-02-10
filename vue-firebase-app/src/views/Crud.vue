<template>
  <div>
    <h1 v-if="!loading && !error">Crud</h1>
    <Spinner v-if="loading" />
    <TodoForm v-if="!loading" />
    <div v-if="!!todos.length">
      <TodoItem v-for="(todo, index) in todos" :key="todo.id" :todo="todo" />
    </div>
    <div v-if="showError">
      <Error />
    </div>
  </div>
</template>

<script setup lang="ts">
import Spinner from '@/components/Spinner.vue'
import TodoForm from '@/components/TodoForm.vue'
import TodoItem from '@/components/TodoItem.vue'
import Error from '@/components/Error.vue'
import { useDB } from "@/composables/useDB"
import { computed, ComputedRef, onMounted, provide, Ref, ref } from 'vue'
import { ITodo } from '@/models/todo'

const { getTodos, loading } = useDB()
const todos: Ref<ITodo[] | any> = ref<ITodo[] | any>([])
const error: Ref<boolean> = ref(false)
const showError: ComputedRef<boolean> = computed(() => !!error.value)

provide('error', error)
provide('todos', todos)

onMounted(async () => {
  todos.value = await getTodos()
  if (todos.value.res) {
    error.value = todos.value.error
    return
  }
})


</script>
