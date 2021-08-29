<template>
  <nav class="fixed flex justify-between items-center top-0 left-0 right-0 px-4 py-3">
    <NuxtLink to="/" class="relative w-10">
      <Logo />
      <!-- end logo -->
    </NuxtLink>
    <!-- end home page link -->

    <ul class="relative flex">
      <li v-for="(link, linkIndex) in links" :key="linkIndex">
        <a :href="link.target" class="text-white font-sm tracking-wider ml-4" v-text="link.text" />
        <!-- end link -->
      </li>
      <!-- end list -->
    </ul>
    <!-- end unordered list -->
  </nav>
</template>

<script>
import Logo from './SVG/Logo.vue'

export default {
  name: 'TopNavigation',

  components: {
    Logo
  },

  data () {
    return {
      links: [
        {
          text: 'About',
          target: '#about'
        },
        {
          text: 'Work',
          target: '#work'
        },
        {
          text: 'Contact',
          target: '#contact'
        }
      ]
    }
  }
}
</script>

<style scoped>
nav {
  background-color: #111111;
  z-index: 1024;
}
</style>
