<script setup lang="ts">
import { ref } from 'vue';

  const props = defineProps<{callback(a: string): void}>()
  const searchCupsValue = ref<string>()

  const searchHandler = () => {
    if(searchCupsValue && searchCupsValue.value){
      props.callback(searchCupsValue.value)
      searchCupsValue.value = ''
    }
  }

  const inputHandler = (e: Event) => {
    const target = (<HTMLInputElement>e.target)
    searchCupsValue.value = target.value
  }

</script>

<template>
  <form @submit.prevent="searchHandler" class="search">
    <input 
      :value="searchCupsValue"
      @input="inputHandler" 
      required 
      placeholder="CUPS: 234567">
    <button>Search</button>
  </form>
</template>

<style>
  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1em;
    margin-bottom: 2em;
  }
  .search input {
    min-width: 350px;
  }
</style>