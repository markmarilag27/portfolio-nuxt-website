<template>
  <div class="container mx-auto px-6 h-full min-h-screen flex justify-center items-center">
    <h1 class="text-5xl font-bold">
      Working on the content...
    </h1>
  </div>
  <!-- end page -->
</template>

<script>

export default {
  name: 'LibraExpenseManagement',

  head () {
    return {
      title: 'Libra Expense Management',
      link: [
        { rel: 'canonical', href: this.$config.baseURL + this.$route.path }
      ]
    }
  }
}
</script>
