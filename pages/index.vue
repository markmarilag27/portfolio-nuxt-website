<template>
  <main class="home-page">
    <SectionHero />
    <!-- end hero section -->
    <SectionTechnologyStack />
    <!-- end technology stack -->
    <SectionWork />
    <!-- end section work -->
    <SectionContact />
    <!-- end section contact -->
  </main>
  <!-- end home page -->
</template>

<script>
import SectionHero from '@/components/Sections/SectionHero'
import SectionTechnologyStack from '@/components/Sections/SectionTechnologyStack'
import SectionWork from '@/components/Sections/SectionWork'
import SectionContact from '@/components/Sections/SectionContact'

export default {
  name: 'HomePage',

  components: {
    SectionHero,
    SectionTechnologyStack,
    SectionWork,
    SectionContact
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
