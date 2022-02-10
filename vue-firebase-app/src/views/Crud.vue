<template>
  <div>
    <Spinner v-if="loading" />
    <TodoForm v-if="!loading" />
    <div v-if="!!todos.length">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
    <div v-if="!todos.length && !loading" class="text-center">
      <h3>Good Job! There are not nothing to do.</h3> 
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
const todos: Ref<ITodo[]> = ref<ITodo[]>([])
const error: Ref<string> = ref('')
const showError: ComputedRef<boolean> = computed(() => !!error.value)

provide('error', error)
provide('todos', todos)

onMounted(async () => {
  const { todos: todosDb, res, error: errorDb } = await getTodos()
  todos.value = todosDb
  if (res) {
    error.value = errorDb
    return
  }
})

</script>
