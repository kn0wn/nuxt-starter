<template>
  <div class="container">
    <h1 class="text-6xl text-white">nuxt-starter</h1>
    <h2 v-if="error.statusCode === 404" class="text-2xl text-white">Page not found</h2>
    <h2 v-else class="text-2xl text-white">An error occurred</h2>
    <nuxt-link class="text-xl text-blue-500" to="/">Home page</nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  layout: 'blog', // you can set a custom layout for the error page
}
</script>
