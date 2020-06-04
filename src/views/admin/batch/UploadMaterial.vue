<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link :to="back" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">Tambah</span>
      </router-link>
      <div class="save">Simpan</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <div class="form">
        <label for="file-input" class="upload-file">
          <input type="file" id="file-input" @change="onFileChange">
          <span class="upload-custom">Upload file</span>
          <span class="file-name">{{ fileName }}</span>
        </label>
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

export default {

  data() {
    return {
      id: '',
      paramTraining: '',
      fileName: '',
    };
  },

  computed: {
    back() {
      return {
        name: 'AdminMaterialTraining',
        params: {
          batch: this.id,
          training: this.paramTraining,
        },
      };
    },
  },

  methods: {
    onFileChange(e) {
      this.fileName = e.target.files[0].name;
    },
  },

  created() {
    this.id = this.$route.params.batch;
    this.paramTraining = this.$route.params.training;
  },

};

</script>
