<template>
  <article id="about" class="relative flex flex-wrap justify-center items-center min-h-screen h-full py-32">
    <div class="flex w-full max-w-screen-xl px-4 items-center pb-56">
      <div class="flex-auto mx-16">
        <h1 class="text-9xl text-white font-bold tracking-wider mb-6">
          Hello, I'm Mark Marilag.
        </h1>
        <!-- end title -->
        <p class="text-2xl text-gray-100 tracking-wider leading-loose">
          I’m a web developer based in the Philippines with almost 5 years of experience building modern web sites and web applications.
        </p>
        <!-- end paragraph -->
      </div>
      <!-- end column -->
      <div class="flex-auto pointer-events-none z-10">
        <figure class="relative mx-28 w-64">
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
      <figure class="absolute max-w-sm right-8 top-8 pointer-events-none z-0">
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
      <p class="text-xl text-white tracking-wider leading-loose pb-12">
        I strive to build robust, scalable and performant backend by debugging slow queries, finding N+1 issues and not properly indexed columns and write tests to ensure application does not break. Of Course writing clean code is a norm and following popular design patterns such as Model-View-Controller (MVC), Repository and Actions.
      </p>
    </Block>
    <!-- end block -->
    <Block title="Working as Front End Developer" :items="frontendBuildMethod">
      <p class="text-xl text-white tracking-wider leading-loose pb-12">
        I love to create elegant UI by collaborating with UI/UX designer to make sure It’s consistent to the brand and well-performing web sites and web applications by making sure that bundle size is small, removing AJAX requests that are not necessary and profiling to make sure there is no memory leak.
      </p>
      <!-- end paragraph -->
    </Block>
    <!-- end block -->
    <Block title="Insight About me" :items="innerMe">
      <p class="text-xl text-white tracking-wider leading-loose pb-12">
        I'm an ambitious and driven person. I thrive on the challenges and constantly set goals (<strong>OKR</strong>) for my projects and myself, so I have something to strive towards for achieving my goals. And I believe to build quality software It needs good collaboration, documentation and testing.
      </p>
      <!-- end paragraph -->
    </Block>
    <!-- end block -->
  </article>
  <!-- end article -->
</template>

<script>
import backendBuildMethod from '@/data/backend-build-method.json'
import frontendBuildMethod from '@/data/frontend-build-method.json'
import innerMe from '@/data/inner-me.json'
import Companies from '@/components/Companies.vue'
import Block from '@/components/Block.vue'

export default {
  name: 'SectionAbout',

  components: {
    Companies,
    Block
  },

  data: () => ({
    backendBuildMethod,
    frontendBuildMethod,
    innerMe
  })
}
</script>
