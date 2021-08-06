<template>
  <div class="pt-28">
    <TopNavigation :back-page="!isIndex" />
    <!-- end top navigation -->
    <nuxt />
    <!-- end nuxt page -->
    <Footer />
    <!-- end footer -->
  </div>
</template>

<script>
import TopNavigation from '@/components/TopNavigation'
import Footer from '@/components/Footer'
import lazysizes from 'lazysizes'

export default {
  name: 'Main',

  components: {
    TopNavigation,
    Footer
  },

  computed: {
    isIndex () {
      return this.$route.name === 'index'
    }
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
}
html body {
  -webkit-tap-highlight-color: transparent;
}
</style>
