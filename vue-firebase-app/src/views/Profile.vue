<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-2 text-center">
      <img
        :src="(user?.photoURL as string)"
        class="img-fluid mt-2"
        :alt="`${user?.displayName} image`"
      />
    </div>
    <div
      class="col-12 col-md-6 col-lg-10 mt-2"
      :class="{ 'text-start': !isMobile, 'text-center': isMobile }"
    >
      <h2>{{ user?.displayName }}</h2>
      <p>{{ user?.email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@vueuse/firebase'
import { inject } from 'vue';

const { user } = useAuth()
const isMobile = inject<boolean>('isMobile')

</script>

<style scoped>
img {
  border-radius: 50%;
}
</style>