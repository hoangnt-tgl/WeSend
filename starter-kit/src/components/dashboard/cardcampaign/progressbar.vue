<script lang="ts">
export default {
  name: 'Progressbar',
  props: {
    percentage: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  // eslint-disable-next-line vue/component-api-style
  methods: {
    getColor(status: string) {
      console.log(this.status)
      if (status === 'RUNNING')
        return '#059669'

      else if (status === 'IN QUEUE')
        return '#059669'

      else
        return '#D97706'
    },
  },
}
</script>

<template>
  <div class="progress-bar-box">
    <div class="progress-bar">
      <VProgressLinear
        :model-value="percentage"
        bg-color="#efeff8"
        :color="getColor(status)"
        class=""
      />
    </div>
    <div class="progress-btn">
      <div class="cross-btn">
        <VIcon
          start
          icon="tabler-x"
          style="width: 15px; height: 15px;"
        />
      </div>
      <div class="pause-btn ">
        <VIcon
          v-if="status === 'RUNNING'"
          start
          style="width: 15px; height: 15px;"
          icon="tabler-player-pause-filled"
        />
        <VIcon
          v-else
          start
          style="width: 15px; height: 15px;"
          icon="tabler-player-play-filled"
        />
      </div>
    </div>
  </div>
</template>

  <style>
@media (min-width: 350px) {
  .progress-bar-box {
    display: flex;
    align-items: center;
    background-color: #f9f9ff;
    border-end-end-radius: 15px;
    border-end-start-radius: 15px;
    gap: 10px;
    padding-block: 8px;
    padding-inline: 14px;
  }

  .progress-bar {
    flex: 1;
  }

  .progress-bar .v-progress-linear {
    border-radius: 5px;
  }

  .progress-btn {
    display: flex;
    gap: 10px;
  }

  .pause-btn,
  .cross-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    border-radius: 50%;
    background-color: #efeff8;
    block-size: 30px;
    inline-size: 30px;
  }

  .pause-btn svg,
  .cross-btn svg {
    margin-block: 0;
    margin-inline: 0;
  }
}

@media (min-width: 425px) {
  .progress-bar-box {
    padding-inline: 24px;
  }
}

@media (min-width: 1440px) {
  .progress-bar-box {
    padding-inline: 14px;
  }
}

@media (min-width: 1550px) {
  .progress-bar-box {
    padding-inline: 24px;
  }
}
</style>

