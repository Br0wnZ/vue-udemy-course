<template>
  <div>
    <div class="row">
      <div class="col-12" v-for="(country, index) in countries" :key="index">
        <Card :country="country"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import Card from '@/components/Card.vue'
export default {
  components: { Card },
  setup(props) {
    const store = useStore()
    const countries = computed(() => store.getters.orderedCountries)
    onMounted(async () => {
      await store.dispatch('getCountries')
      await store.dispatch('filterByRegion', '')
    })

    return { countries }
  }
}
</script>
