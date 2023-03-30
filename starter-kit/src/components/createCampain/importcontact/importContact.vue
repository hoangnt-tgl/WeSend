<script lang="ts">
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import { btnBlack } from '@/constant/buttonColor'
import { dataCampaigns } from '@/data/campaign'

const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
const columns = ['First Name', 'Select', 'Last Name', 'Contact Number', 'Select']

export default {
  name: 'ImportContact',
  components: {
    BtnRound,
  },
  props: {
    action: {
      type: Function,
      required: true,
    },
  },
  setup() {
    return {
      items,
      columns,
      dataCampaigns,
      btnBlack,
    }
  },
}
</script>

<template>
  <div>
    <h2 class=" import-contact">
      Import Contacts
    </h2>
    <div class="d-flex w-100 import-title">
      <p>Define Fields</p>
      <p>127 of 127 Contacts Imported</p>
    </div>
    <div class="import-container">
      <div class="import-grid">
        <div
          v-for="(dataCampaign, idx) in dataCampaigns"
          :key="idx"
        >
          <div class="col ">
            <VSelect
              :items="items"
              :label="dataCampaign.column"
              single-line
              color="#6B7280"
              :bg-color="dataCampaign.bgColor"
              :class="dataCampaign.class"
            />
            <div
              class="container-items my-4"
              :class="`container-items${idx}`"
            >
              <h4 class="px-4 pt-8 pb-0">
                {{ dataCampaign.title }}
              </h4>
              <VList
                class="py-5"
                :items="dataCampaign.data"
                :bg-color="dataCampaign.bgColor"
                density="compact"
                color="#374151"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="import-bottom">
      <p><span className="asterisk" /> Name and phone number are mandatory.</p>
      <div class="btn-next">
        <BtnRound
          button-title="Next"
          :action="action"
          color="btnBlack.color"
          :style="btnBlack"
          variant="contained"
          icon-a-n-b="tabler-chevron-right"
          :icon-a-color-n-b="btnBlack.color"
        />
      </div>
    </div>
  </div>
</template>

<style>
.import-container {
  background-color: #fff;
  block-size: 100%;
  inline-size: 73vw;
  margin-block: 0;
  margin-inline: auto;
  max-inline-size: 1234px;
  overflow-y: scroll;
}

.import-grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-block: 35px 40px;
  padding-inline: 30px;
}

.col {
  flex: 1;
  min-inline-size: 220px;
}

.col .v-field-label {
  color: #6b7280;
  opacity: 1;
}

.col .v-field__append-inner {
  color: #6b7280;
  opacity: 1;
}

.container-items {
  border-radius: 5px;
  background-color: #f3f4fb !important;
}

.container-items h4 {
  color: #374151;
  font-size: 16px;
  font-weight: 500;
}

.container-items .v-list-item-title {
  font-size: 14px;
}

.container-items1,
.container-items4 {
  border: 1px solid #e5e7eb;
  background-color: #fff !important;
}

.first-name .v-field__outline__start,
.last-name .v-field__outline__start,
.contact-number .v-field__outline__start {
  border-color: #d6d4e4;
  border-radius: 10px 0 0 10px !important;
}

.first-name .v-field__outline__end,
.last-name .v-field__outline__end,
.contact-number .v-field__outline__end {
  border-color: #d6d4e4;
  border-radius: 0 10px 10px 0 !important;
}

.middle-name .v-field__outline__start,
.gender .v-field__outline__start {
  border-style: solid;
  border-color: #e5e7eb;
}

.middle-name .v-field__outline__end,
.gender .v-field__outline__end {
  border-style: solid;
  border-color: #e5e7eb;
}

.col .v-field {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
}

.col .v-list-item {
  min-block-size: 10px !important;
}

.import-title p {
  color: var(--text-dark);
  font-size: 20px;
  font-weight: 500;
}

.import-title p:nth-of-type(2) {
  font-size: 16px;
}

.import-contact {
  margin: auto;
  inline-size: fit-content;
  padding-block-end: 36px;
}

.import-title {
  align-items: center;
  justify-content: space-between;
  color: var(--text-dark);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-less-bold);
}

.import-bottom {
  display: flex;
  justify-content: space-between;
  margin-block-start: 40px;
}

.import-bottom p {
  color: var(--text-active);
  font-size: var(--font-size-sm);
}

.asterisk {
  color: red;
}

.asterisk::before {
  color: red;
  content: "*";
  font-size: 18px;
}

@media (max-width: 768px) {
  .import-title {
    flex-wrap: wrap;
    inline-size: 80% !important;
    margin-inline-start: 10px;
  }

  .import-title p:nth-of-type(2) {
    color: #4b5563;
    font-weight: 400;
  }

  .import-container {
    margin: unset;
    inline-size: 96vw;
    margin-inline-start: 10px;
  }

  .import-bottom {
    margin-inline-start: 10px;
  }
}
</style>
