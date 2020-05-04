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
      <router-link to="/notification" class="txt-bar">
        <font-awesome-icon icon="bell" class="menu-icon"></font-awesome-icon>
        <span>Notifikasi</span>
      </router-link>
    </div>

    <div class="bar">
      <router-link to="/account" class="txt-bar">
        <font-awesome-icon icon="user" class="menu-icon"></font-awesome-icon>
        <span>Akun</span>
      </router-link>
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
      width: 25%;
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

  // width 481px - 767px (Big Mobile / Tablet)
  @media (min-width: 481px) and (max-width: 767px) {
    #menu {
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
  // width 481px - 767px (Big Mobile / Tablet)

  // width 768px - 1024px (Mini desktop / Tablet landscape)
  @media (min-width: 768px) and (max-width: 1024px) {
    #menu {
      box-shadow: 0 -0.0625rem 0.375rem rgba(0, 0, 0, 0.3);
      padding: 0.6875rem 0 0.4375rem;

      .bar {

        .txt-bar {
          font-size: 0.9375em;

          .menu-icon {
            font-size: 1.125em;
          }

          span {
            margin-top: 0.375rem;
          }
        }
      }
    }
  }
  // width 768px - 1024px (Mini desktop / Tablet landscape)

  // width 1025px (Desktop)
  @media (min-width: 1025px) {
    #menu {
      box-shadow: 0 -0.0625rem 0.375rem rgba(0, 0, 0, 0.3);
      padding: 0.75rem 0 0.5rem;

      .bar {

        .txt-bar {
          font-size: 1em;

          .menu-icon {
            font-size: 1.1875em;
          }

          span {
            margin-top: 0.4375rem;
          }
        }
      }
    }
  }
</style>
