<template>
  <div class="home-page">
    <div id="about" class="container mx-auto flex justify-center items-center h-screen">
      <figure class="flex-auto max-w-2xl ml-auto mr-4">
        <img class="rounded-3xl" src="/me.png" alt="My Journey on Metadata Computer Systems" title="My Journey on Metadata Computer Systems">
        <!-- end image -->
      </figure>
      <!-- end figure -->
      <div class="flex-auto max-w-lg mr-auto ml-4">
        <h1 class="text-5xl max-w-md font-bold mb-3">
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
      <!-- end content -->
    </div>
    <!-- end hero section -->
  </div>
</template>

<script>
export default {
  name: 'HomePage',

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
