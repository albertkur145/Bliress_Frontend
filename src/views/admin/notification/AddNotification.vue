<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <router-link :to="{ name: 'AdminNotification' }" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">Tambah</span>
      </router-link>
      <div class="save">Simpan</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <div class="form-group">
        <fieldset>
          <legend>Ditujukan kepada</legend>
          <select class="input-text">
            <option value="batch 1">Batch 1</option>
            <option value="batch 2">Batch 2</option>
            <option value="batch 3">Batch 3</option>
            <option value="batch 4">Batch 4</option>
            <option value="batch 5">Batch 5</option>
            <option value="batch 6">Batch 6</option>
          </select>
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset>
          <legend>Judul</legend>
          <input type="text" class="input-text">
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset class="text-area">
          <legend>Pesan</legend>
          <textarea class="input-area"></textarea>
        </fieldset>
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
        font-size: 0.875em;

        &:hover {
          color: #003F62;
        }
      }
    }

    .content {
      margin-top: 3rem;
      padding: 1.375rem 1.0625rem;

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
            left: 0;
            bottom: 0;
            border: 0;
            outline: none;
            -webkit-appearance: none;
            color: #333;
            top: 0.4375rem;
            width: 100%;
            padding: 0.125rem 1rem 0 1.5rem;
            font-size: 0.875em;
          }

          &.text-area {
            min-height: 9rem;
          }

          .input-area {
            font-family: 'Roboto';
            position: absolute;
            box-sizing: border-box;
            background-color: transparent;
            top: 1.625rem;
            left: 0;
            bottom: 0.75rem;
            width: 97%;
            border: 0;
            outline: none;
            color: #333;
            -webkit-appearance: none;
            line-height: 1.375rem;
            padding: 0 1.5rem 1.75rem;
            font-size: 0.875em;
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
        padding: 1.5rem 1.25rem;

        .form-group {
          margin-bottom: 1.5rem;

          fieldset {
            min-height: 3rem;

            legend {
              padding: 0 0.375rem;
              font-size: 0.875em;
            }

            .input-text {
              top: 0.4375rem;
              padding: 0.125rem 1.25rem 0 2rem;
              font-size: 0.9375em;
            }

            &.text-area {
              min-height: 8rem;
            }

            .input-area {
              top: 1.625rem;
              bottom: 0.75rem;
              line-height: 1.375rem;
              padding: 0 1.9375rem 2rem;
              font-size: 0.9375em;
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
            margin-left: 0.5rem;
          }
        }

        .save {
          font-size: 1em;
        }
      }

      .content {
        margin-top: 3.75rem;
        padding: 2rem 1.75rem;

        .form-group {
          margin-bottom: 1.75rem;

          fieldset {
            min-height: 3.5rem;

            legend {
              padding: 0 0.5rem;
              font-size: 0.9375em;
            }

            .input-text {
              top: 0.4375rem;
              padding: 0.375rem 1.25rem 0 2.25rem;
              font-size: 1.0625em;
            }

            &.text-area {
              min-height: 8rem;
            }

            .input-area {
              top: 1.625rem;
              bottom: 0.75rem;
              padding: 0 2.3125rem 2rem;
              font-size: 1em;
              line-height: 1.4375rem;
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
      animationLoaderDisplay: false,
      popupMessageDisplay: false,
    };
  },

};

</script>
