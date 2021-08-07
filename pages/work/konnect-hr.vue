<template>
  <main>
    <SectionAbout :work="work" />
    <!-- end about -->
  </main>
  <!-- end page -->
</template>

<script>
import SectionAbout from '@/components/Sections/SectionAbout'
import workMixin from '@/mixins/work-mixin'

export default {
  name: 'KonnectHRPage',

  components: {
    SectionAbout
  },

  mixins: [workMixin],

  scrollToTop: false,

  head () {
    return {
      title: this.work.title,
      meta: [
        { hid: 'description', name: 'description', content: this.work.description }
      ],
      link: [
        { rel: 'canonical', href: this.$config.baseURL + this.$route.path }
      ]
    }
  }
}
</script>
