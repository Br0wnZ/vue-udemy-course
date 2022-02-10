<template>
  <div class="card shadow-sm mb-2 zoom">
    <div class="card-body">
      <div class="row">
        <div class="col-12 col-md-9 col-lg-9">
          <p class="m-0" :class="{ 'strike': todo.status }">{{ todo?.text }}</p>
        </div>
        <div class="col-12 col-md-3 col-lg-3 text-end">
          <button
            @click="editItem(todo)"
            class="btn mx-2"
            :class="{'btn-success': todo.status, 'btn-warning': !todo.status}"
          >{{ todo.status ? 'Done' : 'Pending' }}</button>
          <button @click="deleteItem(todo.id)" :disabled="loading" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDB } from '@/composables/useDB'
import { IError, ITodo } from '@/models/todo';
import { inject, PropType, Ref } from 'vue';

const props = defineProps({
  todo: {
    type: Object as PropType<ITodo>,
    required: true
  }
})

const todos: Ref<ITodo[]> | any = inject<Ref<ITodo[] | any>>('todos')
const error: any = inject<Ref<boolean>>('error')
const { deleteTodo, editTodo, loading } = useDB()

const deleteItem = async (id: string): Promise<void> => {
  await deleteTodo(id)
  todos.value = [...todos.value.filter((t: ITodo) => t.id !== id)]
}

const editItem = async (todo: ITodo) => {
  const i = todos.value.indexOf(todo)
  const res: IError = await editTodo(todo)
  if (res.res) {
    error.value = res.error
    return
  }
  todo.status = !todo.status
  todos.value[i] = { ...todo }

}

</script>

<style>
.strike {
  text-decoration: line-through;
}

.zoom:hover {
  transform: scale(1.01);
}
</style>