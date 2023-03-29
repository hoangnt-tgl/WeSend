<script lang="ts">
import messageImg from '@/assets/images/pages/message.png'
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import QuillEditorCustomer from '@/components/InputEditor/QuillEditor.vue'
import { btnBlack } from '@/constant/buttonColor'

export default {
  name: 'Step3',
  components: {
    BtnRound,
    QuillEditorCustomer,
  },
  props: {
    action: {
      type: Function,
      required: true,
    },
  },
  setup() {
    return {
      btnBlack,
      messageImg,
    }
  },
}
</script>

<template>
  <div>
    <div class="container-step-3">
      <div class="d-flex flex-column flex-sm-row gap-4 row">
        <div class="col-md-7 col-12">
          <h4 class="title-message">
            Message
          </h4>
          <div class="icon-box me-3">
            <div>
              <VIcon
                size="17"
                icon="tabler-arrows-move"
              />
            </div>
            <div>
              <VIcon
                size="18"
                icon="tabler-trash"
              />
            </div>
          </div>
          <div class="mb-15 d-flex">
            <QuillEditorCustomer />
          </div>
          <div class="icon-box me-3">
            <div>
              <VIcon
                size="17"
                icon="tabler-arrows-move"
              />
            </div>
            <div>
              <VIcon
                size="18"
                icon="tabler-trash"
              />
            </div>
          </div>
          <div class="mb-15 d-flex">
            <QuillEditorCustomer />
          </div>
          <div class="add-mess">
            <div>Add another message</div>
          </div>
        </div>
        <div class="col-md-5 col-12">
          <h4>Preview</h4>
          <div class="review-box">
            <div class="header-review">
              <div class="avatar-review" />
              <div class="name-review" />
            </div>
            <div class="body-review">
              <div class="item-review">
                <div class="icon-review">
                  <Vimg
                    :height="140"
                    :src="messageImg"
                  />
                </div>
                <div class="text-review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

  .container-step-3 {
    position: relative;
    border-radius: 5px;
    background-color: #fff;
    padding-block: 24px;
    padding-inline: 40px;
  }

  .icon-box {
    position: absolute;
    inset-inline-start: 15px;
  }

  .add-mess {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .add-mess div {
    position: relative;
    z-index: 2;
    border: 2px dashed #e0e7ff;
    border-radius: 30px;
    background-color: #fff;
    color: var(--text-dark);
    font-size: var(--font-size-sxm);
    font-weight: var(--font-weigth-less-bold);
    padding-block: 12px;
    padding-inline: 20px;
  }

  .add-mess::before {
    position: absolute;
    z-index: 1;
    background-color: #e0e7ff;
    block-size: 1px;
    content: "";
    inline-size: 100%;
    inset-block-start: 50%;
    inset-inline: 0;
    transform: translateY(-50%);
  }
}

@media (min-width: 768px) {
  .btn-next {
    display: flex;
    justify-content: center;
  }
}
</style>
