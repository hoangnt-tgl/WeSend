<script>
export default {
  setup() {
    return {

    }
  },
  // eslint-disable-next-line vue/component-api-style
  methods: {
    onCloseModal() {
      this.$emit('cancel')
    },
  },
}
</script>

<template>
  <div
    class="modal fade"
    @click.self="onCloseModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          Header
        </div>
        <div class="modal-body">
          Body
        </div>
        <div class="modal-footer">
          Footer
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.modal {
  position: fixed;
  z-index: 1060;
  display: block;
  background: #635d5d21;
  block-size: 100%;
  inline-size: 100%;
  inset-block-start: 0;
  inset-inline-start: 0;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.fade {
  transition: opacity 0.15s linear;
}

.modal-dialog {
  position: relative;
  margin: 0.5rem;
  inline-size: auto;
  pointer-events: none;
}

/* stylelint-disable-next-line no-duplicate-selectors */
.modal-dialog {
  margin-block: 12.75rem;
  margin-inline: auto;
  max-inline-size: 500px;
}

.modal.fade .modal-dialog {
  transform: translate(0, -50px);
  transition: transform 0.3s ease-out;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 20%);
  border-radius: 0.3rem;
  background-clip: padding-box;
  background-color: #fff;
  inline-size: 100%;
  outline: 0;
  pointer-events: auto;
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  border-block-end: 1px solid #dee2e6;
  border-start-end-radius: calc(0.3rem - 1px);
  border-start-start-radius: calc(0.3rem - 1px);
  padding-block: 1rem;
  padding-inline: 1rem;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-block-start: 1px solid #dee2e6;
  border-end-end-radius: calc(0.3rem - 1px);
  border-end-start-radius: calc(0.3rem - 1px);
}
</style>
