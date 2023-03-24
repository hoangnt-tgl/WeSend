<script lang="ts">
import { pastCampaigns } from '@/data/history'

export default {
  setup() {
    return {
      items: pastCampaigns,
    }
  },
}
</script>

<template>
  <div class="d-none d-sm-inline">
    <VTable class="text-no-wrap pa-10">
      <!-- 👉 table head -->
      <thead>
        <tr>
          <th
            scope="col"
            class="text-overline "
          >
            Campaign Name
            <VIcon
              icon="tabler-arrows-sort"
            />
          </th>
          <th
            scope="col"
            class="text-overline "
          >
            Running Date & Time
            <VIcon
              icon="tabler-arrows-sort"
            />
          </th>
          <th
            scope="col"
            class="text-overline "
          >
            Progress
            <VIcon
              icon="tabler-arrows-sort"
            />
          </th>
          <th
            scope="col"
            class="text-overline "
          >
            Contacts
            <VIcon
              icon="tabler-arrows-sort"
            />
          </th>
          <th />
        </tr>
      </thead>
      <!-- 👉 table body -->
      <tbody>
        <tr
          v-for="item in items"
          :key="item.id"
          style="height: 3.75rem;"
        >
          <!-- 👉 User -->
          <td>
            <span
              class="text-base"
              style="white-space: break-spaces;word-wrap: normal;"
            >{{ item.name }}</span>
          </td>
          <td><span class="text-base">{{ item.time }}</span></td>
          <td>
            <div class="d-flex flex-column">
              <span class="text-caption">
                {{ item.progress }} / {{ item.contacts }}
              </span>
              <VProgressLinear
                :model-value="item.progress / item.contacts * 100"
                color="primary"
                rounded
                height="6"
              />
            </div>
          </td>
          <td><span class="text-base">{{ item.contacts }}</span></td>

          <!-- 👉 Actions -->
          <td
            class="text-center"
            style="width: 5rem;"
          >
            <VBtn
              icon
              size="x-small"
              color="default"
              variant="text"
              class="border rounded"
            >
              <VIcon
                size="22"
                icon="tabler-file-export"
              />
            </VBtn>
          </td>
        </tr>
      </tbody>

      <!-- 👉 table footer  -->
      <tfoot v-show="!items.length">
        <tr>
          <td
            colspan="5"
            class="text-center"
          >
            No data available
          </td>
        </tr>
      </tfoot>
    </VTable>
  </div>
  <div class="d-block d-sm-none">
    <VCard class="pa-4">
      <VCard
        v-for="item in items"
        :key="item.id"
        class="card-campaign pa-4"
      >
        <div class="d-flex align-center">
          <div class="d-flex flex-column w-75">
            <VCardTitle class="notification-title py-0">
              {{ item.name }}
            </VCardTitle>
            <VCardTitle class="text-body-1 py-0">
              <span class="notification-date">{{ item.time }}</span>
            </VCardTitle>
            <VCardTitle class="text-body-1 py-0">
              <span class="notification-title">
                {{ item.progress }} / {{ item.contacts }}
              </span>
              <VProgressLinear
                :model-value="item.progress / item.contacts * 100"
                color="primary"
                rounded
                height="6"
              />
            </VCardTitle>
          </div>
          <div class="ms-auto">
            <VBtn
              icon
              size="x-small"
              color="default"
              variant="text"
              class="border rounded"
            >
              <VIcon
                size="22"
                icon="tabler-file-export"
              />
            </VBtn>
          </div>
        </div>
      </VCard>
    </VCard>
  </div>
</template>

<style scoped>
.card-campaign {
  border-radius: 0 10px 10px 0;
  background: #f9fafb;
}

.notification-title {
  color: var(--text-active);
  font-size: var(--font-size);
  margin-inline: 0;
  white-space: unset;
}

.notification-date {
  color: var(--text-deactive);
  font-size: var(--font-size-sm);
}
</style>
