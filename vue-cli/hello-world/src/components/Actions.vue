<template>
  <button :disabled="disabled" @click="action">{{ buttonText }} amount</button>
</template>

<script>
  export default {
    props: {
      buttonText: String,
      disabled: Boolean
    }, 
    methods: {
      action() {
        this.$emit('action')
      }
    }  
  }
</script>

<style  scoped>

</style>