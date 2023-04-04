<script lang="ts">
import messageImg from '@/assets/images/pages/message.png'
import QuillEditor from '@/components/InputEditor/QuillEditor.vue'
import { btnBlack } from '@/constant/buttonColor'

export default {
  name: 'Step3',
  components: {
    QuillEditor,
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
  <div class="container">
    <h2 class="title">
      Bot Settings
    </h2>
    <div class="container-step-3 w-100">
      <div>
        <div class="setting">
          <div class="setting-left">
            <h6>Settings</h6>
            <div class="setting-input">
              <p>Name</p>
              <input
                type="text"
                placeholder="Roger"
              >
            </div>
            <div class="setting-option">
              <p>Name</p>
              <div class="setting-option-image">
                <img
                  src="../../assets/images/option.png"
                  alt="option"
                >
              </div>
            </div>
            <!--
              <div class="setting-container">
              <div class="content">
              <h6>You haven’t selected anything yet.</h6>
              <p>You will see the selected options settings here.</p>
              </div>
              </div>
            -->
            <div class="setting-primary">
              <div class="setting-input">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Roger"
                >
              </div>
              <div class="setting-editor">
                <p>Option Reply</p>
                <QuillEditor />
              </div>
            </div>
          </div>
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
            <div class="preview-button">
              <button>Continue</button>
            </div>
          </div>
          <div class="setting-footer">
            <p>Preview</p>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
p {
  margin-block-end: 0;
}

@media (min-width: 320px) {
  .title {
    color: var(--text-dark);
    font-size: 24px;
    font-weight: 600;
    margin-block-end: 30px;
    padding-block: 0;
    padding-inline: 20px;
  }

  .setting-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 30px rgba(0, 0, 0, 8%);
    padding-block: 15px;
    padding-inline: 20px;
  }

  .setting-footer p {
    color: #374151;
    font-size: 16px;
    font-weight: 500;
  }

  .setting-footer button,
  .preview-button button {
    display: flex;
    align-items: center;
    border-radius: 30px;
    background: var(--text-dark);
    block-size: 100%;
    color: #fff;
    gap: 10px;
    padding-block: 12px;
    padding-inline: 32px;
    transition: var(--smooth);
  }

  .setting-footer button:hover,
  .preview-button button:hover {
    background: rgba(17, 24, 39, 80%);
  }

  .preview-button {
    display: flex;
    justify-content: end;
  }

  .preview-button button {
    inline-size: fit-content;
    margin-block-start: 16px;
  }

  .setting-left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-block: 20px 0;
    padding-inline: 20px;
  }

  .setting-left > h6 {
    color: var(--text-dark);
    font-size: 16px;
    font-weight: 600;
  }

  .setting-input p,
  .setting-option p {
    color: #374151;
    font-size: 16px;
    font-weight: 600;
    margin-block-end: 8px;
  }

  .setting-input input {
    border-radius: 5px;
    background: #f3f4fb;
    inline-size: 100%;
    outline: none;
    padding-block: 12px;
    padding-inline: 18px;
  }

  .setting-option-image {
    border-radius: 10px;
    background: #f3f4fb;
    overflow-x: scroll;
    padding-block: 38px;
    padding-inline: 38px 0;
  }

  .setting-option-image img {
    inline-size: 500px;
    margin-inline-end: 38px;
  }

  .setting-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #f3f4fb;
    min-block-size: 200px;
    padding-inline: 20px;
  }

  .setting-container .content {
    max-inline-size: 400px;
    text-align: center;
  }

  .setting-container .content h6 {
    color: #6b7280;
    font-size: 16px;
    font-weight: 600;
  }

  .setting-container .content p {
    color: #9ca3af;
    font-size: 14px;
    font-weight: 400;
  }

  .setting-primary {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .setting-editor p {
    color: #374151;
    font-size: 16px;
    font-weight: 600;
    margin-block-end: 8px;
  }

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
    padding-block: 5px 28px;
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
}

@media (min-width: 480px) {
  .title {
    padding: 0;
  }

  .setting-footer {
    display: none;
  }

  .setting {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-block-end: 8px;
  }

  .setting-left {
    inline-size: 100%;
  }

  .review-text-box {
    display: block;
    inline-size: 100%;
    padding-block: 0;
    padding-inline: 20px;
  }
}

@media (min-width: 768px) {
  .setting {
    flex-direction: row;
    padding: 20px;
  }

  .setting-left {
    padding: 0;
    inline-size: calc(100% - 352px);
  }

  .setting-primary {
    padding: 20px;
    border-radius: 10px;
    background: #f3f4fb;
  }

  .setting-primary .setting-input input {
    background: #fff;
  }

  .setting-editor .ql-toolbar.ql-snow,
  .setting-editor .ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-color: #e0e7ff;
    background: #fff;
  }

  .review-text-box {
    padding: 0;
    inline-size: 352px;
  }

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

  .add-mess div {
    padding-block: 12px;
    padding-inline: 20px;
  }
}

@media (min-width: 960px) {
  .title-message-1 {
    display: none;
  }

  .setting {
    display: flex;
    padding: 20px;
  }
}
</style>
