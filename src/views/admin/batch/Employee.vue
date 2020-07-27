<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link :to="{ name: 'AdminDetailBatch', params: { batch: paramBatch } }" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">Pegawai</span>
      </router-link>

      <!-- <router-link :to="{ name: 'AdminAddEmployee', params: { batch: paramBatch } }">
        <font-awesome-icon icon="plus-circle" class="icon-plus"></font-awesome-icon>
      </router-link> -->
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">

      <!-- title -->
      <div class="title">
        <div class="txt-batch">(Batch)</div>
        <div class="batch">{{ paramBatch.split('-')[0] }} {{ paramBatch.split('-')[1] }}</div>
      </div>
      <!-- title -->

      <!-- list of employee -->
      <div class="table">
        <table>
          <thead>
            <th>Nama</th>
            <th>Division</th>
            <!-- <th></th> -->
          </thead>

          <tbody v-if="employee.length > 0">
            <tr v-for="(value) in employee" :key="value.userId">
              <td>{{ value.username }}</td>
              <td>{{ value.division }}</td>
              <!-- <td><font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon></td> -->
            </tr>
          </tbody>

          <tbody v-else>
            <tr>
              <td colspan="2"><div class="empty-data">Belum ada pegawai <font-awesome-icon class="warning-icon" icon="exclamation"></font-awesome-icon></div></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- list of employee -->

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

      .title {
        text-align: center;
        background-color: #FFF;
        padding: 1.5rem 1rem;

        .txt-batch {
          color: #ACACAC;
          font-size: 0.875em;
        }

        .batch {
          color: #0984E3;
          font-weight: 500;
          margin-top: 0.375rem;
          font-size: 1.0625em;
        }
      }

      .table {
        max-width: 100%;
        overflow-x: auto;
        background-color: #FFF;
        margin-top: 0.5rem;
        padding: 0.5rem 0 2rem;

        table {
          text-align: left;
          border-collapse: collapse;
          width: 100%;

          th, td {
            color: #333;
            border-bottom: 0.0625rem solid #DDD;
            padding: 0.8125rem 0.9375rem;
            font-size: 0.8125em;
          }

          .remove-icon {
            cursor: pointer;
            color: #E74C3C;
            transition: color .2s linear;
            font-size: 1em;

            &:hover {
              color: #D63031;
            }
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

        .title {
          padding: 1.75rem 1.25rem;

          .txt-batch {
            font-size: 1em;
          }

          .batch {
            font-size: 1.25em;
          }
        }

        .table {

          table {

            th, td {
              padding: 0.875rem 1rem;
              font-size: 0.875em;
            }

            .remove-icon {
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

        .title {
          padding: 2rem 1.5rem;

          .txt-batch {
            font-size: 1.125em;
          }

          .batch {
            font-size: 1.375em;
          }
        }

        .table {

          table {

            th, td {
              padding: 0.9375rem 1.0625rem;
              font-size: 0.9375em;
            }

            .remove-icon {
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
      animationLoaderDisplay: false,
      apiReady: false,
      employee: [],
    };
  },

  computed: {
    ...mapGetters('adminEmployee', [
      'batchEmployeeList',
    ]),
  },

  methods: {
    ...mapActions('adminEmployee', [
      'getEmployeesBatch',
    ]),

    async getAllEmployees() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseGetAllEmployees();

      // show loader
      this.animationLoaderDisplay = false;
      this.dataReady(promise);
    },

    promiseGetAllEmployees() {
      return new Promise((resolve) => {
        this.getEmployeesBatch({
          params: {
            batchId: this.paramBatch,
          },
          resolve,
          token: this.$cookies.get('token'),
        });
      });
    },

    dataReady(promise) {
      if (promise === 200) {
        this.apiReady = true;
        this.employee = this.batchEmployeeList.data.employeeList;
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

    // req api
    this.getAllEmployees();
  },

};

</script>
