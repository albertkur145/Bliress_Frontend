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

    <MenuBar></MenuBar>
    <PopupMessage :class="{ 'display-flex': popupMessageDisplay }"></PopupMessage>
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
          background-image: url('../../../assets/background/bg-linear-xs.svg');
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
        max-width: 466px;
        margin: 0 auto;
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

</style>

<script>

import MenuBar from '@/components/employee/MenuBar.vue';
import AnimationLoader from '@/components/AnimationLoader.vue';
import PopupMessage from '@/components/PopupMessage.vue';

export default {

  components: {
    MenuBar,
    AnimationLoader,
    PopupMessage,
  },

  data() {
    return {
      animationLoaderDisplay: false,
      popupMessageDisplay: false,
    };
  },

};
</script>
