<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link class="back" :to="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
      </router-link>
      <div class="txt">Simpan</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <div class="material-name">{{ materialList[paramMaterial].name }}</div>

      <!-- form -->
      <div class="form">
        <div class="form-group">
          <fieldset>
            <legend>Dibuka pada</legend>
            <input type="date" class="input-text" value="2020-01-01">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Ditutup pada</legend>
            <input type="date" class="input-text" value="2020-01-01">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Batas waktu (menit)</legend>
            <input type="number" class="input-text">
          </fieldset>
        </div>

        <div class="question" v-for="n in 5" :key="n">
          <p class="question-number">Soal {{ n }}</p>

          <div class="form-group">
            <fieldset class="text-area">
              <legend>Pertanyaan</legend>
              <textarea class="input-area"></textarea>
            </fieldset>
          </div>

          <div class="form-group">
            <fieldset class="text-area choices">
              <legend>Pilihan 1</legend>
              <textarea class="input-area"></textarea>
              <label class="radio"><input type="radio" value="1" :name="`question-${n}`"><span></span></label>
            </fieldset>

            <fieldset class="text-area choices">
              <legend>Pilihan 2</legend>
              <textarea class="input-area"></textarea>
              <label class="radio"><input type="radio" value="2" :name="`question-${n}`"><span></span></label>
            </fieldset>

            <fieldset class="text-area choices">
              <legend>Pilihan 3</legend>
              <textarea class="input-area"></textarea>
              <label class="radio"><input type="radio" value="3" :name="`question-${n}`"><span></span></label>
            </fieldset>

            <fieldset class="text-area choices">
              <legend>Pilihan 4</legend>
              <textarea class="input-area"></textarea>
              <label class="radio"><input type="radio" value="4" :name="`question-${n}`"><span></span></label>
            </fieldset>
          </div>
        </div>
      </div>
      <!-- form -->
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
    min-height: 100vh;
    background-color: #FFF;

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
        cursor: pointer;
        text-decoration: none;
        color: #FFF;
        font-size: 1.0625em;

        .text {
          margin-left: 0.5rem;
        }
      }

      .txt {
        cursor: pointer;
        font-weight: 400;
        color: #FFF;
        text-transform: uppercase;
        font-size: 0.875em;
      }
    }

    .content {
      margin-top: 3rem;
      padding-bottom: 1rem;

      .material-name {
        box-sizing: border-box;
        border-radius: 0 0 5rem 5rem;
        text-align: center;
        color: #FFF;
        font-weight: 600;
        background-image: linear-gradient(to bottom, #0abde3, #09bae1, #08b7e0, #08b4de, #09b1dc, #09aeda, #0aacd8, #0ba9d6, #0ba6d3, #0aa4cf, #09a1cc, #099fc9);
        text-shadow: 0.0625rem 0.0625rem 0 #05AAFF, 0.0625rem -0.0625rem 0 #05AAFF, -0.0625rem 0.0625rem 0 #05AAFF, -0.0625rem -0.0625rem 0 #05AAFF, 0.0625rem 0px 0 #05AAFF, 0px 0.0625rem 0 #05AAFF, -0.0625rem 0px 0 #05AAFF, 0px -0.0625rem 0 #05AAFF;
        padding: 1.75rem 1.25rem 3.75rem;
        font-size: 1.5em;
      }

      .form {
        margin-top: 1.75rem;
        padding: 0 0.75rem;

        .form-group {
          max-width: 100%;
          margin-bottom: 1.25rem;

          fieldset {
            position: relative;
            border: 0.0625rem solid #AAA;
            border-radius: 0.5rem;
            max-width: 100%;
            min-height: 2.75rem;

            legend {
              color: #777;
              padding: 0 0.3125rem;
              font-size: 0.8125em;
            }

            .input-text {
              position: absolute;
              box-sizing: border-box;
              background-color: transparent;
              top: 0.5rem;
              left: 0;
              bottom: 0;
              width: 100%;
              border: 0;
              outline: none;
              -webkit-appearance: none;
              color: #333;
              padding: 0.1875rem 1rem 0 1.75rem;
              font-size: 0.875em;

              &[type=date]::-webkit-inner-spin-button {
                -webkit-appearance: none;
              }

              &[type=number]::-webkit-outer-spin-button,
              &[type=number]::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            }

            &.text-area {
              min-height: 8rem;
            }

            &.choices {
              min-height: 5rem;
              margin-bottom: 1.25rem;

              input[type=radio] {
                position: absolute;
                opacity: 0;
                width: 0;
                height: 0;

                &:checked + span  {
                  background-color: #2ED573;
                }

                &:checked + span::after  {
                  display: block;
                }
              }

              span {
                position: absolute;
                display: inline-block;
                background-color: #DDD;
                border-radius: 0.25rem;
                right: 0;
                top: 0;
                transform: scale(1.5);
                width: 1.0625rem;
                height: 1.0625rem;

                &::after {
                  content: "";
                  position: absolute;
                  display: none;
                  background-color: transparent;
                  transform: rotate(-45deg);
                  border-left: 0.125rem solid #FFF;
                  border-bottom: 0.125rem solid #FFF;
                  top: 0.3125rem;
                  left: 0.3125rem;
                  width: 0.375rem;
                  height: 0.125rem;
                }
              }
            }

            .input-area {
              font-family: 'Roboto';
              position: absolute;
              box-sizing: border-box;
              background-color: transparent;
              outline: none;
              color: #333;
              width: 100%;
              border: 0;
              -webkit-appearance: none;
              top: 1.625rem;
              left: 0;
              bottom: 0.75rem;
              line-height: 1.375rem;
              padding: 0 1rem 1.5rem 1.75rem;
              font-size: 0.8125em;
            }
          }
        }

        .question {
          margin-top: 2.5rem;

          p {
            margin: 0;
          }

          .question-number {
            color: #2C3E50;
            font-weight: 500;
            text-transform: uppercase;
            margin-bottom: 1rem;
            font-size: 1em;
          }

          .form-group {
            padding-left: 1rem;
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
          font-size: 1.125em;

          .text {
            margin-left: 0.75rem;
          }
        }

        .txt {
          font-size: 0.9375em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .material-name {
          padding: 2rem 1.5rem 4rem;
          font-size: 1.75em;
        }

        .form {
          margin-top: 2rem;
          padding: 0 1rem;

          .form-group {

            fieldset {
              min-height: 3rem;

              legend {
                padding: 0 0.375rem;
                font-size: 0.875em;
              }

              .input-text {
                padding: 0.1875rem 1.25rem 0 2rem;
                font-size: 0.9375em;
              }

              &.text-area {
                min-height: 9rem;
              }

              &.choices {
                min-height: 6rem;

                span {
                  width: 1.125rem;
                  height: 1.125rem;

                  &::after {
                    top: 0.3125rem;
                    left: 0.3125rem;
                    width: 0.4375rem;
                    height: 0.1875rem;
                  }
                }
              }

              .input-area {
                padding: 0 1.25rem 1.75rem 2rem;
                font-size: 0.875em;
              }
            }
          }

          .question {
            margin-top: 3rem;

            .question-number {
              font-size: 1.0625em;
            }

            .form-group {
              padding-left: 1.25rem;
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
          font-size: 1.25em;

          .text {
            margin-left: 0.75rem;
          }
        }

        .txt {
          font-size: 1.0625em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .material-name {
          padding: 2.5rem 2rem 4.5rem;
          font-size: 1.875em;
        }

        .form {
          margin-top: 3rem;
          padding: 0 2rem;

          .form-group {

            fieldset {
              min-height: 3.5rem;

              legend {
                padding: 0 0.5rem;
                font-size: 0.9375em;
              }

              .input-text {
                padding: 0.3125rem 1.5rem 0 2.5rem;
                font-size: 1.0625em;
              }

              &.text-area {
                min-height: 10rem;
              }

              &.choices {
                min-height: 7rem;

                span {
                  width: 1.25rem;
                  height: 1.25rem;

                  &::after {
                    top: 0.3125rem;
                    left: 0.3125rem;
                    width: 0.5rem;
                    height: 0.25rem;
                  }
                }
              }

              .input-area {
                padding: 0 2rem 2rem 2.25rem;
                font-size: 1em;
              }
            }
          }

          .question {
            margin-top: 3.5rem;

            .question-number {
              font-size: 1.1875em;
            }

            .form-group {
              padding-left: 1.5rem;
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
      paramBatch: '',
      paramTraining: '',
      paramMaterial: '',
      materialList: [
        {
          name: 'Private Victory',
          date_available: '12 September 2020',
          date_closed: '13 September 2020',
          limit_time: '20 menit',
        },
        {
          name: 'Emotional Banking',
          date_available: '-',
          date_closed: '-',
          limit_time: '-',
        },
        {
          name: 'Think Win Win',
          date_available: '20 September 2020',
          date_closed: '22 September 2020',
          limit_time: '60 menit',
        },
        {
          name: 'Time Management',
          date_available: '23 September 2020',
          date_closed: '26 September 2020',
          limit_time: '60 menit',
        },
      ],
      animationLoaderDisplay: false,
      popupMessageDisplay: false,
    };
  },

  computed: {
    back() {
      return {
        name: 'AdminDetailTest',
        params: {
          batch: this.paramBatch,
          training: this.paramTraining,
        },
      };
    },
  },

  created() {
    this.paramBatch = this.$route.params.batch;
    this.paramTraining = this.$route.params.training;
    this.paramMaterial = this.$route.params.material;
  },

};

</script>
