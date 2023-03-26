<script lang="ts" setup>
import navItems from '@/navigation/vertical'
import { useThemeConfig } from '@core/composable/useThemeConfig'

// Components
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

// @layouts plugin
import { VerticalNavLayout } from '@layouts'

const { appRouteTransition, isLessThanOverlayNavBreakpoint } = useThemeConfig()
const { width: windowWidth } = useWindowSize()
const router = useRouter()
const isDashboard = router.currentRoute.value.name === 'index' ? ref(true) : ref(false)

watch(() => router.currentRoute.value.name, name => {
  if (name === 'index')
    isDashboard.value = true
  else
    isDashboard.value = false
})

// display time 24 September / 02:30 AM
const displayTime = () => {
  const date = new Date()
  const options = { month: 'long', day: 'numeric' }
  const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  return `${date.toLocaleDateString('en-US', options)} / ${time}`
}
</script>

<template>
  <VerticalNavLayout
    :nav-items="navItems"
  >
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <VBtn
          v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
          icon
          variant="text"
          color="default"
          class="ms-n3"
          size="small"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon
            icon="tabler-menu-2"
            size="24"
          />
        </VBtn>
        <div
          v-if="isDashboard"
          class="d-none d-sm-block dashboard-time"
        >
          {{ displayTime() }}
        </div>
        <div
          v-else
          class="d-none d-sm-block back-to-dashboard"
          @click="router.push({ name: 'index' })"
        >
          Back to Dashboard
        </div>
        <NavbarThemeSwitcher />

        <VSpacer />

        <UserProfile />
      </div>
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <!-- <Footer /> -->
    </template>

    <!-- 👉 Customizer -->
    <!-- <TheCustomizer /> -->
  </VerticalNavLayout>
</template>

<style>
.back-to-dashboard {
  color: var(--text-gray-light) !important;
  font-size: var(--font-size) !important;
}

.dashboard-time {
  color: var(--text-gray-light) !important;
  font-size: var(--font-size-sm) !important;
  text-transform: uppercase !important;
}
</style>
