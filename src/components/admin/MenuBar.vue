<template>
  <div id="menu">
    <div class="bar">
      <router-link to="/admin/batch" class="txt-bar">
        <font-awesome-icon icon="users" class="menu-icon"></font-awesome-icon>
        <span>Batch</span>
      </router-link>
    </div>

    <div class="bar">
      <router-link to="/admin/test" class="txt-bar">
        <font-awesome-icon icon="clipboard" class="menu-icon"></font-awesome-icon>
        <span>Test</span>
      </router-link>
    </div>

    <div class="bar">
      <router-link to="/admin/notification" class="txt-bar">
        <font-awesome-icon icon="bell" class="menu-icon"></font-awesome-icon>
        <span>Notifikasi</span>
      </router-link>
    </div>

    <div class="bar">
      <router-link to="/admin/other" class="txt-bar">
        <font-awesome-icon icon="ellipsis-h" class="menu-icon"></font-awesome-icon>
        <span>Lainnya</span>
      </router-link>
    </div>

    <div class="bar" @click="logout">
      <div class="txt-bar" style="cursor: pointer;">
        <font-awesome-icon icon="sign-out-alt" class="menu-icon"></font-awesome-icon>
        <span>Keluar</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  // global css
  #menu {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    background-color: #FFF;
    box-shadow: 0 -0.0625rem 0.375rem rgba(0, 0, 0, 0.3);
    padding: 0.5rem 0 0.25rem;

    .bar {
      width: 20%;
      text-align: center;

      .txt-bar {
        display: block;
        text-decoration: none;
        font-size: 0.6875em;
        color: #777;

        .menu-icon {
          font-size: 1.0625em;
        }

        span {
          display: block;
          margin-top: 0.375rem;
        }

        &.router-link-exact-active {
          color: #1878D1;
          font-weight: 600;
        }
      }
    }
  }
  // global css

  // width 320px - 480px (Mobile)
  @media (min-width: 320px) and (max-width: 480px) {
    #menu {
      box-shadow: 0 -0.0625rem 0.375rem rgba(0, 0, 0, 0.3);
      padding: 0.625rem 0 0.3125rem;

      .bar {

        .txt-bar {
          font-size: 0.75em;

          .menu-icon {
            font-size: 1.1875em;
          }

          span {
            margin-top: 0.375rem;
          }
        }
      }
    }
  }
  // width 320px - 480px (Mobile)

  // width >= 481px (Big Mobile, Tablet, Desktop)
  @media (min-width: 481px) {
    #menu {
      max-width: 466px;
      margin: 0 auto;
      box-shadow: 0 -0.0625rem 0.375rem rgba(0, 0, 0, 0.3);
      padding: 0.625rem 0 0.375rem;

      .bar {

        .txt-bar {
          font-size: 0.875em;

          .menu-icon {
            font-size: 1.0625em;
          }

          span {
            margin-top: 0.25rem;
          }
        }
      }
    }
  }
</style>

<script>

export default {

  methods: {
    logout() {
      this.$cookies.remove('user');
      this.$cookies.remove('token');
      this.$router.push({ name: 'Login' });
    },
  },

};

</script>
