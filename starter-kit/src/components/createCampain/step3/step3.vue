<script lang="ts">
import messageImg from '@/assets/images/pages/message.png'
import BtnRound from '@/components/buttons/roundedButton/index.vue'
import QuillEditorCustomer from '@/components/InputEditor/QuillEditor.vue'
import Message from '@/components/message/index.vue'
import { btnBlack } from '@/constant/buttonColor'

export default {
  name: 'Step3',
  components: {
    BtnRound,
    QuillEditorCustomer,
    Message,
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
    <!--
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
      icon="tabler-file"
      class="icon-file"
      color="#6366f1"
      />
      </div>

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
      </div>
    -->
    <Message :action="action" />
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

  /* .container-step-3 {
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

  .review-box {
    border-radius: 10px;

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
    background: url("@/assets/images/pages/review-bg.png");
    block-size: 500px;
  }

  .item-review {
    padding: 15px;
    border: 2px solid red;
    border-radius: 12px 12px 12px 0;
    background: white;
    block-size: 314px;
    inline-size: 252px;
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
    padding-inline: 5px 10px;
  }

  .input-chat {
    padding: 6px;
    border: 1px solid #d1d5db;
    border-radius: 15px;
    background-color: #fff;
  }

  .input-box {
    position: relative;
  }

  .icon-file {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: 3%;
    transform: translateY(-50%);
  } */
}

@media (min-width: 768px) {
  .btn-next {
    display: flex;
    justify-content: center;
  }
}
</style>
