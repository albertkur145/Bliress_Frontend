<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <div class="space-between">
        <router-link :to="{ name: 'AdminEmployee', params: { id: id } }" class="back">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>
          <span class="text">Tambah</span>
        </router-link>
        <div class="save">Simpan</div>
      </div>

      <div class="people">
        <div class="empty" v-show="employees.length == 0">- Belum ada yang dipilih -</div>

        <div class="choosing" >
          <span v-for="(employee, index) in employees" :key="index">
            {{ employee }}
          </span>
        </div>
      </div>

      <div class="search">
        <label for="keyword">Pencarian</label>
        <input id="keyword" type="text" placeholder="Nama pegawai..." autocomplete="off">
      </div>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">

      <!-- list of employee -->
      <div class="employees">
        <div class="title">Pegawai</div>

        <div class="data">
          <div class="employee">
            <div class="name">Albert Kurniawan</div>
            <label class="checkbox"><input type="checkbox" value="Albert Kurniawan" v-model="employees"><span></span></label>
          </div>

          <hr>

          <div class="employee">
            <div class="name">Rendi Orton</div>
            <label class="checkbox"><input type="checkbox" value="Rendi Orton" v-model="employees"><span></span></label>
          </div>

          <hr>

          <div class="employee">
            <div class="name">Billy Saputra</div>
            <label class="checkbox"><input type="checkbox" value="Billy Saputra" v-model="employees"><span></span></label>
          </div>

          <hr>

          <div class="employee">
            <div class="name">Michael Nando</div>
            <label class="checkbox"><input type="checkbox" value="Michael Nando" v-model="employees"><span></span></label>
          </div>

          <hr>

          <div class="employee">
            <div class="name">Maria Lestari</div>
            <label class="checkbox"><input type="checkbox" value="Maria Lestari" v-model="employees"><span></span></label>
          </div>

          <hr>

          <div class="employee">
            <div class="name">Yuna Simanjuntak</div>
            <label class="checkbox"><input type="checkbox" value="Yuna Simanjuntak" v-model="employees"><span></span></label>
          </div>

          <hr>

          <div class="employee">
            <div class="name">Oktaviana Sari</div>
            <label class="checkbox"><input type="checkbox" value="Okativana Sari" v-model="employees"><span></span></label>
          </div>

          <hr>

          <div class="employee">
            <div class="name">Kori Syamsudin</div>
            <label class="checkbox"><input type="checkbox" value="Kori Syamsudin" v-model="employees"><span></span></label>
          </div>

          <hr>

          <div class="employee">
            <div class="name">Timothy</div>
            <label class="checkbox"><input type="checkbox" value="Timothy" v-model="employees"><span></span></label>
          </div>

          <hr>

          <div class="employee">
            <div class="name">Randra Jaya</div>
            <label class="checkbox"><input type="checkbox" value="Randra Joye" v-model="employees"><span></span></label>
          </div>

          <hr>

          <div class="employee">
            <div class="name">Elly Sugigi</div>
            <label class="checkbox"><input type="checkbox" value="Elly Sugigi" v-model="employees"><span></span></label>
          </div>

          <hr>

          <div class="employee">
            <div class="name">Ria Indah</div>
            <label class="checkbox"><input type="checkbox" value="Ria Indah" v-model="employees"><span></span></label>
          </div>

          <hr>

          <div class="employee">
            <div class="name">Chelsea Mutiara</div>
            <label class="checkbox"><input type="checkbox" value="Chelsea Mutiara" v-model="employees"><span></span></label>
          </div>

          <hr>

        </div>
      </div>
      <!-- list of employee -->

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
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      max-width: 100%;

      .space-between {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFF;
        background-color: #0ABDE3;
        font-weight: 600;
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

      .people {
        max-width: 100%;
        overflow-x: auto;
        background-color: #FFF;
        padding: 1.625rem 1rem;

        .empty {
          color: #888;
          font-size: 0.875em;
        }

        .choosing {

          span {
            cursor: pointer;
            color: #FFF;
            white-space: nowrap;
            border-radius: 5rem;
            background-image: linear-gradient(to right, #12c61a, #1ecd1d, #27d421, #2fdc24, #37e327);
            margin-right: 0.5rem;
            padding: 0.4375rem 1.0625rem;
            font-size: 0.8125em;
          }
        }
      }

      .search {
        max-width: 100%;
        background-color: #FFF;
        padding: 0.75rem 1rem 0.5rem;

        label {
          color: #444;
          font-weight: 500;
          font-size: 0.9375em;
        }

        input {
          box-sizing: border-box;
          font-family: 'Roboto';
          color: #444;
          outline: none;
          width: 100%;
          border: 0;
          font-size: 0.875em;
          padding: 0.8125rem 1.1875rem;
        }
      }
    }

    .content {
      padding: 13.75rem 1rem 1.5rem;

      .employees {

        .title {
          color: #444;
          font-weight: 500;
          font-size: 0.9375em;
        }

        .data {
          margin-top: 0.625rem;

          .employee {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            color: #444;
            margin-bottom: 0.5rem;
            padding: 0.25rem 0;
            font-size: 0.875em;

            .checkbox {

              &:hover > span {
                background-color: #BEBEBE;
              }

              input[type=checkbox] {
                position: absolute;
                opacity: 0;
                height: 0;
                width: 0;

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
                width: 1.125rem;
                height: 1.125rem;

                &::after {
                  content: "";
                  position: absolute;
                  display: none;
                  background-color: #FFF;
                  border-radius: 10rem;
                  top: 0.375rem;
                  left: 0.375rem;
                  width: 0.375rem;
                  height: 0.375rem;
                }
              }
            }
          }

          hr {
            border: 0.0625rem solid #EAEAEA;
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

        .space-between {
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

        .people {
          padding: 2rem 1.25rem;

          .empty {
            font-size: 0.9375em;
          }

          .choosing {

            span {
              padding: 0.5rem 1.125rem;
              font-size: 0.875em;
            }
          }
        }

        .search {
          padding: 1rem 1.25rem 0.5rem;

          label {
            font-size: 1em;
          }

          input {
            font-size: 0.9375em;
            padding: 0.875rem 1.25rem;
          }
        }
      }

      .content {
        padding: 15.5rem 1.25rem 2rem;

        .employees {

          .title {
            font-size: 1em;
          }

          .data {
            margin-top: 1rem;

            .employee {
              margin-bottom: 0.5rem;
              padding: 0.375rem 0;
              font-size: 0.9375em;

              .checkbox {

                span {
                  width: 1.25rem;
                  height: 1.25rem;

                  &::after {
                    top: 0.375rem;
                    left: 0.375rem;
                    width: 0.5rem;
                    height: 0.5rem;
                  }
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

        .space-between {
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

        .people {
          padding: 2.25rem 1.5rem;

          .empty {
            font-size: 1em;
          }

          .choosing {

            span {
              padding: 0.75rem 1.375rem;
              font-size: 0.9375em;
            }
          }
        }

        .search {
          padding: 1.25rem 1.5rem 0.75rem;

          label {
            font-size: 1.0625em;
          }

          input {
            font-size: 1em;
            padding: 1rem 1.375rem;
          }
        }
      }

      .content {
        padding: 17.5rem 1.5rem 2.5rem;

        .employees {

          .title {
            font-size: 1.0625em;
          }

          .data {
            margin-top: 1rem;

            .employee {
              margin-bottom: 0.5rem;
              padding: 0.5rem 0;
              font-size: 1em;

              .checkbox {

                span {
                  width: 1.4375rem;
                  height: 1.4375rem;

                  &::after {
                    top: 0.4375rem;
                    left: 0.4375rem;
                    width: 0.5875rem;
                    height: 0.5875rem;
                  }
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

import AnimationLoader from '@/components/AnimationLoader.vue';
import PopupMessage from '@/components/PopupMessage.vue';

export default {

  components: {
    AnimationLoader,
    PopupMessage,
  },

  data() {
    return {
      id: '',
      employees: [],
      animationLoaderDisplay: false,
      popupMessageDisplay: false,
    };
  },

  methods: {
    windowScrollXPeople() {
      const containPeople = document.querySelector('#container .head .people');
      const choosing = containPeople.querySelector('.choosing');
      const { lastChild } = choosing;

      containPeople.scrollTo(lastChild.offsetLeft, 0);
    },
  },

  created() {
    this.id = this.$route.params.id;
  },

  updated() {
    this.windowScrollXPeople();
  },

};

</script>
