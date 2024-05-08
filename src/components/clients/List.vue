<script setup lang="ts">
import type {FullClientInfo} from '../../interfaces/client.interface'
import ClientCard from './ClientCard.vue'

defineProps<{
  list: FullClientInfo[]
}>()
</script>

<template>
  <div 
    class="clients-list">
    <ClientCard v-for="client in list" :data="client" :key="client.cups" />
  </div>
</template>

<style>
  .clients-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
  }
</style>