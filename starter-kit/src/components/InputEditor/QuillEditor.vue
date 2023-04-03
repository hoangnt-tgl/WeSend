<script>
import { defineComponent } from 'vue'

// const icons = qill.import('ui/icons')

// icons.bold = '<i class="fa fa-bold" aria-hidden="true"></i>'
export default defineComponent({
  name: 'QuillEditorCustomer',
  props: {
    theme: {
      type: String,
      default: 'snow',
    },
  },
  setup() {
    return {
    }
  },
})
</script>

<template>
  <div>
    <QuillEditor
      :theme="theme"
      :toolbar="['bold',
                 'italic',
                 'underline',
                 'strike', 'image', 'video', 'link']"
    />
  </div>
</template>

<style>
.ql-container {
  border: 1px solid #e0e7ff;
  border-radius: 0 0 10px 10px;
  block-size: 212px;
}

.ql-toolbar {
  display: flex;
  align-items: center;
  border: 1px solid #e0e7ff;
  border-radius: 10px 10px 0 0;
  background: #f6f6fe;
  block-size: 70px;
}
</style>
