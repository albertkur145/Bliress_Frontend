<template>
  <!-- animation loader -->
  <div class="animation-loader">
    <img src="@/assets/gif/animation loader.gif">
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
    background-color: rgba(255, 255, 255, 0.9);

    img {
      width: 50%;
    }
  }
  // global css

  // width > 481px (Big Mobile, Tablet, Desktop)
  @media (min-width: 481px) {
    .animation-loader {

      img {
        width: 40%;
      }
    }
  }
  // width > 481px (Big Mobile, Tablet, Desktop)

</style>
