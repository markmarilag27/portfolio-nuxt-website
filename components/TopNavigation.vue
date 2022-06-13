<script setup lang="ts">
import { ref } from 'vue'
import LogoSVG from '@/components/SVG/LogoSVG.vue'
const links = ref([
  {
    text: 'About',
    target: '_self',
    href: '#about',
  },
  {
    text: 'Work',
    target: '_self',
    href: '#work'
  },
  {
    text: 'Github',
    target: '_blank',
    href: 'https://github.com/markmarilag27',
  },
  {
    text: 'Linkedin',
    target: '_blank',
    href: 'https://www.linkedin.com/in/sayefmarilag',
  }
])
</script>


<template>
  <nav class="fixed flex justify-between items-center top-0 left-0 right-0 px-4 py-3">
    <NuxtLink to="/" class="relative w-10">
      <LogoSVG />
      <!-- end logo -->
    </NuxtLink>
    <!-- end home page link -->

    <ul class="relative flex">
      <li v-for="(link, linkIndex) in links" :key="linkIndex">
        <a :href="link.href" class="text-white font-sm tracking-wider ml-6" :target="link.target">
          <span v-text="link.text" />
        </a>
        <!-- end link -->
      </li>
      <!-- end list -->
    </ul>
    <!-- end unordered list -->
  </nav>
</template>

<style scoped>
nav {
  background-color: #111111;
  z-index: 1024;
}
</style>
