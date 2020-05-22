<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <router-link to="/test/detail/1" class="back">
        <font-awesome-icon icon="sign-out-alt"></font-awesome-icon>
      </router-link>
      <div class="text">Soal 1</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <div class="question">
        <!-- text question -->
        <div class="txt-question">{{ question }}</div>
        <!-- text quesion -->

        <!-- choice question -->
        <div class="form-group">
          <fieldset>
            <legend>Jawaban</legend>
            <select class="input-text">
              <option value="">-</option>
              <option value="a">Gaya gerak jemu</option>
              <option value="b">Posisi yang tetap</option>
              <option value="c">Tidak memihak pada siapapun</option>
              <option value="d">Semua salah</option>
            </select>
          </fieldset>
        </div>
        <!-- choice question -->

        <!-- action -->
        <div class="action">
          <font-awesome-icon icon="chevron-left" class="back"></font-awesome-icon>
          <font-awesome-icon icon="chevron-right" class="next"></font-awesome-icon>
        </div>
        <!-- action -->
      </div>
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

      .back {
        position: absolute;
        color: #FFF;
        transform: rotate(180deg);
        top: 31%;
        left: 5%;
        font-size: 1.0625em;
      }

      .text {
        font-size: 1.125em;
      }
    }

    .content {
      margin-top: 2.875rem;
      padding: 1rem;

      .question {
        background-color: #FFF;
        color: #444;
        border-radius: 0.5rem;
        padding: 0.875rem 1.125rem 4rem;

        .txt-question {
          font-size: 0.875em;
          line-height: 1.375rem;
        }

        .form-group {
          max-width: 100%;
          margin-top: 1.75rem;

          fieldset {
            border: 0.0625rem solid #AAA;
            border-radius: 0.5rem;
            position: relative;
            max-width: 100%;
            min-height: 2.5rem;

            legend {
              color: #777;
              padding: 0 0.25rem;
              font-size: 0.75em;
            }

            .input-text {
              position: absolute;
              box-sizing: border-box;
              background-color: transparent;
              left: 0;
              bottom: 0;
              width: 100%;
              border: 0;
              outline: none;
              color: #444;
              -webkit-appearance: none;
              top: 0.5rem;
              padding: 0.0625rem 0.875rem 0 1.375rem;
              font-size: 0.8125em;
            }
          }
        }

        .action {
          position: relative;
          color: #FFF;
          margin-top: 3rem;
          font-size: 1.0625em;

          .back {
            position: absolute;
            border-radius: 5rem;
            background-color: #A1A1A1;
            cursor: pointer;
            padding: 0.5875rem 0.75rem;
            left: 0.25rem;
          }

          .next {
            position: absolute;
            border-radius: 5rem;
            background-color: #00D77C;
            cursor: pointer;
            padding: 0.5875rem 0.75rem;
            right: 0.25rem;
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
          top: 31%;
          left: 5%;
          font-size: 1.0625em;
        }

        .text {
          font-size: 1.125em;
        }
      }

      .content {
        margin-top: 3.3125rem;
        padding: 1.0625rem 1.25rem;

        .question {
          padding: 1rem 1.25rem 5rem;

          .txt-question {
            font-size: 0.9375em;
          }

          .form-group {
            margin-top: 1.75rem;

            fieldset {
              min-height: 2.75rem;

              legend {
                padding: 0 0.3125rem;
                font-size: 0.8125em;
              }

              .input-text {
                top: 0.4375rem;
                width: 97%;
                padding: 0.125rem 1rem 0 1.5rem;
                font-size: 0.875em;
              }
            }
          }

          .action {
            margin-top: 3.5rem;
            font-size: 1.25em;

            .back {
              padding: 0.625rem 0.875rem;
            }

            .next {
              padding: 0.625rem 0.875rem;
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

        .back {
          top: 31%;
          left: 3.5%;
          font-size: 1.1875em;
        }

        .text {
          font-size: 1.25em;
        }
      }

      .content {
        margin-top: 3.75rem;
        padding: 1.5rem 1.25rem;

        .question {
          padding: 1.25rem 1.5rem 5.5rem;

          .txt-question {
            font-size: 1em;
          }

          .form-group {
            margin-top: 2.25rem;

            fieldset {
              min-height: 3rem;

              legend {
                padding: 0 0.375rem;
                font-size: 0.875em;
              }

              .input-text {
                top: 0.4375rem;
                width: 100%;
                padding: 0.25rem 1.25rem 0 2rem;
                font-size: 0.9375em;
              }
            }
          }

          .action {
            margin-top: 4.25rem;
            font-size: 1.375em;

            .back {
              padding: 0.75rem 1rem;
            }

            .next {
              padding: 0.75rem 1rem;
            }
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
      windowWidth: window.innerWidth,
      question: 'Dalam penjelasan materi time management, pemateri menyampaikan adanya permasalahan yang timbul akibat terikat akan daya saing. Akibatnya, harga pasar menjadi menaik tinggi yang menyebabkan kerugian pada perusahaan. Dalam hal ini diperlukan adanya gaya relatif. Apa yang Anda ketahui dengan gaya relatif pada topik ini?',
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
