<template>
  <Spinner v-if="loading" />

  <div class="row" v-if="!isMobile">
    <div class="col-4">
      <TodoForm v-if="!loading" />
    </div>
    <div class="col-8 mt-2">
      <div v-if="!!todos.length">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
      </div>
      <div v-if="!todos.length && !loading" class="text-center">
        <h3>Good Job! There are not nothing to do.</h3>
      </div>
    </div>
  </div>

  <div v-else>
    <TodoForm v-if="!loading" />
    <div v-if="!!todos.length">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
    <div v-if="!todos.length && !loading" class="text-center">
      <h3>Good Job! There are not nothing to do.</h3>
    </div>
  </div>

  <div v-if="showError">
    <Error />
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef, inject, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/useTodo'
import { TodoForm, TodoItem, Spinner, Error} from '@/components/index'
import { useDB } from "@/composables/useDB"

const { todos, error } = storeToRefs(useTodoStore())
const { getTodos, loading } = useDB()
const showError: ComputedRef<boolean> = computed(() => !!error.value)
const isMobile = inject<boolean>('isMobile')

onMounted(async () => await getTodos())

</script>
