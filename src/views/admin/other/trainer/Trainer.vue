<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link :to="{ name: 'AdminOther' }" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">Trainer</span>
      </router-link>

      <router-link :to="{ name: 'AdminCreateTrainer' }">
        <font-awesome-icon icon="plus-circle" class="icon-plus"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">
      <!-- search -->
      <div class="search">
        <label for="keyword">Pencarian</label>
        <input id="keyword" type="text"
        placeholder="Nama trainer..."
        autocomplete="off"
        v-model="searchText">
      </div>
      <!-- search -->

      <!-- trainers -->
      <div class="data-trainers">
        <table>
          <thead>
            <th>Nama</th>
            <th>Divisi</th>
            <th></th>
          </thead>

          <tbody>
            <tr v-for="(value) in filteredTrainers" :key="value.id">
              <td>{{ value.name }}</td>
              <td>{{ value.division }}</td>
              <td>
                <div class="justify-content">
                  <font-awesome-icon icon="pen" class="edit-icon"
                  @click="redirectCreateTrainer(value.id)"></font-awesome-icon>
                  <font-awesome-icon icon="times" class="remove-icon"
                  @click="confirmDelete(value.id)"></font-awesome-icon>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- trainers -->
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
    min-height: 100vh;
    background-color: #FFF;

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
      background-color: #0ABDE3;
      font-weight: 600;
      z-index: 1;
      padding: 0.875rem 1rem;

      .back {
        color: #FFF;
        text-decoration: none;
        font-size: 1.0625em;

        .text {
          margin-left: 0.5rem;
        }
      }

      .icon-plus {
        color: #FFF;
        font-size: 1.125em;
      }
    }

    .content {
      margin-top: 3rem;

      .search {
        max-width: 100%;
        padding: 1.5rem 1rem 0.375rem;

        label {
          color: #444;
          font-weight: 500;
          font-size: 0.875em;
        }

        input {
          box-sizing: border-box;
          font-family: 'Roboto';
          color: #444;
          outline: none;
          width: 100%;
          border: 0;
          font-size: 0.8125em;
          padding: 0.75rem 1.125rem;
        }
      }

      .data-trainers {
        max-width: 100%;
        overflow-x: auto;
        padding: 0.3125rem;

        table {
          text-align: left;
          border-collapse: collapse;
          width: 100%;

          th, td {
            color: #333;
            border-bottom: 0.0625rem solid #DDD;
            padding: 0.675rem;
            font-size: 0.8125em;
          }

          .justify-content {
            display: flex;
            align-items: center;

            .edit-icon {
              cursor: pointer;
              color: #2980B9;
              font-size: 0.75em;
            }

            .remove-icon {
              cursor: pointer;
              color: #E74C3C;
              margin-left: 0.25rem;
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
          font-size: 1.125em;

          .text {
            margin-left: 0.75rem;
          }
        }

        .icon-plus {
          font-size: 1.1875em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .search {
          padding: 2rem 1.25rem 0.5rem;

          label {
            font-size: 0.9375em;
          }

          input {
            font-size: 0.875em;
            padding: 0.8125rem 1.1875rem;
          }
        }

        .data-trainers {
          padding: 0.5rem;

          table {

            th, td {
              padding: 0.75rem;
              font-size: 0.9375em;
            }

            .justify-content {

              .edit-icon {
                font-size: 0.8125em;
              }

              .remove-icon {
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
          font-size: 1.25em;

          .text {
            margin-left: 0.75rem;
          }
        }

        .icon-plus {
          font-size: 1.375em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .search {
          padding: 2.5rem 1.5rem 0.75rem;

          label {
            font-size: 1em;
          }

          input {
            font-size: 0.9375em;
            padding: 0.875rem 1.125rem;
          }
        }

        .data-trainers {
          padding: 0.5rem;

          table {

            th, td {
              padding: 1rem;
              font-size: 1em;
            }

            .justify-content {

              .edit-icon {
                font-size: 0.9375em;
              }

              .remove-icon {
                font-size: 1.25em;
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
      animationLoaderDisplay: false,
      apiReady: false,
      searchText: '',
    };
  },

  computed: {
    ...mapGetters('adminTrainer', [
      'trainerList',
    ]),

    filteredTrainers() {
      return this.trainerList.data.filter((value) => value.name.toLowerCase().match(this.searchText.toLowerCase()));
    },
  },

  methods: {
    ...mapActions('adminTrainer', [
      'getTrainers',
      'deleteTrainer',
    ]),

    async getAllTrainer() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseGetAllTrainer();

      // show loader
      this.animationLoaderDisplay = false;
      this.dataReady(promise);
    },

    promiseGetAllTrainer() {
      return new Promise((resolve) => {
        this.getTrainers({
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

    async delete(id) {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseDelete(id);

      // show loader
      this.animationLoaderDisplay = false;
      this.afterDelete(promise);
    },

    promiseDelete(id) {
      return new Promise((resolve) => {
        this.deleteTrainer({
          params: {
            id,
          },
          resolve,
        });
      });
    },

    afterDelete(promise) {
      if (promise === 200) {
        this.$func.popupSuccessfull('Berhasil hapus data', 5000, null);
      } else {
        this.$func.popupLostConnection();
      }
    },

    async confirmDelete(id) {
      const res = await this.$func.popupConfirmDialog(
        'Kamu yakin?',
        'Data akan dihapus secara permanen',
      );

      if (res.value) {
        this.delete(id);
      }
    },

    redirectCreateTrainer(id) {
      this.$router.push({
        name: 'AdminChangeTrainer',
        params: {
          id,
        },
      });
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('ROLE_ADMIN');

    // req api
    this.getAllTrainer();
  },
};

</script>
