<template>
  <div id="contact" class="relative py-28">
    <div class="max-w-5xl mx-auto px-6 grid grid-cols-2 items-center">
      <div class="box-border">
        <SVGContactBg class="block max-w-md" />
        <!-- end contact bg -->
      </div>
      <!-- end flex 1 -->
      <div class="px-4">
        <div class="text-gray-600 font-bold mb-3 uppercase tracking-wider">
          Contact
        </div>
        <!-- end tag -->
        <h2 class="text-4xl text-black mb-3 tracking-wider">
          Get in touch
        </h2>
        <!-- end title -->
        <p class="text-black opacity-50 tracking-wider mb-6">
          I’m not available for freelance work but feel free to reach out and say hello! I promise I don’t bite.
        </p>
        <!-- end text -->
        <div class="flex flex-nowrap gap-x-6">
          <a href="https://www.linkedin.com/in/sayefmarilag" target="_blank" nofollow class="block">
            <SVGLinkedin />
            <!-- end linkedin icon -->
          </a>
          <!-- end linkedin -->
          <a href="https://github.com/markmarilag27" target="_blank" nofollow class="block">
            <SVGGithub />
            <!-- end github icon -->
          </a>
          <!-- end github -->
        </div>
        <!-- end flex -->
      </div>
      <!-- end flex 1 -->
    </div>
    <!-- end container -->
  </div>
  <!-- end contact -->
</template>

<script>
import SVGContactBg from '@/components/SVG/SVGContactBg'
import SVGLinkedin from '@/components/SVG/SVGLinkedin'
import SVGGithub from '@/components/SVG/SVGGithub'

export default {
  name: 'SectionContact',

  components: {
    SVGContactBg,
    SVGLinkedin,
    SVGGithub
  }
}
</script>
