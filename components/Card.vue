<template>
  <div class="relative bg-white shadow rounded hover:shadow-lg transition duration-500 ease-in-out">
    <figure class="relative overflow-hidden">
      <img :src="work.image_url" :alt="work.title" :title="work.title" class="filter grayscale rounded-t-md">
      <!-- end image -->
      <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-gray-600 to-transparent hover:from-gray-800">
        <div class="w-full absolute bottom-0 py-4 px-6">
          <p class="text-white text-xs font-bold uppercase opacity-50 mb-1" v-text="work.company" />
          <!-- end company -->
          <h3 class="text-2xl text-white font-bold inline-block w-32 sm:w-full sm:max-w-md truncate" v-text="work.title" />
          <!-- end title -->
        </div>
        <!-- end text -->
      </div>
      <!-- end title -->
    </figure>
    <!-- end figure -->
    <p class="text-gray-600 font-bold text-center uppercase py-4">
      Read more
    </p>
    <!-- end read more -->
  </div>
  <!-- end card -->
</template>

<script>
export default {
  name: 'Card',

  props: {
    work: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
