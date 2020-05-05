<template>
  <div id="container">
    <!-- head -->
    <div class="head">
      <div class="text">Test</div>
      <router-link to="/test/add" class="add">+</router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content"></div>
    <!-- end content  -->

    <MenuBar></MenuBar>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import MenuBar from '../../components/employee/MenuBar.vue';

export default {

  components: {
    MenuBar,
  },

  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },

  methods: {
    getWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    login() {
      this.$router.push({ name: 'Training' });
    },
  },

  created() {
    window.addEventListener('resize', this.getWindowWidth);
  },

};
</script>
