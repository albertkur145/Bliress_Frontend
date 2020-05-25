<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <div class="text">Test</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">

      <!-- batch -->
      <div class="batch-list">
        <div :class="'batch batch-' + batch.batch" v-for="(batch, index) in batchList" :key="index">
          <div class="general" @click="showDetailTraining(`batch-${batch.batch}`)">
            <div class="txt">Batch {{ batch.batch }}</div>
            <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
          </div>

          <div class="detail">
            <div class="training" v-for="(training, index) in batch.training" :key="index" @click="redirectToDetail(batch.batch, training)">
              <span class="txt">Training {{ training }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- batch -->

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

      .batch-list {
        padding: 0.5875rem 0.5rem 3.25rem;

        .batch {
          margin-bottom: 0.5rem;

          .general {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #FFF;
            cursor: pointer;
            color: #333;
            box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.3);
            border-radius: 0.375rem;
            padding: 1rem;

            .txt {
              font-weight: 500;
              font-size: 0.9375em;
            }

            .chev-icon {
              font-size: 0.8125em;
            }

            .chev-icon-rotate {
              transform: rotate(180deg);
            }
          }

          .general-active {
            background-color: #33D9B2;
            border-radius: 0.375rem 0.375rem 0 0;
            color: #FFF;
            box-shadow: none;
          }

          .detail {
            display: none;
            background-color: #FFF;
            transition: height .5s ease-in-out;

            .training {
              cursor: pointer;
              border-bottom: 0.0625rem solid #DDD;
              padding: 0.8125rem 1rem;

              .txt {
                color: #333;
                font-size: 0.8125em;
              }
            }
          }

          .display-block {
            display: block;
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

        .batch-list {

          .batch {

            .general {
              padding: 1.25rem;

              .txt {
                font-size: 1em;
              }

              .chev-icon {
                font-size: 0.875em;
              }
            }

            .detail {

              .training {
                padding: 0.875rem 1.25rem;

                .txt {
                  font-size: 0.875em;
                }
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
        max-width: 476px;
        margin: 0 auto;
        padding: 1.1875rem 1.5rem;

        .text {
          font-size: 1.25em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .batch-list {
          padding: 1.25rem 0.5rem 3.25rem;

          .batch {
            margin-bottom: 1rem;

            .general {
              padding: 1.375rem;

              .txt {
                font-size: 1.0625em;
              }

              .chev-icon {
                font-size: 0.9375em;
              }
            }

            .detail {

              .training {
                padding: 1rem 1.375rem;

                .txt {
                  font-size: 0.9375em;
                }
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
import MenuBar from '@/components/admin/MenuBar.vue';

export default {

  components: {
    MenuBar,
  },

  data() {
    return {
      batchList: [
        {
          batch: '1',
          training: ['1', '2', '3', '4', '5', '6'],
        },
        {
          batch: '2',
          training: ['1', '2', '3', '4', '5', '6'],
        },
        {
          batch: '3',
          training: ['1', '2', '3', '4', '5', '6'],
        },
        {
          batch: '4',
          training: ['1', '2', '3', '4', '5', '6'],
        },
        {
          batch: '5',
          training: ['1', '2', '3', '4', '5', '6'],
        },
        {
          batch: '6',
          training: ['1', '2', '3', '4', '5', '6'],
        },
        {
          batch: '7',
          training: ['1', '2', '3', '4', '5', '6'],
        },
        {
          batch: '8',
          training: ['1', '2', '3', '4', '5', '6'],
        },
        {
          batch: '9',
          training: ['1', '2', '3', '4', '5', '6'],
        },
      ],
    };
  },

  methods: {
    showDetailTraining(el) {
      const target = document.querySelector(`.${el}`);
      const general = target.querySelector('.general');
      const chevIcon = general.querySelector('.chev-icon');
      const detail = target.querySelector('.detail');

      general.classList.toggle('general-active');
      chevIcon.classList.toggle('chev-icon-rotate');
      detail.classList.toggle('display-block');
    },
    redirectToDetail(batch, training) {
      this.$router.push({
        name: 'AdminDetailTest',
        params: {
          batch,
          training,
        },
      });
    },
  },

};
</script>
