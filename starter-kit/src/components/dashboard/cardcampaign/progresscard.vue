<script lang="ts">
export default {
  name: 'Progresscard',
  props: {
    process: {
      type: Number,
      required: true,
    },
    totalProcess: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="progress-box">
    <div class="text-subtitle-1">
      <div v-if="status === 'RUNNING'">
        <VChip
          color="#059669"
          class="text-uppercase chip-status"
        >
          <div class="chip-text running">
            {{ status }}
          </div>
        </VChip>
      </div>
      <div v-else-if="status === 'IN QUEUE'">
        <VChip
          color="#6354D9"
          class="text-uppercase"
        >
          <div class="chip-text queue">
            {{ status }}
          </div>
        </VChip>
      </div>
      <div v-else>
        <VChip
          color="#D97706"
          class="text-uppercase"
        >
          <div class="chip-text pause">
            {{ status }}
          </div>
        </VChip>
      </div>
    </div>
    <div>
      <span class="progress">{{ process }} /</span>  <span class="progressTotal">{{ totalProcess }}</span>
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

  .pause {
    color: #d97706;
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

