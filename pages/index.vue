<template>
  <main class="home-page">
    <SectionAbout />
    <!-- end section about -->
  </main>
  <!-- end home page -->
</template>

<script>
import SectionAbout from '@/components/Sections/SectionAbout.vue'

export default {
  name: 'HomePage',

  components: {
    SectionAbout
  },

  scrollToTop: false,

  head () {
    return {
      title: 'Web Developer',
      link: [
        { rel: 'canonical', href: this.$config.baseURL + this.$route.path }
      ]
    }
  }
}
</script>
