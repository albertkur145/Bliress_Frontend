<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link :to="{ name: 'AdminMenuEmployee' }" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">{{ title }}</span>
      </router-link>
      <div class="save" @click="validationForm">Simpan</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content" v-if="apiReady">
      <div class="form">
        <div class="form-group">
          <fieldset>
            <legend>Nama</legend>
            <input type="text" class="input-text" v-model="form.name">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Email</legend>
            <input type="text" class="input-text" v-model="form.email">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Password</legend>
            <input
            :class="{ 'fieldset-disabled': inputDisabled }"
            :type="passwordType"
            class="input-text"
            v-model="form.password"
            :disabled="inputDisabled">

            <font-awesome-icon v-if="!paramId" :icon="showPasswordIcon"
            class="eye-icon" @click="tooglePassword"></font-awesome-icon>

            <div v-else class="reset-password" @click="confirmReset">reset</div>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Nomor HP</legend>
            <input type="number" class="input-text" v-model="form.phoneNumber">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Divisi</legend>
            <input type="text" class="input-text" v-model="form.division">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Tanggal lahir</legend>
            <input type="date" value="2020-01-01" class="input-text" v-model="form.birthdate">
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Jenis kelamin</legend>
            <select class="input-text" v-model="form.gender">
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>
          </fieldset>
        </div>

        <div class="form-group">
          <fieldset>
            <legend>Batch</legend>
            <select class="input-text" v-model="form.batchId">
              <option value="" disabled>Pilih batch</option>
              <option v-for="(value) in batchList.data"
              :key="value.id"
              :value="value.id">{{ value.batch }} - {{ value.year }}
              </option>
            </select>
          </fieldset>
        </div>
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

            .eye-icon {
              color: #EE5A24;
              cursor: pointer;
              position: absolute;
              top: 1.5875rem;
              right: 0.75rem;
              font-size: 0.875em;
            }

            .reset-password {
              cursor: pointer;
              position: absolute;
              background-color: #FF5252;
              color: #FFF;
              border-radius: 2rem;
              top: 1.5rem;
              right: 0.75rem;
              padding: 0.25rem 0.5rem;
              font-size: 0.75em;
            }
          }

          .fieldset-disabled:hover {
            cursor: no-drop;
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

              .eye-icon {
                top: 1.75rem;
                right: 0.875rem;
                font-size: 0.9375em;
              }

              .reset-password {
                top: 1.5rem;
                right: 0.875rem;
                padding: 0.3125rem 0.5875rem;
                font-size: 0.8125em;
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

              .eye-icon {
                top: 2rem;
                right: 1rem;
                font-size: 1em;
              }

              .reset-password {
                top: 1.6875rem;
                right: 1rem;
                padding: 0.375rem 0.625rem;
                font-size: 0.875em;
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
      paramId: '',
      animationLoaderDisplay: false,
      passwordType: 'password',
      showPasswordIcon: 'eye-slash',
      apiReady: false,
      inputDisabled: false,
      form: {
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        division: '',
        birthdate: '1990-01-01',
        gender: 'Pria',
        batchId: '',
      },
    };
  },

  computed: {
    ...mapGetters('adminEmployee', [
      'employeeData',
    ]),

    ...mapGetters('adminBatch', [
      'batchList',
    ]),

    title() {
      if (this.paramId) {
        return 'Ubah';
      }

      return 'Tambah';
    },
  },

  methods: {
    ...mapActions('adminEmployee', [
      'getEmployee',
      'postEmployee',
      'putEmployee',
      'resetPassword',
    ]),

    ...mapActions('adminBatch', [
      'getBatch',
    ]),

    async getAllBatch() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseGetAllBatch();

      // show loader
      this.animationLoaderDisplay = false;
      this.dataReady(promise);
    },

    promiseGetAllBatch() {
      return new Promise((resolve) => {
        this.getBatch({
          resolve,
        });
      });
    },

    dataReady(promise) {
      if (promise === 200) {
        this.apiReady = true;
      } else {
        this.$func.popupLostConnection();
      }
    },

    async getDetailEmployee() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseGetDetailEmployee();

      // show loader
      this.animationLoaderDisplay = false;
      this.afterGetDetailEmployee(promise);
    },

    promiseGetDetailEmployee() {
      return new Promise((resolve) => {
        this.getEmployee({
          params: {
            id: this.paramId,
          },
          resolve,
        });
      });
    },

    afterGetDetailEmployee(promise) {
      if (promise === 200) {
        this.setForm(this.employeeData.data);
      } else {
        this.$func.popupLostConnection();
      }
    },

    setForm(data) {
      this.form = {
        name: data.name,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
        division: data.division,
        birthdate: data.birthdate,
        gender: data.gender,
        batchId: data.batchId,
      };
    },

    async reqApi(action) {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseReqApi(action);

      // show loader
      this.animationLoaderDisplay = false;
      this.afterReqApi(promise);
    },

    promiseReqApi(action) {
      return new Promise((resolve) => {
        action({
          params: this.form,
          resolve,
        });
      });
    },

    afterReqApi(promise) {
      if (promise === 200) {
        this.$func.popupSuccessfull('Berhasil simpan data', 5000, { name: 'AdminMenuEmployee' });
      } else {
        this.$func.popupLostConnection();
      }
    },

    tooglePassword() {
      if (this.passwordType === 'password') {
        this.passwordType = 'text';
        this.showPasswordIcon = 'eye';
      } else {
        this.passwordType = 'password';
        this.showPasswordIcon = 'eye-slash';
      }
    },

    save() {
      if (!this.paramId) {
        this.reqApi(this.postEmployee);
      } else {
        this.form.id = this.paramId;
        delete this.form.password;
        this.reqApi(this.putEmployee);
      }
    },

    validationForm() {
      const regEmail = /^[a-zA-Z0-9._-]+@[a-z]{5,10}.[a-z]{2,5}$/;
      const regPhoneNumber = /^08[0-9]{8,11}$/;

      if (this.form.name.length === 0
      || this.form.password.length === 0
      || this.form.division.length === 0
      || this.form.batchId.length === 0) {
        this.$func.popupError('Form tidak lengkap!', 0);
      } else if (!regEmail.test(this.form.email)) {
        this.$func.popupError('Email tidak valid!', 0);
      } else if (!regPhoneNumber.test(this.form.phoneNumber)) {
        this.$func.popupError('Nomor HP tidak valid!', 0);
      } else {
        this.save();
      }
    },

    async confirmReset() {
      const res = await this.$func.popupConfirmDialog(
        'Kamu yakin?',
        'Password akan di reset menjadi 12345',
      );

      if (res.value) {
        this.resetPasswordUser();
      }
    },

    async resetPasswordUser() {
      // show loader
      this.animationLoaderDisplay = true;

      // req api
      const promise = await this.promiseResetPassword();

      // show loader
      this.animationLoaderDisplay = false;
      this.afterResetPassword(promise);
    },

    promiseResetPassword() {
      return new Promise((resolve) => {
        this.resetPassword({
          params: {
            id: this.paramId,
          },
          resolve,
        });
      });
    },

    afterResetPassword(promise) {
      if (promise === 200) {
        this.$func.popupSuccessfull('Berhasil reset password', 5000, { name: 'AdminMenuEmployee' });
      } else {
        this.$func.popupLostConnection();
      }
    },
  },

  created() {
    // check user auth
    this.$func.userAuth('Admin');

    // get params
    this.paramId = parseInt(this.$route.params.id, 10);

    // req api
    this.getAllBatch();
    if (this.paramId) {
      this.inputDisabled = true;
      this.getDetailEmployee();
    }
  },

};

</script>
