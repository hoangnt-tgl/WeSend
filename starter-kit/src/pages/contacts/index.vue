<script lang="ts">
import HeaderContact from '../../components/contact/SearchBar.vue'
import { dataCampaignsContact } from '@/data/campaign'

export default {
  name: 'List',
  components: {
    HeaderContact,
  },
  setup() {
    return {
      isShowModal: false,
      dataCampaigns2: ref(dataCampaignsContact),
      asc: true,
    }
  },

  methods: {
    viewCampaign() {
      console.log('view campaign', this.$router)
      this.$router.push({
        path: '/campaign/detail',
      })
    },
    getClassStatus(status: string) {
      if (status.includes('Active'))
        return 'active'

      else if (status.includes('Unscheduled'))
        return ''

      else if (status.includes('Scheduled'))
        return 'scheduled'
    },
    sortData(key: string) {
      console.log(this.asc)

      const result = this.dataCampaigns2.sort((a: any, b: any) => {
        if (this.asc) {
          if (a[key] < b[key]) {
            console.log('vao -1')

            return -1
          }

          if (a[key] > b[key]) {
            console.log('vao 1')

            return 1
          }
        }
        else {
          if (a[key] > b[key]) {
            console.log('vao -1')

            return -1
          }

          if (a[key] < b[key]) {
            console.log('vao 1')

            return 1
          }
        }

        return 0
      })

      this.asc = !this.asc
      console.log([...result])
      this.dataCampaigns2 = [...result]
    },
  },
}
</script>

<template>
  <div class="container-contact">
    <HeaderContact />
    <div class="contact-container">
      <div class="contact-title">
        <div class="contact-title-name">
          <span>NAME</span><img
            src="../../assets/icons/arrows.svg"
            @click="sortData('campaignName')"
          >
        </div>
        <div class="contact-title-phone">
          <span>MOBILE NUMBER</span><img
            src="../../assets/icons/arrows.svg"
            @click="sortData('campaignDate')"
          >
        </div>
        <div class="contact-title-gender">
          <span>GENDER</span><img
            src="../../assets/icons/arrows.svg"
            @click="sortData('contacts')"
          >
        </div>

        <div class="contact-title-country">
          <span>AGE</span><img
            src="../../assets/icons/arrows.svg"
            @click="sortData('mediaType')"
          >
        </div>
        <div class="contact-title-action">
          <span />
        </div>
      </div>

      <div
        v-for="(campaign, idx) in dataCampaigns2"
        :key="idx"
        class="contact-content"
        @click="viewCampaign"
      >
        <div class="contact-content-name">
          <p>{{ campaign.campaignName }}</p>
        </div>
        <div class="contact-content-phone">
          <p>{{ campaign.campaignDate }}</p>
        </div>
        <div class="contact-content-gender">
          <p>{{ campaign.contacts }}</p>
        </div>

        <div class="contact-content-country">
          <p>{{ campaign.mediaType }}</p>
        </div>
        <div class="contact-content-action">
          <div class="action-1">
            <button>
              <VIcon icon="tabler-edit" />
            </button>
            <button>
              <VIcon icon="tabler-ban" />
            </button>
            <button>
              <VIcon icon="tabler-trash" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="(campaign, idx) in dataCampaigns2"
      :key="idx"
      class="campaign-mobile"
      @click="viewCampaign"
    >
      <div
        class="campaign-item"
        @click="viewCampaign"
      >
        <p>{{ campaign.campaignName }}</p>
        <div class="item">
          <VIcon icon="tabler-calendar-due" />
          <span>{{ campaign.campaignDate }}</span>
        </div>
        <div class="item-list">
          <div class="item">
            <VIcon icon="tabler-phone" />
            <span>{{ campaign.contacts }}</span>
          </div>
          <div class="item">
            <VIcon icon="tabler-video-plus" />
            <span>{{ campaign.mediaType }}</span>
          </div>
        </div>
        <div class="item-footer">
          <div class="action-1">
            <button>
              <VIcon icon="tabler-edit" />
            </button>
            <button>
              <VIcon icon="tabler-ban" />
            </button>
            <button>
              <VIcon icon="tabler-trash" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="itemfootericon">
        <VIcon icon="tabler-arrow-left" />
      </div>
      <div class="itemfooter active">
        1
      </div>
      <div class="itemfooter">
        2
      </div>
      <div class="itemfooter active">
        ...
      </div>
      <div class="itemfooter">
        9
      </div>
      <div
        class="itemfooter"
        style="border-right: 0;"
      >
        10
      </div>
      <div class="itemfootericon">
        <VIcon icon="tabler-arrow-right" />
      </div>
    </div>
  </div>
