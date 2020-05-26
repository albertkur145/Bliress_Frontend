<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <div class="text">Pegawai</div>
      <router-link :to="{ name: 'AdminAddEmployee' }">
        <font-awesome-icon icon="plus-circle" class="icon-plus"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">
      <!-- search -->
      <div class="search">
        <label for="keyword">Pencarian</label>
        <input id="keyword" type="text" placeholder="Nama pegawai..." autocomplete="off">
      </div>
      <!-- search -->

      <!-- employees -->
      <div class="data-employees">
        <table>
          <thead>
            <th>ID</th>
            <th>Nama</th>
            <th></th>
          </thead>

          <tbody>
            <tr v-for="(value, index) in employees" :key="index">
              <td>{{ value.id }}</td>
              <td>{{ value.name }}</td>
              <td>
                <div class="justify-content">
                  <font-awesome-icon icon="pen" class="edit-icon"></font-awesome-icon>
                  <font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- employees -->
    </div>
    <!-- end content -->

    <MenuBar></MenuBar>

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
      text-align: center;
      z-index: 1;
      padding: 0.875rem 1rem;

      .text {
        font-size: 1.0625em;
      }

      .icon-plus {
        color: #FFF;
        font-size: 1.125em;
      }
    }

    .content {
      margin-top: 3rem;
      padding-bottom: 4rem;

      .search {
        max-width: 100%;
        padding: 1.5rem 1rem 0.375rem;

        label {
          color: #444;
          font-weight: 500;
          font-size: 0.875em;
        }

        input {
          box-sizing: border-box;
          font-family: 'Roboto';
          color: #444;
          outline: none;
          width: 100%;
          border: 0;
          font-size: 0.8125em;
          padding: 0.75rem 1.125rem;
        }
      }

      .data-employees {
        max-width: 100%;
        overflow-x: auto;
        padding: 0.3125rem;

        table {
          text-align: left;
          border-collapse: collapse;
          width: 100%;

          th, td {
            color: #333;
            border-bottom: 0.0625rem solid #DDD;
            padding: 0.675rem;
            font-size: 0.8125em;
          }

          .justify-content {
            display: flex;
            align-items: center;

            .edit-icon {
              cursor: pointer;
              color: #2980B9;
              font-size: 0.75em;
            }

            .remove-icon {
              cursor: pointer;
              color: #E74C3C;
              margin-left: 0.25rem;
              font-size: 1em;
            }
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

        .text {
          font-size: 1.125em;
        }

        .icon-plus {
          font-size: 1.25em;
        }
      }

      .content {
        margin-top: 3.375rem;
        padding-bottom: 4.375rem;

        .search {
          padding: 2rem 1.25rem 0.5rem;

          label {
            font-size: 0.9375em;
          }

          input {
            font-size: 0.875em;
            padding: 0.8125rem 1.1875rem;
          }
        }

        .data-employees {
          padding: 0.5rem;

          table {

            th, td {
              padding: 0.75rem;
              font-size: 0.9375em;
            }

            .justify-content {

              .edit-icon {
                font-size: 0.8125em;
              }

              .remove-icon {
                font-size: 1.0625em;
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

        .text {
          font-size: 1.25em;
        }

        .icon-plus {
          font-size: 1.375em;
        }
      }

      .content {
        margin-top: 3.75rem;
        padding-bottom: 4.75rem;

        .search {
          padding: 2.5rem 1.5rem 0.75rem;

          label {
            font-size: 1em;
          }

          input {
            font-size: 0.9375em;
            padding: 0.875rem 1.125rem;
          }
        }

        .data-employees {
          padding: 0.5rem;

          table {

            th, td {
              padding: 1rem;
              font-size: 1em;
            }

            .justify-content {

              .edit-icon {
                font-size: 0.9375em;
              }

              .remove-icon {
                font-size: 1.25em;
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

import MenuBar from '@/components/admin/MenuBar.vue';

export default {

  components: {
    MenuBar,
  },

  data() {
    return {
      employees: [
        {
          id: 'BLI-1153AD',
          name: 'Albert Kurniawan',
        },
        {
          id: 'BLI-1953OP',
          name: 'Simon Samosir',
        },
        {
          id: 'BLI-D885A1',
          name: 'Maudy Hana',
        },
        {
          id: 'BLI-B95AAC',
          name: 'Angelia Yohana',
        },
        {
          id: 'BLI-15A9DS',
          name: 'Rio Martin',
        },
        {
          id: 'BLI-HG9563',
          name: 'Maria Rosaria',
        },
        {
          id: 'BLI-PO956E',
          name: 'Spencer Lonhou',
        },
        {
          id: 'BLI-D89ADC',
          name: 'Roni Simanjuntak',
        },
        {
          id: 'BLI-55D23A',
          name: 'Julio Cesar',
        },
        {
          id: 'BLI-PE7SL6',
          name: 'Fifin Andriani',
        },
        {
          id: 'BLI-S6DD92',
          name: 'Kimmy',
        },
        {
          id: 'BLI-I7AALS',
          name: 'Andi Wijaya',
        },
        {
          id: 'BLI-N8UDOP',
          name: 'Lorencia Agnes',
        },
        {
          id: 'BLI-L5SSPA',
          name: 'Algi Nosi',
        },
        {
          id: 'BLI-K96DS1',
          name: 'Jessica Natalia',
        },
      ],
    };
  },

};

</script>
