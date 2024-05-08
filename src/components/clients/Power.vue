<template>
  <div class="power">
    <div class="power-amounts">
      <span>{{ power.p1 }}</span>
      <span>{{ power.p2 }}</span>
    </div>
    <span class="power-sign">W</span>
  </div>
</template>

<style>
  .power{
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    gap: 2px
  }
  .power-amounts,
  .power-content{
    padding-top: 1px;
    display: inline-flex;
    flex-direction: column;
  }
  .power-description {
    color: blueviolet;
    line-height: 1;
    letter-spacing: 1.55px;
  }
  .power-amounts {
    letter-spacing: 1.5px;
    line-height: 1;
    font-size: 1.2em;
  }
  .power-content {
    gap: 1px;
  }
  .power-sign {
    color: blue;
    line-height: 1;
    font-size: 47px;
    font-family: serif;
  }
</style>

<script setup lang="ts">
defineProps<{power: {p1: string, p2: string}}>()
</script>