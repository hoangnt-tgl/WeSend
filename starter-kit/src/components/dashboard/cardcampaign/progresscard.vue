<script lang="ts">
export default {
  name: 'Progresscard',
  props: {
    progress: {
      type: Number,
      required: true,
    },
    progressTotal: {
      type: Number,
      required: true,
    },
    isRunning: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<template>
  <div class="progress-box">
    <div class="text-subtitle-1">
      <div v-if="isRunning">
        <VChip
          color="success"
          class="text-uppercase chip-status"
        >
          <div class="chip-text">
            running
          </div>
        </VChip>
      </div>
      <div v-else>
        <VChip
          color="primary"
          class="text-uppercase"
        >
          in queue
        </VChip>
      </div>
    </div>
    <div>
      <span class="progress">{{ progress }}</span> / <span class="progressTotal">{{ progressTotal }}</span>
    </div>
  </div>
</template>

  <style>
@media (min-width: 350px) {
  .progress-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .chip-text {
    font-size: var(--font-size-ssm) !important;
  }

  .progress,
  .progressTotal {
    font-size: var(--font-size-ssm);
  }

  .progress {
    color: var(--text-active);
  }

  .progressTotal {
    color: var(--text-deactive);
  }
}

@media (min-width: 425px) {

}

@media (min-width: 500px) {
  .chip-text {
    font-size: var(--font-size-sm) !important;
  }

  .progress,
  .progressTotal {
    font-size: var(--font-size-sm);
  }
}

@media (min-width: 768px) {

}

@media (min-width: 950px) {
  .chip-text {
    font-size: var(--font-size-ssm) !important;
  }

  .progress,
  .progressTotal {
    font-size: var(--font-size-ssm);
  }
}

@media (min-width: 1200px) {
  .chip-text {
    font-size: var(--font-size-ssm) !important;
  }

  .progress,
  .progressTotal {
    font-size: var(--font-size-ssm);
  }
}

@media (min-width: 1700px) {
  .chip-text {
    font-size: var(--font-size-sm) !important;
  }

  .progress,
  .progressTotal {
    font-size: var(--font-size-sm);
  }
}
</style>

