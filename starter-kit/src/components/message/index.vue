<script lang="ts">
import messageImg from '@/assets/images/pages/message.png'
import QuillEditorCustomer from '@/components/InputEditor/QuillEditor.vue'
import { btnBlack } from '@/constant/buttonColor'

export default {
  name: 'Step3',
  components: {
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
  <div class="container-step-3 w-100">
    <div class="d-flex flex-column flex-sm-row gap-4 row -100">
      <VRow>
        <VCol
          cols="12"
          sm="12"
          md="6"
          lg="8"
          class=""
        >
          <div class=" w-100 ps-md-4 text-editor-box">
            <h4 class="title-message">
              Message
            </h4>
            <div class="message-box-wrapper">
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
              <div class="mb-5 w-100">
                <QuillEditorCustomer />
              </div>
            </div>
            <h4 class="title-message-1">
              Message
            </h4>
            <div class="message-box-wrapper">
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
              <div class="mb-5 w-100">
                <QuillEditorCustomer />
              </div>
            </div>

            <div class="add-mess">
              <div>Add another message</div>
            </div>
          </div>
        </VCol>
        <VCol
          cols="12"
          sm="12"
          md="6"
          lg="4"
          class=""
        >
          <div class=" review-text-box">
            <h4 class="title-message">
              Preview
            </h4>
            <div class="review-box">
              <div class="header-review">
                <div class="avatar-review" />
                <div class="name-review" />
              </div>
              <div class="body-review">
                <div class="item-review">
                  <div class="icon-review">
                    <img src="@/assets/images/pages/message.png">
                  </div>
                  <div
                    class="text-review"
                  >
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
              <div class="footer-review">
                <VIcon
                  size="18"
                  icon="tabler-plus"
                  color="#6366f1"
                />
                <div class="input-box">
                  <input
                    type="text"
                    class="input-chat"
                  >
                  <VIcon
                    size="18"
                    icon="tabler-note"
                    class="icon-file"
                    color="#6366f1"
                  />
                </div>
                <div class="d-flex gap-1">
                  <VIcon
                    size="18"
                    icon="tabler-camera"
                    color="#6366f1"
                  />
                  <VIcon
                    size="18"
                    icon="tabler-microphone"
                    color="#6366f1"
                  />
                </div>
              </div>
            </div>
          </div>
        </VCol>
      </VRow>
    </div>
  </div>
</template>

<style>
@media (min-width: 350px) {
  .review-text-box {
    display: none;
  }

  .title-message {
    color: var(--text-dark);
    font-size: 16px;
    font-weight: var(--font-weight-less-bold);
    margin-block-end: 12px;
  }

  .title-message-1 {
    color: var(--text-dark);
    font-size: 16px;
    font-weight: var(--font-weight-less-bold);
    margin-block-end: 12px;
  }

  .btn-next {
    display: none;
  }

  .container-step-3 {
    position: relative;
    border-radius: 5px;
    background-color: #fff;
    inline-size: 57vw;

    /* padding-block: 24px; */

    /* padding-inline: 40px; */
  }

  .message-box-wrapper {
    position: relative;
  }

  .icon-box {
    position: absolute;
    display: flex;
    inset-block-start: -35px;
    inset-inline-end: 0;
    margin-inline-end: 0 !important;
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
    padding-block: 6px;
    padding-inline: 6px;
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

  .review-box {
    border-radius: 10px;

    /* border: 2px solid red; */
    min-inline-size: 316px;
  }

  .header-review {
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 10px 10px 0 0;
    background: #f3f4f6;
    gap: 5px;
  }

  .avatar-review {
    border-radius: 50%;
    background-color: #d1d5db;
    block-size: 32px;
    inline-size: 32px;
  }

  .name-review {
    border-radius: 50px;
    background: #d1d5db;
    block-size: 12px;
    inline-size: 89px;
  }

  .body-review {
    position: relative;
    background: url("@/assets/images/pages/review-bg.png");
    min-block-size: 450px;
  }

  .item-review {
    position: absolute;
    padding: 15px;

    /* border: 2px solid red; */
    border-radius: 12px 12px 12px 0;
    background: white;
    block-size: 314px;
    inline-size: 252px;
    inset-block-end: 0;
    margin-block: 10px;
    margin-inline: 15px;
  }

  .text-review {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    inline-size: 100%;
    line-height: 22px;
  }

  .footer-review {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
    background: #f3f4f6;
    block-size: auto;
    padding-block: 5px 20px;
    padding-inline: 10px 10px;
  }

  .input-chat {
    padding: 6px;
    border: 1px solid #d1d5db;
    border-radius: 15px;
    background-color: #fff;
    inline-size: 100%;
  }

  .input-box {
    position: relative;
    flex-grow: 1.5;
    padding-block: 0;
    padding-inline: 10px;
  }

  .icon-file {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: 5%;
    transform: translateY(-50%);
  }

  .container-step-3 .ql-container {
    border: 1px solid #e0e7ff;
    border-radius: 0 0 10px 10px;
    block-size: 212px;
  }

  .container-step-3 .ql-toolbar {
    display: flex;
    align-items: center;
    border: 1px solid #e0e7ff;
    border-radius: 10px 10px 0 0;
    background: #f6f6fe;
    block-size: 70px;
  }
}

@media (min-width: 768px) {
  .btn-next {
    display: flex;
    justify-content: center;
  }

  .icon-box {
    /* position: absolute; */
    display: block;
    inset-block-start: 0;
    inset-inline-end: 0;
    inset-inline-start: -25px;
    margin-inline-end: 12px !important;
  }

  .review-text-box {
    display: block;
  }

  .add-mess div {
    padding-block: 12px;
    padding-inline: 20px;
  }
}

@media (min-width: 960px) {
  .title-message-1 {
    display: none;
  }
}
</style>
