<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <div class="text">Test</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">

      <!-- list training test -->
      <div class="tests">
        <!-- training test -->
        <router-link to="/test/detail/1" class="training-test">
          <div class="img-test">
            <img src="@/assets/images/test1.png">
          </div>

          <div class="info">
            <p class="txt-training">Training 1</p>
            <p class="available">Available</p>
          </div>

          <div class="show">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
          </div>
        </router-link>
        <!-- training test -->

        <!-- training test -->
        <router-link to="/test/detail/2" class="training-test">
          <div class="img-test">
            <img src="@/assets/images/test2.png">
          </div>

          <div class="info">
            <p class="txt-training">Training 2</p>
            <p class="available">Available</p>
          </div>

          <div class="show">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
          </div>
        </router-link>
        <!-- training test -->

        <!-- training test -->
        <router-link to="/test/detail/3" class="training-test">
          <div class="img-test">
            <img src="@/assets/images/test3.png">
          </div>

          <div class="info">
            <p class="txt-training">Training 3</p>
            <p class="available">Closed</p>
          </div>

          <div class="show">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
          </div>
        </router-link>
        <!-- training test -->

        <!-- training test -->
        <router-link to="/test/detail/4" class="training-test">
          <div class="img-test">
            <img src="@/assets/images/test4.png">
          </div>

          <div class="info">
            <p class="txt-training">Training 4</p>
            <p class="available">Closed</p>
          </div>

          <div class="show">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
          </div>
        </router-link>
        <!-- training test -->

        <!-- training test -->
        <router-link to="/test/detail/5" class="training-test">
          <div class="img-test">
            <img src="@/assets/images/test5.png">
          </div>

          <div class="info">
            <p class="txt-training">Training 5</p>
            <p class="available">Closed</p>
          </div>

          <div class="show">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
          </div>
        </router-link>
        <!-- training test -->

        <!-- training test -->
        <router-link to="/test/detail/6" class="training-test">
          <div class="img-test">
            <img src="@/assets/images/test6.png">
          </div>

          <div class="info">
            <p class="txt-training">Training 6</p>
            <p class="available">Closed</p>
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
      padding: 0.8125rem 1rem;

      .text {
        font-size: 1.125em;
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
        max-width: 481px;
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

export default {

  components: {
    MenuBar,
  },

  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },

  methods: {
    getWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    login() {
      this.$router.push({ name: 'Training' });
    },
  },

  created() {
    window.addEventListener('resize', this.getWindowWidth);
  },

};
</script>
