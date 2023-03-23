<script setup lang="ts">
import Cardcampaign from '@/components/dashboard/cardcampaign/index.vue'

const items = [1, 2, 3, 4]
</script>

<template>
  <div class="campaign-wrapper">
    <!--
      <div
      v-for="production in items"
      :key="production"
      :production="production"
      >
      <Cardcampaign />
      </div>
    -->
    <Cardcampaign />
    <Cardcampaign />
    <Cardcampaign />
    <Cardcampaign />
  </div>
</template>

<style>
@media (min-width: 375px) {
  .campaign-wrapper {

  }
}

@media (min-width: 768px) {
  .campaign-wrapper {
    display: flex;
    gap: 1rem;
  }
}
</style>
