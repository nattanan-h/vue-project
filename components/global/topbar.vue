<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="toggledrawer" />
    <v-toolbar-title v-text="title" />
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      title: 'Vuetify.js'
    }
  },
  methods: {
    toggledrawer () {
      this.$store.commit('set_drawer', !this.$store.state.drawer)
    }
  }
}
</script>

<style>

</style>
