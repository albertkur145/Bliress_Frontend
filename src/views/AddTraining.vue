<template>
  <div id="container">
    <div class="width">{{ windowWidth }}</div>
    <!-- head -->
    <div class="head">
      <router-link to="/training" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">Tambah Training</span>
      </router-link>
      <div class="save">Simpan</div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <div class="form-group">
        <fieldset>
          <legend>Training ke</legend>
          <select class="input-text">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset>
          <legend>Tanggal</legend>
          <input type="date" class="input-text" value="2020-01-01">
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset class="text-area">
          <legend>Lokasi</legend>
          <textarea class="input-area"></textarea>
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset>
          <legend>Jam mulai</legend>
          <select class="input-text">
            <option value="06:00 WIB">06:00 WIB</option>
            <option value="07:00 WIB">07:00 WIB</option>
            <option value="08:00 WIB">08:00 WIB</option>
            <option value="09:00 WIB">09:00 WIB</option>
            <option value="10:00 WIB">10:00 WIB</option>
            <option value="11:00 WIB">11:00 WIB</option>
            <option value="12:00 WIB">12:00 WIB</option>
            <option value="13:00 WIB">13:00 WIB</option>
            <option value="14:00 WIB">14:00 WIB</option>
            <option value="15:00 WIB">15:00 WIB</option>
            <option value="16:00 WIB">16:00 WIB</option>
            <option value="17:00 WIB">17:00 WIB</option>
            <option value="18:00 WIB">18:00 WIB</option>
            <option value="19:00 WIB">19:00 WIB</option>
            <option value="20:00 WIB">20:00 WIB</option>
            <option value="21:00 WIB">21:00 WIB</option>
            <option value="22:00 WIB">22:00 WIB</option>
            <option value="23:00 WIB">23:00 WIB</option>
            <option value="24:00 WIB">24:00 WIB</option>
          </select>
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset>
          <legend>Jam selesai</legend>
          <select class="input-text">
            <option value="06:00 WIB">06:00 WIB</option>
            <option value="07:00 WIB">07:00 WIB</option>
            <option value="08:00 WIB">08:00 WIB</option>
            <option value="09:00 WIB">09:00 WIB</option>
            <option value="10:00 WIB">10:00 WIB</option>
            <option value="11:00 WIB">11:00 WIB</option>
            <option value="12:00 WIB">12:00 WIB</option>
            <option value="13:00 WIB">13:00 WIB</option>
            <option value="14:00 WIB">14:00 WIB</option>
            <option value="15:00 WIB">15:00 WIB</option>
            <option value="16:00 WIB">16:00 WIB</option>
            <option value="17:00 WIB">17:00 WIB</option>
            <option value="18:00 WIB">18:00 WIB</option>
            <option value="19:00 WIB">19:00 WIB</option>
            <option value="20:00 WIB">20:00 WIB</option>
            <option value="21:00 WIB">21:00 WIB</option>
            <option value="22:00 WIB">22:00 WIB</option>
            <option value="23:00 WIB">23:00 WIB</option>
            <option value="24:00 WIB">24:00 WIB</option>
          </select>
        </fieldset>
      </div>

      <div class="form-group">
        <fieldset>
          <legend>Trainer</legend>
          <select class="input-text">
            <option value="Andi Law">Andi Law</option>
            <option value="Rudi Hartono">Rudi Hartono</option>
            <option value="Heryanto Surya">Heryanto Surya</option>
            <option value="Chelsea">Chelsea</option>
            <option value="Martin Sutanto">Martin Sutanto</option>
            <option value="Joe Taslim">Joe Taslim</option>
          </select>
        </fieldset>
      </div>
    </div>
    <!-- end content -->
  </div>
</template>

<style lang="scss" scoped>

  // width 320px - 480px (Mobile)
  @media (min-width: 320px) and (max-width: 480px) {
    #container {
      font-family: 'Roboto';
      max-width: 100%;
      min-height: 100vh;
      background-color: #F2F2F2;

      .head {
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
        padding: 1.125rem 1.25rem;
        z-index: 1;

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
          font-size: 0.875em;
          transition: color .2s ease-out;

          &:hover {
            color: #003F62;
          }
        }
      }

      .content {
        background-color: #FFF;
        margin-top: 2.25rem;
        padding: 1.5rem 1.25rem;

        .form-group {
          max-width: 100%;
          margin-bottom: 1.5rem;

          fieldset {
            border: 0.0625rem solid #AAA;
            border-radius: 0.5rem;
            position: relative;
            max-width: 100%;
            min-height: 3rem;

            legend {
              padding: 0 0.375rem;
              color: #777;
              font-size: 0.875em;
            }

            .input-text {
              position: absolute;
              box-sizing: border-box;
              background-color: transparent;
              top: 0.4375rem;
              left: 0;
              bottom: 0;
              width: 97%;
              border: 0;
              outline: none;
              -webkit-appearance: none;
              padding: 0.125rem 1.25rem 0 2rem;
              font-size: 0.9375rem;
              color: #333;

              &[type=date] {
                padding: 0.125rem 1.25rem 0 1.8125rem;
              }

              &[type=date]::-webkit-inner-spin-button {
                -webkit-appearance: none;
              }
            }

            &.text-area {
              min-height: 8rem;
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
              -webkit-appearance: none;
              padding: 0 1.9375rem 2rem;
              font-size: 0.9375em;
              line-height: 1.375rem;
              color: #333;
            }
          }
        }
      }
    }
  }
  // width 320px - 480px (Mobile)

</style>

<script>
export default {

  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },

  methods: {
    getWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },

  created() {
    window.addEventListener('resize', this.getWindowWidth);
  },

};
</script>
