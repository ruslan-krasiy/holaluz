<script setup lang="ts">
import {getClientByCup} from '@/api'
import type { FullClientInfo } from '@/interfaces/client.interface'
import { onMounted, ref } from 'vue'

const {client} = defineProps<{client: FullClientInfo}>()
const hasBasicOffer = ref<boolean>(false)
const hasSpecialOffer = ref<boolean>(false)

const getPower = (user?: FullClientInfo ):number => user ? Object.values(user.power).reduce((total, current) => total + Number(current), 0) : 0

onMounted(async ()=>{
  const clientPower = getPower(client)
  try{
    const promises = client.neighbors.map(neigbors => new Promise((resolve) => resolve(getClientByCup(neigbors))))

    const allNeigbors = await Promise.allSettled(promises)
    .then(results => {
            return results.map((res) => {
              if (res.status === 'fulfilled') {
                return res.value as FullClientInfo
              }
            })
          })
    
    hasBasicOffer.value = !allNeigbors.some(neigbor => getPower(neigbor) > clientPower)

    const totalPayments = allNeigbors.reduce((total, current) => total + Number(current?.invoiced_amount), 0)
    if(totalPayments > 100){
      hasSpecialOffer.value = true
    }

  }catch(e){
    console.log(e)
  }
})
</script>

<template>
  <div class="offer">
    <span v-if="hasSpecialOffer" class="discount">12%</span>
    <span v-else-if="hasBasicOffer" class="discount">5%</span>
    <p class="title">
      Rooftop revolution
    </p>
  </div>
</template>

<style>
  .offer{
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    margin: 0;
  }
  .offer .discount{
    font-size: 25px;
    letter-spacing: -.5px;
    line-height: 1;
    color: red
  }
  .offer .title {
    font-size: 10px;
    text-transform: uppercase;
    background-color: red;
    padding: .5em;
    color: #fff;
    border-radius: 2px;
  }

</style>