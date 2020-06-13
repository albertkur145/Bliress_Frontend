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
      <div class="title">Batch {{ paramBatch }}</div>
      <!-- title -->

      <!-- list of employee -->
      <div class="table">
        <table>
          <thead>
            <th>ID</th>
            <th>Nama</th>
            <!-- <th></th> -->
          </thead>

          <tbody>
            <tr v-for="(value) in employeeList.data" :key="value.id">
              <td>{{ value.cardId }}</td>
              <td>{{ value.name }}</td>
              <!-- <td><font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon></td> -->
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
        color: #0984E3;
        text-align: center;
        font-weight: 500;
        background-color: #FFF;
        padding: 1.5rem 1rem;
        font-size: 1.0625em;
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
          font-size: 1.25em;
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
          font-size: 1.375em;
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
    };
  },

  computed: {
    ...mapGetters('adminEmployee', [
      'employeeList',
    ]),
  },

  methods: {
    ...mapActions('adminEmployee', [
      'getEmployees',
    ]),

    async getAllEmployees() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await new Promise((resolve) => {
        this.getEmployees({
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
  },

  created() {
    // check user auth
    this.$func.userAuth('Admin');

    // get params
    this.paramBatch = this.$route.params.batch;

    // req api
    this.getAllEmployees();
  },

};

</script>
