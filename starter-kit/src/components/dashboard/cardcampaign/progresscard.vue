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
          <div class="chip-text running">
            running
          </div>
        </VChip>
      </div>
      <div v-else>
        <VChip
          color="primary"
          class="text-uppercase"
        >
          <div class="chip-text queue">
            in queue
          </div>
        </VChip>
      </div>
    </div>
    <div>
      <span class="progress">{{ progress }} /</span>  <span class="progressTotal">{{ progressTotal }}</span>
    </div>
  </div>
</template>

  <style>
@media (min-width: 350px) {
  .progress-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }

  .queue {
    color: #6354d9;
  }

  .running {
    color: #059669;
  }

  .chip-text {
    font-size: var(--font-size-ssm) !important;
    font-weight: 900;
  }

  .progress,
  .progressTotal {
    font-size: var(--font-size-ssm);
  }

  .progress {
    color: var(--text-active);
    font-weight: 600;
  }

  .progressTotal {
    color: var(--text-deactive);
  }
}

@media (min-width: 425px) {
  /* .chip-text {
    font-size: var(--font-size-sm) !important;
  }

  .progress,
  .progressTotal {
    font-size: var(--font-size-sm);
  } */
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
  .chip-text {
    font-size: var(--font-size) !important;
  }

  .progress,
  .progressTotal {
    font-size: var(--font-size);
  }
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
    font-size: var(--font-size-sm) !important;
  }

  .progress,
  .progressTotal {
    font-size: var(--font-size-sm);
  }
}

@media (min-width: 1280px) {
  .chip-text {
    font-size: var(--font-size-ssm) !important;
  }

  .progress,
  .progressTotal {
    font-size: var(--font-size-ssm);
  }
}

@media (min-width: 1440px) {
  .chip-text {
    font-size: var(--font-size-sm) !important;
  }

  .progress,
  .progressTotal {
    font-size: var(--font-size-sm);
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

