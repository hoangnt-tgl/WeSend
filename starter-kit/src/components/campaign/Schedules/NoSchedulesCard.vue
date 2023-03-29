<!-- eslint-disable vue/component-api-style -->
<script lang="ts">
import { defineComponent } from 'vue'
import CampaignSchedule from '@/components/modal/CampaignSchedule.vue'

export default defineComponent({
  name: 'NoSchedulesCard',
  components: {
    CampaignSchedule,
  },
  setup() {
    return {
      isModalOpen: ref(false),
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
      console.log('close')
    },
  },
})
</script>

<template>
  <div class="no-card">
    <div class="no-card-content">
      <div class="image">
        <img
          src="../../../assets/images/pages/no-date.png"
          alt="no data"
        >
      </div>
      <h4>You haven’t scheduled it yet!</h4>
      <p>Schedule this campaign to start sending messages to your contacts now.</p>
      <button>Add Schedule</button>
    </div>
  </div>
</template>

<style scoped>
.no-card-content {
  border-radius: 10px;
  background: #f9f9ff;
  margin-block-start: 18px;
  margin-inline: 0;
  padding-block: 80px;
  padding-inline: 20px;
  text-align: center;
}

.no-card-content .image {
  margin-block: 0;
  margin-inline: auto;
  max-inline-size: 400px;
}

.no-card-content .image img {
  inline-size: 100%;
}

.no-card-content h4 {
  font-size: var(--font-size-md);
  margin-block-start: 20px;
}

.no-card-content p {
  color: var(--text-gray-light);
  font-size: var(--font-size-sm);
  margin-block-end: 16px;
}

.no-card-content button {
  border-radius: 30px;
  background: var(--text-dark);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  padding-block: 12px;
  padding-inline: 20px;
  transition: var(--smooth);
}

.no-card-content button:hover {
  background: rgba(17, 24, 39, 80%);
}


</style>
