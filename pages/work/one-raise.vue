<template>
  <main>
    <SectionAbout :work="work">
      <p class="text-gray-600 tracking-wider leading-relaxed mb-6">
        Online platform where australian charities, schools, community groups, sporting clubs, and other non-profit organisations can organize raffles and raise funds.<br><br>
        On november 8, 2020 One Raise launched a beta test for trade promotion named <a href="https://oneraise.com.au/maloo" class="text-blue-600" rel="opener" target="_blank">Maloo</a> and sold <strong>16,323</strong> entries and raised <strong>$748,825</strong> until December 10, 2020 to fund the continuous development of One Raise platform.
      </p>
      <!-- end text -->
      <p class="text-gray-600 tracking-wider leading-relaxed mb-2">
        What One Raise Offer:
      </p>
      <!-- end text -->
      <ul class="list-inside list-disc leading-relaxed">
        <li>Create your own personalised raffle page.</li>
        <li>Secure online sales protected by Stripe.</li>
        <li>Track sales and site data.</li>
        <li>Connect with Influencers to help market your promotion.</li>
        <li>Your raffle will be visible in our mobile app</li>
        <li>Manage your raffle previous winners, sponsors, causes and members.</li>
      </ul>
    </SectionAbout>
    <!-- end about -->
  </main>
  <!-- end page -->
</template>

<script>
import SectionAbout from '@/components/Sections/SectionAbout'
import workMixin from '@/mixins/work-mixin'

export default {
  name: 'OneRaisePage',

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
