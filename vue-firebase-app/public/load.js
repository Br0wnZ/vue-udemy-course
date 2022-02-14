if (!window.location.href.includes('localhost') && "serviceWorker" in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('ServiceWorker working'))
    .catch(err => console.log(err))
}