<template>
  <section id="about" class="container mx-auto flex flex-wrap gap-6 justify-center px-6 py-12 xl:items-center xl:h-screen">
    <figure class="flex-grow xl:flex-1">
      <img
        class="lazyload rounded-full md:max-w-lg md:max-h-lg mx-auto"
        loading="lazy"
        width="682"
        height="682"
        data-src="/me.png"
        alt="My Journey on Metadata Computer Systems"
        title="My Journey on Metadata Computer Systems"
      >
      <!-- end image -->
    </figure>
    <!-- end figure -->
    <div class="flex-grow xl:flex-1">
      <div class="max-w-lg mx-auto">
        <h1 class="text-2xl xl:text-5xl mr-6 font-bold mb-3 tracking-wider">
          Hello Champs, I’m Mark Marilag
        </h1>
        <!-- end h1 -->
        <p class="text-gray-600 tracking-wider leading-relaxed">
          An experience full stack web developer, ambitious and driven person.<br><br>

          I thrive on the challenges and constantly set goals for my projects and for myself, so I have something to strive towards for achieving my goals.<br><br>

          I have an associate degree in Information Technology and I’m keen to be better at my craft.<br><br>

          Learning is no issue for me, I love learning even if It’s outside of my comfort zone. I always look for an opportunity to do better and achieve greatness.
        </p>
        <!-- end paragraph -->
      </div>
    </div>
    <!-- end content -->
  </section>
  <!-- end hero section -->
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>
