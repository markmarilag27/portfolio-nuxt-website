<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import lazysizes from 'lazysizes'
import TopNavigation from '@/components/TopNavigation.vue'

const initializeLazyLoading = (): void => {
  const images: HTMLImageElement[] = [].slice.call(document.querySelectorAll('img.lazy'))

  if ('IntersectionObserver' in window) {
    const imgObserver: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src
          img.srcset = img.dataset.srcset
          img.classList.remove('lazy')
          imgObserver.unobserve(img)
        }
      })
    })
    images.map(img => (imgObserver.observe(img)))
  } else if ('loading' in HTMLImageElement.prototype) {
    const images: any = document.querySelectorAll('img[loading="lazy"]')
    images.map(img => (img.src = img.dataset.src))
  } else {
    lazysizes.init()
  }
}

onMounted(async () => {
  await nextTick()
  initializeLazyLoading()
})

</script>

<template>
  <div>
    <TopNavigation />
    <!-- end top navigation -->
    <NuxtPage />
    <!-- end nuxt page -->
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  background-color: black;
  padding-top: 4rem;
}

html body {
  -webkit-tap-highlight-color: transparent;
}
</style>
