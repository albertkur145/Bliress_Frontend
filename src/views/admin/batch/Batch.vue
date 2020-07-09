<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <div class="text">Batch</div>
      <font-awesome-icon @click="inputDialog" icon="plus-circle" class="icon-plus"></font-awesome-icon>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">
      <!-- list of batch -->
      <div class="batch-list">
        <router-link v-for="(value) in batchList.data" :key="value.id"
        :to="{ name: 'AdminDetailBatch', params: { batch: value.id } }"
        class="batch">
          <div>
            <div class="txt">{{ value.batch }}</div>
            <div class="year">{{ value.year }}</div>
          </div>
          <font-awesome-icon icon="arrow-right" class="right-icon"></font-awesome-icon>
        </router-link>
      </div>
      <!-- list of batch -->
    </div>
    <!-- end content -->

    <AnimationLoader :class="{ 'display-flex': animationLoaderDisplay }"></AnimationLoader>
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
      display: flex;
      justify-content: space-between;
      align-items: center;
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

      .icon-plus {
        cursor: pointer;
        color: #FFF;
        font-size: 1.125em;
      }
    }

    .content {
      margin-top: 3rem;
      margin-bottom: 2rem;
      padding: 1.125rem 1rem;

      .batch-list {

        .batch {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #FFF;
          text-decoration: none;
          box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.3);
          border-radius: 0.5rem;
          margin-bottom: 0.75em;
          padding: 1.1875rem 1.375rem;

          .txt {
            color: #1E90FF;
            transition: color .1s linear;
            font-weight: 500;
            font-size: 0.9375em;
          }

          .year {
            color: #57606F;
            margin-top: 0.3125rem;
            font-size: 0.875em;
          }

          .right-icon {
            color: rgba(58, 227, 116, 0.5);
            transition: color .1s linear;
            font-size: 1em;
          }

          &:hover > .right-icon {
            color: #1E90FF;
          }
        }
      }
    }

    .display-flex {
      display: flex;
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

        .icon-plus {
          font-size: 1.25em;
        }
      }

      .content {
        margin-top: 3.375rem;
        margin-bottom: 2.5rem;
        padding: 1.5rem 1.25rem;

        .batch-list {

          .batch {
            margin-bottom: 1rem;
            padding: 1.3125rem 1.5rem;

            .txt {
              font-size: 1.0625em;
            }

            .year {
              font-size: 0.9375em;
            }

            .right-icon {
              font-size: 1.125em;
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

        .icon-plus {
          font-size: 1.375em;
        }
      }

      .content {
        margin-top: 3.75rem;
        margin-bottom: 2.75rem;
        padding: 1.75rem 1.5rem;

        .batch-list {

          .batch {
            margin-bottom: 1.25rem;
            padding: 1.5rem 1.8125rem;

            .txt {
              font-size: 1.125em;
            }

            .year {
              font-size: 1.0625em;
            }

            .right-icon {
              font-size: 1.1875em;
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
import AnimationLoader from '@/components/AnimationLoader.vue';
import { mapGetters, mapActions } from 'vuex';

export default {

  components: {
    MenuBar,
    AnimationLoader,
  },

  data() {
    return {
      animationLoaderDisplay: false,
      apiReady: false,
    };
  },

  computed: {
    ...mapGetters('adminBatch', [
      'batchList',
    ]),
  },

  methods: {
    ...mapActions('adminBatch', [
      'getBatch',
      'postBatch',
    ]),

    async getAllBatch() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseGetAllBatch();

      // show loader
      this.animationLoaderDisplay = false;
      this.dataReady(promise);
    },

    promiseGetAllBatch() {
      return new Promise((resolve) => {
        this.getBatch({
          resolve,
        });
      });
    },

    dataReady(promise) {
      if (promise === 200) {
        this.apiReady = true;
      } else {
        this.$func.popupLostConnection();
      }
    },

    async inputDialog() {
      const result = await this.$swal.mixin({
        confirmButtonText: 'Next',
        backdrop: false,
        allowEscapeKey: false,
        showCloseButton: true,
        progressSteps: ['1', '2'],
      }).queue([
        {
          input: 'select',
          inputPlaceholder: 'Pilih batch',
          inputOptions: {
            1: 'Januari',
            2: 'Februari',
            3: 'Maret',
            4: 'April',
            5: 'Mei',
            6: 'Juni',
            7: 'Juli',
            8: 'Agustus',
            9: 'September',
            10: 'Oktober',
            11: 'November',
            12: 'Desember',
          },
        },
        {
          input: 'select',
          inputPlaceholder: 'Pilih tahun',
          inputOptions: {
            2020: '2020',
            2021: '2021',
          },
        },
      ]);

      if (result.value[0].length > 0 && result.value[1].length > 0) {
        this.addBatch(result.value);
      } else {
        this.$func.popupError('Form tidak lengkap!', 5000);
      }
    },

    async addBatch(value) {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseAddBatch(value);

      // show loader
      this.animationLoaderDisplay = false;
      this.afterAddBatch(promise);
    },

    promiseAddBatch(value) {
      return new Promise((resolve) => {
        this.postBatch({
          params: {
            batch: parseInt(value[0], 10),
            year: parseInt(value[1], 10),
          },
          resolve,
        });
      });
    },

    afterAddBatch(promise) {
      if (promise === 200) {
        this.$func.popupSuccessfull('Berhasil tambah batch baru', 5000, { name: 'AdminBatch' });
      } else {
        this.$func.popupLostConnection();
      }
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Admin');

    // req api
    this.getAllBatch();
  },

};
</script>
