<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <router-link to="/training" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
      </router-link>

      <div class="text">Training</div>

      <router-link to="/qrcodereader" class="qr-code-reader">
        <font-awesome-icon icon="qrcode"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <!-- rincian -->
      <div class="rincian">
        <p class="txt">Rincian</p>

        <div class="detail">
          <p class="date">Dilaksanakan tanggal 15 September 2020</p>
          <p class="location">di Gedung Serbaguna, R.3125 Block C</p>
          <p class="start">Dimulai pada pkl 08.00 WIB - selesai</p>
        </div>

        <p class="trainer">Trainer: Rudi Santoso</p>
      </div>
      <!-- rincian -->

      <!-- participants -->
      <div class="participants">
        <div class="top">
          <div class="title">Peserta</div>
          <div class="count">86 orang</div>
        </div>

        <div class="data">
          <table>
            <thead>
              <th>No</th>
              <th>Nama</th>
              <th>Divisi</th>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Albert Kurniawan</td>
                <td>Sales Manager</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Rendi Orton</td>
                <td>Sales Manager</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Denny Laoli</td>
                <td>Supervisor Bussiness</td>
              </tr>

              <tr>
                <td>4</td>
                <td>Irene Nike</td>
                <td>Akuntan</td>
              </tr>

              <tr>
                <td>5</td>
                <td>Diana Pertama Sari</td>
                <td>Akuntan</td>
              </tr>

              <tr>
                <td>6</td>
                <td>Desman Zega</td>
                <td>Software Developer</td>
              </tr>

              <tr>
                <td>7</td>
                <td>Kevin Santoso</td>
                <td>Software Developer</td>
              </tr>

              <tr>
                <td>8</td>
                <td>Simon</td>
                <td>Software Developer</td>
              </tr>

              <tr>
                <td>9</td>
                <td>Niken Regina</td>
                <td>Quality Control</td>
              </tr>

              <tr>
                <td>10</td>
                <td>Yemima Milenia</td>
                <td>Quality Control</td>
              </tr>

              <tr>
                <td>11</td>
                <td>Nicholaus Putra</td>
                <td>Quality Control</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- participants -->

    </div>
    <!-- end content -->

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
      padding: 0.875rem 1rem;

      .back {
        position: absolute;
        color: #FFF;
        top: 31%;
        left: 0.9375rem;
        font-size: 1.0625em;
      }

      .text {
        font-size: 1.0625em;
      }

      .qr-code-reader {
        position: absolute;
        color: #FFF;
        top: 31%;
        right: 0.9375rem;
        font-size: 1.0625em;
      }
    }

    .content {
      max-width: 100%;

      p {
        margin: 0;
      }

      .rincian {
        background-color: #FFF;
        text-align: center;
        padding: 1.75rem 1rem;
        margin-top: 1.9375rem;

        .txt {
          font-weight: 500;
          color: #666;
          font-size: 1.0625em;
        }

        .detail {
          color: #666;
          margin-top: 1.25rem;
          font-size: 0.875em;

          .location {
            margin-top: 0.4375rem;
          }

          .start {
            margin-top: 0.4375rem;
          }
        }

        .trainer {
          color: #444;
          font-size: 0.9375em;
          margin-top: 1.25rem;
        }
      }

      .participants {
        background-color: #FFF;
        padding: 1.125rem 1rem 1.875rem;
        margin-top: 0.5rem;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .title {
            font-weight: 500;
            color: #333;
            font-size: 1.0625em;
          }

          .count {
            color: #555;
            font-size: 0.875em;
          }
        }

        .data {
          max-width: 100%;
          overflow-x: auto;
          margin-top: 1.25rem;

          table {
            text-align: left;
            border-collapse: collapse;
            width: 100%;

            th, td {
              color: #333;
              border-bottom: 0.125rem solid #DDD;
              padding: 0.75rem 0.875rem;
              font-size: 0.875em;
            }

            td:nth-child(1),
            th:nth-child(1) {
              text-align: center;
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

        .back {
          left: 1.0625rem;
          font-size: 1.0625em;
        }

        .text {
          font-size: 1.125em;
        }

        .qr-code-reader {
          right: 1.0625rem;
          font-size: 1.0625em;
        }
      }

      .content {

        .rincian {
          padding: 2rem 1.125rem;
          margin-top: 2.25rem;

          .txt {
            font-size: 1.125em;
          }

          .detail {
            margin-top: 1.5rem;
            font-size: 0.9375em;

            .location {
              margin-top: 0.375rem;
            }

            .start {
              margin-top: 0.375rem;
            }
          }

          .trainer {
            font-size: 1em;
            margin-top: 1.25rem;
          }
        }

        .participants {
          padding: 1.25rem 1.125rem 2rem;

          .top {

            .title {
              font-size: 1.125em;
            }

            .count {
              font-size: 0.9375em;
            }
          }

          .data {
            margin-top: 1.5rem;

            table {

              th, td {
                padding: 0.8125rem 1rem;
                font-size: 0.9375em;
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
        max-width: 466px;
        margin: 0 auto;
        padding: 1.1875rem 1.5rem;

        .back {
          left: 1.25rem;
          font-size: 1.125em;
        }

        .text {
          font-size: 1.25em;
        }

        .qr-code-reader {
          right: 1.25rem;
          font-size: 1.125em;
        }
      }

      .content {

        .rincian {
          padding: 2.25rem 1.25rem;
          margin-top: 3rem;

          .txt {
            font-size: 1.3125em;
          }

          .detail {
            margin-top: 1.625rem;
            font-size: 1.0625em;

            .location {
              margin-top: 0.5rem;
            }

            .start {
              margin-top: 0.5rem;
            }
          }

          .trainer {
            font-size: 1.125em;
            margin-top: 1.75rem;
          }
        }

        .participants {
          padding: 1.4375rem 1.375rem 2.5rem;

          .top {

            .title {
              font-size: 1.25em;
            }

            .count {
              font-size: 1.0625em;
            }
          }

          .data {
            margin-top: 1.75rem;

            table {

              th, td {
                padding: 1rem 1.25rem;
                font-size: 1em;
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

import AnimationLoader from '@/components/AnimationLoader.vue';
import PopupMessage from '@/components/PopupMessage.vue';

export default {

  components: {
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
