<template>
  <!-- animation loader -->
  <div class="animation-loader">
    <img src="@/assets/gif/loading-box.gif">
  </div>
  <!-- animation loader -->
</template>

<style lang="scss" scoped>

  // global css
  .animation-loader {
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.95);

    img {
      width: 7rem;
    }
  }
  // global css

  // width 320px - 480px (Mobile)
  @media (min-width: 320px) and (max-width: 480px) {
    .animation-loader {

      img {
        width: 8rem;
      }
    }
  }

  // width > 481px (Big Mobile, Tablet, Desktop)
  @media (min-width: 481px) {
    .animation-loader {

      img {
        width: 9rem;
      }
    }
  }
  // width > 481px (Big Mobile, Tablet, Desktop)

</style>
