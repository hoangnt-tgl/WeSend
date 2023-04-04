<script lang="ts">
export default {
  name: 'BottomModal',

  setup() {
    return {
      items: ['Select Label Color'],
      items1: ['10 min'],
    }
  },

}
</script>

<template>
  <div class="bottom-label d-flex gap-5 mb-5 ">
    <div class="d-flex gap-3 align-center">
      <div class="dropdown-select d-flex gap-3 px-2">
        <div class="icon-yellow" />
        <VSelect
          v-model="items[0]"
          :items="items"
          variant="plain"
          single-line
          class="drop-down-select"
        />
      </div>
      <div class="dropdown-select dropdown-select-minu px-2">
        <VSelect
          v-model="items1[0]"
          :items="items1"
          variant="plain"
          single-line
          class="drop-down-select"
        />
      </div>
      <span class="text-delay">Delay Sending Time</span>
    </div>

    <span class="text-preview">Preview</span>
  </div>
</template>

<style>
.bottom-label {
  align-items: center;
  justify-content: space-between;
}

.text-preview {
  color: #6b7280;
  font-size: 14px;
  text-decoration-line: underline;
}

.text-delay {
  color: var(--text-dark);
  font-size: 14px;
}

.dropdown-select {
  align-items: center;
  border-radius: 5px;
  background-color: #f6f6fe;
}

.icon-yellow {
  border-radius: 50%;
  background-color: #ffe456;
  block-size: 12px;
  inline-size: 12px;
}

.drop-down-select .v-field__input {
  color: var(--text-dark);
  font-size: 14px;
  opacity: 1;
  padding-block: 0;
  padding-inline: 0;
}

.drop-down-select .v-select__selection {
  align-items: center;
}

.drop-down-select .v-field__append-inner {
  align-items: center;
  padding-block-start: 0;
}

.drop-down-select .v-icon {
  font-size: 20px;
  opacity: 1;
}

@media (max-width: 992px) {
  .bottom-label {
    flex-wrap: wrap;
    justify-content: center;
  }
  .text-delay { display: none; }
  .dropdown-select-minu { display: none; }
}
</style>
