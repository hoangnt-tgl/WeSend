<script>
import { defineComponent } from 'vue'

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
    <QuillEditor :theme="theme" />
  </div>
</template>
