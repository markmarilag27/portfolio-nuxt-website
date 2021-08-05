<template>
  <div id="work" class="bg-gray-50 py-28">
    <div class="container mx-auto">
      <div class="text-gray-600 font-bold mb-3 uppercase tracking-wider">
        Work
      </div>
      <!-- end tag -->
      <h2 class="text-4xl text-black mb-3 tracking-wider">
        A selection of stuff I’ve built
      </h2>
      <!-- end title -->
      <p class="text-black opacity-50 tracking-wider mb-16">
        Current and past work.
      </p>
      <!-- end text -->
      <div class="grid grid-cols-3 gap-x-4 gap-y-16">
        <NuxtLink v-for="(work, index) in list" :key="index" :to="work.slug">
          <Card :work="work" />
          <!-- end card -->
        </NuxtLink>
        <!-- end nuxt link -->
      </div>
      <!-- end flex -->
    </div>
    <!-- end container -->
  </div>
  <!-- end work -->
</template>

<script>
import Card from '@/components/Card'
import list from '@/data/work'

export default {
  name: 'SectionWork',

  components: {
    Card
  },

  data () {
    return {
      list
    }
  }
}
</script>
