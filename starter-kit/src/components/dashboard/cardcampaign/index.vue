<script  lang="ts">
import Datecard from './datecard.vue'
import Progressbar from './progressbar.vue'
import Progress from './progresscard.vue'

// const msg = '123'
// const progress = 1723
// const progressTotal = 4500
// const isRunning = false
// const percentage = 50
export default {
  components: {
    Datecard,
    Progressbar,
    Progress,
  },
  props: {
    date: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
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
  <VCard class="card-campaign">
    <div class="d-flex">
      <VCardItem class="top-card top-card-left">
        <Datecard
          :date="date"
          :month="month"
          :time="time"
        />
      </VCardItem>
      <VCardItem class="top-card top-card-right">
        <Progress
          :process="process"
          :total-process="totalProcess"
          :status="status"
        />
      </VCardItem>
    </div>
    <VCardText class="card-description">
      {{ des }}
    </VCardText>
    <Progressbar
      :percentage="process / totalProcess * 100"
      :status="status"
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
    font-size: var(--font-size-sm);
    padding-block: 0 16px;
    padding-block-start: 0;
    padding-inline: 14px;
  }

  .top-card {
    flex: 1;
    padding-block: 10px;
    padding-inline: 14px;
  }

  .top-card-left {
    padding-inline-end: 5px;
  }

  .top-card-right {
    flex-grow: 1.2;
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
    padding-block: 10px;
    padding-inline: 24px;
  }

  .card-description {
    font-size: var(--font-size-sm);
    padding-block: 0 16px;
    padding-block-start: 0;
  }

  .card-campaign {
    border-radius: 15px;
  }

  .top-card {
    flex: 1;
  }

  .top-card-right {
    flex-grow: 1.2;
  }
}

@media screen and (min-width: 950px) {
  .card-description,
  .top-card {
    padding-block: 10px;
    padding-inline: 24px;
  }

  .card-description {
    padding-block: 0 16px;
    padding-block-start: 0;
  }
}

@media screen and (min-width: 1440px) {
  .card-description,
  .top-card {
    padding-block: 10px;
    padding-inline: 14px;
  }

  .card-description {
    padding-block: 0 16px;
    padding-block-start: 0;
  }
}

@media screen and (min-width: 1550px) {
  .card-description,
  .top-card {
    padding-block: 10px;
    padding-inline: 32px;
  }

  .card-description {
    padding-block: 0 16px;
    padding-block-start: 0;
  }
}
</style>
