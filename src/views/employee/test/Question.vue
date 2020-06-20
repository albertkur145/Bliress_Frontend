<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <span class="back" @click="confirmOut">
        <font-awesome-icon icon="sign-out-alt"></font-awesome-icon>
      </span>
      <div class="text">Test</div>
      <div class="time-limit">{{ this.time.minute }}:{{ this.time.second }}</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">

      <!-- questions -->
      <div class="preview">
        <div class="question" v-for="(value, i) in questionList.data.questions" :key="value.id">
          <div class="question-text">{{ value.questionText }}</div>
          <span style="display: none">{{ form[i].id = value.id }}</span>
          <div class="choices-list">
            <label class="radio" v-for="(choice) in value.choices" :key="choice.choice">
              <input type="radio"
              :value="choice.choice"
              :name="`choice-${value.id}`"
              v-model="form[i].choice"><span></span>
              <div class="answer">{{ choice.answer }}</div>
            </label>
          </div>
        </div>

        <div class="btn-submit">
          <button @click="confirmSubmit">Submit</button>
        </div>
      </div>
      <!-- questions -->

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
      z-index: 1;
      padding: 0.875rem 1rem;

      .back {
        position: absolute;
        color: #FFF;
        cursor: pointer;
        transform: rotate(180deg);
        top: 0.875rem;
        left: 1rem;
        font-size: 1.0625em;
      }

      .text {
        font-weight: 600;
        font-size: 1.0625em;
      }

      .time-limit {
        position: absolute;
        color: #FFF;
        cursor: pointer;
        top: 1rem;
        right: 1rem;
        font-size: 0.9375em;
      }
    }

    .content {
      margin-top: 3rem;

      .preview {
        padding: 1.5rem 1rem;

        .question {
          background-color: #FFF;
          border-radius: 0.375rem;
          padding: 0.75rem;
          margin-bottom: 0.75rem;

          .question-text {
            color: #444;
            font-size: 0.9375em;
          }

          .choices-list {
            margin-top: 1.25rem;

            .radio {
              display: flex;
              margin-bottom: 0.75rem;

              input[type=radio] {
                position: absolute;
                opacity: 0;
                width: 0;
                height: 0;

                &:checked + span  {
                  background-color: #3498db;
                }

                &:checked + span::after  {
                  display: block;
                }
              }

              span {
                position: relative;
                display: inline-block;
                background-color: #DDD;
                border-radius: 10rem;
                width: 1.0625rem;
                height: 1.0625rem;
                margin-top: 0.0625rem;

                &::after {
                  content: "";
                  position: absolute;
                  display: none;
                  background-color: #FFF;
                  border-radius: 10rem;
                  top: 0.375rem;
                  left: 0.375rem;
                  width: 0.3125rem;
                  height: 0.3125rem;
                }
              }

              .answer {
                color: #666;
                min-width: 85%;
                max-width: 85%;
                margin-left: 0.75rem;
                line-height: 1.125rem;
                font-size: 0.875em;
              }
            }
          }
        }

        .btn-submit {
          text-align: right;

          button {
            border: 0;
            outline: none;
            color: #FFF;
            background-color: #1DD1A1;
            font-weight: 600;
            border-radius: 0.3125rem;
            cursor: pointer;
            transition: background-color .2s ease-out;
            margin-top: 0.5rem;
            font-size: 0.75em;
            padding: 0.8125rem 1.0625rem;

            &:hover {
              background-color: #10AC84;
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
          top: 1.0625rem;
          left: 1.25rem;
          font-size: 1.125em;
        }

        .text {
          font-size: 1.125em;
        }

        .time-limit {
          top: 1.1875rem;
          right: 1.25rem;
          font-size: 1em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .preview {
          padding: 1.75rem 1.25rem;

          .question {
            padding: 1rem;
            margin-bottom: 1rem;

            .question-text {
              font-size: 1em;
            }

            .choices-list {
              margin-top: 1.5rem;

              .radio {
                margin-bottom: 1rem;

                span {
                  width: 1.125rem;
                  height: 1.125rem;
                  margin-top: 0.125rem;

                  &::after {
                    top: 0.375rem;
                    left: 0.375rem;
                    width: 0.375rem;
                    height: 0.375rem;
                  }
                }

                .answer {
                  line-height: 1.25rem;
                  font-size: 0.9375em;
                }
              }
            }
          }

          .btn-submit {

            button {
              font-size: 0.8125em;
              padding: 0.875rem 1.125rem;
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
          top: 1.1875rem;
          left: 1.5rem;
          font-size: 1.25em;
        }

        .text {
          font-size: 1.25em;
        }

        .time-limit {
          top: 1.3125rem;
          right: 1.5rem;
          font-size: 1.125em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .preview {
          padding: 2rem 1.5rem;

          .question {
            padding: 1.25rem;
            margin-bottom: 1.25rem;

            .question-text {
              font-size: 1.0625em;
            }

            .choices-list {
              margin-top: 1.75rem;

              .radio {
                margin-bottom: 1.25rem;

                span {
                  width: 1.3125rem;
                  height: 1.3125rem;
                  margin-top: 0.0625rem;

                  &::after {
                    top: 0.4375rem;
                    left: 0.4375rem;
                    width: 0.4375rem;
                    height: 0.4375rem;
                  }
                }

                .answer {
                  line-height: 1.375rem;
                  font-size: 1em;
                }
              }
            }
          }

          .btn-submit {

            button {
              font-size: 0.875em;
              padding: 0.9375rem 1.1875rem;
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
      animationLoaderDisplay: false,
      apiReady: '',
      paramTraining: '',
      paramMaterial: '',
      timeLimit: null,
      time: {
        minute: null,
        second: null,
      },
      form: [
        {
          id: null,
          choice: '',
        },
        {
          id: null,
          choice: '',
        },
        {
          id: null,
          choice: '',
        },
        {
          id: null,
          choice: '',
        },
        {
          id: null,
          choice: '',
        },
      ],
    };
  },

  computed: {
    ...mapGetters('employeeTest', [
      'questionList',
    ]),

    back() {
      return {
        name: 'DetailTest',
        params: {
          training: this.paramTraining,
        },
      };
    },
  },

  methods: {
    ...mapActions('employeeTest', [
      'getQuestions',
      'submitTest',
    ]),

    async getAllQuestions() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await new Promise((resolve) => {
        this.getQuestions({
          params: {
            employeeId: this.$cookies.get('user').id,
            training: this.paramTraining,
            materialId: this.paramMaterial,
          },
          resolve,
        });
      });

      // hide loader
      this.animationLoaderDisplay = false;

      // show popup message if code response != 200
      if (promise === 200) {
        this.apiReady = true;
        this.timeLimit = parseInt(localStorage.getItem('timeLimit'), 10) + (this.questionList.data.timeLimit * 60 * 1000);
      } else {
        // show popup error
        this.$func.popupLostConnection();
      }
    },

    confirmOut() {
      this.$func.popupConfirmDialog(
        'Lho, sudah menyerah?',
        'Test akan disubmit secara otomatis!',
      ).then((result) => {
        if (result.value) {
          this.submit();
        }
      });
    },

    confirmSubmit() {
      this.$func.popupConfirmDialog(
        'Apakah kamu yakin?',
        'Test ini menentukan tingkat pemahaman kamu!',
      ).then((result) => {
        if (result.value) {
          this.submit();
        }
      });
    },

    async submit() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await new Promise((resolve) => {
        this.submitTest({
          params: {
            employeeId: this.$cookies.get('user').id,
            materialId: this.paramMaterial,
            training: this.paramTraining,
            question: this.form,
          },
          resolve,
        });
      });

      // hide loader
      this.animationLoaderDisplay = false;

      // show popup
      if (promise === 200) {
        localStorage.removeItem('timeLimit');
        this.$func.popupSuccessfull('Berhasil submit test', 5000, this.back);
      } else {
        this.$func.popupLostConnection();
      }
    },
  },

  mounted() {
    setInterval(() => {
      const count = this.timeLimit - new Date().getTime();
      this.time.minute = Math.floor(count / 1000 / 60);
      this.time.second = Math.floor((count / 1000) % 60);

      if (this.time.second < 10) {
        this.time.second = `0${this.time.second}`;
      }

      if (this.time.minute < 10) {
        this.time.minute = `0${this.time.minute}`;
      }
    }, 1000);
  },

  created() {
    // check user auth
    this.$func.userAuth('Employee');

    // get params
    this.paramTraining = this.$route.params.training;
    this.paramMaterial = parseInt(this.$route.params.material, 10);

    // req api
    this.getAllQuestions();
  },

};
</script>
