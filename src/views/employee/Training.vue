<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <div class="text">Training</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <!-- list training -->
      <div class="training">
        <!-- left -->
        <div class="left">
          <span>Training 1</span>
        </div>
        <!-- left -->

        <!-- right -->
        <div class="right">
          <div class="txt">Diadakan pada : </div>
          <div class="date">15 September 2020</div>
          <router-link to="/training/detail" class="icon-see">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
            <p class="see">Lihat</p>
          </router-link>
        </div>
        <!-- right -->
      </div>

      <div class="training">
        <!-- left -->
        <div class="left">
          <span>Training 2</span>
        </div>
        <!-- left -->

        <!-- right -->
        <div class="right">
          <div class="txt">Diadakan pada : </div>
          <div class="date">27 September 2020</div>
          <router-link to="/training/detail" class="icon-see">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
            <p class="see">Lihat</p>
          </router-link>
        </div>
        <!-- right -->
      </div>

      <div class="training">
        <!-- left -->
        <div class="left">
          <span>Training 3</span>
        </div>
        <!-- left -->

        <!-- right -->
        <div class="right">
          <div class="txt">Diadakan pada : </div>
          <div class="date">09 Oktober 2020</div>
          <router-link to="/training/detail" class="icon-see">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
            <p class="see">Lihat</p>
          </router-link>
        </div>
        <!-- right -->
      </div>

      <div class="training">
        <!-- left -->
        <div class="left">
          <span>Training 4</span>
        </div>
        <!-- left -->

        <!-- right -->
        <div class="right">
          <div class="txt">Diadakan pada : </div>
          <div class="date">18 Oktober 2020</div>
          <router-link to="/training/detail" class="icon-see">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
            <p class="see">Lihat</p>
          </router-link>
        </div>
        <!-- right -->
      </div>

      <div class="training">
        <!-- left -->
        <div class="left">
          <span>Training 5</span>
        </div>
        <!-- left -->

        <!-- right -->
        <div class="right">
          <div class="txt">Diadakan pada : </div>
          <div class="date">30 Oktober 2020</div>
          <router-link to="/training/detail" class="icon-see">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
            <p class="see">Lihat</p>
          </router-link>
        </div>
        <!-- right -->
      </div>

      <div class="training">
        <!-- left -->
        <div class="left">
          <span>Training 6</span>
        </div>
        <!-- left -->

        <!-- right -->
        <div class="right">
          <div class="txt">Diadakan pada : </div>
          <div class="date">10 November 2020</div>
          <router-link to="/training/detail" class="icon-see">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
            <p class="see">Lihat</p>
          </router-link>
        </div>
        <!-- right -->
      </div>
      <!-- list training -->
    </div>
    <!-- end content -->

    <!-- menu bar -->
    <MenuBar></MenuBar>
    <!-- end menu bar -->
  </div>
</template>

