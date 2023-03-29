<script lang="ts">
export default {
  name: 'CampaignSchedulesCard',
}
</script>

<template>
  <div class="card-item">
    <div class="card-item-content">
      <div class="card-item-date">
        <h1>23</h1>
        <div class="time">
          <p>05:30 AM</p>
          <h6>September</h6>
        </div>
      </div>
      <p>This campaign will run for <span>1000 contacts</span> starting from <span>100 to 1100</span> and up to <span>30 mins.</span></p>
    </div>
    <div class="card-item-footer">
      <div class="footer-left">
        <div>
          <input
            id="switch"
            type="checkbox"
            class="switch-input"
          >
          <label
            for="switch"
            class="switch"
          />
        </div>

        <p>Active</p>
      </div>
      <div class="footer-right">
        <div class="icon">
          <VIcon icon="tabler-player-play-filled" />
        </div>
        <div class="icon icon-x">
          <VIcon icon="tabler-x" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-item {
  overflow: hidden;
  border: 1px solid #e0e7ff;
  border-radius: 15px;
}

.card-item-content {
  padding-block: 24px;
  padding-inline: 20px;
}

.card-item-date {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-item-date h1 {
  font-size: 40px;
}

.card-item-date .time p {
  color: var(--text-deactive);
  font-size: var(--font-size-sm);
  margin-block-end: 0;
}

.card-item-date .time h6 {
  color: var(--text-active);
  font-size: var(--font-size);
  margin-block-end: 0;
}

.card-item-content p {
  color: var(--text-dark);
  font-size: var(--font-size-sm);
  margin-block-end: 0;
}

.card-item-content p span {
  color: var(--color-primary);
}

.card-item-footer {
  background-color: var(--background-light);
  padding-block: 10px;
  padding-inline: 12px;
}

.card-item-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-left p {
  color: var(--text-active);
  font-size: var(--font-size-sm);
  margin-block-end: 0;
}

.switch {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 100rem;
  background: #fff;
  block-size: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 10%);
  cursor: pointer;
  inline-size: 40px;
  margin-block: 0;
  margin-inline: auto;
  transition: background-color 0.25s linear;
}

.switch::after {
  position: absolute;
  border-radius: 40px;
  background-color: #10b981;
  block-size: 15px;
  content: "";
  inline-size: 15px;
  inset-block-start: 3px;
  inset-inline-start: 22px;
  transition: background-color 0.25s linear, transform 0.25s linear;
}

.switch-input {
  display: none;
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-right .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff;
  block-size: 36px;
  color: #10b981;
  font-size: var(--font-size-ssm);
  inline-size: 36px;
}

.footer-right .icon.icon-x {
  color: #ef4444;
  font-size: var(--font-size-sxm);
}
</style>
