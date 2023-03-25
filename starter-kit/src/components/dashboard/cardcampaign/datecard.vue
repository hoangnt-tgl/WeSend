<script lang="ts">
export default {
  name: 'Datecard',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="date-box">
    <div class="day">
      25
    </div>
    <div class="time-box">
      <div class="text-subtitle-1">
        <span class="hour">05:30 AM</span>
      </div>
      <div class="text-subtitle-1 ">
        <span class="month-box">December</span>
      </div>
    </div>
  </div>
</template>

  <style>
@media (min-width: 350px) {
  .date-box {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--text-active);
    gap: 10px;
  }

  .day {
    font-size: var(--font-size-h4);
  }

  .time-box .text-subtitle-1 {
    line-height: 0.75rem;
  }

  .month-box {
    color: var(--text-active);
    font-size: var(--font-size-ssm);
  }

  .hour {
    color: var(--text-deactive);
    font-size: var(--font-size-ssm);
  }
}

@media (min-width: 425px) {
  .day {
    font-size: var(--font-size-h3);
  }

  .time-box .text-subtitle-1 {
    line-height: 1rem;
  }

  .month-box {
    font-size: var(--font-size-sm);
  }

  .hour {
    font-size: var(--font-size-sm);
  }
}

@media (min-width: 600px) {
  .day {
    /* font-size: var(--font-size-h3); */
  }

  .month-box {
    font-size: var(--font-size-sm);
  }

  .hour {
    font-size: var(--font-size-sm);
  }
}

@media (min-width: 768px) {
  .day {
    font-size: var(--font-size-h3);
  }

  .month-box {
    font-size: var(--font-size);
  }

  .hour {
    font-size: var(--font-size);
  }
}

@media (min-width: 950px) {
  .day {
    font-size: var(--font-size-h3);
  }

  .month-box {
    font-size: var(--font-size-sm);
  }

  .hour {
    font-size: var(--font-size-sm);
  }
}

@media (min-width: 1100px) {
  .day {
    font-size: var(--font-size-h3);
  }

  .month-box {
    font-size: var(--font-size);
  }

  .hour {
    font-size: var(--font-size);
  }
}

@media (min-width: 1280px) {
  /* .day {
    font-size: var(--font-size-h3);
  }

  .month-box {
    font-size: var(--font-size);
  }

  .hour {
    font-size: var(--font-size);
  } */
}

@media (min-width: 1440px) {
  /* .day {
    font-size: var(--font-size-h3);
  } */

  /* .month-box {
    font-size: var(--font-size-sm);
  }

  .hour {
    font-size: var(--font-size-sm);
  } */
}

@media (min-width: 1700px) {
  /* .day {
    font-size: var(--font-size-h3);
  }

  .month-box {
    font-size: var(--font-size);
  }

  .hour {
    font-size: var(--font-size);
  } */
}
</style>

