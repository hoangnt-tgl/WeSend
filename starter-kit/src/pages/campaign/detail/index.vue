<script lang="ts">
import { defineComponent } from "vue";
import CampaignContacts from "@/components/campaignDetail/Contacts/index.vue";
import CampaignMessage from "@/components/campaignDetail/Messages/index.vue";
import CampaignSchedules from "@/components/campaignDetail/Schedules/index.vue";
import TabsGrow from "@/components/tabs/TabsGrow.vue";

export default defineComponent({
  name: "CampaignDetail",
  components: {
    TabsGrow,
  },
  setup() {
    return {
      items: [
        {
          label: "Schedules",
          icon: "tabler-calendar-event",
          body: CampaignSchedules,
        },
        {
          label: "Contacts",
          icon: "tabler-phone",
          body: CampaignContacts,
        },
        {
          label: "Messages",
          icon: "mdi-message-text",
          body: CampaignMessage,
        },
      ],
    };
  },
});
</script>

<template>
  <div class="detail-title">
    <h2>Campaign Name</h2>
    <div class="detail-title-button">
      <button>
        <VIcon icon="tabler-player-play-filled" /><span>Run Campaign Now</span>
      </button>
      <button class="delete">
        <VIcon icon="tabler-copy" /><span>Duplicate</span>
      </button>
      <button class="delete">
        <VIcon icon="tabler-trash" /><span>Delete</span>
      </button>
    </div>
  </div>
  <div>
    <TabsGrow :items="items" />
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

.detail-title-button {
  display: flex;
  align-items: center;
  gap: 10px;
}

.detail-title-button button {
  display: flex;
  align-items: center;
  border: 1px solid var(--text-dark);
  border-radius: 100px;
  background: #111827;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  gap: 6px;
  padding-block: 11px;
  padding-inline: 20px;
  text-align: center;
  transition: all 0.4s;
}

.detail-title-button button:hover {
  border-color: rgba(17, 24, 39, 70%);
  background: rgba(17, 24, 39, 70%);
}

.detail-title-button button.delete {
  border-color: var(--border-gray);
  border-radius: 100px;
  background: transparent;
  color: var(--text-dark);
}

.detail-title-button button.delete:hover {
  border-color: rgba(17, 24, 39, 70%);
  background: rgba(17, 24, 39, 70%);
  color: #fff;
}

@media (max-width: 1024px) {
  .detail-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .detail-title {
    padding-inline-start: 20px;
  }

  .detail-title-button button.delete {
    padding: 11px;
    border-radius: 50%;
  }

  .detail-title-button button.delete span {
    display: none;
  }
}

@media (max-width: 480px) {
  .detail-title {
    padding-inline-start: 16px;
  }

  .detail-title-button {
    gap: 8px;
  }

  .detail-title-button button {
    padding-block: 7px;
    padding-inline: 14px;
  }

  .detail-title-button button.delete {
    padding: 10px;
  }

  .detail-title-button button svg {
    block-size: 18px;
    inline-size: 18px;
  }
}
</style>
