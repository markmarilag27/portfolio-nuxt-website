import work from '@/data/work'

export default {
  computed: {
    work () {
      const path = this.$route.path
      return work.find(workData => path === workData.slug)
    }
  }
}
