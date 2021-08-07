<template>
  <footer class="bg-gray-600 py-12">
    <div class="container mx-auto px-6 flex flex-wrap justify-center items-center gap-10">
      <NuxtLink rel="alternate" to="/">
        <SVGLogo primary-color="white" divider-color="white" />
        <!-- end logo -->
      </NuxtLink>
      <!-- end link -->
      <p class="text-sm text-white">
        &copy; 2021 Design and coded by me
      </p>
      <!-- end text -->
    </div>
    <!-- end container -->
  </footer>
  <!-- end footer -->
</template>

<script>
import SVGLogo from '@/components/SVG/SVGLogo'

export default {
  name: 'Footer',

  components: {
    SVGLogo
  }
}
</script>
