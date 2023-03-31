<script lang="ts">
import Datepicker from '@/components/datepicker/DatePicker.vue'

const date = null
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
export default {
  name: 'List',
  components: {
    Datepicker,
  },
  setup() {
    return {
      date,
      items,
    }
  },

  // eslint-disable-next-line vue/component-api-style
  methods: {
    createCampaign() {
      this.$router.push('/create-campaign')
    },

  },
}
</script>

<template>
  <div class="searchbar">
    <div class="campaign">
      <h1
        class="title"
      >
        Campaign
      </h1>
      <div class="totalList">
        10
      </div>
    </div>

    <button
      class="btnCreate"
      @click="createCampaign"
    >
      <img
        style="width: 24px;height: 24px;"
        src="@/assets/images/Vector1.svg"
      >
      <h1
        class="text"
      >
        Create New <span>Campaign</span>
      </h1>
    </button>
  </div>
  <div class="contact-header">
    <div class="contact-search">
      <VIcon icon="tabler-search" />
      <input
        type="text"
        placeholder="Search by name"
      >
    </div>
    <div class="contact-button">
      <h6>FILTER BY</h6>

      <button>
        <span>Date from:</span>
        <Datepicker />
      </button>
      <button>
        <span>Date to:</span>
        <Datepicker />
      </button>
      <button class="status">
        <span>Status</span>
        <VSelect
          :items="items"
          variant="plain"
          single-line
        />
      </button>

      <!--
        <button class="status">
        <span>Status</span><VIcon icon="tabler-chevron-down" />
        </button>
      -->
    </div>
    <button class="contact-button-mobile">
      <h6>FILTER BY</h6>
      <button>
        <img
          src="@/assets/icons/filter.svg"
          alt="filter"
        >
      </button>
    </button>
  </div>
</template>

<style>
/* .dp__main {
  flex: 1;
  inline-size: fit-content;
}

.dp-custom-cell {
  border-radius: 50%;
}

.dp__input {
  display: none;
} */

.searchbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 30px;
}

.campaign {
  display: flex;
  align-items: center;
}

.totalList {
  display: flex;
  align-items: center;
  border-radius: 200px;
  background: #e0e7ff;
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 600;
  margin-inline-start: 10px;
  padding-block: 2px;
  padding-inline: 10px;
}

.title {
  color: var(--text-dark);
  font-size: 24px;
}

.btnCreate {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-style: solid;
  border-radius: 30px;
  background-color: var(--text-dark);
  block-size: 46px;
  gap: 10px;
  padding-block: 6px;
  padding-inline: 12px;
  transition: var(--smooth);
}

.btnCreate:hover {
  background: rgba(17, 24, 39, 80%);
}

.text {
  color: white;
  font-size: 15px;
  font-weight: 600;
}

.contact-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 40px;
}

.contact-search {
  display: flex;
  border-radius: 6px;
  background: #fff;
  color: var(--text-gray-light);
  gap: 10px;
  inline-size: 258px;
  padding-block: 8.75px;
  padding-inline: 12px;
}

.contact-search input {
  flex: 1;
  color: var(--text-dark);
  font-size: 13px;
  font-weight: 600;
  outline: none;
}

.contact-search svg {
  cursor: pointer;
}

.contact-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.contact-button h6,
.contact-button-mobile h6 {
  color: var(--text-gray-light);
  font-size: 14px;
  font-weight: 500;
}

.contact-button button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #fff;
  color: var(--text-dark);
  cursor: pointer;
  font-size: 13px;
  font-weight: 400;
  gap: 15px;
  inline-size: 146px;
  padding-block: 11px;
  padding-inline: 20px;
  text-align: center;
  transition: all 0.4s;
}

.contact-button button.status {
  block-size: 43.5px;
  inline-size: 200px;
}

.contact-button button.status .v-field__append-inner {
  padding-block-start: 3px;
}

.contact-button button:hover {
  border-color: var(--text-dark);
}

.contact-button-mobile {
  display: none;
}

@media (max-width: 950px) {
  .contact-button {
    display: none;
  }

  .contact-button-mobile {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .contact-button-mobile button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: #fff;
    block-size: 43.5px;
    inline-size: 43.5px;
    transition: var(--smooth);
  }

  .contact-button-mobile button:hover {
    border-color: var(--text-dark);
  }
}

@media (max-width: 480px) {
  .text span {
    display: none;
  }

  .contact-search input {
    display: none;
  }

  .contact-search {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 1px solid transparent;
    block-size: 43.5px;
    cursor: pointer;
    inline-size: 43.5px;
    transition: var(--smooth);
  }

  .contact-search:hover {
    border-color: var(--text-dark);
  }
}
</style>

