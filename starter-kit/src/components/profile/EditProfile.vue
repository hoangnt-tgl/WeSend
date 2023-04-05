<template>
  <div class="profile">
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
            <div class="textImg">
              <span>Max size: 20mb</span> <span>Recommed: 400x400</span>
            </div>
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
  </div>
</template>

<style scoped>
p {
  margin-block-end: 8px;
}

input {
  color: #111827;
  inline-size: 100%;
  outline: 0;
}

.profile {
  padding: 20px;
  border-radius: 15px;
  background: #fff;
}

.editMenuText {
  color: #111827;
  font-size: 16px;
  font-weight: 700;
  margin-block-end: 20px;
}

.editMenuImg {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-block-end: 25px;
}

.img {
  block-size: 100px;
  inline-size: 100px;
}

.btnImg {
  border: 1px solid #e5e7eb;
  border-radius: 30px;
  color: #111827;
  font-size: 15px;
  font-weight: 600;
  padding-block: 10px;
  padding-inline: 24px;
  transition: var(--smooth);
}

.btnImg:hover {
  border-color: var(--text-dark);
}

.textImg {
  color: #6b7280;
  font-size: 14px;
  margin-block-end: 0;
  margin-block-start: 10px;
}

.textEmail {
  block-size: 22px;
}

.EditProfileDetail {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.name {
  display: flex;
  justify-content: space-between;
}

.firstName,
.lastName {
  inline-size: 49%;
}

.inputFirstName {
  border-radius: 5px;
  background: #f3f4fb;
  block-size: 48px;
  inline-size: 100%;
  padding-block: 13px;
  padding-inline-start: 15px;
}

.inputLastName {
  border-radius: 5px;
  background: #f3f4fb;
  block-size: 48px;
  inline-size: 100%;
  padding-block: 13px;
  padding-inline-start: 15px;
}

.inputEmail {
  border-radius: 5px;
  background: #f3f4fb;
  block-size: 48px;
  padding-block: 13px;
  padding-inline-start: 15px;
}

.textFirstName,
.textLastName,
.textEmail {
  color: #111827;
  font-size: 18px;
  font-weight: 600;
}

.emailbar a {
  cursor: pointer;
  text-decoration: underline;
}

.emailbar {
  display: flex;
  justify-content: space-between;
}

.saveChange {
  text-align: end;
}

.btnSaveChange {
  border-radius: 30px;
  background: #111827;
  block-size: 46px;
  color: #fff;
  font-size: 14px;
  inline-size: 129px;
  transition: var(--smooth);
}

.btnSaveChange:hover {
  background: rgba(17, 24, 39, 80%);
}

@media (max-width: 480px) {
  .textImg {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-block: 10px 0;
    margin-inline: 0;
  }

  .textImg span {
    display: block;
  }

  .name {
    flex-direction: column;
    gap: 20px;
  }

  .firstName,
  .lastName {
    inline-size: 100%;
  }
}
</style>
