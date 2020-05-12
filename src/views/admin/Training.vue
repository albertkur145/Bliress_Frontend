<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <router-link :to="{ name: 'AdminDetailBatch', params: { id: id } }" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">Training</span>
      </router-link>

      <router-link to="/admin/batch/detail/training/add">
        <font-awesome-icon icon="plus-circle" class="icon-plus"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->
  </div>
</template>

<style lang="scss" scoped>

  // width 320px - 480px (Mobile)
  @media (min-width: 320px) and (max-width: 480px) {
    #container {
      font-family: 'Roboto';
      max-width: 100%;
      min-height: 100vh;
      background-color: #FFF;

      .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        max-width: 100%;
        background-color: #0ABDE3;
        font-weight: 600;
        z-index: 1;
        padding: 1.0625rem 1.25rem;

        .back {
          color: #FFF;
          text-decoration: none;
          font-size: 1.125em;

          .text {
            margin-left: 0.75rem;
          }
        }

        .icon-plus {
          color: #FFF;
          font-size: 1.1875em;
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
      id: '',
    };
  },

  created() {
    this.id = this.$route.params.id;
  },

};

</script>
