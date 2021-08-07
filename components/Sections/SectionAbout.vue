<template>
  <article id="about" class="bg-gray-50 min-h-full flex flex-col justify-center items-center">
    <figure class="mt-6 max-w-screen-xl mx-auto">
      <img
        loading="lazy"
        :data-src="work.image_url"
        src="/placeholder.svg"
        :alt="work.title"
        :title="work.title"
        class="lazyload rounded"
      >
    </figure>
    <!-- end figure -->
    <div class="w-full max-w-screen-md mx-auto px-6 py-16">
      <h1 class="text-5xl font-bold mb-4" v-text="work.title" />
      <!-- end title -->
      <slot />
      <!-- end slot -->
    </div>
    <!-- end container -->
  </article>
  <!-- end about section -->
</template>

<script>
export default {
  name: 'SectionAbout',

  props: {
    work: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
