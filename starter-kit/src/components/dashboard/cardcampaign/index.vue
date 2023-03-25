<script setup lang="ts">
import Datecard from './datecard.vue'
import Progressbar from './progressbar.vue'
import Progress from './progresscard.vue'

const msg = '123'
const progress = 1723
const progressTotal = 4500
const isRunning = false
const percentage = 50
</script>

<template>
  <VCard class="card-campaign">
    <div class="d-flex">
      <VCardItem class="top-card top-card-left">
        <Datecard :msg="msg" />
      </VCardItem>
      <VCardItem class="top-card top-card-right">
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
@media screen and (min-width: 350px) {
  .v-card-item__content {
    overflow: visible;
  }

  .card-campaign {
    position: relative;
    overflow: visible;
    margin-block-end: 1rem;
  }

  .card-campaign::before {
    position: absolute;
    background-color: var(--text-active);
    content: "";
    inline-size: 3px;
    inset-block: 14% 67%;
    inset-inline-start: -0.5%;
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

  .top-card-left {
    padding-inline-end: 5px;
  }

  .top-card-right {
    flex-grow: 1.1;
    padding-inline-start: 5px;
  }

  .card-campaign {
    border-radius: 15px;
  }
}

@media screen and (min-width: 425px) {
  .card-campaign::before {
    position: absolute;
    background-color: var(--text-active);
    content: "";
    inline-size: 4px;
    inset-block: 16% 64%;
    inset-inline-start: -0.5%;
  }

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
    padding: 24px;
  }

  .card-description {
    padding-block-start: 0;
  }
}

@media screen and (min-width: 1440px) {
  .card-description,
  .top-card {
    padding: 14px;
  }

  .card-description {
    padding-block-start: 0;
  }
}

@media screen and (min-width: 1550px) {
  .card-description,
  .top-card {
    padding: 24px;
  }

  .card-description {
    padding-block-start: 0;
  }
}
</style>
