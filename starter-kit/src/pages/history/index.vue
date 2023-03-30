<script lang="ts">
import LastActions from '@/components/histories/LastActions.vue'
import PastCampaigns from '@/components/histories/PastCampaigns.vue'
import Updates from '@/components/histories/Updates.vue'
import TabsGrow from '@/components/tabs/TabsGrow.vue'

export default {
  name: 'History',
  components: {
    TabsGrow,
  },
  setup() {
    return {
      items: [
        { label: 'Last Actions', icon: 'tabler-history', body: LastActions },
        { label: 'Past Campaigns', icon: 'tabler-message-forward', body: PastCampaigns },
        { label: 'Updates', icon: 'tabler-bell', body: Updates },
      ],
    }
  },
}
</script>

<template>
  <div>
    <div class="detail-title">
      <h2>History</h2>
      <div class="contact-header">
        <div class="contact-search">
          <VIcon icon="tabler-search" />
          <input
            type="text"
            placeholder="Search"
          >
        </div>
        <div class="contact-button">
          <h6>FILTER BY</h6>
          <button><span>Date:</span><VIcon icon="tabler-calendar-due" /></button>
        </div>
      </div>
    </div>
    <TabsGrow
      :items="items"
    />
  </div>
</template>

<style scoped>
.detail-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 40px;
}

.detail-title h2 {
  color: var(--text-dark);
  font-size: 36px;
}

.contact-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-inline-start: 1rem;
  margin-block: 0;
}

.contact-search {
  display: flex;
  border-radius: 6px;
  background: #fff;
  color: var(--text-gray-light);
  gap: 10px;
  inline-size: 258px;
  padding-block: 8.75px;
  padding-inline: 12px;
}

.contact-search input {
  flex: 1;
  color: var(--text-dark);
  font-size: 13px;
  font-weight: 600;
  outline: none;
}

.contact-search svg {
  cursor: pointer;
}

.contact-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.contact-button h6 {
  color: var(--text-gray-light);
  font-size: 14px;
  font-weight: 500;
}

.contact-button button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #fff;
  color: var(--text-dark);
  cursor: pointer;
  font-size: 13px;
  font-weight: 400;
  gap: 6px;
  inline-size: 146px;
  padding-block: 11px;
  padding-inline: 20px;
  text-align: center;
  transition: all 0.4s;
}

.contact-button button.status {
  block-size: 43.5px;
  inline-size: 200px;
}

.contact-button button:hover {
  border-color: var(--text-dark);
}

.contact-button-mobile {
  display: none;
}

@media (max-width: 860px) {
  .detail-title {
    flex-direction: column;
    align-items: flex-start;
  }
  .contact-header {
    margin-inline-start: 0;
  }

}

@media (max-width: 550px) {
  .detail-title {
    margin-inline: 1rem;
  }
  .contact-search input {
    display: none;
  }

  .contact-search {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 1px solid transparent;
    block-size: 43.5px;
    cursor: pointer;
    inline-size: 43.5px;
    transition: var(--smooth);
  }

  .contact-search:hover {
    border-color: var(--text-dark);
  }
}
</style>