</template>

<style>
.footer {
  display: flex;
  justify-content: space-between;
  border: 1px solid #e5e7eb;
  border-radius: 7px;
  margin: auto;
  background-color: white;
  block-size: 36px;
  inline-size: fit-content;
  margin-block-start: 30px;
}

.buttonmini {
  padding: 5px;
  border: solid 1px #f3f4f6;
  block-size: 36px;
  inline-size: 36px;
  margin-inline: 5px;
}

.itemfooter {
  display: flex;
  align-items: center;
  justify-content: center;
  border-inline-end: 1px solid var(--border-gray);
  color: #9ca3af;
  cursor: pointer;
  font-size: 16px;
  inline-size: 36px;
}

.itemfootericon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
  cursor: pointer;
  font-size: 16px;
  inline-size: 36px;
}

.itemfooter.active {
  color: var(--text-dark);
}

.statusActive {
  display: flex;
  align-items: center;
  border-radius: 200px;
  background: #ecfdf5;
  block-size: 29px;
  inline-size: 70px;
  padding-block: 2px;
  padding-inline: 10px;
}

.statusSchedule {
  display: flex;
  align-items: center;
  border-radius: 200px;
  background: #e0e7ff;
  block-size: 29px;
  inline-size: 123px;
  padding-block: 2px;
  padding-inline: 18px;
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
  flex: 1;
}

.contact-title-phone,
.contact-content-phone {
  inline-size: 16%;
}

.contact-title-gender,
.contact-content-gender {
  inline-size: 12%;
  min-inline-size: 100px;
}

.contact-title-country,
.contact-content-country {
  inline-size: 14%;
  min-inline-size: 100px;
}

.contact-content-age,
.contact-title-age {
  inline-size: 16%;
  min-inline-size: 120px;
}

.contact-title-action,
.contact-content-action {
  inline-size: 130px;
}

.contact-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-block-end: 1px solid var(--border-gray);
  gap: 10px;
  min-inline-size: 980px;
  padding-block: 20px;
  padding-inline: 20px;
}

.contact-content p {
  margin: 0;
  color: var(--text-dark);
}

.contact-content span {
  border-radius: 50px;
  background: #f3f4f6;
  color: #6b7280;
  font-weight: 600;
  padding-block: 6px;
  padding-inline: 12px;
}

.contact-content span.active {
  background: #ecfdf5;
  color: #10b981;
}

.contact-content span.scheduled {
  background: #e0e7ff;
  color: #6366f1;
}

.action-1 {
  display: flex;
  gap: 8px;
}

.action-1 button {
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

.action-1 button svg {
  block-size: 22px;
  inline-size: 22px;
}

.action-1 button:hover {
  border-color: var(--text-dark);
}

.campaign-mobile {
  display: none;
}

.container-contact .contact-content-name {
  flex: 0.5;
}

.container-contact .contact-title-name {
  flex: 0.5;
}

@media (max-width: 768px) {
  .contact-container {
    display: none;
  }

  .campaign-mobile {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .campaign-item {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #fff;
    color: var(--text-dark);
    gap: 16px;
  }

  .campaign-item p {
    margin-block-end: 0;
  }

  .campaign-item .item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .item-list {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .item-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .item-footer span {
    border-radius: 50px;
    background: #f3f4f6;
    color: #6b7280;
    font-weight: 600;
    padding-block: 6px;
    padding-inline: 12px;
  }

  .item-footer span.active {
    background: #ecfdf5;
    color: #10b981;
  }

  .item-footer span.scheduled {
    background: #e0e7ff;
    color: #6366f1;
  }
}
</style>
