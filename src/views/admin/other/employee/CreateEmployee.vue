<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link :to="{ name: 'AdminMenuEmployee' }" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">{{ title }}</span>
      </router-link>
      <div class="save">Simpan</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <div class="form">
        <div class="form-group">
          <fieldset>
            <legend>Nama</legend>
            <input type="text" class="input-text">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Email</legend>
            <input type="text" class="input-text">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Password</legend>
            <input type="password" class="input-text">
            <!-- <font-awesome-icon icon="chevron-right" class="change-password"></font-awesome-icon> -->
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Nomor HP</legend>
            <input type="number" class="input-text">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Jabatan</legend>
            <input type="text" class="input-text">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Tanggal lahir</legend>
            <input type="date" value="2020-01-01" class="input-text">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Jenis kelamin</legend>
            <select class="input-text">
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>
          </fieldset>
        </div>
      </div>
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
          margin-bottom: 1rem;

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
              left: 0;
              bottom: 0;
              width: 100%;
              border: 0;
              outline: none;
              -webkit-appearance: none;
              color: #333;
              top: 0.4375rem;
              padding: 0.125rem 1rem 0 1.5rem;
              font-size: 0.875em;

              &[type=number]::-webkit-outer-spin-button,
              &[type=number]::-webkit-inner-spin-button {
                -webkit-appearance: none;
              }

              &[type=date] {
                padding: 0.125rem 1rem 0 1.5rem;
              }

              &[type=date]::-webkit-inner-spin-button {
                -webkit-appearance: none;
              }
            }

            .change-password {
              color: #0984E3;
              cursor: pointer;
              position: absolute;
              top: 1.5875rem;
              right: 0.75rem;
              font-size: 0.875em;
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
          font-size: 1.125em;

          .text {
            margin-left: 0.5rem;
          }
        }

        .save {
          font-size: 0.9375em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .form {
          padding: 1.25rem;

          .form-group {
            margin-bottom: 1.25rem;

            fieldset {
              min-height: 3rem;

              legend {
                padding: 0 0.375rem;
                font-size: 0.875em;
              }

              .input-text {
                padding: 0.125rem 1.25rem 0 2rem;
                font-size: 0.9375em;

                &[type=date] {
                  padding: 0.125rem 1.25rem 0 1.8125rem;
                }
              }

              .change-password {
                top: 1.75rem;
                right: 0.875rem;
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
            margin-bottom: 1.5rem;

            fieldset {
              min-height: 3.5rem;

              legend {
                padding: 0 0.5rem;
                font-size: 0.9375em;
              }

              .input-text {
                padding: 0.375rem 1.25rem 0 2.25rem;
                font-size: 1.0625em;

                &[type=date] {
                  padding: 0.125rem 1.25rem 0 2.25rem;
                }
              }

              .change-password {
                top: 2rem;
                right: 1rem;
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
      paramId: '',
      animationLoaderDisplay: false,
      popupMessageDisplay: false,
    };
  },

  computed: {
    title() {
      if (this.paramId) {
        return 'Ubah';
      }

      return 'Tambah';
    },
  },

  created() {
    this.paramId = this.$route.params.id;
  },

};

</script>
