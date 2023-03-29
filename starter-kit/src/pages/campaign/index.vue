<script>
import CampaignList from '@/components/campaign/main/List.vue'
import SearchBar from '@/components/campaign/main/SearchBar.vue'

export default { components: { CampaignList, SearchBar } }
</script>

<template>
  <SearchBar />
  <CampaignList />
</template>
