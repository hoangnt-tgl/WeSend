<!-- eslint-disable vue/component-api-style -->
<script lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import NoSchedulesCard from '@/components/campaignDetail/Schedules/NoSchedulesCard.vue'
import SchedulesCard from '@/components/campaignDetail/Schedules/SchedulesCard.vue'
import CampaignSchedule from '@/components/modal/CampaignSchedule.vue'

export default {
  name: 'CampaignSchedules',
  components: {
    CampaignSchedule,
    SchedulesCard,
    NoSchedulesCard,
  },

  setup() {
    return {
      isModalOpen: ref(false),
      items: ref([]) as Ref<number[]>,
    }
  },
  methods: {
    addSchedule() {
      // this.isModalOpen = true
      this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    closeModal() {
      this.isModalOpen = false
    },
    viewInCalendar() {
      this.$router.push('/calendar')
    },
  },
}
</script>

<template>
  <div>
    <div class="no-card-title">
      <h6>{{ items.length ? items.length : 'No' }} schedules found</h6>
      <div class="no-card-button">
        <button @click="addSchedule">
          Add Schedule
        </button>
        <button @click="viewInCalendar">
          View in Calendar
        </button>
      </div>
    </div>
    <div
      v-if="items.length > 0"
      class="card"
    >
      <div
        v-for="item in items"
        :key="item"
      >
        <SchedulesCard />
      </div>
    </div>

    <div v-else>
      <NoSchedulesCard />
    </div>

    <CampaignSchedule
      v-if="isModalOpen"
      @close="closeModal"
    />
  </div>
</template>

<style scoped>
  .no-card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .no-card-title h6 {
    color: var(--text-dark);
    font-size: var(--font-size);
  }

  .no-card-button {
    display: flex;
    gap: 12px;
  }

  .no-card-button button {
    border: 1px solid var(--color-primary);
    border-radius: 30px;
    background: var(--color-primary);
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    padding-block: 12px;
    padding-inline: 20px;
    transition: var(--smooth);
  }

  .no-card-button button:last-child {
    border-color: var(--border-gray);
    background: #fff;
    color: var(--text-dark);
  }

  .no-card-button button:hover {
    border-color: rgb(99 102 241 / 80%);
    background: rgb(99 102 241 / 80%);
    color: #fff;
  }

  .card {
    display: grid;
    column-gap: 24px;
    grid-template-columns: repeat(4, 1fr);
    margin-block-start: 30px;
    row-gap: 24px;
  }

  @media (max-width: 1024px) {
    .card {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .card {
      grid-template-columns: repeat(2, 1fr);
    }

    .no-card-title {
      flex-direction: column;
      justify-content: center;
      gap: 24px;
    }
  }

  @media (max-width: 550px) {
    .card {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
