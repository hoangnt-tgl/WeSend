<script lang="ts">
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import { btnBlack } from '@/constant/buttonColor'
import { users } from '@/data/contact'

export default {
  name: 'Step2',
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
      users,
      btnBlack,
    }
  },
}
</script>

<template>
  <div>
    <VCard class="container-step-2-create">
      <VCardItem class="py-4">
        <div class="d-flex justify-space-between align-center">
          <VCardTitle class="card-title">
            Campaign Title
          </VCardTitle>
          <VCardSubtitle class="contact-count">
            232 of 233 contacts
          </VCardSubtitle>
        </div>
      </VCardItem>

      <VCardItem class="py-0 px-4">
        <VTextField
          label="Type here"
          single-line
          variant="plain"
          prepend-inner-icon="tabler-search"
          class="input-field"
        />
      </VCardItem>
      <VCardItem class="px-0 pt-4 pb-0">
        <VList
          lines="two"
          class="list-contact"
        >
          <template
            v-for="(user, index) of users"
            :key="user.name"
          >
            <VListItem class="py-5">
              <template #prepend>
                <VAvatar
                  :image="user.avatar"
                  size="45"
                />
              </template>
              <VListItemTitle class="contact-name">
                {{ user.name }}
              </VListItemTitle>
              <VListItemTitle class="contact-phone">
                <span>{{ user.phone }}</span>
              </VListItemTitle>
              <template #append>
                <VCheckbox
                  key="color"
                  class="checkbox"
                  color="success"
                  value="success"
                />
              </template>
            </VListItem>
            <VDivider v-if="index !== users.length - 1" />
          </template>
        </VList>
      </VCardItem>
    </VCard>
    <div class="my-6 btn-next">
      <div>
        <BtnRound
          button-title="continue"
          :action="action"
          color="btnBlack.color"
          :style="btnBlack"
          variant="contained"
        />
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 350px) {
  .btn-next {
    display: none;
  }

  .container-step-2-create {
    border-radius: 15px;
    inline-size: 90vw;
    min-inline-size: 300px;
  }

  .card-title {
    color: var(--text-dark);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-less-bold);
  }

  .contact-count {
    color: var(--text-deactive);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weigth-light);
    padding-block: 0 !important;
    padding-inline: 0 !important;
  }

  .input-field {
    border-radius: var(--border-light-round);
    background-color: var(--background-light);
    padding-block: 5px;
    padding-inline: 5px;
  }

  .input-field .v-field__input {
    padding: 10px;
  }

  .input-field::placeholder {
    color: var(--text-gray-light);
    font-size: var(--font-size);
  }

  .list-contact {
    block-size: 300px;
  }

  .contact-name {
    color: var(--text-dark);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    font-weight: var(--font-weigth-light);
    line-height: 21px;
  }

  .contact-phone {
    color: var(--text-dark);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weigth-light);
  }

  .checkbox {
    inline-size: 20px;
  }
}

@media (min-width: 600px) {
  .container-step-2-create {
    max-inline-size: 549px;
  }
}

@media (min-width: 768px) {
  .btn-next {
    display: flex;
    justify-content: center;
  }
}
</style>
