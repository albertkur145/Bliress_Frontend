<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap');
  body {
    margin: 0;
    padding: 0;
    background-color: #F2F2F2;
  }

  // width >= 481px (Big Mobile, Tablet, Desktop)
  @media (min-width: 481px) {
    #app {
      width: 466px;
      margin: 0 auto;
    }
  }
  // width >= 481px (Big Mobile, Tablet, Desktop)
</style>
