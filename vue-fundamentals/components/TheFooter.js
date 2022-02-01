app.component('the-footer', {
  template: /*html*/`
  <footer class="bg-dark bg-gradient">
    <h5 class="pt-2 text-center">
      &copy; <a :href="url">{{ text }}</a> - {{ new Date().getFullYear() }}
    </h5>
  </footer>
  `,
  data: () => ({
    text: 'Javi Moreno',
    url: 'http://javimoreno.epizy.com/#/'
  })
})