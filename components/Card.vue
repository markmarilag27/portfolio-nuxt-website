<template>
  <div class="relative shadow-md rounded">
    <figure class="relative">
      <img :src="work.image_url" :alt="work.title" :title="work.title">
      <!-- end image -->
    </figure>
    <!-- end figure -->
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
