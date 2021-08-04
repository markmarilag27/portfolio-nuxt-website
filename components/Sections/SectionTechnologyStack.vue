<template>
  <section id="technology-stack" class="relative block bg-gray-600 py-28">
    <div class="container mx-auto">
      <div class="text-white font-bold mb-3 opacity-60 uppercase tracking-wider">
        Technology stack
      </div>
      <!-- end tag -->
      <h2 class="text-4xl text-white mb-3 tracking-wider">
        Language that I speak
      </h2>
      <!-- end title -->
      <p class="text-white opacity-50 tracking-wider">
        The skills and technologies that I used to build strong back end.
      </p>
      <!-- end text -->
      <div class="flex flex-wrap my-8">
        <SVGUbuntu class="mr-10" />
        <!-- end ubuntu -->
        <SVGPhp class="mr-10" />
        <!-- end php -->
        <SVGNginx class="mr-10" />
        <!-- end nginx -->
        <SVGMysql class="mr-10" />
        <!-- end mysql -->
        <SVGLaravel />
        <!-- end laravel -->
      </div>
      <!-- end backend icons -->
      <p class="text-white opacity-50 tracking-wider">
        The skills and technologies that I used to build beautiful and elegant front end.
      </p>
      <!-- end text -->
      <div class="flex flex-wrap my-8">
        <SVGHtml class="mr-10" />
        <!-- end html -->
        <SVGCss class="mr-10" />
        <!-- end css -->
        <SVGJs class="mr-10" />
        <!-- end js -->
        <SVGVue class="mr-10" />
        <!-- end vue -->
        <SVGBootstrap />
        <!-- end bootstrap -->
      </div>
      <!-- end frontend icons -->
      <p class="text-white opacity-50 tracking-wider">
        The tools that makes me productive
      </p>
      <!-- end text -->
      <div class="flex flex-wrap pt-8">
        <SVGPhpStorm class="mr-10" />
        <!-- end phpstorm -->
        <SVGVsCode class="mr-10" />
        <!-- end vscode -->
        <SVGDocker />
        <!-- end docker -->
      </div>
      <!-- end other icons -->
    </div>
    <!-- end container -->
    <SVGTechnologyStack class="absolute bottom-0 right-0 hidden xl:block" />
    <!-- end svg technology stack -->
  </section>
  <!-- end technology stack -->
</template>

<script>
import SVGUbuntu from '@/components/SVG/SVGUbuntu'
import SVGPhp from '@/components/SVG/SVGPhp'
import SVGNginx from '@/components/SVG/SVGNginx'
import SVGMysql from '@/components/SVG/SVGMysql'
import SVGLaravel from '@/components/SVG/SVGLaravel'
import SVGHtml from '@/components/SVG/SVGHtml'
import SVGCss from '@/components/SVG/SVGCss'
import SVGJs from '@/components/SVG/SVGJs'
import SVGVue from '@/components/SVG/SVGVue'
import SVGBootstrap from '@/components/SVG/SVGBootstrap'
import SVGPhpStorm from '@/components/SVG/SVGPhpStorm'
import SVGVsCode from '@/components/SVG/SVGVsCode'
import SVGDocker from '@/components/SVG/SVGDocker'
import SVGTechnologyStack from '@/components/SVG/SVGTechnologyStack'

export default {
  name: 'SectionTechnologyStack',

  components: {
    SVGUbuntu,
    SVGPhp,
    SVGNginx,
    SVGMysql,
    SVGLaravel,
    SVGHtml,
    SVGCss,
    SVGJs,
    SVGVue,
    SVGBootstrap,
    SVGPhpStorm,
    SVGVsCode,
    SVGDocker,
    SVGTechnologyStack
  }
}
</script>
