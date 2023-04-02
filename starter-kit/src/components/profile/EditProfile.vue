<template>
  <VCard>
    <div class="EditProfile">
      <div class="EditMenu">
        <div class="editMenuText">
          Edit Menu
        </div>
        <div class="editMenuImg">
          <div class="img">
            <img src="@/assets/images/Ellipse20.png">
          </div>
          <div class="imgDetail">
            <button class="btnImg">
              Select Image
            </button>
            <p class="textImg">
              Max size: 20mb Recommed: 400x400
            </p>
          </div>
        </div>
      </div>
      <div class="EditProfileDetail">
        <div class="name">
          <div class="firstName">
            <p class="textFirstName">
              First name
            </p>
            <input
              class="inputFirstName"
              placeholder="Roger"
            >
          </div>
          <div class="lastName">
            <p class="textLastName">
              Last name
            </p>
            <input
              class="inputLastName"
              placeholder="Kadama"
            >
          </div>
        </div>
        <div class="email">
          <div class="emailbar">
            <p class="textEmail">
              Email
            </p>
            <a>Change current email</a>
          </div>
          <input
            class="inputEmail"
            placeholder="John"
          >
        </div>
        <div class="email">
          <div class="emailbar">
            <p class="textEmail">
              Phone
            </p>
          </div>
          <input
            class="inputEmail"
            placeholder="John"
          >
        </div>
        <div class="saveChange">
          <button class="btnSaveChange">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </VCard>
</template>

<style scoped>
.EditProfile {
  border-radius: 15px;
  background: #fff;
  block-size: 577px;
  margin-block-start: 35px;
}

.EditMenu {
  block-size: 195px;
}

.EditProfileDetail {
  block-size: 377px;
  margin-inline-start: 30px;
}

.editMenuText {
  block-size: 24px;
  color: #111827;
  font-size: 16px;
  inline-size: 86px;
  margin-block-start: 30px;
  margin-inline-start: 30px;
}

.editMenuImg {
  display: flex;
  margin-block-start: 20px;
  margin-inline-start: 30px;
}

.img {
  block-size: 100px;
  inline-size: 100px;
}

.imgDetail {
  margin-inline-start: 17px;
}

.btnImg {
  border: 1px solid #e5e7eb;
  border-radius: 30px;
  block-size: 42px;
  font-size: 15px;
  inline-size: 124px;
  margin-block-start: 10px;
}

.textImg {
  block-size: 20px;
  color: #6b7280;
  font-size: 14px;
  inline-size: 247px;
  margin-block-start: 10px;
}

.textEmail {
  block-size: 22px;
}

.name {
  display: flex;
}

.inputFirstName {
  border-radius: 5px;
  background: #f3f4fb;
  block-size: 48px;
  inline-size: 224px;
  padding-block: 13px;
  padding-inline-start: 15px;
}

.inputLastName {
  border-radius: 5px;
  background: #f3f4fb;
  block-size: 48px;
  inline-size: 221px;
  padding-block: 13px;
  padding-inline-start: 15px;
}

.inputEmail {
  border-radius: 5px;
  background: #f3f4fb;
  block-size: 48px;
  inline-size: 460px;
  padding-block: 13px;
  padding-inline-start: 15px;
}

.textFirstName {
  font-size: 18px;
}

.textLastName {
  font-size: 18px;
}

.firstName {
  inline-size: 224px;
}

.lastName {
  inline-size: 221px;
  margin-inline-start: 15px;
}

.email {
  inline-size: 460px;
  margin-block-start: 20px;
}

.emailbar {
  display: flex;
  justify-content: space-between;
}

.saveChange {
  margin-block-start: 20px;
  margin-inline-start: 341px;
}

.btnSaveChange {
  border-radius: 30px;
  background: #111827;
  block-size: 46px;
  color: #fff;
  font-size: 14px;
  inline-size: 129px;
}
</style>
