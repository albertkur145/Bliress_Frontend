<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <div class="text">Test</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">

      <!-- list training test -->
      <div class="tests">
        <!-- training test -->
        <router-link v-for="(value) in testList.data"
        :key="value.id" class="training-test"
        :to="{ name: 'DetailTest', params: { training: value.training } }">
          <div class="img-test">
            <img :src="require(`@/assets/images/test${value.training}.png`)">
          </div>

          <div class="info">
            <p class="txt-training">Training {{ value.training }}</p>
            <p class="available">{{ value.status }}</p>
          </div>

          <div class="show">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
          </div>
        </router-link>
        <!-- training test -->
      </div>
      <!-- list training test -->

    </div>
    <!-- end content  -->

    <MenuBar></MenuBar>
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

      .text {
        font-size: 1.0625em;
      }
    }

    .content {
      margin-top: 3.0625rem;
      padding: 0.375rem;

      .tests {
        max-width: 100%;

        .training-test {
          display: flex;
          justify-content: space-around;
          align-items: center;
          box-sizing: border-box;
          background-color: #FFF;
          text-decoration: none;
          width: 100%;
          border-radius: 1rem;
          cursor: pointer;
          margin-bottom: 0.375rem;
          padding: 0.5rem 0;

          &:hover {
            background-color: #A3DEFF;
          }

          .img-test {
            text-align: center;
            width: 40%;

            img {
              width: 3.75rem;
            }
          }

          .info {
            width: 45%;

            p {
              margin: 0;
            }

            .txt-training {
              color: #333;
              font-weight: 500;
              font-size: 1.125em;
            }

            .available {
              color: #AAA;
              font-size: 0.75em;
              margin-top: 0.5rem;
            }
          }

          .show {
            width: 15%;
            color: #00A3FF;
            text-align: right;
            padding-right: 1rem;
            font-size: 1.0625em;
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

        .text {
          font-size: 1.125em;
        }
      }

      .content {
        margin-top: 3.375rem;
        margin-bottom: 2.75rem;
        padding: 0.5rem;

        .tests {

          .training-test {
            margin-bottom: 0.5rem;
            padding: 0.75rem 0;

            .img-test {

              img {
                width: 4.5rem;
              }
            }

            .info {

              .txt-training {
                font-size: 1.25em;
              }

              .available {
                font-size: 0.875em;
              }
            }

            .show {
              padding-right: 1.5rem;
              font-size: 1.25em;
            }
          }
        }
      }
    }
  }
  // width 320px - 480px (Mobile)

  // width >= 481px (Big Mobile, Tablet, Desktop)
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
        margin-top: 4rem;
        margin-bottom: 2.875rem;
        padding: 0.75rem;

        .tests {

          .training-test {
            margin-bottom: 0.75rem;
            padding: 1rem 0;

            .img-test {

              img {
                width: 5.25rem;
              }
            }

            .info {

              .txt-training {
                font-size: 1.4375em;
              }

              .available {
                font-size: 1em;
              }
            }

            .show {
              padding-right: 1.75rem;
              font-size: 1.375em;
            }
          }
        }
      }
    }
  }
  // width >= 481px (Big Mobile, Tablet, Desktop)

</style>

<script>

import MenuBar from '@/components/employee/MenuBar.vue';
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
    };
  },

  computed: {
    ...mapGetters('employeeTest', [
      'testList',
    ]),
  },

  methods: {
    ...mapActions('employeeTest', [
      'getTests',
    ]),

    async getAllTests() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await new Promise((resolve) => {
        this.getTests({
          params: {
            employeeId: this.$cookies.get('user').id,
          },
          resolve,
        });
      });

      // hide loader
      this.animationLoaderDisplay = false;

      // show popup message if code response != 200
      if (promise === 200) {
        this.apiReady = true;
      } else {
        // show popup error
        this.$func.popupLostConnection();
      }
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Employee');

    // req api
    this.getAllTests();
  },

};

</script>
