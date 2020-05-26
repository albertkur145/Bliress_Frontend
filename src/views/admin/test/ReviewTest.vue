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
    <div class="content">
      <div class="material-name">{{ materialList[paramMaterial].name }}</div>

      <!-- questions -->
      <div class="preview">
        <div class="question" v-for="(value, index) in questions" :key="index">
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

export default {

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
      questions: [
        {
          questionText: 'Semua mahasiswa Perguruan Tinggi memiliki Nomor Induk Mahasiswa. Budi seorang mahasiswa. Jadi,',
          choices: [
            {
              choice: '1',
              answer: 'Budi mungkin memiliki nomor induk mahasiswa.',
            },
            {
              choice: '2',
              answer: 'Belum tentu Budi memiliki nomor induk mahasiswa.',
            },
            {
              choice: '3',
              answer: 'Budi memiliki nomor induk mahasiswa.',
            },
            {
              choice: '4',
              answer: 'Budi tidak memiliki nomor induk mahasiswa.',
            },
          ],
        },
        {
          questionText: 'Sebagian pedagang pecel lele mengeluhkan harga cabe naik. Pak Rudi seorang pedagang pecel lele.',
          choices: [
            {
              choice: '1',
              answer: 'Pak Rudi pasti mengeluhkan harga cabe naik.',
            },
            {
              choice: '2',
              answer: 'Pak Rudi tidak mengeluhkan harga cabe naik.',
            },
            {
              choice: '3',
              answer: 'Harga cabe bukanlah keluhan Pak Rudi.',
            },
            {
              choice: '4',
              answer: 'Pak Rudi mungkin ikut mengeluhkan harga cabe naik.',
            },
          ],
        },
        {
          questionText: 'Semua pemain sepakbola yang berkebangsaan Itali berwajah tampan. David Beckham adalah pemain sepakbola berkebangsaan Inggris.',
          choices: [
            {
              choice: '1',
              answer: 'David Beckham bukanlah pemain sepakbola yang tampan.',
            },
            {
              choice: '2',
              answer: 'David Beckham adalah pemain sepakbola yang tampan.',
            },
            {
              choice: '3',
              answer: 'Meskipun bukan berkebangsaan Italia, David Beckham pasti berwajah tampan.',
            },
            {
              choice: '4',
              answer: 'Tidak dapat ditarik kesimpulan.',
            },
          ],
        },
        {
          questionText: 'Sebagian orang yang berminat menjadi pejabat hanya menginginkan harta dan tahta. Budi tidak berminat menjadi pejabat.',
          choices: [
            {
              choice: '1',
              answer: 'Budi tidak menginginkan harta dan tahta.',
            },
            {
              choice: '2',
              answer: 'Tahta bukanlah keinginan Budi, tapi harta mungkin ya.',
            },
            {
              choice: '3',
              answer: 'Budi menginginkan tahta tapi tidak berminat menjadi pejabat.',
            },
            {
              choice: '4',
              answer: 'Tidak dapat ditarik kesimpulan.',
            },
          ],
        },
        {
          questionText: 'Coklat yang dibungkus dalam kemasan menarik sangat laris terjual. Coklat Jago dibungkus dalam kemasan berwarna merah menyala. Menurut anak-anak, warna merah menyala sangatlah menarik.',
          choices: [
            {
              choice: '1',
              answer: 'Coklat Jago kurang laris terjual di kalangan anak-anak.',
            },
            {
              choice: '2',
              answer: 'Coklat Jago tidak laku terjual di kalangan orang dewasa.',
            },
            {
              choice: '3',
              answer: 'Coklat Jago laris terjual.',
            },
            {
              choice: '4',
              answer: 'Coklat Jago laris terjual di kalangan anak-anak.',
            },
          ],
        },
      ],
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