<style lang="scss" scoped>

  // global css
  #container {
    font-family: 'Roboto';
    max-width: 100%;
    min-height: 100vh;
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
      padding: 0.8125rem 1rem;

      .text {
        font-size: 1.125em;
      }
    }

    .content {
      margin-top: 3.25rem;

      .training {
        display: flex;
        max-width: 100%;
        margin-bottom: 0.25rem;

        &:last-child {
          margin-bottom: 3.125rem;
        }

        .left {
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          background-image: url('../../assets/background/bg-linear-xs.svg');
          background-size: cover;
          background-repeat: no-repeat;
          padding: 0;
          min-width: 50%;
          max-width: 50%;

          span {
            font-weight: 900;
            font-style: italic;
            color: #FFF;
            font-size: 1.5em;
          }
        }

        .right {
          background-color: #FFF;
          box-sizing: border-box;
          border-left: 0.1875rem dashed #35AEE2;
          padding: 1.75rem 0.25rem 1rem;
          min-width: 50%;
          max-width: 50%;

          .txt {
            text-align: center;
            color: #444;
            font-weight: 400;
            font-size: 1em;
          }

          .date {
            text-align: center;
            font-weight: 500;
            color: #333;
            font-weight: 500;
            font-size: 1.0625em;
            margin-top: 0.875rem;
          }

          .icon-see {
            display: block;
            text-align: right;
            color: #0085FF;
            font-weight: 500;
            margin-top: 1.25rem;
            font-size: 0.8125em;
            text-decoration: none;

            p {
              margin: 0;
            }
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
        margin-top: 3.875rem;

        .training {
          margin-bottom: 0.375rem;

          &:last-child {
            margin-bottom: 3.625rem;
          }

          .left {
            min-width: 50%;
            max-width: 50%;
            padding: 1rem 1.5rem;

            span {
              font-size: 1.4375em;
            }
          }

          .right {
            border-left: 0.1875rem dashed #35AEE2;
            padding: 2rem 0.5rem 1.25rem;
            min-width: 50%;
            max-width: 50%;

            .txt {
              font-size: 1em;
            }

            .date {
              font-size: 1.0625em;
              margin-top: 0.875rem;
            }

            .icon-see {
              margin-top: 1.5rem;
              margin-right: 0.25rem;
              font-size: 0.875em;
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
        padding: 1.1875rem 1.5rem;

        .text {
          font-size: 1.25em;
        }
      }

      .content {
        margin-top: 4.375rem;

        .training {
          margin-bottom: 0.5rem;

          &:last-child {
            margin-bottom: 3.6875rem;
          }

          .left {
            padding: 1rem 1.5rem;
            min-width: 50%;
            max-width: 50%;

            span {
              font-size: 2em;
            }
          }

          .right {
            border-left: 0.1875rem dashed #35AEE2;
            padding: 2.75rem 0.75rem 1.5rem;
            min-width: 50%;
            max-width: 50%;

            .txt {
              font-size: 1.1875em;
            }

            .date {
              font-size: 1.25em;
              margin-top: 0.75rem;
            }

            .icon-see {
              margin-top: 2rem;
              margin-right: 0.4375rem;
              font-size: 1.125em;
            }
          }
        }
      }
    }
  }
  // width >= 481px (Big Mobile, Tablet, Desktop)

  // // width 768px - 1024px (Mini desktop / Tablet landscape)
  // @media (min-width: 768px) and (max-width: 1024px) {
  //   #container {

  //     .head {
  //       padding: 1.25rem 1.75rem;

  //       .text {
  //         font-size: 1.4375em;
  //       }
  //     }

  //     .content {
  //       display: flex;
  //       flex-wrap: wrap;
  //       justify-content: space-evenly;
  //       margin-top: 4.5875rem;

  //       .training {
  //         margin-bottom: 0.3125rem;
  //         width: 50%;
  //         max-width: 50%;

  //         &:last-child {
  //           margin-bottom: 0.325rem;
  //         }

  //         .left {
  //           padding: 1rem 1.5rem;
  //           min-width: 50%;
  //           max-width: 50%;

  //           span {
  //             font-size: 1.8125em;
  //           }
  //         }

  //         .right {
  //           border-left: 0.1875rem dashed #35AEE2;
  //           padding: 3rem 0.75rem 1.5rem;
  //           min-width: 50%;
  //           max-width: 50%;

  //           .txt {
  //             font-size: 1em;
  //           }

  //           .date {
  //             font-size: 1.0625em;
  //             margin-top: 0.8125rem;
  //           }

  //           .icon-see {
  //             margin-top: 2rem;
  //             margin-right: 0.4375rem;
  //             font-size: 0.875em;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // // width 768px - 1024px (Mini desktop / Tablet landscape)

  // // width 1025px (Desktop)
  // @media (min-width: 1025px) {
  //   #container {

  //     .head {
  //       padding: 1.625rem 1.875rem;

  //       .text {
  //         font-size: 1.6875em;
  //       }
  //     }

  //     .content {
  //       display: flex;
  //       flex-wrap: wrap;
  //       justify-content: space-evenly;
  //       margin-top: 5.625rem;
  //       margin-bottom: 4.125rem;

  //       .training {
  //         margin-bottom: 0.3125rem;
  //         width: 50%;
  //         max-width: 50%;

  //         &:last-child {
  //           margin-bottom: 0.325rem;
  //         }

  //         .left {
  //           padding: 1rem 1.5rem;
  //           min-width: 50%;
  //           max-width: 50%;

  //           span {
  //             font-size: 2.25em;
  //           }
  //         }

  //         .right {
  //           border-left: 0.1875rem dashed #35AEE2;
  //           padding: 3rem 0.75rem 1.75rem;
  //           min-width: 50%;
  //           max-width: 50%;

  //           .txt {
  //             font-size: 1.25em;
  //           }

  //           .date {
  //             font-size: 1.4375em;
  //             margin-top: 1rem;
  //           }

  //           .icon-see {
  //             margin-top: 2.25rem;
  //             margin-right: 0.75rem;
  //             font-size: 1em;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // // width 1025px (Desktop)
</style>

<script>
import MenuBar from '../../components/employee/MenuBar.vue';

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
  },

  created() {
    window.addEventListener('resize', this.getWindowWidth);
  },

};
</script>
