<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link :to="back" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
      </router-link>
      <div class="text">Preview</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">
      <div class="material-name">{{ material.name }}</div>

      <!-- questions -->
      <div class="preview">
        <div class="question" v-for="(value, index) in material.questions" :key="value.id">
          <div class="question-text">{{ value.questionText }}</div>
          <div class="choices-list">
            <label class="radio" v-for="(choice, key) in value.choices" :key="key">
              <input type="radio" :value="choice.choice" :name="`choice-${index}`"><span></span>
              <div class="answer">{{ choice.answer }}</div>
            </label>
          </div>
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
      font-weight: 600;
      z-index: 1;
      padding: 0.875rem 1rem;

      .back {
        position: absolute;
        color: #FFF;
        top: 0.875rem;
        left: 1rem;
        font-size: 1.0625em;
      }

      .text {
        font-size: 1.0625em;
      }
    }

    .content {
      margin-top: 3rem;

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
      }

      .content {
        margin-top: 3.375rem;

        .material-name {
          padding: 2rem 1.5rem 4rem;
          font-size: 1.75em;
        }

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
      }

      .content {
        margin-top: 3.75rem;

        .material-name {
          padding: 2.5rem 2rem 4.5rem;
          font-size: 1.875em;
        }

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
      apiReady: false,
      animationLoaderDisplay: false,
      material: {},
    };
  },

  computed: {
    ...mapGetters('adminTest', [
      'questionTest',
    ]),

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

  methods: {
    ...mapActions('adminTest', [
      'getTest',
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
      } else {
        this.$func.popupLostConnection();
      }
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Admin');

    // get params
    this.paramBatch = parseInt(this.$route.params.batch, 10);
    this.paramTraining = this.$route.params.training;
    this.paramMaterial = parseInt(this.$route.params.material, 10);

    // req api
    this.getQuestions();
  },

};

</script>
