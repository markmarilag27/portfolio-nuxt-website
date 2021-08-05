<template>
  <div class="pt-28">
    <TopNavigation />
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

export default {
  name: 'Main',

  components: {
    TopNavigation,
    Footer
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
