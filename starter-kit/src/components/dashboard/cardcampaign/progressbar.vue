<script lang="ts">
export default {
  name: 'Progressbar',
  props: {
    percentage: {
      type: Number,
      required: true,
    },

  },
}
</script>

<template>
  <div class="progress-bar-box">
    <div class="progress-bar">
      <VProgressLinear
        model-value="45"
        bg-color="success"
        color="success"
      />
    </div>
    <div class="progress-btn">
      <div class="cross-btn">
        <VIcon
          start
          icon="tabler-x"
        />
      </div>
      <div class="pause-btn">
        <VIcon
          start
          icon="tabler-player-pause-filled"
        />
      </div>
    </div>
  </div>
</template>

  <style>
.progress-bar-box {
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f9f9ff;
  gap: 10px;
}

.progress-bar {
  flex: 1;
}

.progress-btn {
  display: flex;
  gap: 10px;
}

.pause-btn,
.cross-btn {
  padding: 5px;
  border-radius: 50%;
  background-color: #efeff8;
}

.pause-btn svg,
.cross-btn svg {
  margin-block: 0;
  margin-inline: 0;
}
</style>

