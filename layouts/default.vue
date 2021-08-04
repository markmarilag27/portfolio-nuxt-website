<template>
  <div class="py-28">
    <TopNavigation />
    <!-- end top navigation -->
    <nuxt />
    <!-- end nuxt page -->
  </div>
</template>

<script>
import TopNavigation from '@/components/TopNavigation'

export default {
  name: 'Main',

  components: {
    TopNavigation
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
