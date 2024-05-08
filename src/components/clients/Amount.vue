<template>
  <div class="amount">
    <div class="amount-content">
      <span class="sign">€</span>
      <span class="money-amount">{{ amount }}</span>
    </div>
    <div>
      <span class="amount-description">invoiced amount</span>
    </div>
  </div>
</template>
<style>
.amount-content{
  display: flex;
  flex-direction: row;
  gap: .5em;
}
.sign{
  font-size: 32px;
  line-height: .9;
}
.money-amount{
  font-size: 32px;
  line-height: .9;
  letter-spacing: -2px;
  font-weight: 100;
}
.amount-description{
  font-size: 13px;
  line-height: 1;
}
</style>

<script setup lang="ts">
  defineProps<{amount: string}>()
</script>