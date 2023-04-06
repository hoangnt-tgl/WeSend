<!-- eslint-disable vue/component-api-style -->
<script lang="ts">
import Progress from '@/components/CustomProgress/index.vue'

export default {
  name: 'DelayMessage',
  components: {
    Progress,
  },
}
</script>

<template>
  <VCard>
    <div class="container">
      <div class="containerInside">
        <p class="txtTitle">
          Delay Sending Message
        </p>
        <p class="txtTitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div class="min">
          <p class="txtTime">
            6sec
          </p>
          <p class="txtTime">
            1 min
          </p>
        </div>
        <div class="rate">
          <Progress />
        </div>

        <div class="saveChange">
          <button class="btnSaveChange">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </VCard>
</template>

<style scoped>
.container {
  padding: 20px;
  border-radius: 15px;
  background-color: #fff;
}

.txtTitle {
  block-size: 24px;
  color: #111827;
  font-size: 16px;
  font-weight: 600;
  margin-block-end: 6px;
}

.txtTitle2 {
  block-size: 20px;
  color: #4b5563;
  font-size: 14px;
  margin-block-end: 30px;
}

.btnSaveChange {
  border-radius: 30px;
  background: #111827;
  block-size: 46px;
  color: #fff;
  font-size: 14px;
  inline-size: 129px;
  inset-inline-end: 0;
  margin-block-start: 30px;
  transition: var(--smooth);
}

.btnSaveChange:hover {
  background: rgba(17, 24, 39, 80%);
}

.txtTime {
  color: #4b5563;
  font-size: 14px;
}

.min {
  display: flex;
  justify-content: space-between;
}

.timeBar {
  display: flex;
  block-size: 7px;
}

.saveChange {
  text-align: end;
}

.containerTime {
  position: relative;
  border-radius: 30px;
  background: #f3f4f6;
  block-size: 7px;
}

.containerTime::after {
  position: absolute;
  border-radius: 30px 0 0 30px;
  background: #8b5cf6;
  block-size: 7px;
  content: "";
  inline-size: 40%;
  inset-block-start: 0;
}

.containerTime::before {
  position: absolute;
  z-index: 10;
  border-radius: 50%;
  background: #c7d2fe;
  block-size: 26px;
  content: "";
  cursor: pointer;
  inline-size: 26px;
  inset-block-start: 0;
  inset-block-start: -10px;
  inset-inline-start: 39%;
}
</style>
