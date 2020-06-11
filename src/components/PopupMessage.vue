<template>
  <!-- popup message -->
  <div class="popup-message" v-if="isShow">
    <div class="contain">
      <span class="message">{{ msg }}</span>

      <div>
        <button class="btn-yes" @click="hide()">
          <font-awesome-icon icon="check"></font-awesome-icon>
        </button>
      </div>

      <font-awesome-icon icon="times" class="close" @click="hide()"></font-awesome-icon>
    </div>
  </div>
  <!-- popup message -->
</template>

<style lang="scss" scoped>

  // global css
  .popup-message {
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    padding: 0 1.25rem;

    .contain {
      position: relative;
      background-color: #FFF;
      animation: popup .3s linear;
      border-radius: 0.375rem;

      .message {
        display: block;
        text-align: center;
        color: #444;
        padding: 3.25rem 3rem 0;
        font-size: 0.9375em;
      }

      .btn-yes {
        font-family: 'Roboto';
        width: 100%;
        border: 0;
        outline: none;
        cursor: pointer;
        background-color: #33D9B2;
        color: #FFF;
        font-weight: 600;
        transition: background-color .3s ease-out;
        margin-top: 2.75rem;
        height: 3.375rem;
        font-size: 1em;

        &:hover {
          background-color: rgba(33, 140, 116, 0.6);
        }
      }

      .close {
        position: absolute;
        cursor: pointer;
        color: #888;
        transition: color .1s linear;
        top: 0.875rem;
        right: 0.875rem;
        font-size: 0.875em;

        &:hover {
          color: #FF5252;
        }
      }
    }
  }

  @keyframes popup {
    from {
      transform: scale(0);
    } to {
      transform: scale(1);
    }
  }
  // global css

  // width 320px - 480px (Mobile)
  @media (min-width: 320px) and (max-width: 480px) {
    .popup-message {

      .contain {

        .message {
          padding: 3.5rem 3.25rem 0;
          font-size: 1em;
        }

        .btn-yes {
          margin-top: 3rem;
          height: 3.5rem;
          font-size: 1.0625em;
        }

        .close {
          top: 1rem;
          right: 1rem;
          font-size: 0.9375em;
        }
      }
    }
  }
  // width 320px - 480px (Mobile)

  // width > 481px (Big Mobile, Tablet, Desktop)
  @media (min-width: 481px) {
    .popup-message {

      .contain {

        .message {
          padding: 3.75rem 3.5rem 0;
          font-size: 1.0625em;
        }

        .btn-yes {
          margin-top: 3.25rem;
          height: 3.75rem;
          font-size: 1.125em;
        }

        .close {
          top: 1.0625rem;
          right: 1.0625rem;
          font-size: 1em;
        }
      }
    }
  }
  // width > 481px (Big Mobile, Tablet, Desktop)

</style>

<script>

export default {

  props: [
    'msg',
    'route',
  ],

  data() {
    return {
      isShow: true,
    };
  },

  methods: {
    hide() {
      this.isShow = false;

      if (this.route.change) {
        this.$router.push(this.route.name);
      }
    },
  },

};

</script>
