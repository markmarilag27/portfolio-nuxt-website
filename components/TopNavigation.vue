<template>
  <header class="bg-white fixed top-0 left-0 right-0 py-6">
    <div class="container flex items-center px-4 justify-center xl:justify-between sm:px-6 xl:mx-auto">
      <div class="w-48">
        <NuxtLink rel="alternate" to="/">
          <SVGLogo width="100%" height="100%" />
          <!-- end svg logo -->
        </NuxtLink>
      </div>
      <!-- end logo wrapper -->
      <ul class="relative">
        <li v-for="(link, index) in links" :key="index" class="hidden xl:inline-block px-3 tracking-wider font-bold text-gray-600 focus:text-gray-400">
          <NuxtLink v-if="link.to" :to="link.to" rel="alternate" v-text="link.text" />
          <!-- end nuxt link -->
          <a v-else :href="link.targetElement" rel="alternate" v-text="link.text" />
        </li>
        <!-- end link -->
      </ul>
      <!-- end ul -->
    </div>
    <!-- end container -->
  </header>
  <!-- end top navigation -->
</template>

<script>
import SVGLogo from '@/components/SVG/SVGLogo'

const defaultLinks = [
  {
    text: 'About',
    targetElement: '#about'
  },
  {
    text: 'Technology Stack',
    targetElement: '#technology-stack'
  },
  {
    text: 'Work',
    targetElement: '#work'
  },
  {
    text: 'Contact',
    targetElement: '#contact'
  }
]

const workLinks = [
  {
    text: 'Back to Home Page',
    to: '/'
  },
  {
    text: 'About',
    targetElement: '#about'
  },
  {
    text: 'Challenges',
    targetElement: '#challenges'
  },
  {
    text: 'Contact',
    targetElement: '#contact'
  }
]

export default {
  name: 'TopNavigation',

  components: {
    SVGLogo
  },

  props: {
    isIndex: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    links () {
      return this.isIndex ? defaultLinks : workLinks
    }
  }
}
</script>

<style scoped>
.bg-white {
  z-index: 1024;
}
</style>
