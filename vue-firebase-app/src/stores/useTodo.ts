import { ITodo } from '@/models/todo'
import { STORE_NAMES } from '@/utils/consts'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore(STORE_NAMES.todo, {
  state: () => ({
    todos: [] as ITodo[],
    errorMessage: '' as string | undefined,
    error: false as boolean
  }),
  getters: {
    getTodos: (state) => state.todos
  },
  actions: {
    setTodos(todos: ITodo[]): void {
      this.todos = todos
    },
    addTodo(todo: ITodo): void {
      this.todos.unshift(todo)
    },
    setError(error: boolean, message?: string): void {
      this.error = error
      this.errorMessage = error ? message : ''
    },
    editTodo(todo: ITodo) {
      const i = this.todos.indexOf(todo)
      this.todos[i].status = !this.todos[i].status
    },
    deleteTodo(id: string) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  }
})
