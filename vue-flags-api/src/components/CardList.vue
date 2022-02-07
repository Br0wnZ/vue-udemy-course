<template>
  <div>
    <div class="row">
      <div class="col-12">{{ countries }}</div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup(props) {
    const store = useStore()
    const countries = computed(() => store.getters.orderedCountries)
    onMounted(() => {
      store.dispatch('getCountries')
    })

    return { countries }
  }
}
</script>
