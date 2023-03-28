<template>
  <div class="no-card-content">
    <div class="image">
      <img
        src="../../../assets/images/pages/no-date.png"
        alt="no data"
      >
    </div>
    <h4>You haven’t got a campaign yet!</h4>
    <p>Create a campaign now to boost your business.</p>
  </div>
</template>

<style scoped>
  .no-card-content {
    border-radius: 10px;
    background: #edeffa;
    margin-block: 18px;
    margin-inline: 0;
    padding-block: 80px;
    padding-inline: 20px;
    text-align: center;
  }

  .no-card-content .image {
    margin-block: 0;
    margin-inline: auto;
    max-inline-size: 400px;
  }

  .no-card-content .image img {
    inline-size: 100%;
  }

  .no-card-content h4 {
    font-size: var(--font-size-md);
    margin-block-start: 20px;
  }

  .no-card-content p {
    color: var(--text-gray-light);
    font-size: var(--font-size-sm);
    margin-block-end: 16px;
  }

  .no-card-content button {
    border-radius: 30px;
    background: var(--text-dark);
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    padding-block: 12px;
    padding-inline: 20px;
    transition: var(--smooth);
  }

  .no-card-content button:hover {
    background: rgba(17, 24, 39, 80%);
  }

  @media (max-width: 768px) {
    .no-card-title {
      flex-direction: column;
      justify-content: center;
      gap: 24px;
    }
  }
</style>
