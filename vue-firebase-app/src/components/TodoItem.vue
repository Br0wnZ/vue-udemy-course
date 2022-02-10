<template>
  <div class="card shadow-sm mb-2 zoom">
    <div class="card-body">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-9">
          <p class="m-0">{{ todo?.text }}</p>
        </div>
        <div class="col-12 col-md-4 col-lg-3 text-end">
          <button class="btn btn-warning mx-2">Done</button>
          <button @click="deleteItem(todo?.id)" :disabled="loading" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDB } from '@/composables/useDB'
import { ITodo } from '@/models/todo';
import { inject, Ref } from 'vue';

const props = defineProps({
  todo: Object
})

const todos: any = inject<Ref<ITodo[]>>('todos')
const { deleteTodo, loading } = useDB()

const deleteItem = async (id: string): Promise<void> => {
  await deleteTodo(id)
  todos.value = [...todos.value.filter((t: ITodo) => t.id !== id)]
}

</script>

<style>

.zoom:hover {
  transform: scale(1.05);
}
  
</style>