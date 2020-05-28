<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <div class="text">Lainnya</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <div class="list">
        <div class="box" @click="redirectTo('AdminMenuEmployee')">
          <div class="info">
            Pegawai
          </div>

          <div class="show">
            <font-awesome-icon icon="chevron-right"></font-awesome-icon>
          </div>
        </div>

        <div class="box" @click="redirectTo('AdminTrainer')">
          <div class="info">
            Trainer
          </div>

          <div class="show">
            <font-awesome-icon icon="chevron-right"></font-awesome-icon>
          </div>
        </div>
      </div>
    </div>
    <!-- end content -->

    <MenuBar></MenuBar>
  </div>
</template>

<style lang="scss" scoped>

  // global css
  #container {
    font-family: 'Roboto';
    max-width: 100%;
    background-color: #F2F2F2;

    .head {
      box-sizing: border-box;
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      max-width: 100%;
      color: #FFF;
      background-color: #0ABDE3;
      font-weight: 600;
      text-align: center;
      z-index: 1;
      padding: 0.875rem 1rem;

      .text {
        font-size: 1.0625em;
      }
    }

    .content {
      margin-top: 3rem;
      margin-bottom: 2.5rem;

      .list {
        padding: 0.5rem;

        .box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #FFF;
          color: #2F3640;
          cursor: pointer;
          border-radius: 0.25rem;
          box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.3);
          margin-bottom: 0.4375rem;
          padding: 1rem 1.25rem;

          .info {
            font-weight: 500;
            font-size: 0.9375em;
          }

          .show {
            font-size: 0.6875em;
          }
        }
      }
    }
  }
  // global css

  // width 320px - 480px (Mobile)
  @media (min-width: 320px) and (max-width: 480px) {
    #container {

      .head {
        padding: 1.0625rem 1.25rem;

        .text {
          font-size: 1.125em;
        }
      }

      .content {
        margin-top: 3.375rem;
        margin-bottom: 2.875rem;

        .list {
          padding: 0.5875rem;

          .box {
            margin-bottom: 0.5rem;
            padding: 1.25rem 1.5rem;

            .info {
              font-size: 1.0625em;
            }

            .show {
              font-size: 0.8125em;
            }
          }
        }
      }
    }
  }
  // width 320px - 480px (Mobile)

  // width > 481px (Big Mobile, Tablet, Desktop)
  @media (min-width: 481px) {
    #container {

      .head {
        max-width: 466px;
        margin: 0 auto;
        padding: 1.1875rem 1.5rem;

        .text {
          font-size: 1.25em;
        }
      }

      .content {
        margin-top: 3.75rem;
        margin-bottom: 3.25rem;

        .list {
          padding: 0.8125rem;

          .box {
            margin-bottom: 0.75rem;
            padding: 1.5rem 1.75rem;

            .info {
              font-size: 1.125em;
            }

            .show {
              font-size: 0.875em;
            }
          }
        }
      }
    }
  }
  // width > 481px (Big Mobile, Tablet, Desktop)

</style>

<script>

import MenuBar from '@/components/admin/MenuBar.vue';

export default {

  components: {
    MenuBar,
  },

  methods: {
    redirectTo(name) {
      this.$router.push({
        name,
      });
    },
  },

};

</script>
