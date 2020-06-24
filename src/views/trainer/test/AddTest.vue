<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link class="back" :to="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
      </router-link>
      <div class="txt" @click="save">Simpan</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">
      <div class="material-name">{{ material.name }}</div>

      <!-- form -->
      <div class="form">
        <div class="form-group">
          <fieldset>
            <legend>Dibuka pada</legend>
            <input type="date" class="input-text" v-model="form.available">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Ditutup pada</legend>
            <input type="date" class="input-text" v-model="form.closed">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Batas waktu (menit)</legend>
            <input type="number" class="input-text" v-model="form.timeLimit">
          </fieldset>
        </div>

        <div class="question" v-for="n in 5" :key="n">
          <p class="question-number">Soal {{ n }}</p>

          <div class="form-group">
            <fieldset class="text-area">
              <legend>Pertanyaan</legend>
              <textarea class="input-area" v-model="form.questions[n-1].questionText"></textarea>
            </fieldset>
          </div>

          <div class="form-group">
            <fieldset class="text-area choices" v-for="i in 4" :key="i">
              <legend>Pilihan {{ i }}</legend>
              <textarea class="input-area" v-model="form.questions[n-1].choices[i-1].answer"></textarea>
              <label class="radio">
                <input type="radio"
                :value="`${i}`"
                :name="`question-${n}`"
                :checked="`${i}` === form.questions[n-1].correctAnswer ? true : false"
                v-model="form.questions[n-1].correctAnswer">
                <span></span>
              </label>
            </fieldset>
          </div>
        </div>
      </div>
      <!-- form -->
    </div>
    <!-- end content -->

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
import { mapGetters, mapActions } from 'vuex';

export default {

  components: {
    AnimationLoader,
  },

  data() {
    return {
      paramBatch: '',
      paramTraining: '',
      paramMaterial: '',
      animationLoaderDisplay: false,
      apiReady: false,
      material: {},
      form: {
        available: '2020-01-01',
        closed: '2020-01-01',
        timeLimit: 0,
        questions: [],
      },
    };
  },

  computed: {
    ...mapGetters('trainerTest', [
      'questionTest',
    ]),

    back() {
      return {
        name: 'TrainerDetailTest',
        params: {
          batch: this.paramBatch,
          training: this.paramTraining,
        },
      };
    },
  },

  methods: {
    ...mapActions('trainerTest', [
      'getTest',
      'postTest',
      'putTest',
    ]),

    async getQuestions() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await new Promise((resolve) => {
        this.getTest({
          params: {
            batchId: this.paramBatch,
            training: this.paramTraining,
            materialId: this.paramMaterial,
          },
          resolve,
        });
      });

      // show loader
      this.animationLoaderDisplay = false;

      if (promise === 200) {
        this.apiReady = true;
        this.material = this.questionTest.data.material;

        if (this.material.questions !== null) {
          this.setform(this.questionTest.data);
        }
      } else {
        this.$func.popupLostConnection();
      }
    },

    setform(data) {
      this.form = {
        available: data.available,
        closed: data.closed,
        timeLimit: data.timeLimit,
      };

      this.form.questions = data.material.questions;
    },

    setFormQuestion() {
      for (let i = 0; i < 5; i += 1) {
        this.form.questions.push({
          questionText: '',
          choices: [
            {
              choice: '1',
              answer: '',
            },
            {
              choice: '2',
              answer: '',
            },
            {
              choice: '3',
              answer: '',
            },
            {
              choice: '4',
              answer: '',
            },
          ],
          correctAnswer: '1',
        });
      }
    },

    save() {
      if (this.validateForm()) {
        if (this.material.questions !== null) {
          this.reqApi(this.putTest);
        } else {
          this.form.timeLimit = parseInt(this.form.timeLimit, 10);
          this.reqApi(this.postTest);
        }
      }
    },

    async reqApi(action) {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await new Promise((resolve) => {
        action({
          params: {
            batchId: this.paramBatch,
            training: this.paramTraining,
            materialId: this.paramMaterial,
            test: this.form,
          },
          resolve,
        });
      });

      // show loader
      this.animationLoaderDisplay = false;

      if (promise === 200) {
        this.$func.popupSuccessfull('Berhasil simpan data', 5000, this.back);
      } else {
        this.$func.popupLostConnection();
      }
    },

    validateForm() {
      let questVal = 5;
      let choices = 20;

      if (this.form.timeLimit <= 0) {
        this.$func.popupError('Batas waktu harus lebih dari 0!', 0);
        return 0;
      }

      for (let i = 0; i < this.form.questions.length; i += 1) {
        if (this.form.questions[i].questionText.length === 0) {
          this.$func.popupError('Pertanyaan soal tidak lengkap!', 0);
          questVal -= 1;
          break;
        }
      }

      for (let i = 0; i < this.form.questions.length; i += 1) {
        for (let j = 0; j < this.form.questions[i].choices.length; j += 1) {
          if (this.form.questions[i].choices[j].answer.length === 0) {
            this.$func.popupError('Pilihan soal tidak lengkap!', 0);
            choices -= 1;
            break;
          }
        }
      }

      if (questVal !== 5) {
        return 0;
      }

      if (choices !== 20) {
        return 0;
      }

      return 1;
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Trainer');

    // get params
    this.paramBatch = parseInt(this.$route.params.batch, 10);
    this.paramTraining = this.$route.params.training;
    this.paramMaterial = parseInt(this.$route.params.material, 10);

    // set form array
    this.setFormQuestion();

    // req api
    this.getQuestions();
  },

};

</script>
