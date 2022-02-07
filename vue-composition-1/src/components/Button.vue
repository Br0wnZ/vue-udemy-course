<template>
  <!-- <button @click="$emit('action')">{{ buttonText }}</button> -->
  <button @click="onClick">{{ buttonText }}</button>
</template>

<script>
export default {
  props: ['buttonText'],
  setup(props, context) {
    const onClick = () => context.emit('action')
    return { onClick }
  }
}
</script>
