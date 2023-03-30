<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
</script>

<template>
  <div
    class="user"
    @click=" $router.push('/profile')"
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"
    >
      <VImg :src="avatar1" />
    </VAvatar>
    <div class="user-name">
      <h6>Steven Speish</h6>
      <p>Product Manager</p>
    </div>
    <div class="user-icon">
      <!-- <VIcon icon="tabler-chevron-down"></VIcon> -->
      <img
        src="../../assets/icons/chervon-down.svg"
        alt="icon"
      >
    </div>
  </div>
</template>

<style scoped>
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 30px;
  background: #f3f4fb;
  cursor: pointer;
  gap: 8px;
  inline-size: 191px;
}

.user-name h2,
.user-name p {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.user-name h6 {
  color: var(--text-dark);
  font-size: var(--font-size-sm);
}

.user-name p {
  color: var(--text-deactive);
  font-size: var(--font-size-sxm);
  margin-block-end: 0;
}

.user-icon {
  margin-inline-end: 7px;
}

@media (max-width: 768px) {
  .user {
    inline-size: fit-content;
  }

  .user-name {
    display: none;
  }

  .user-icon {
    display: none;
  }
}
</style>
