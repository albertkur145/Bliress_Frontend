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
        <div class="batch batch-1">
          <div class="general" @click="showDetailTraining('batch-1')">
            <div class="txt">Batch 1</div>
            <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
          </div>

          <div class="detail">
            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 1
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 2
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 3
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 4
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 5
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 6
              </router-link>
            </div>
          </div>
        </div>

        <div class="batch batch-2">
          <div class="general" @click="showDetailTraining('batch-2')">
            <div class="txt">Batch 2</div>
            <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
          </div>

          <div class="detail">
            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 1
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 2
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 3
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 4
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 5
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 6
              </router-link>
            </div>
          </div>
        </div>

        <div class="batch batch-3">
          <div class="general" @click="showDetailTraining('batch-3')">
            <div class="txt">Batch 3</div>
            <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
          </div>

          <div class="detail">
            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 1
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 2
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 3
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 4
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 5
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 6
              </router-link>
            </div>
          </div>
        </div>

        <div class="batch batch-4">
          <div class="general" @click="showDetailTraining('batch-4')">
            <div class="txt">Batch 4</div>
            <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
          </div>

          <div class="detail">
            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 1
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 2
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 3
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 4
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 5
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 6
              </router-link>
            </div>
          </div>
        </div>

        <div class="batch batch-5">
          <div class="general" @click="showDetailTraining('batch-5')">
            <div class="txt">Batch 5</div>
            <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
          </div>

          <div class="detail">
            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 1
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 2
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 3
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 4
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 5
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 6
              </router-link>
            </div>
          </div>
        </div>

        <div class="batch batch-6">
          <div class="general" @click="showDetailTraining('batch-6')">
            <div class="txt">Batch 6</div>
            <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
          </div>

          <div class="detail">
            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 1
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 2
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 3
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 4
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 5
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 6
              </router-link>
            </div>
          </div>
        </div>

        <div class="batch batch-7">
          <div class="general" @click="showDetailTraining('batch-7')">
            <div class="txt">Batch 7</div>
            <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
          </div>

          <div class="detail">
            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 1
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 2
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 3
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 4
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 5
              </router-link>
            </div>

            <div class="training">
              <router-link class="txt" :to="{ name:'AdminDetailTest' }">
                Training 6
              </router-link>
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

            .training {
              display: flex;
              justify-content: space-between;
              text-align: center;
              cursor: pointer;
              border-bottom: 0.0625rem solid #DDD;
              padding: 0.8125rem 1rem;

              .txt {
                color: #333;
                text-decoration: none;
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
  },

};
</script>
