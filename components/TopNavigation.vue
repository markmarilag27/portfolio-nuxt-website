<template>
  <div class="bg-white fixed top-0 left-0 right-0 py-6">
    <div class="container flex items-center px-4 justify-between sm:px-6 xl:mx-auto">
      <div class="w-48">
        <SVGLogo width="100%" height="100%" />
        <!-- end svg logo -->
      </div>
      <!-- end logo wrapper -->
      <ul class="relative">
        <li v-for="(link, index) in links" :key="index" class="inline-block px-3 tracking-wider font-bold text-gray-600 focus:text-gray-400">
          <a :href="link.targetElement" v-text="link.text" />
        </li>
        <!-- end link -->
      </ul>
      <!-- end ul -->
    </div>
    <!-- end container -->
  </div>
  <!-- end top navigation -->
</template>

<script>
import SVGLogo from '@/components/SVG/SVGLogo'

export default {
  name: 'TopNavigation',

  components: {
    SVGLogo
  },

  data () {
    return {
      links: [
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
    }
  }
}
</script>

<style scoped>
.bg-white {
  z-index: 1024;
}
</style>
