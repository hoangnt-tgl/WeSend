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
            6s
          </p>
          <p class="txtTime">
            1 min
          </p>
        </div>
        <div class="containerTime">
          <div class="timeFill" />
          <div class="imgTime">
            <img src="@/assets/images/Ellipse30.png">
          </div>
          <div class="timeSpace" />
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
  border-radius: 15px;
  background-color: #fff;
  block-size: 231px;
}

.containerInside {
  margin-block-start: 30px;
  margin-inline: 30px;
  margin-inline-end: 30px;
}

.txtTitle {
  block-size: 24px;
  color: #111827;
  font-size: 16px;
}

.txtTitle2 {
  block-size: 20px;
  color: #4b5563;
  font-size: 14px;
  margin-block-start: 4px;
}

.btnSaveChange {
  border-radius: 30px;
  background: #111827;
  block-size: 46px;
  color: #fff;
  font-size: 14px;
  inline-size: 129px;
  inset-inline-end: 0;
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

.timeFill {
  border-radius: 5px;
  background: #8b5cf6;
  inline-size: 163px;
  margin-block: 10px;
}

.timeSpace {
  border-radius: 5px;
  background: #f3f4f6;
  inline-size: 300px;
  margin-block: 10px;
}

.imgTime {
  block-size: 27px;
  inline-size: 27px;
  margin-block-end: 5px;
}

.saveChange {
  margin-block-start: 20px;
  margin-inline-start: 341px;
}

.containerTime {
  position: relative;
  display: flex;
  block-size: 27px;
}
</style>
