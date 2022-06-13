<script setup lang="ts">
import backendBuildMethod from '@/json/backend-build-method.json'
import frontendBuildMethod from '@/json/frontend-build-method.json'
import aboutMe from '@/json/about-me.json'
</script>

<template>
  <article id="about" class="relative flex flex-wrap justify-center items-center min-h-screen h-full py-32">
    <div class="flex w-full flex-wrap flex-col-reverse gap-8 xl:flex-row max-w-screen-xl px-4 items-center pb-56">
      <div class="w-full max-w-screen-sm">
        <h1 class="text-5xl xl:text-9xl text-white font-bold tracking-wider mb-6">
          Hello, I'm Mark Marilag.
        </h1>
        <!-- end title -->
        <p class="text-2xl text-gray-100 tracking-wider leading-loose">
          I’m a web developer with 5 years of experience building different types of web apps, from green field development to specializing in the fin-tech industry.
        </p>
        <!-- end paragraph -->
      </div>
      <!-- end column -->
      <div class="w-full xl:w-64 pointer-events-none z-10">
        <figure class="relative block mx-auto xl:mx-28 w-64">
          <img
            width="256"
            height="256"
            loading="lazy"
            class="lazyload filter grayscale rounded-full"
            data-src="/me.png"
            src="/me.png"
            alt="Mark Marilag"
            title="Mark Marilag"
          >
          <!-- end image -->
        </figure>
        <!-- end figure -->
      </div>
      <!-- end column -->
      <figure class="absolute max-w-lg right-8 top-8 pointer-events-none z-0">
        <img
          width="100%"
          height="100%"
          loading="lazy"
          class="lazyload"
          data-src="/philippines.svg"
          src="/philippines.svg"
          alt="Philippines"
          title="Philippines"
        >
        <!-- end image -->
      </figure>
      <!-- end figure -->
    </div>
    <!-- end flex -->
    <Companies />
    <!-- end companies -->
    <Block title="Working as Back End Developer" :items="backendBuildMethod">
      <p class="xl:text-xl text-white tracking-wider leading-loose pb-12">
        I strive to write robust features while I love writing tests whenever It’s feature or unit testing especially when debugging for a bug fix and refactoring.
      </p>
    </Block>
    <!-- end block -->
    <Block title="Working as Front End Developer" :items="frontendBuildMethod">
      <p class="xl:text-xl text-white tracking-wider leading-loose pb-12">
        I love to create elegant UI by collaborating with UI/UX designer to make sure It’s consistent to the brand and build well-performing web sites and web applications.
      </p>
      <!-- end paragraph -->
    </Block>
    <!-- end block -->
    <Block title="What I Like The Most" :items="aboutMe">
      <p class="xl:text-xl text-white tracking-wider leading-loose pb-12">
        I value a non-toxic working environment and blameless culture. Instead of pointing fingers to each other I rather provide a solution to the issues or problems and pull each other to the finish line.
      </p>
      <!-- end paragraph -->
    </Block>
    <!-- end block -->
  </article>
  <!-- end article -->
</template>
