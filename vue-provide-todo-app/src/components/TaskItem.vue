<template>
  <div class="alert alert-warning d-flex justify-content-between align-items-center">
    {{ task.text }}
    <div>
      <i class="fas fa-check-circle text-success mx-2" role="button"></i>
      <i class="fas fa-minus-circle text-danger" role="button"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup() {


    return {}
  }
}
</script>
