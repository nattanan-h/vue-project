<template>
  <div>
    Search for manga
    <v-text-field v-model="query" label="Search" solo dense class="mt:10" />
    <v-btn depressed @click="handleclicked">
      Search
    </v-btn>
    <v-divider class="mt-2 mb-2" />
    <div class="d-flex flex-wrap justify-center">
      <v-card
        v-for="manga in results"
        :key="manga.mal_id"
        class="ma-2 "
        width="350"
        outlined
        @click="gotomangaurl(manga)"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              Scores : {{ manga.score }}
            </div>
            <v-list-item-title class="text-h5 mb-1">
              {{ manga.title }}
            </v-list-item-title>
            <v-list-item-subtitle> {{ manga.synopsis }}</v-list-item-subtitle>
          </v-list-item-content>
          <img :src="manga.image_url" alt="" :style="{width:'80px' , marginTop:'5px'}">
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // ***************************use async******************************
  // asyncData (ctx) {
  //  const url = `https://api.jikan.moe/v3/search/manga?q=${ctx.route.query.q}&page=1`
  //  return axios.get(url).then((res) => {
  //    return {
  //      query: ctx.route.query.q,
  //      results: res.data.results
  //    }
  //  })
  // },

  data () {
    return {
      query: '',
      results: []
    }
  },
  async fetch () {
    const url = `https://api.jikan.moe/v3/search/manga?q=${this.$route.query.q}&page=1`
    if (this.$route.query.q && this.$route.query.q.length >= 3) {
      const response = await axios.get(url)
      this.results = response.data.results
    }
  },

  // mounted () {
  //  console.error('mounted result', this.results)
  // },

  methods: {
    async handleclicked () {
      this.$router.replace({ name: 'manga-search', query: { q: this.query } })
      const url = `https://api.jikan.moe/v3/search/manga?q=${this.query}&page=1`
      const response = await axios.get(url)
      this.results = response.data.results

      // axios.get(url).then((res) => {
      //  this.results = res.data.results
      // })
    },

    gotomangaurl (manga) {
      window.location = manga.url
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
