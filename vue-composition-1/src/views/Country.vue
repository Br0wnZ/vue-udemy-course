<template>
  <div>
    <!-- <h1>{{ $route.params.name }}</h1> -->
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
  export default {
    props: ['name'],
    setup(props) {
      console.log(props.name);
      const params = useRoute().params
      console.log(params.name);
    }
  }
</script>

