<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <div class="text">Test</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <div class="training-list">
        <div class="training" v-for="(value, index) in trainingList" :key="index" @click="redirectToDetail(value.batch, value.training)">
          <div>
            <div class="txt-training">Training {{ value.training }}</div>
            <div class="txt-batch">Batch {{ value.batch }}</div>
          </div>
          <font-awesome-icon icon="chevron-right"></font-awesome-icon>
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
          background-color: #8FC8CF;
          color: #FFF;
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

export default {

  components: {
    MenuBar,
  },

  data() {
    return {
      trainingList: [
        {
          training: '1',
          batch: '4',
        },
        {
          training: '3',
          batch: '2',
        },
        {
          training: '2',
          batch: '1',
        },
        {
          training: '6',
          batch: '1',
        },
      ],
    };
  },

  methods: {
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

};

</script>
