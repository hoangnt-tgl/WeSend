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
