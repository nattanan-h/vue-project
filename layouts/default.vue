<template>
  <v-app dark>
    <sidebar />
    <topbar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>
<script>
import Footer from '../components/global/footer.vue'
import sidebar from '../components/global/sidebar.vue'
import topbar from '../components/global/topbar.vue'
export default {
  components: {
    sidebar,
    topbar,
    Footer
  }
}
</script>
