<template>
  <div class="relative w-full flex flex-wrap max-w-screen-xl justify-center items-center xl:py-24 px-4">
    <h2 class="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-snug">
      I contribute to start-up companies that turn client’s ideas into reality.
    </h2>
    <!-- end header -->
    <div class="flex w-full py-8 justify-center gap-4 xl:gap-12 flex-wrap">
      <div v-for="(company, companyIndex) in companies" :key="companyIndex" class="flex-grow md:flex-1 bg-white py-4 px-6 shadow rounded">
        <figure class="relative">
          <img
            width="200"
            height="80"
            loading="lazy"
            class="lazyload mx-auto pointer-events-none"
            :data-src="company.src"
            :src="company.src"
            :alt="company.title"
            :title="company.title"
          >
        </figure>
      </div>
    </div>
    <!-- end flex -->
  </div>
  <!-- end companies -->
</template>

<script>
import companies from '@/data/companies.json'

export default {
  name: 'Companies',

  data: () => ({
    companies
  })
}
</script>
