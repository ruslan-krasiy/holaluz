<script setup lang="ts">
import type {FullClientInfo} from '@/interfaces/client.interface'
import Offer from './Offer.vue'
import Power from './Power.vue'
import Amount from './Amount.vue'

const {data} = defineProps<{
  data: FullClientInfo
}>()

const hasHouse = data.building_type === 'house' ? true : false
const hasOffer = hasHouse && data.neighbors.length > 0
const role = ({
  'customer': 'STANDART',
  'customer-basic': 'BASIC',
  'customer-premium': 'PREMIUM'
})[data.role]

</script>

<template>
  <div class='card' :class="data.role">
    <div class="content">
      <p class="role">{{ role }}</p>
      <h3 class="title">{{ data.full_name }}</h3>
      <div class="address">
        <img v-if="hasHouse" src="/icons/home-icon.svg" width="24px" alt="House"/>
        <img v-else src="/icons/apartments-icon.svg" width="24px" alt="Apartment"/>
        <span>{{ data.address }}</span>
      </div>
      <div class="neigbors">
        <img src="/icons/neigbors-icon.svg" width="24px" alt="Neigbors"/>
        <span>{{ data.neighbors.length }}</span>
      </div>
      <div class="tarif-content">
        <div class="tarif">
          <span>Tarif</span>
          <div>{{ data.tariff }}</div>
        </div>
        <Offer v-if="hasOffer" :client="data"/>
      </div>
    </div>
    <div class="extra">
      <div>
        <Power :power="data.power"/>
        <Amount :amount="data.invoiced_amount"/>
      </div>
    </div>
  </div>
</template>

<style>
  .title {
    font-size: 2em;
    margin: 0;
  }
  .subtitle{
   
    margin: 0;
    text-transform: capitalize;
  }
  .card {
    overflow: hidden;
    position: relative;
    border: 1px solid #ddd;
    border-radius: 12px;
    flex: 1;
  }
  .content{
    padding: 1em 1em 2em;
  }
  .address, .neigbors{
    opacity: .6;
    display: flex;
    flex-direction: row;
    font-size: 1em;
    line-height: 120%;
    align-items: end;
    gap: 5px;
    margin-bottom: 6px;
  }
  .description > div{
    display: flex;
    align-items: flex-end;
    gap: .5em;
    margin-bottom: .5em;
  }
  .extra {
    border-top: 1px solid #ddd;
    padding: 1em;
  }
  .extra > div,  .tarif-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .customer-basic{
    background: #f6f6f6;
  }
  .customer-premium{
    background: #e3f261;
  }
  .tarif-content {
    margin-top: 1em;
    align-items: end;
  }
  .role{
    font-family: monospace;
    letter-spacing: 1px;
    margin-top: 0;
  } 
  .tarif{
    display: flex;
    flex-direction: column;
  }
  .tarif span{
    font-size: 12px;
    text-transform: uppercase;
    opacity: .6;
  }
  .tarif div{
    font-size: 22px;
  }

</style>