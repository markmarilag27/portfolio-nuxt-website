<template>
  <article class="container mx-auto px-6 h-full min-h-screen flex justify-center items-center">
    <h1 class="text-5xl font-bold">
      Working on the content...
    </h1>
  </article>
  <!-- end page -->
</template>

<script>

export default {
  name: 'AHFPage',

  head () {
    return {
      title: 'Australian Horizons Foundation',
      link: [
        { rel: 'canonical', href: this.$config.baseURL + this.$route.path }
      ]
    }
  }
}
</script>
