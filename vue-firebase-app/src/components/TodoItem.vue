<template>
  <div class="card shadow-sm mb-2 zoom">
    <div class="card-body">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-9">
          <p class="m-0" :class="{ 'strike': todo.status }">{{ todo?.text }}</p>
        </div>
        <div class="col-12 col-md-4 col-lg-3 text-end my-2">
          <button
            @click="editItem(todo)"
            class="btn mx-2"
            :disabled="loading"
            :class="{ 'btn-success': todo.status, 'btn-warning': !todo.status }"
          >
            <SvgIcon :taskStatus="todo.status ? TODO_STATUS.undo : TODO_STATUS.done" />
          </button>
          <button @click="deleteItem(todo.id)" :disabled="loading" class="btn btn-danger">
            <SvgIcon :taskStatus="TODO_STATUS.trash" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useDB } from '@/composables/useDB'
import { ITodo } from '@/models/todo';
import SvgIcon from '@/components/SvgIcon.vue'
import { TODO_STATUS } from '@/utils/consts'

defineProps({
  todo: {
    type: Object as PropType<ITodo>,
    required: true
  }
})

const { deleteTodo, editTodo, loading } = useDB()

const deleteItem = async (id: string): Promise<void> => await deleteTodo(id)

const editItem = async (todo: ITodo) => await editTodo(todo)


</script>

<style>
.strike {
  text-decoration: line-through;
}

.zoom:hover {
  transform: scale(1.01);
}
</style>