<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link :to="{ name: 'AdminTraining', params: { batch: paramBatch } }" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
      </router-link>

      <div class="text">Materi</div>

      <router-link :to="redirectUploadMaterial" class="icon-plus">
        <font-awesome-icon icon="plus-circle"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">

      <!-- material list -->
      <div class="material-list">
        <div class="data">
          <table>
            <thead>
              <th></th>
              <th></th>
            </thead>

            <tbody>
              <tr v-for="(value) in materialList.data" :key="value.id">
                <td>{{ value.name }}</td>
                <td><font-awesome-icon icon="times" class="times-icon" @click="confirmDelete(value.id)"></font-awesome-icon></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- material list -->

    </div>
    <!-- end content -->

    <AnimationLoader :class="{ 'display-flex': animationLoaderDisplay }"></AnimationLoader>
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
      z-index: 1;
      padding: 0.875rem 1rem;

      .back {
        position: absolute;
        color: #FFF;
        top: 29%;
        left: 1rem;
        font-size: 1.0625em;
      }

      .text {
        font-size: 1.0625em;
      }

      .icon-plus {
        position: absolute;
        color: #FFF;
        top: 29%;
        right: 1rem;
        font-size: 1.0625em;
      }
    }

    .content {
      margin-top: 3rem;

      .material-list {
        background-color: #FFF;
        padding: 0.75rem 1rem 2rem;

        .data {
          max-width: 100%;
          overflow-x: auto;

          table {
            text-align: left;
            border-collapse: collapse;
            width: 100%;

            td {
              color: #333;
              border-bottom: 0.0625rem solid #CCC;
              padding: 0.8125rem 0;
              font-size: 0.875em;
            }

            td:last-child {
              text-align: right;
            }

            .times-icon {
              cursor: pointer;
              color: #E74C3C;
              font-size: 1em;
            }
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

        .back {
          top: 30.5%;
          left: 1.25rem;
          font-size: 1.125em;
        }

        .text {
          font-size: 1.125em;
        }

        .icon-plus {
          top: 30.5%;
          right: 1.25rem;
          font-size: 1.125em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .material-list {
          padding: 1.25rem 1.25rem 2.375rem;

          .data {

            table {

              td {
                padding: 0.875rem 0;
                font-size: 0.9375em;
              }

              .times-icon {
                font-size: 1.0625em;
              }
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

        .back {
          top: 32%;
          left: 1.5rem;
          font-size: 1.25em;
        }

        .text {
          font-size: 1.25rem;
        }

        .icon-plus {
          top: 32%;
          right: 1.5rem;
          font-size: 1.25rem;
        }
      }

      .content {
        margin-top: 3.75rem;

        .material-list {
          padding: 1.5rem 1.5rem 2.875rem;

          .data {

            table {

              td {
                padding: 0.9375rem 0;
                font-size: 1em;
              }

              .times-icon {
                font-size: 1.125em;
              }
            }
          }
        }
      }
    }
  }
  // width > 481px (Big Mobile, Tablet, Desktop)

</style>

<script>

import AnimationLoader from '@/components/AnimationLoader.vue';
import { mapGetters, mapActions } from 'vuex';

export default {

  components: {
    AnimationLoader,
  },

  data() {
    return {
      paramBatch: '',
      paramTraining: '',
      animationLoaderDisplay: false,
      apiReady: false,
    };
  },

  computed: {
    ...mapGetters('adminMaterial', [
      'materialList',
    ]),

    redirectUploadMaterial() {
      return {
        name: 'AdminUploadMaterialTraining',
        params: {
          batch: this.paramBatch,
          training: this.paramTraining,
        },
      };
    },
  },

  methods: {
    ...mapActions('adminMaterial', [
      'getMaterials',
      'deleteMaterial',
    ]),

    async getAllMaterial() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await new Promise((resolve) => {
        this.getMaterials({
          params: {
            batch: this.paramBatch,
            training: this.paramTraining,
          },
          resolve,
        });
      });

      // show loader
      this.animationLoaderDisplay = false;

      if (promise === 200) {
        this.apiReady = true;
      } else {
        this.$func.popupLostConnection();
      }
    },

    confirmDelete(materialId) {
      this.$func.popupConfirmDialog(
        'Kamu yakin?',
        'Data yang dihapus tidak dapat kembali lagi',
      ).then((res) => {
        if (res.value) {
          this.deleteData(materialId);
        }
      });
    },

    async deleteData(materialId) {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await new Promise((resolve) => {
        this.deleteMaterial({
          params: {
            batch: this.paramBatch,
            training: this.paramTraining,
            materialId,
          },
          resolve,
        });
      });

      // show loader
      this.animationLoaderDisplay = false;

      if (promise === 200) {
        this.$func.popupSuccessfull('Berhasil hapus data', 5000, null);
      } else {
        this.$func.popupLostConnection();
      }
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Admin');

    // get params
    this.paramBatch = this.$route.params.batch;
    this.paramTraining = this.$route.params.training;

    // req api
    this.getAllMaterial();
  },

};

</script>
