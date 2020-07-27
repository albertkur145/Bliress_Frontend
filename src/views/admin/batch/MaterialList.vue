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

            <tbody v-if="materials.length > 0">
              <tr v-for="(value) in materials" :key="value.materialId">
                <td>{{ value.materialName }}</td>
                <td><font-awesome-icon icon="times" class="times-icon" @click="confirmDelete(value.materialId)"></font-awesome-icon></td>
              </tr>
            </tbody>

            <tbody v-else>
              <tr>
                <td colspan="2"><div class="empty-data">Belum ada materi <font-awesome-icon class="warning-icon" icon="exclamation"></font-awesome-icon></div></td>
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

            .empty-data {
              border: 0.0625rem dashed #EA2027;
              color: #EA2027;
              border-radius: 0.25rem;
              text-align: center;
              padding: 0.875rem;
              font-size: 0.875em;

              .warning-icon {
                margin-left: 0.25rem;
              }
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

              .empty-data {
                padding: 0.9375rem;
                font-size: 0.9375em;
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

              .empty-data {
                padding: 1rem;
                font-size: 1em;
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
      materials: [],
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
      const promise = await this.promiseGetAllMaterial();

      // show loader
      this.animationLoaderDisplay = false;
      this.dataReady(promise);
    },

    promiseGetAllMaterial() {
      return new Promise((resolve) => {
        this.getMaterials({
          params: {
            batchId: this.paramBatch,
            training: this.paramTraining,
          },
          resolve,
          token: this.$cookies.get('token'),
        });
      });
    },

    dataReady(promise) {
      if (promise === 200) {
        this.apiReady = true;
        this.materials = this.materialList.data.materialList;
      } else {
        this.$func.popupLostConnection();
      }
    },

    async confirmDelete(materialId) {
      const res = await this.$func.popupConfirmDialog(
        'Kamu yakin?',
        'Data yang dihapus tidak dapat kembali lagi',
      );

      if (res.value) {
        this.deleteData(materialId);
      }
    },

    async deleteData(materialId) {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseDeleteData(materialId);

      // show loader
      this.animationLoaderDisplay = false;
      this.afterDeleteData(promise);
    },

    promiseDeleteData(materialId) {
      return new Promise((resolve) => {
        this.deleteMaterial({
          params: {
            batchId: this.paramBatch,
            training: this.paramTraining,
            materialId,
          },
          resolve,
          token: this.$cookies.get('token'),
        });
      });
    },

    afterDeleteData(promise) {
      if (promise === 200) {
        this.getAllMaterial();
        this.$func.popupSuccess('Berhasil hapus data');
      } else {
        this.$func.popupLostConnection();
      }
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('ROLE_ADMIN');

    // get params
    this.paramBatch = this.$route.params.batch;
    this.paramTraining = this.$route.params.training;

    // req api
    this.getAllMaterial();
  },

};

</script>
