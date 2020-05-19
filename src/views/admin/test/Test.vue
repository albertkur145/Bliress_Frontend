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
          <div class="general general-active">
            <div class="txt">Batch 1</div>
            <font-awesome-icon icon="chevron-down" class="chev-icon chev-icon-rotate"></font-awesome-icon>
          </div>

          <div class="detail">
            <div class="training">
              <div class="txt">Training 1</div>
              <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
            </div>

            <div class="training">
              <div class="txt">Training 2</div>
              <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
            </div>

            <div class="training">
              <div class="txt">Training 3</div>
              <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
            </div>

            <div class="training">
              <div class="txt">Training 4</div>
              <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
            </div>

            <div class="training">
              <div class="txt">Training 5</div>
              <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
            </div>

            <div class="training">
              <div class="txt">Training 6</div>
              <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
            </div>
          </div>
        </div>

        <div class="batch batch-2">
          <div class="general">
            <div class="txt">Batch 2</div>
            <font-awesome-icon icon="chevron-down" class="chev-icon"></font-awesome-icon>
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

  // width 320px - 480px (Mobile)
  @media (min-width: 320px) and (max-width: 480px) {
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
        padding: 1.0625rem 1.25rem;

        .text {
          font-size: 1.125em;
        }
      }

      .content {
        margin-top: 3.375rem;

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
              padding: 1.25rem;

              .txt {
                font-weight: 500;
                font-size: 1em;
              }

              .chev-icon {
                font-size: 0.875em;
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
              animation: trolly-down 0.3s linear;

              .training {
                display: flex;
                justify-content: space-between;
                text-align: center;
                cursor: pointer;
                color: #333;
                border-bottom: 0.0625rem solid #DDD;
                padding: 0.875rem 1.25rem;

                .txt {
                  font-size: 0.875em;
                }

                .chev-icon {
                  font-size: 0.75em;
                }
              }
            }

            @keyframes trolly-down {
              from {
                transform: scaleY(0);
              } to {
                transform: scaleY(1);
              }
            }
          }
        }
      }
    }
  }
  // width 320px - 480px (Mobile)

</style>

<script>
import MenuBar from '@/components/admin/MenuBar.vue';

export default {

  components: {
    MenuBar,
  },

};
</script>
