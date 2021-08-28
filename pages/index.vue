<template>
  <main class="home-page">
    Foo
  </main>
  <!-- end home page -->
</template>

<script>
export default {
  name: 'HomePage',

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
