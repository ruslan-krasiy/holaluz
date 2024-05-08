<script lang="ts" setup>
import { ref, watch } from 'vue'
import { searchClientsByCup } from "./api"
import List from "./components/clients/List.vue"
import CupsSearch from './components/search/CupsSearch.vue'
import LoadingComponent from './components/Loader.vue'

import type { FullClientInfo } from './interfaces/client.interface'

const results = ref<FullClientInfo[] | null>(null)

const loading = ref(false)
const error = ref<Error | null>(null)
const searchCups = ref<string>("")

async function fetchData() {
  if(searchCups.value.length === 0)
    return

  loading.value = true
  
  setTimeout(async ()=>{
    try {
      results.value = await searchClientsByCup(searchCups.value!)
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }, 400)
}

watch(searchCups, fetchData)

const onSerch = (value: string) => {
  searchCups.value = value
}
</script>

<template>
  <main>
    <div class="logo">
      <img src="/logo-gradient.svg" />
    </div>
    <CupsSearch :callback="onSerch"/>
    <LoadingComponent v-if="loading" />
    <div v-else>
      <div class="search-info" v-if="searchCups.length">Search by cups: <em>{{ searchCups }}</em>, we found <strong>{{ results?.length }}</strong> results</div>
      <div v-if="results">
        <List :list="results" />
      </div>
    </div>
    <div v-if="error">{{ error }}</div>
  </main>
</template>

<style>
  .logo{
    text-align: center;
    margin-bottom: 2em;
  }
  .search-info {
    color: #808080;
    margin-bottom: 2rem;
    text-align: center;
  }
  .search-info em{
    color: #6e6ef6
  }
</style>