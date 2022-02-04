<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Categories</th>
        <th scope="col">Priority</th>
        <th scope="col">Number</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in tasks" :key="task.id">
        <th scope="row">{{ task.id }}</th>
        <td>{{ $filters.titleCase(task.name) }}</td>
        <td>{{ $filters.titleCase(task?.categories?.join(', ')) }}</td>
        <td>{{ $filters.titleCase(task.status) }}</td>
        <td>{{ task.number }}</td>
        <td>
          <button 
            @click="deleteTask(task.id)" 
            type="button" 
            class="btn btn-outline-danger">
            Delete
          </button>
          <button 
            @click="editTask(task)" 
            type="button" 
            class="btn btn-outline-info">
            Edit
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'TaskList',
  computed: {
    ...mapState(['tasks'])
  },
  created() {
    this.load()
  },
  methods: {
    ...mapActions(['deleteTask', 'editTask', 'load'])
  },
}
</script>
