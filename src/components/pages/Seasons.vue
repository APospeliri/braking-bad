<template>
  <section>
    <page-header></page-header>
    <div class="row">
      <div class="col-md-3">
        <sidebar></sidebar>
      </div>
      <div class="col-md-9">
        <h1 class="text text--h1">Seasons</h1>
        <gallery :characters="seasons" :pageTitle="'Seasons'"></gallery>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '@/components/blocks/Header'
import Sidebar from '@/components/blocks/Sidebar'
import Gallery from '@/components/blocks/Gallery'
import axios from 'axios'

export default {
  name: 'Seasons',
  components: {
    'page-header': Header,
    sidebar: Sidebar,
    gallery: Gallery
  },
  data() {
    return {
      seasons: [],
      seasonsLink: [
        {
          episode_id: 1,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNTZlMGY1OWItZWJiMy00MTZlLThhMGItNDQ2ODM3YzNkOWU5XkEyXkFqcGdeQXVyNzgyOTQ4MDc@._V1_UY126_UX224_AL_.jpg'
        },
        {
          episode_id: 2,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNmI5MTU3OTAtYTczMC00MDE5LTg3YjMtMjA3NWEyMmYyZWQwXkEyXkFqcGdeQXVyNjk1MzkzMzM@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 3,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMjM0Mjc0NjI0NV5BMl5BanBnXkFtZTgwMDg2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 4,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMjM0Mjc0NjI0NV5BMl5BanBnXkFtZTgwMDg2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 5,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNTgwOTE0ODYtMDEwNC00MjY1LWJjZDctNTU2MjRlNTgzY2NkXkEyXkFqcGdeQXVyNjg0Nzk2Nzc@._V1_UY126_UX224_AL_.jpg'
        },
        {
          episode_id: 6,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BOGU0YTA2ZGItNDFjNi00NWM1LTk5NzAtYjFkYTk2MzFhY2YyXkEyXkFqcGdeQXVyNjc0NTIwNTU@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 7,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNzM1OTA1NzgxOV5BMl5BanBnXkFtZTgwMjg2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 8,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMjEwNjk4MTI2MF5BMl5BanBnXkFtZTcwMTIzMTMzMg@@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 9,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BZjAyYmJlMWQtYjg0Zi00NjBiLTg1ZGUtMDRiZjcwMjY1NzM2XkEyXkFqcGdeQXVyNjg0Nzk2Nzc@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 10,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNzA5OWQxM2MtNzI0ZS00NWI4LWJmYWEtNjA3ODJmMzUzMzFmXkEyXkFqcGdeQXVyNjE0NDg1MDg@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 11,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMjI0NzA3MDc0MF5BMl5BanBnXkFtZTgwMTE4OTc5MjE@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 12,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMjIwOTg0MDU2MV5BMl5BanBnXkFtZTcwNjE2NTc0Mg@@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 13,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMTk0NjI4NTYwOV5BMl5BanBnXkFtZTgwOTc2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 14,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BYTBkYjQxOTQtOWNlNC00YmMxLWJlY2EtN2ZhNDBkYjc5OWU3XkEyXkFqcGdeQXVyNjE0NDg1MDg@._V1_UY126_CR1,0,224,126_AL_.jpg'
        },
        {
          episode_id: 15,
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMTk1MTI3NjY1Ml5BMl5BanBnXkFtZTgwMTk2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg'
        }
      ]
    }
  },

  created() {
    this.getSeasons()
  },

  methods: {
    async getSeasons() {
      const response = await axios(
        `https://www.breakingbadapi.com/api/episodes`
      )
      this.seasons = response.data.slice(0, 15)
      // prettier-ignore
      this.seasons.map(el => {
        el.img = this.seasonsLink.find
          (link => link.episode_id === el.episode_id).imgSrc
      })

      // // ver 02
      // const recivedSeasons = response.data.slice(0, 15)
      // recivedSeasons.map(el => {
      //   const id = el.episode_id
      //   // prettier-ignore
      //   const imgLink = this.seasonsLink.find(link => link.episode_id === id).imgSrc
      //   el.img = imgLink
      //   this.seasons.push(el)
      // })

      return this.seasons
    }
  }
}
</script>
