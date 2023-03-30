<script lang="ts">
import RemoveDuplicate from '@/components/modal/RemoveDuplicate.vue'

export default {
  name: 'CampaignDetail',
  components: {
    RemoveDuplicate,
  },
  setup() {
    return {
      isModalOpen: ref(false),
    }
  },
  methods: {
    closeModal() {
      this.isModalOpen = false
    },
    openModal() {
      this.isModalOpen = true
    },
  },
}
</script>

<template>
  <div class="contact-header">
    <div class="contact-search">
      <input
        type="text"
        placeholder="Search by name"
      >
      <VIcon icon="tabler-search" />
    </div>
    <div class="contact-button">
      <button @click="openModal">
        <VIcon icon="tabler-copy-off" /><span>Remove Duplicates</span>
      </button>
      <button><VIcon icon="tabler-plus" /><span>Add more</span></button>
      <button><VIcon icon="tabler-download" /><span>View in Calendar</span></button>
    </div>
    <button class="contact-button-mobile">
      <VIcon icon="tabler-dots-vertical" />
    </button>
    <RemoveDuplicate
      v-if="isModalOpen"
      @close="closeModal"
    />
  </div>
  <div class="contact-container">
    <div class="contact-title">
      <div class="contact-title-checkbox">
        <label class="input-checkbox">
          <input
            type="checkbox"
            checked="checked"
          >
          <span class="checkmark" />
        </label>
      </div>
      <div class="contact-title-name">
        <span>Name</span><img src="../../../assets/icons/arrows.svg">
      </div>
      <div class="contact-title-phone">
        <span>Phone Number</span><img src="../../../assets/icons/arrows.svg">
      </div>
      <div class="contact-title-gender">
        <span>Gender</span><img src="../../../assets/icons/arrows.svg">
      </div>
      <div class="contact-title-age">
        <span>Age</span><img src="../../../assets/icons/arrows.svg">
      </div>
      <div class="contact-title-country">
        <span>Country</span><img src="../../../assets/icons/arrows.svg">
      </div>
      <div class="contact-title-city">
        <span>City</span><img src="../../../assets/icons/arrows.svg">
      </div>
      <div class="contact-title-action">
        <span>Actions</span>
      </div>
    </div>
    <div class="contact-content active">
      <div class="contact-content-checkbox">
        <label class="input-checkbox">
          <input
            type="checkbox"
            checked="checked"
          >
          <span class="checkmark" />
        </label>
      </div>
      <div class="contact-content-name">
        <input
          type="text"
          value="Varun Gupta"
          disabled
        >
      </div>
      <div class="contact-content-phone">
        <input
          type="text"
          value="+91-9999123456"
          disabled
        >
      </div>
      <div class="contact-content-gender">
        <input
          type="text"
          value="M"
          disabled
        >
      </div>
      <div class="contact-content-age">
        <input
          type="text"
          value="38"
          disabled
        >
      </div>
      <div class="contact-content-country">
        <input
          type="text"
          value="Israel"
          disabled
        >
      </div>
      <div class="contact-content-city">
        <input
          type="text"
          value="Israel"
        >
      </div>
      <div class="contact-content-action">
        <div class="action-1">
          <button>
            <VIcon icon="tabler-edit" />
          </button>

          <button>
            <VIcon icon="tabler-trash" />
          </button>
        </div>
        <div class="action-2">
          <button class="save">
            <img
              src="../../../assets/icons/save.svg"
              alt="save"
            >
          </button>

          <button class="delete">
            <VIcon icon="tabler-x" />
          </button>
        </div>
      </div>
    </div>
    <div class="contact-content">
      <div class="contact-content-checkbox">
        <label class="input-checkbox">
          <input
            type="checkbox"
            checked="checked"
          >
          <span class="checkmark" />
        </label>
      </div>
      <div class="contact-content-name">
        <input
          type="text"
          value="Varun Gupta"
          disabled
        >
      </div>
      <div class="contact-content-phone">
        <input
          type="text"
          value="+91-9999123456"
          disabled
        >
      </div>
      <div class="contact-content-gender">
        <input
          type="text"
          value="M"
          disabled
        >
      </div>
      <div class="contact-content-age">
        <input
          type="text"
          value="38"
          disabled
        >
      </div>
      <div class="contact-content-country">
        <input
          type="text"
          value="Israel"
          disabled
        >
      </div>
      <div class="contact-content-city">
        <input
          type="text"
          value="Israel"
        >
      </div>
      <div class="contact-content-action">
        <div class="action-1">
          <button>
            <VIcon icon="tabler-edit" />
          </button>

          <button>
            <VIcon icon="tabler-trash" />
          </button>
        </div>
        <div class="action-2">
          <button class="save">
            <img
              src="../../../assets/icons/save.svg"
              alt="save"
            >
          </button>

          <button class="delete">
            <VIcon icon="tabler-x" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 40px;
}

