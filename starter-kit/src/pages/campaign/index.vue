<script>
import CampaignList from '@/components/campaign/main/List.vue'
import SearchBar from '@/components/campaign/main/SearchBar.vue'

export default {
  name: 'Campaign',
  components: { CampaignList, SearchBar },
}
</script>

<template>
  <div>
    <SearchBar />
    <CampaignList />
  </div>
</template>
