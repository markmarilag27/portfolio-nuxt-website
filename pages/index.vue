<template>
  <div class="home-page">
    <SectionHero />
    <!-- end hero section -->
    <SectionTechnologyStack />
    <!-- end technology stack -->
    <SectionWork />
    <!-- end section work -->
  </div>
  <!-- end home page -->
</template>

<script>
import SectionHero from '@/components/Sections/SectionHero'
import SectionTechnologyStack from '@/components/Sections/SectionTechnologyStack'
import SectionWork from '@/components/Sections/SectionWork'

export default {
  name: 'HomePage',

  components: {
    SectionHero,
    SectionTechnologyStack,
    SectionWork
  },

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
