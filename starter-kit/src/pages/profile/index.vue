<script>
import BlackList from '@/components/profile/BlackList.vue'
import DelayMessage from '@/components/profile/DelayMessage.vue'
import ProfileDetail from '@/components/profile/ProfileDetail.vue'
import EditProfile from '@/components/profile/EditProfile.vue'

export default {
  components: {
    BlackList,
    DelayMessage,
    ProfileDetail,
    EditProfile,
  },
}
</script>

<template>
  <div>
    <h2 class="title-profile">
      Profile
    </h2>
    <div class="container-profile">
      <div class="profile-item">
        <ProfileDetail />
        <EditProfile />
      </div>
      <div class="profile-item">
        <BlackList />
        <DelayMessage />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-profile {
  color: var(--text-dark);
  margin-block-end: 20px;
}

.profile-item {
  display: flex;
  flex-direction: column;
  gap: 30px;
  inline-size: 49%;
}

.container-profile {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 850px) {
  .container-profile {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .profile-item {
    inline-size: 100%;
  }
}

@media (max-width: 480px) {
  .title-profile {
    padding-block: 0;
    padding-inline: 20px;
  }

  .container-profile {
    padding-block: 0;
    padding-inline: 20px;
  }
}
</style>
