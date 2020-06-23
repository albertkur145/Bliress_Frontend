<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link :to="back" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">Tambah</span>
      </router-link>
      <div class="save" @click="validateForm">Simpan</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <div class="form">
        <div class="form-group">
          <fieldset>
            <legend>Judul materi</legend>
            <input type="text" class="input-text" v-model="form.name">
          </fieldset>
        </div>

        <label for="file-input" class="upload-file">
          <input type="file" id="file-input" @change="onFileChange">
          <span class="upload-custom">Upload file</span>
          <span class="file-name">{{ fileName }}</span>
        </label>
      </div>
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
      color: #FFF;
      background-color: #0ABDE3;
      font-weight: 600;
      z-index: 1;
      padding: 0.875rem 1rem;

      .back {
        text-decoration: none;
        color: #FFF;
        font-size: 1.0625em;

        .text {
          margin-left: 0.5rem;
        }
      }

      .save {
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 500;
        transition: color .2s ease-out;
        font-size: 0.8125em;

        &:hover {
          color: #003F62;
        }
      }
    }

    .content {
      margin-top: 3rem;

      .form {
        padding: 1rem;

        .form-group {
          max-width: 100%;
          margin-bottom: 1.25rem;

          fieldset {
            border: 0.0625rem solid #AAA;
            border-radius: 0.5rem;
            position: relative;
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
              top: 0.4375rem;
              left: 0;
              bottom: 0;
              width: 100%;
              border: 0;
              outline: none;
              -webkit-appearance: none;
              color: #333;
              padding: 0.125rem 1rem 0 1.5rem;
              font-size: 0.875em;
            }
          }
        }

        .upload-file {
          display: flex;
          align-items: center;

          input {
            position: absolute;
            opacity: 0;
          }

          .upload-custom {
            text-transform: uppercase;
            border: 0.0625rem dashed #218C74;
            color: #218C74;
            text-align: center;
            border-radius: 0.75rem;
            padding: 0.625rem 0.875rem;
            font-size: 0.6875em;
          }

          .file-name {
            color: #4B4B4B;
            margin-left: 0.75rem;
            font-size: 0.8125em;
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

        .save {
          font-size: 0.875em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .form {
          padding: 1.25rem;

          .form-group {
            margin-bottom: 1.5rem;

            fieldset {
              min-height: 3rem;

              legend {
                padding: 0 0.375rem;
                font-size: 0.875em;
              }

              .input-text {
                padding: 0.125rem 1.25rem 0 2rem;
                font-size: 0.9375em;
              }
            }
          }

          .upload-file {

            .upload-custom {
              padding: 0.6875rem 0.9375rem;
              font-size: 0.8125em;
            }

            .file-name {
              font-size: 0.875em;
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

        .save {
          font-size: 1em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .form {
          padding: 1.5rem;

          .form-group {
            margin-bottom: 1.75rem;

            fieldset {
              min-height: 3.5rem;

              legend {
                padding: 0 0.5rem;
                font-size: 0.9375em;
              }

              .input-text {
                padding: 0.375rem 1.25rem 0 2.25rem;
                font-size: 1.0625em;
              }
            }
          }

          .upload-file {

            .upload-custom {
              padding: 0.75rem 1rem;
              font-size: 0.875em;
            }

            .file-name {
              font-size: 0.9375em;
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
import { mapActions } from 'vuex';

export default {

  components: {
    AnimationLoader,
  },

  data() {
    return {
      animationLoaderDisplay: false,
      paramTraining: '',
      paramBatch: '',
      fileName: '',
      form: {
        name: '',
        file: '',
      },
    };
  },

  computed: {
    back() {
      return {
        name: 'TrainerDetailTraining',
        params: {
          training: this.paramTraining,
          batch: this.paramBatch,
        },
      };
    },
  },

  methods: {
    ...mapActions('trainerMaterial', [
      'postMaterial',
    ]),

    onFileChange(e) {
      this.fileName = e.target.files[0].name;
      this.form.file = 'time.pptx';
    },

    validateForm() {
      if (this.form.name && this.form.file) {
        this.addMaterial();
      } else {
        this.$func.popupError('Form tidak lengkap!', 0);
      }
    },

    async addMaterial() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await new Promise((resolve) => {
        this.postMaterial({
          params: {
            batchId: this.paramBatch,
            training: this.paramTraining,
            material: this.form,
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
  },

  created() {
    // check user auth
    this.$func.userAuth('Trainer');

    // get params
    this.paramBatch = parseInt(this.$route.params.batch, 10);
    this.paramTraining = this.$route.params.training;
  },

};

</script>
