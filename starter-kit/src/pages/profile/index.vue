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
    <div><h2>Profile</h2></div>
    <div class="container-profile justify-content-around gap-4">
      <div class="d-flex flex-column w-100 gap-5">
        <ProfileDetail />
        <EditProfile />
      </div>
      <div class="d-flex flex-column w-100 gap-5">
        <BlackList />
        <DelayMessage />
      </div>
    </div>
  </div>
</template>

<style>
@media screen and (max-width: 768px) {
  .container-profile {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (min-width: 768px) {
  .container-profile {
    display: flex;
    flex-direction: row;
  }
}
</style>
