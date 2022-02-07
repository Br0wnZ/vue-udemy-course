<template>
  <div class="card text-center mb-2 my-card">
    <div class="clas-body">
      <h5>{{ country.name.official }}</h5>
      <img :src="country.flags[1]" :alt="`${country.name.official} flag`" />
      <p class="card-text">
        <span
          class="badge bg-secondary m-2"
        >Capital: {{ Array.isArray(country.capital) ? country.capital[0] : country.capital }}</span>
        <span class="badge bg-secondary m-2">Region: {{ country.region }}</span>
        <span class="badge bg-secondary m-2">Population: {{ formatedNumber(country.population) }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['country'],
  setup(props) {
    const formatedNumber = (num) => new Intl.NumberFormat('de-DE').format(num)
    return { formatedNumber }
  }
}
</script>

<style scoped>
img,
.card {
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
}
</style>

