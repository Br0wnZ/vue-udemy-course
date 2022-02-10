<template>
  <div class="card shadow-sm mb-2 zoom">
    <div class="card-body">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-9">
          <p class="m-0">{{ todo?.text }}</p>
        </div>
        <div class="col-12 col-md-4 col-lg-3 text-end">
          <button class="btn btn-warning mx-2">Done</button>
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  todo: Object
})
</script>

<style>

.zoom:hover {
  transform: scale(1.05);
}
  
</style>