<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <div class="text">Batch</div>
      <router-link to="/">
        <font-awesome-icon icon="plus-circle" class="icon-plus"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <!-- list of batch -->
      <div class="batch-list">
        <router-link to="/admin/batch/1" class="batch">
          <div class="txt">Batch 1</div>
          <font-awesome-icon icon="arrow-right" class="right-icon"></font-awesome-icon>
        </router-link>

        <router-link to="/admin/batch/2" class="batch">
          <div class="txt">Batch 2</div>
          <font-awesome-icon icon="arrow-right" class="right-icon"></font-awesome-icon>
        </router-link>

        <router-link to="/admin/batch/3" class="batch">
          <div class="txt">Batch 3</div>
          <font-awesome-icon icon="arrow-right" class="right-icon"></font-awesome-icon>
        </router-link>

        <router-link to="/admin/batch/4" class="batch">
          <div class="txt">Batch 4</div>
          <font-awesome-icon icon="arrow-right" class="right-icon"></font-awesome-icon>
        </router-link>

        <router-link to="/admin/batch/5" class="batch">
          <div class="txt">Batch 5</div>
          <font-awesome-icon icon="arrow-right" class="right-icon"></font-awesome-icon>
        </router-link>

        <router-link to="/admin/batch/6" class="batch">
          <div class="txt">Batch 6</div>
          <font-awesome-icon icon="arrow-right" class="right-icon"></font-awesome-icon>
        </router-link>

        <router-link to="/admin/batch/7" class="batch">
          <div class="txt">Batch 7</div>
          <font-awesome-icon icon="arrow-right" class="right-icon"></font-awesome-icon>
        </router-link>

        <router-link to="/admin/batch/8" class="batch">
          <div class="txt">Batch 8</div>
          <font-awesome-icon icon="arrow-right" class="right-icon"></font-awesome-icon>
        </router-link>

        <router-link to="/admin/batch/9" class="batch">
          <div class="txt">Batch 9</div>
          <font-awesome-icon icon="arrow-right" class="right-icon"></font-awesome-icon>
        </router-link>
      </div>
      <!-- list of batch -->
    </div>
    <!-- end content -->

    <PopupMessage></PopupMessage>
    <AnimationLoader></AnimationLoader>
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
      display: flex;
      justify-content: space-between;
      align-items: center;
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

      .icon-plus {
        color: #FFF;
        font-size: 1.125em;
      }
    }

    .content {
      margin-top: 3rem;
      margin-bottom: 2rem;
      padding: 1.125rem 1rem;

      .batch-list {

        .batch {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #FFF;
          text-decoration: none;
          box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.3);
          border-radius: 0.5rem;
          margin-bottom: 0.75em;
          padding: 1.1875rem 1.375rem;

          .txt {
            color: #444;
            transition: color .1s linear;
            font-weight: 500;
            font-size: 0.9375em;
          }

          .right-icon {
            color: rgba(58, 227, 116, 0.5);
            transition: color .1s linear;
            font-size: 1em;
          }

          &:hover > .txt,
          &:hover > .right-icon {
            color: #0ABDE3;
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

        .icon-plus {
          font-size: 1.25em;
        }
      }

      .content {
        margin-top: 3.375rem;
        margin-bottom: 2.5rem;
        padding: 1.5rem 1.25rem;

        .batch-list {

          .batch {
            margin-bottom: 1rem;
            padding: 1.3125rem 1.5rem;

            .txt {
              font-size: 1.0625em;
            }

            .right-icon {
              font-size: 1.125em;
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
        max-width: 481px;
        margin: 0 auto;
        padding: 1.1875rem 1.5rem;

        .text {
          font-size: 1.25em;
        }

        .icon-plus {
          font-size: 1.375em;
        }
      }

      .content {
        margin-top: 3.75rem;
        margin-bottom: 2.75rem;
        padding: 1.75rem 1.5rem;

        .batch-list {

          .batch {
            margin-bottom: 1.25rem;
            padding: 1.5rem 1.8125rem;

            .txt {
              font-size: 1.125em;
            }

            .right-icon {
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
import MenuBar from '@/components/admin/MenuBar.vue';
import AnimationLoader from '@/components/AnimationLoader.vue';
import PopupMessage from '@/components/PopupMessage.vue';

export default {

  components: {
    MenuBar,
    AnimationLoader,
    PopupMessage,
  },

};
</script>
