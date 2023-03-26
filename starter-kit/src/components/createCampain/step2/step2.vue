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
  <div class="container-step-2-create">
    <VCard>
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
          variant="plain"
          single-line
          prepend-inner-icon="tabler-map-pin"
          class="input-field"
        />
      </VCardItem>
      <VCardItem class="px-0 pt-6 pb-0">
        <VList
          lines="two"
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
</template>

<style scoped>
@media (min-width: 350px) {
  .container-step-2-create {
    inline-size: 40vw;
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

@media (min-width: 500px) {
  .container-step-2-create {
    inline-size: 70vw;
    min-inline-size: 400px;
  }
}
@media (min-width: 500px) {
  .container-step-2-create {
    inline-size: 70vw;
    min-inline-size: 400px;
  }
}
@media (min-width: 1024px) {
  .container-step-2-create {
    inline-size: 50vw;
    min-inline-size: 600px;
  }
}
</style>
