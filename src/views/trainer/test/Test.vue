<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <div class="text">Test</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">
      <div class="training-list">
        <div class="training" v-for="(value, index) in trainingList.data"
        :key="index" @click="redirectToDetail(value.batch.id, value.training)">
          <div>
            <div class="txt-training">Training {{ value.training }}</div>
            <div class="txt-batch">Batch - {{ value.batch.batch }} {{ value.batch.year }}</div>
          </div>
          <font-awesome-icon icon="chevron-right"></font-awesome-icon>
        </div>
      </div>
    </div>
    <!-- end content -->

    <MenuBar :show="hasNotif"></MenuBar>
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

      .text {
        font-size: 1.0625em;
      }
    }

    .content {
      margin-top: 3rem;
      padding-bottom: 2.375rem;

      .training-list {
        padding: 0.625rem;

        .training {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          background-color: #DFE4EA;
          color: #444;
          border-radius: 0.375rem;
          margin-bottom: 0.5rem;
          padding: 0.75rem 1.25rem;

          .txt-training {
            font-weight: 500;
            font-size: 1em;
          }

          .txt-batch {
            margin-top: 0.375rem;
            font-size: 0.75em;
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
        padding-bottom: 2.75rem;

        .training-list {
          padding: 0.75rem;

          .training {
            margin-bottom: 0.625rem;
            padding: 1rem 1.5rem;

            .txt-training {
              font-size: 1.0625em;
            }

            .txt-batch {
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
        padding-bottom: 3rem;

        .training-list {
          padding: 1rem;

          .training {
            margin-bottom: 1rem;
            padding: 1.25rem 1.75rem;

            .txt-training {
              font-size: 1.125em;
            }

            .txt-batch {
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

import MenuBar from '@/components/trainer/MenuBar.vue';
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
      promise: null,
      hasNotif: false,
    };
  },

  computed: {
    ...mapGetters('trainerTraining', [
      'trainingList',
    ]),

    ...mapGetters('trainerNotification', [
      'triggerNotif',
    ]),
  },

  methods: {
    ...mapActions('trainerTraining', [
      'getTrainings',
    ]),

    ...mapActions('trainerNotification', [
      'getTriggerNotif',
    ]),

    async isHasNotif() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseIsHasNotif();

      // hide loader
      this.animationLoaderDisplay = false;
      this.afterTriggerNotif(promise);
    },

    promiseIsHasNotif() {
      return new Promise((resolve) => {
        this.getTriggerNotif({
          params: {
            trainerId: this.$cookies.get('user').id,
          },
          resolve,
        });
      });
    },

    afterTriggerNotif(promise) {
      if (promise === 200) {
        this.hasNotif = this.triggerNotif.data.hasNotif;
      } else {
        this.$func.popupLostConnection();
      }
    },

    async getAllTraining() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      this.promise = await this.promiseAPI();

      // hide loader
      this.animationLoaderDisplay = false;
      this.dataReady();
    },

    promiseAPI() {
      return new Promise((resolve) => {
        this.getTrainings({
          params: {
            trainerId: this.$cookies.get('user').id,
          },
          resolve,
        });
      });
    },

    dataReady() {
      if (this.promise === 200) {
        this.apiReady = true;
      } else {
        // show popup error
        this.$func.popupLostConnection();
      }
    },

    redirectToDetail(batch, training) {
      this.$router.push({
        name: 'TrainerDetailTest',
        params: {
          batch,
          training,
        },
      });
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Trainer');

    // req api
    this.getAllTraining();
    this.isHasNotif();
  },

};

</script>
