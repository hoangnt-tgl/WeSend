<script setup lang="ts">
interface Props {
  totalInput?: number
  default?: string
}

interface Emit {
  (e: 'updateOtp', val: string): void
}

const props = withDefaults(defineProps<Props>(), {
  totalInput: 4,
  default: '',
})

const emit = defineEmits<Emit>()

const digits = ref<string[]>([])
const refOtpComp = ref<HTMLInputElement | null>(null)

digits.value = props.default.split('')

const defaultStyle = {
  style: 'min-width: 48px; text-align: center;',
}

// eslint-disable-next-line sonarjs/cognitive-complexity
const handleKeyDown = (event: KeyboardEvent, index: number) => {
  if (event.code !== 'Tab' && event.code !== 'ArrowRight' && event.code !== 'ArrowLeft')
    event.preventDefault()

  if (event.code === 'Backspace') {
    digits.value[index - 1] = ''

    if (refOtpComp.value !== null && index > 1) {
      const inputEl = refOtpComp.value.children[index - 2].querySelector('input')

      if (inputEl)
        inputEl.focus()
    }
  }
  const numberRegExp = /^([0-9])$/

  if (numberRegExp.test(event.key)) {
    digits.value[index - 1] = event.key

    if (refOtpComp.value !== null && index !== 0 && index < refOtpComp.value.children.length) {
      const inputEl = refOtpComp.value.children[index].querySelector('input')

      if (inputEl)
        inputEl.focus()
    }
  }

  emit('updateOtp', digits.value.join(''))
}
</script>

<template>
  <div>
    <div ref="refOtpComp" class="d-flex align-center gap-4">
      <VTextField v-for="i in props.totalInput" :key="i" :model-value="digits[i - 1]" v-bind="defaultStyle" maxlength="1"
        @keydown="handleKeyDown($event, i)" />
    </div>
  </div>
</template>

<style lang="scss">
.v-field__field {
  input {
    padding: 6px 0;
    font-size: 24px;
    text-align: center;
    background: #F3F4FB;
    color: #374151;
    outline: none !important;
    border: none !important;
    border-radius: 5px;
    font-weight: 600;
  }
}

.v-field__outline__start,
.v-field__outline__end {
  border: none !important;
  outline: none;
}
</style>
