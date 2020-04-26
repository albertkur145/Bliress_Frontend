<template>
  <div id="container">
    <div class="width">{{ windowWidth }}</div>
    <!-- head -->
    <div class="head">
      <div class="text">Training</div>
      <div class="add">+</div>
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
          <div class="icon-see">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
            <p class="see">Lihat</p>
          </div>
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
          <div class="icon-see">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
            <p class="see">Lihat</p>
          </div>
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
          <div class="icon-see">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
            <p class="see">Lihat</p>
          </div>
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
          <div class="icon-see">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
            <p class="see">Lihat</p>
          </div>
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
          <div class="icon-see">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
            <p class="see">Lihat</p>
          </div>
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
          <div class="icon-see">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
            <p class="see">Lihat</p>
          </div>
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

  // width 481px - 767px (Big Mobile / Tablet)
  @media (min-width: 481px) and (max-width: 767px) {
    #container {
      font-family: 'Roboto';
      max-width: 100%;
      min-height: 100vh;
      background-color: #F2F2F2;

      .width {
        display: none;
        text-align: center;
        padding: 1rem;
        margin-top: 3rem;
      }

      .head {
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
        padding: 1rem 1.5rem;

        .text {
          font-size: 1.375em;
        }

        .add {
          font-weight: 600;
          background-color: #36B5DD;
          cursor: pointer;
          transition: background-color .2s ease-out,
                      border .1s linear;
          border: 0.125rem solid #00A2D4;
          border-radius: 1rem;
          padding: 0.0625rem 0.5rem;
          font-size: 1.375em;

          &:hover {
            background-color: #22AAD6;
            border: 0.125rem solid #0293C0;
          }
        }
      }

      .content {
        margin-top: 4.4375rem;

        .training {
          display: flex;
          max-width: 100%;
          margin-bottom: 0.5rem;

          &:last-child {
            margin-bottom: 3.875rem;
          }

          .left {
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 50%;
            max-width: 50%;
            box-sizing: border-box;
            background-image: url('../assets/background/bg-linear-xs.svg');
            background-size: cover;
            background-repeat: no-repeat;
            padding: 1rem 1.5rem;

            span {
              font-weight: 900;
              font-style: italic;
              color: #FFF;
              font-size: 2.5em;
            }
          }

          .right {
            min-width: 50%;
            max-width: 50%;
            background-color: #FFF;
            box-sizing: border-box;
            border-left: 0.1875rem dashed #35AEE2;
            padding: 2.75rem 0.75rem 1.5rem;

            .txt {
              text-align: center;
              color: #444;
              font-weight: 400;
              font-size: 1.25em;
            }

            .date {
              text-align: center;
              font-weight: 500;
              color: #333;
              font-weight: 500;
              font-size: 1.4375em;
              margin-top: 0.75rem;
            }

            .icon-see {
              text-align: right;
              color: #0085FF;
              font-weight: 500;
              cursor: pointer;
              margin-top: 2rem;
              font-size: 1.125em;

              p {
                margin: 0;
              }
            }
          }
        }
      }
    }
  }
  // width 481px - 767px (Big Mobile / Tablet)
</style>

<script>
import MenuBar from '../components/MenuBar.vue';

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
