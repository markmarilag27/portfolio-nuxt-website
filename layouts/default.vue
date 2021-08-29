<template>
  <div>
    <TopNavigation />
    <!-- end top navigation -->
    <Nuxt />
    <!-- end nuxt page -->
  </div>
</template>

<script>
import lazysizes from 'lazysizes'
import TopNavigation from '@/components/TopNavigation.vue'

export default {
  name: 'Main',

  components: {
    TopNavigation
  },

  mounted () {
    this.$nextTick(() => {
      this.lazyLoading()
    })
  },

  methods: {
    lazyLoading () {
      const images = [].slice.call(document.querySelectorAll('img.lazy'))

      if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target
              img.src = img.dataset.src
              img.srcset = img.dataset.srcset
              img.classList.remove('lazy')
              imgObserver.unobserve(img)
            }
          })
        })
        images.map(img => (imgObserver.observe(img)))
      } else if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]')
        images.map(img => (img.src = img.dataset.src))
      } else {
        lazysizes.init()
      }
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
  background-color: black;
  padding-top: 4rem;
}
html body {
  -webkit-tap-highlight-color: transparent;
}
</style>
