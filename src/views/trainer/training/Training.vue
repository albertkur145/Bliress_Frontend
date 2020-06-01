<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <div class="text">Training</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <div class="training-list">
        <div class="training" v-for="(value, index) in trainingList" :key="index" @click="redirectToDetail(value.training, value.batch)">
          <div class="left">
            <p class="txt-batch">Batch {{ value.batch }}</p>
            <p class="txt-training">Training {{ value.training }}</p>
            <p class="date">{{ value.date }}</p>
            <p class="time">{{ value.time }}</p>
            <p class="location">{{ value.location }}</p>
          </div>

          <div class="right">
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
        padding: 0.5rem;

        .training {
          display: flex;
          align-items: center;
          background-color: rgba(0, 184, 148, 0.2);
          color: #444;
          cursor: pointer;
          border-radius: 0.75rem;
          margin-bottom: 0.5rem;
          padding: 1rem 1.125rem;

          p {
            margin: 0;
          }

          .left {
            min-width: 95%;
            max-width: 95%;

            .txt-batch {
              font-size: 0.75em;
            }

            .txt-training {
              font-weight: 500;
              font-size: 1.0625em;
              margin-top: 0.25rem;
            }

            .date {
              margin-top: 1rem;
              font-size: 0.8125em;
            }

            .time {
              margin-top: 0.25rem;
              font-size: 0.8125em;
            }

            .location {
              margin-top: 2rem;
              font-size: 0.8125em;
            }
          }

          .right {
            min-width: 5%;
            max-width: 5%;
            text-align: right;
            margin-left: 0.25rem;
            font-size: 1em;
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
        padding-bottom: 2.5rem;

        .training-list {
          padding: 0.75rem;

          .training {
            margin-bottom: 0.75rem;
            padding: 1.25rem 1.375rem;

            .left {

              .txt-batch {
                font-size: 0.8125em;
              }

              .txt-training {
                font-size: 1.125em;
              }

              .date {
                font-size: 0.875em;
              }

              .time {
                font-size: 0.875em;
              }

              .location {
                font-size: 0.875em;
              }
            }

            .right {
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

        .text {
          font-size: 1.25em;
        }
      }

      .content {
        margin-top: 3.75rem;
        padding-bottom: 2.25rem;

        .training-list {
          padding: 1.25rem;

          .training {
            margin-bottom: 1.25rem;
            padding: 1.75rem 1.875rem;

            .left {

              .txt-batch {
                font-size: 0.9375em;
              }

              .txt-training {
                font-size: 1.25em;
              }

              .date {
                font-size: 1em;
              }

              .time {
                font-size: 1em;
              }

              .location {
                font-size: 1em;
              }
            }

            .right {
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

import MenuBar from '@/components/trainer/MenuBar.vue';

export default {

  components: {
    MenuBar,
  },

  data() {
    return {
      trainingList: [
        {
          batch: '2',
          training: '1',
          date: '12 September 2020',
          time: '08.00 WIB - 15.00 WIB',
          location: 'di Gedung Serbaguna Basement 1 R.52, Sarana Jaya',
        },
        {
          batch: '1',
          training: '5',
          date: '24 September 2020',
          time: '12.00 WIB - 18.00 WIB',
          location: 'di Gedung Serbaguna Basement 1 R.44, Sarana Jaya',
        },
        {
          batch: '2',
          training: '3',
          date: '08 Oktober 2020',
          time: '09.00 WIB - 18.00 WIB',
          location: 'di Gedung Serbaguna Basement 1 R.23, Sarana Jaya',
        },
        {
          batch: '3',
          training: '1',
          date: '12 Oktober 2020',
          time: '12.00 WIB - 15.00 WIB',
          location: 'di Hotel Grand Tjokro Lt 40 R. Melati, Bogor',
        },
        {
          batch: '3',
          training: '5',
          date: '15 Desember 2020',
          time: '08.00 WIB - 16.00 WIB',
          location: 'di Gedung Serbaguna Basement 1 R.11, Sarana Jaya',
        },
        {
          batch: '2',
          training: '6',
          date: '18 Desember 2020',
          time: '12.00 WIB - 18.00 WIB',
          location: 'di Gedung Serbaguna Basement 1 R.10, Sarana Jaya',
        },
      ],
    };
  },

  methods: {
    redirectToDetail(training, batch) {
      this.$router.push({
        name: 'TrainerDetailTraining',
        params: {
          training,
          batch,
        },
      });
    },
  },

};

</script>
