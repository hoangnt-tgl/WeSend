<script setup lang="ts">
import Datecard from './datecard.vue'
import Progressbar from './progressbar.vue'
import Progress from './progresscard.vue'

const msg = '123'
const progress = 1723
const progressTotal = 4500
const isRunning = true
const percentage = 50
</script>

<template>
  <div>
    <VCard class="card-campaign">
      <div class="d-flex">
        <VCardItem class="top-card">
          <Datecard :msg="msg" />
        </VCardItem>
        <VCardItem class="top-card">
          <Progress
            :progress="progress"
            :progress-total="progressTotal"
            :is-running="isRunning"
          />
        </VCardItem>
      </div>
      <VCardText class="card-description">
        Lorem ipsum dolor sit amet consectetur
      </VCardText>
      <Progressbar
        :percentage="percentage"
      />
    </VCard>
  </div>
</template>

<style>
@media screen and (min-width: 375px) {
  .card-campaign {
    margin-block-end: 1rem;
  }

  .card-description {
    padding-block-start: 0;
  }

  .card-description,
  .top-card {
    padding: 14px;
  }

  .card-description {
    font-size: var(--font-size-sm);
  }

  .card-campaign {
    border-radius: 15px;
  }

  .top-card {
    flex: 1;
  }
}

@media screen and (min-width: 425px) {
  .card-description,
  .top-card {
    padding: 24px;
  }

  .card-description {
    font-size: var(--font-size-sm);
    padding-block-start: 0;
  }

  .card-campaign {
    border-radius: 15px;
  }

  .top-card {
    flex: 1;
  }
}
</style>
