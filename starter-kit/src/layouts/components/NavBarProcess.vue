<template>
  <div class="d-none d-md-block container-process">
    <div class="mx-5 d-flex align-center gap-20">
      <div
        class="d-flex flex-column"
      >
        <div class="text-title">
          Duis senectus ultrices...
        </div>
        <div class="text-sending">
          Sending <span>203</span> of 1100
        </div>
      </div>
      <div><VIcon icon="tabler-player-pause-filled" /></div>
    </div>
    <div>
      <VProgressLinear
        :model-value="50"
        color="#1FAF38"
        rounded
        height="3"
      />
    </div>
  </div>
</template>

<style scoped>
.container-process {
  overflow: hidden;
  border-radius: 100px;
  background-color: #f3f4fb;
}

.text-title {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-block-start: 10px;
}

.text-sending {
  color: #6b7280;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  margin-block: 5px;
}

.text-sending span {
  font-weight: 700;
}
</style>bold
