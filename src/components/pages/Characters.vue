<template>
  <section>
    <page-header></page-header>
    <div class="row">
      <div class="col-md-3">
        <sidebar></sidebar>
      </div>
      <div class="col-md-9">
        <button class="btn btn--sidebar" @click="filter = 'Alive'">
          filter by alive
        </button>
        <button class="btn btn--sidebar" @click="filter = 'Deceased'">
          filter by dead
        </button>
        <button class="btn btn--sidebar" @click="filter = 'all'">
          show all
        </button>
        <h1 class="text text--h1">{{ title }}</h1>
        <gallery
          :characters="filteredCharacters"
          :pageTitle="title"
          @onUpdateInput="titleInput($event)"
        ></gallery>
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
  name: 'Characters',
  components: {
    'page-header': Header,
    sidebar: Sidebar,
    gallery: Gallery
  },

  data() {
    return {
      title: 'Characters',
      filter: 'all',
      characters: []
    }
  },

  created() {
    console.log('created: ')
    this.getCharacters()
  },

  computed: {
    filteredCharacters() {
      return this.filter === 'all'
        ? this.characters
        : this.filterByStatus(this.characters, this.filter)
    }
  },

  methods: {
    filterByStatus(list, filter) {
      const filteredList = list.filter(el => el.status === filter)
      return filteredList
    },

    titleInput(value) {
      return (this.title = value)
    },

    async getCharacters() {
      console.log('getCharacters')
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters`
      )
      this.characters = response.data
      console.log('res: ', response.data)
      return this.characters
    }
  }
}
</script>
