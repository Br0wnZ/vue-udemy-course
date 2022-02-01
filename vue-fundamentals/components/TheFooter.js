app.component('the-footer', {
  props: ['year', 'url'],
  template: /*html*/`
  <footer class="bg-dark bg-gradient">
    <h5 class="pt-2 text-center">
      &copy; <a :href="url" target="_blank" rel="noopener noreferrer">{{ text }}</a> - {{ year }}
    </h5>
  </footer>
  `,
  data: () => ({
    text: 'Javi Moreno',
  })
})