.contact-search {
  display: flex;
  border: 1px solid var(--border-gray);
  border-radius: 6px;
  background: #f3f4fb;
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

.contact-button button {
  display: flex;
  align-items: center;
  border: 1px solid var(--border-gray);
  border-radius: 100px;
  background: transparent;
  color: var(--text-dark);
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  gap: 6px;
  padding-block: 11px;
  padding-inline: 20px;
  text-align: center;
  transition: all 0.4s;
}

.contact-button button:hover {
  border-color: rgba(17, 24, 39, 70%);
  background: rgba(17, 24, 39, 70%);
  color: #fff;
}

.contact-button-mobile {
  display: none;
}

.contact-container {
  overflow-x: scroll;
}

.contact-title {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-block-end: 16px;
  min-inline-size: 980px;
  padding-block: 0;
  padding-inline: 20px;
}

.contact-title > div {
  display: flex;
  align-items: center;
  gap: 5px;
}

.contact-title span {
  color: var(--text-gray-light);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
}

.contact-title img {
  cursor: pointer;
}

.contact-title-name,
.contact-content-name {
  inline-size: 20%;
  min-inline-size: 130px;
}

.contact-title-phone,
.contact-content-phone {
  flex: 1;
}

.contact-title-gender,
.contact-title-city,
.contact-title-age,
.contact-title-country,
.contact-content-gender,
.contact-content-city,
.contact-content-age,
.contact-content-country {
  inline-size: 10%;
  min-inline-size: 85px;
}

.contact-title-gender,
.contact-title-city,
.contact-title-age,
.contact-title-country,
.contact-title-name,
.contact-title-phone {
  padding-inline-start: 10px;
}

.contact-title-action,
.contact-content-action {
  inline-size: 85px;
}

.input-checkbox {
  position: relative;
  display: block;
  cursor: pointer;
  inline-size: 100%;
  margin-block-end: 20px;
  padding-inline-start: 20px;
  user-select: none;
}

.input-checkbox input {
  position: absolute;
  block-size: 0;
  cursor: pointer;
  inline-size: 0;
  opacity: 0;
}

.input-checkbox label {
  position: absolute;
  color: #374151;
  inline-size: calc(100% - 30px);
  inset-block-start: 0;
}

.checkmark {
  position: absolute;
  border: 1px solid var(--border-gray);
  border-radius: 5px;
  block-size: 18px;
  inline-size: 18px;
  inset-inline-start: 0;
}

.input-checkbox input:checked ~ .checkmark {
  background: var(--text-dark);
}

.checkmark::after {
  position: absolute;
  display: none;
  content: "";
}

.input-checkbox input:checked ~ .checkmark::after {
  display: block;
}

.input-checkbox .checkmark::after {
  border: solid white;
  border-width: 0 2px 2px 0;
  block-size: 8px;
  inline-size: 4px;
  inset-block-start: 3px;
  inset-inline-start: 6px;
  transform: rotate(45deg);
}

.contact-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-block-end: 1px solid var(--border-gray);
  gap: 10px;
  min-inline-size: 980px;
  padding-block: 20px;
  padding-inline: 20px;
}

.contact-content.active {
  background: #f5f3ff;
}

.contact-content-checkbox {
  display: flex;
  align-items: center;
}

.contact-content input {
  border-radius: 5px;
  background: #fff;
  color: var(--text-dark);
  font-size: var(--font-size);
  inline-size: 100%;
  outline: none;
  padding-block: 10px;
  padding-inline: 10px;
}

.action-1 {
  display: flex;
  gap: 8px;
}

.contact-content-action button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-gray);
  border-radius: 5px;
  background: #fff;
  block-size: 35px;
  color: var(--text-dark);
  inline-size: 35px;
  transition: var(--smooth);
}

.contact-content-action button svg {
  block-size: 22px;
  inline-size: 22px;
}

.contact-content-action button:hover {
  background: #111827;
  color: #fff;
}

.action-2 {
  display: none;
}

.contact-content.active .action-1 {
  display: none;
}

.contact-content.active .action-2 {
  display: flex;
  gap: 8px;
}

.action-2 button {
  border: 0;
}

.action-2 button.save {
  background: #10b981;
}

.action-2 button.save:hover {
  background: rgba(16, 185, 129, 80%);
}

.action-2 button.delete {
  background: #ef4444;
  color: #fff;
}

.action-2 button.delete:hover {
  background: rgba(239, 68, 68, 80%);
}

@media (max-width: 900px) {
  .contact-button {
    display: none;
  }

  .contact-button-mobile {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-gray);
    border-radius: 6px;
    background: #f3f4fb;
    block-size: 43.5px;
    color: var(--text-gray-light);
    inline-size: 43.5px;
    transition: var(--smooth);
  }

  .contact-button-mobile:hover {
    border-color: rgba(17, 24, 39, 70%);
    background: rgba(17, 24, 39, 70%);
    color: #fff;
  }
}

@media (max-width: 480px) {
  .contact-search {
    inline-size: 220px;
  }
}
</style>
