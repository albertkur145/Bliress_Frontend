<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <router-link :to="{ name: 'AdminDetailBatch', params: { id: id } }" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">Training</span>
      </router-link>

      <router-link :to="{ name: 'AdminAddTraining', params: { id: id } }">
        <font-awesome-icon icon="plus-circle" class="icon-plus"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">

      <!-- title -->
      <div class="title">Batch {{ id }}</div>
      <!-- title -->

      <!-- list of training -->
      <div class="training-list">
        <div class="training">
          <div class="num">
            <span class="txt">1</span>
          </div>

          <div class="info">
            <p class="date">18 September 2020</p>
            <p class="time">08.00 - 16.00 WIB</p>
            <p class="trainer">Trainer: Rudi Santoso</p>
            <p class="location">di Gedung Serbaguna, Ruang 315 C Sarana Jaya</p>
            <button class="btn-attendance" @click="redirectAttendance(1)">Absensi</button>
          </div>

          <div class="action">
            <div>
              <font-awesome-icon icon="pen" class="edit-icon" @click="redirectAddTraining"></font-awesome-icon>
              <font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon>
            </div>
          </div>
        </div>

        <div class="line"><hr></div>

        <div class="training">
          <div class="num">
            <span class="txt">2</span>
          </div>

          <div class="info">
            <p class="date">27 September 2020</p>
            <p class="time">12.00 - 15.00 WIB</p>
            <p class="trainer">Trainer: Alvin Wijaya</p>
            <p class="location">di Gedung Ropoko, Ruang 54 Sarana Jaya</p>
            <button class="btn-attendance" @click="redirectAttendance(2)">Absensi</button>
          </div>

          <div class="action">
            <div>
              <font-awesome-icon icon="pen" class="edit-icon" @click="redirectAddTraining"></font-awesome-icon>
              <font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon>
            </div>
          </div>
        </div>

        <div class="line"><hr></div>

        <div class="training">
          <div class="num">
            <span class="txt">3</span>
          </div>

          <div class="info">
            <p class="date">08 Oktober 2020</p>
            <p class="time">09.00 - 13.00 WIB</p>
            <p class="trainer">Trainer: Angelia Yoh</p>
            <p class="location">di Hotel British, Lt. 42 Ruang Anggrek</p>
            <button class="btn-attendance" @click="redirectAttendance(3)">Absensi</button>
          </div>

          <div class="action">
            <div>
              <font-awesome-icon icon="pen" class="edit-icon" @click="redirectAddTraining"></font-awesome-icon>
              <font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon>
            </div>
          </div>
        </div>

        <div class="line"><hr></div>

        <div class="training">
          <div class="num">
            <span class="txt">4</span>
          </div>

          <div class="info">
            <p class="date">17 Oktober 2020</p>
            <p class="time">16.00 - 20.00 WIB</p>
            <p class="trainer">Trainer: Yuli Permata</p>
            <p class="location">di Gedung Serbaguna, R. 315 C Sarana Jaya</p>
            <button class="btn-attendance" @click="redirectAttendance(4)">Absensi</button>
          </div>

          <div class="action">
            <div>
              <font-awesome-icon icon="pen" class="edit-icon" @click="redirectAddTraining"></font-awesome-icon>
              <font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon>
            </div>
          </div>
        </div>

        <div class="line"><hr></div>

        <div class="training">
          <div class="num">
            <span class="txt">5</span>
          </div>

          <div class="info">
            <p class="date">10 November 2020</p>
            <p class="time">07.00 - 18.00 WIB</p>
            <p class="trainer">Trainer: Randika</p>
            <p class="location">di Hotel Aston, Lt. 24 Meeting Room 5</p>
            <button class="btn-attendance" @click="redirectAttendance(5)">Absensi</button>
          </div>

          <div class="action">
            <div>
              <font-awesome-icon icon="pen" class="edit-icon" @click="redirectAddTraining"></font-awesome-icon>
              <font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon>
            </div>
          </div>
        </div>

        <div class="line"><hr></div>

        <div class="training">
          <div class="num">
            <span class="txt">6</span>
          </div>

          <div class="info">
            <p class="date">05 Desember 2020</p>
            <p class="time">09.00 - 15.00 WIB</p>
            <p class="trainer">Trainer: Simon Keyli</p>
            <p class="location">di Gedung Ropoko, Ruang 54 Sarana Jaya</p>
            <button class="btn-attendance" @click="redirectAttendance(6)">Absensi</button>
          </div>

          <div class="action">
            <div>
              <font-awesome-icon icon="pen" class="edit-icon" @click="redirectAddTraining"></font-awesome-icon>
              <font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon>
            </div>
          </div>
        </div>

        <div class="line"><hr></div>

      </div>
      <!-- list of training -->

    </div>
    <!-- end content -->
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
      background-color: #0ABDE3;
      font-weight: 600;
      z-index: 1;
      padding: 0.875rem 1rem;

      .back {
        color: #FFF;
        text-decoration: none;
        font-size: 1.0625em;

        .text {
          margin-left: 0.5rem;
        }
      }

      .icon-plus {
        color: #FFF;
        font-size: 1.125em;
      }
    }

    .content {
      margin-top: 3rem;

      .title {
        color: #0984E3;
        text-align: center;
        font-weight: 500;
        background-color: #FFF;
        padding: 1.5rem 1rem;
        font-size: 1.0625em;
      }

      .training-list {
        background-color: #FFF;
        margin-top: 0.5rem;
        padding: 0.5rem 0 1.5rem;

        .training {
          display: flex;
          max-width: 100%;
          padding: 1rem;

          .num {
            min-width: 18%;
            max-width: 18%;

            .txt {
              max-width: 100%;
              border-radius: 10rem;
              font-weight: 600;
              box-sizing: border-box;
              display: inline-block;
              text-align: center;
              color: #FFF;
              background-image: radial-gradient(circle, #1dabe9, #25b6ee, #31c0f2, #3fcbf6, #4ed5f9, #4addf8, #4ce5f6, #54edf3, #59f3e7, #6af8d7, #82fcc5, #9dffb2);
              padding: 0.625rem 0.9375rem;
              font-size: 1.0625em;
            }
          }

          .info {
            min-width: 70%;
            max-width: 70%;
            box-sizing: border-box;
            padding: 0 0.75rem;

            p {
              margin: 0;
            }

            .date {
              color: #444;
              font-weight: 500;
              font-size: 0.9375em;
            }

            .time {
              color: #666;
              margin-top: 0.4375rem;
              font-size: 0.875em;
            }

            .trainer {
              color: #666;
              margin-top: 0.4375rem;
              font-size: 0.875em;
            }

            .location {
              color: #666;
              margin-top: 1.5rem;
              font-size: 0.8125em;
            }

            .btn-attendance {
              font-family: 'Roboto';
              min-width: 100%;
              max-width: 100%;
              background-color: rgba(112, 111, 211, 0.95);
              color: #FFF;
              cursor: pointer;
              outline: none;
              border: 0;
              border-radius: 50rem;
              transition: background-color .2s ease-out;
              margin-top: 1rem;
              padding: 0.625rem;
              font-size: 0.8125em;

              &:hover {
                background-color: rgba(112, 111, 211, 1);
              }
            }
          }

          .action {
            min-width: 12%;
            max-width: 12%;
            text-align: right;

            div {
              display: flex;
              align-items: center;

              .edit-icon {
                cursor: pointer;
                color: #1DD1A1;
                font-size: 0.8125em;
              }

              .remove-icon {
                cursor: pointer;
                color: #FF6B6B;
                font-size: 1.0625em;
                margin-left: 0.375rem;
              }
            }
          }
        }

        .line {
          padding: 0 1.25rem;

          hr {
            border: 0.0625rem solid #DDD;
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

        .back {
          font-size: 1.125em;

          .text {
            margin-left: 0.75rem;
          }
        }

        .icon-plus {
          font-size: 1.1875em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .title {
          padding: 1.75rem 1.25rem;
          font-size: 1.25em;
        }

        .training-list {

          .training {
            padding: 1.25rem;

            .num {

              .txt {
                padding: 0.75rem 1.125rem;
                font-size: 1.25em;
              }
            }

            .info {
              padding: 0 1rem;

              .date {
                font-size: 1.0625em;
              }

              .time {
                font-size: 1em;
              }

              .trainer {
                font-size: 1em;
              }

              .location {
                font-size: 0.9375em;
              }

              .btn-attendance {
                padding: 0.6875rem;
                font-size: 0.875em;
              }
            }

            .action {

              div {

                .edit-icon {
                  font-size: 0.9375em;
                }

                .remove-icon {
                  font-size: 1.1875em;
                }
              }
            }
          }

          .line {
            padding: 0 1.25rem;
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

        .back {
          font-size: 1.25em;

          .text {
            margin-left: 0.75rem;
          }
        }

        .icon-plus {
          font-size: 1.375em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .title {
          padding: 2rem 1.5rem;
          font-size: 1.375em;
        }

        .training-list {

          .training {
            padding: 1.5rem;

            .num {

              .txt {
                padding: 1.5rem 2rem;
                font-size: 1.5em;
              }
            }

            .info {
              padding: 0 1.5rem;

              .date {
                font-size: 1.1875em;
              }

              .time {
                font-size: 1.0625em;
              }

              .trainer {
                font-size: 1.0625em;
              }

              .location {
                font-size: 1em;
              }

              .btn-attendance {
                padding: 0.75rem;
                font-size: 0.9375em;
              }
            }

            .action {

              div {

                .edit-icon {
                  font-size: 1em;
                }

                .remove-icon {
                  font-size: 1.25em;
                }
              }
            }
          }

          .line {
            padding: 0 1.5rem;
          }
        }
      }
    }
  }
  // width > 481px (Big Mobile, Tablet, Desktop)

</style>

<script>

export default {

  data() {
    return {
      id: '',
    };
  },

  methods: {
    redirectAddTraining() {
      this.$router.push({ name: 'AdminAddTraining', params: { id: this.id } });
    },
    redirectAttendance(training) {
      this.$router.push({
        name: 'AdminAttendance',
        params: {
          id: this.id,
          training,
        },
      });
    },
  },

  created() {
    this.id = this.$route.params.id;
  },

};

</script>
