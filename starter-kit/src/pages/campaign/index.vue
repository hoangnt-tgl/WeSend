<script>
import CampaignList from '@/components/campaign/main/List.vue'
import SearchBar from '@/components/campaign/main/SearchBar.vue'

export default {
  name: 'Campaign',
  components: { CampaignList, SearchBar },
}
</script>

<template>
  <div class="campaign-container">
    <SearchBar />
    <CampaignList />
  </div>
</template>

<style scoped>
@media (max-width: 480px) {
  .campaign-container {
    padding-block: 0;
    padding-inline: 16px;
  }
}
</style>
