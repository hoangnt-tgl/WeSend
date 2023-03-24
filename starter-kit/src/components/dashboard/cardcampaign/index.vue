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
</template>

<style>
@media screen and (min-width: 375px) {
  .card-campaign {
    margin-block-end: 1rem;
  }

  .card-description {
    padding: 14px;
    font-size: var(--font-size-sm);
    padding-block-start: 0;
  }

  .top-card {
    flex: 1;
    padding: 14px;
  }

  .card-campaign {
    border-radius: 15px;
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

@media screen and (min-width: 950px) {
  .card-description,
  .top-card {
    padding: 14px;
  }
}
@media screen and (min-width: 1200px) {
  .card-description,
  .top-card {
    padding: 24px;
  }
}
@media screen and (min-width: 1440px) {
  .card-description,
  .top-card {
    padding: 14px;
  }
}
@media screen and (min-width: 1550px) {
  .card-description,
  .top-card {
    padding: 24px;
  }
}
</style>
