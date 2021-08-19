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
      <ul class="list-inside list-disc leading-relaxed ml-4">
        <li>Create your own personalised raffle page.</li>
        <li>Secure online sales protected by Stripe.</li>
        <li>Track sales and site data.</li>
        <li>Connect with Influencers to help market your promotion.</li>
        <li>Your raffle will be visible in our mobile app</li>
        <li>Manage your previous winners, sponsors, causes and members.</li>
        <li>Export transaction and tickets CSV ready to submit to your regulator</li>
        <li>Approved or reject applied influencers to your raffle</li>
        <li>Track influencers visits, transactions, conversion rate, tickets sold and amount raised</li>
      </ul>
      <!-- end unordered list -->
    </SectionAbout>
    <!-- end about -->
    <section id="challenges" class="bg-gray-50">
      <article class="w-full max-w-screen-md mx-auto px-6 py-16">
        <h2 class="text-xs text-gray-600 font-bold uppercase mb-3">
          Team Challenges
        </h2>
        <!-- end title -->
        <h3 class="text-3xl font-bold mb-4">
          Multitenancy
        </h3>
        <!-- end subtitle -->
        <p class="text-gray-600 tracking-wider leading-relaxed mb-6">
          In <nuxt-link to="/work/australian-horizons-foundation" class="text-gray-600 font-bold">
            Australian Horizons Foundation (AHF)
          </nuxt-link> we can run multiple raffles but cannot have multiple organisations. Matt the founder of One Raise thought to make It as Software as a Service (SaaS) and we came down on implementing Multi Tenancy.
        </p>
        <!-- end text -->
        <p class="text-gray-600 tracking-wider leading-relaxed mb-6">
          Where organisations can sign up and run their raffles and sell tickets while Influencers can sign up to and apply on the organisations raffles to earn money when customers buy a ticket using referral code.
        </p>
        <!-- end text -->
        <p class="text-gray-600 tracking-wider leading-relaxed mb-6">
          We did a Research and Development (R&D) and compared results and discussed which approach is the most fit on the requirements that includes budget as well.
        </p>
        <!-- end text -->
        <p class="text-gray-600 tracking-wider leading-relaxed">
          The team decided to go with a Single Database approach where the table has tenant_id and the client said that there will be no custom features for individual organisations so we believe that Single Database is the most fit approach here.
        </p>
        <!-- end text -->
      </article>
      <!-- end container -->
    </section>
    <!-- end challenges -->
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
