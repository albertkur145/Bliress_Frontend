<template>
  <div id="menu">
    <div class="bar">
      <router-link to="/training" class="txt-bar">
        <font-awesome-icon icon="biking" class="menu-icon"></font-awesome-icon>
        <span>Training</span>
      </router-link>
    </div>

    <div class="bar">
      <router-link to="/" class="txt-bar">
        <font-awesome-icon icon="clipboard" class="menu-icon"></font-awesome-icon>
        <span>Test</span>
      </router-link>
    </div>

    <div class="bar">
      <router-link to="/" class="txt-bar">
        <font-awesome-icon icon="bell" class="menu-icon"></font-awesome-icon>
        <span>Notifikasi</span>
      </router-link>
    </div>

    <div class="bar">
      <router-link to="/" class="txt-bar">
        <font-awesome-icon icon="user" class="menu-icon"></font-awesome-icon>
        <span>Akun</span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #menu {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    padding: 0.625rem 0 0.375rem;
    background-color: #FFF;
    box-shadow: 0 -0.0625rem 0.375rem rgba(0, 0, 0, 0.3);

    .bar {
      width: 25%;
      text-align: center;
      color: #666;

      .txt-bar {
        display: block;
        text-decoration: none;
        color: #666;
        font-size: 0.875em;

        .menu-icon {
          font-size: 1.0625rem;
        }

        span {
          display: block;
          margin-top: 0.25rem;
        }

        &.router-link-exact-active {
          color: #1878D1;
          font-weight: 600;
        }
      }
    }
  }
</style>
