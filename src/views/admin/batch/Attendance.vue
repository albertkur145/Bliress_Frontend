<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link :to="{ name: 'AdminTraining', params: { id: id } }" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        <span class="text">Absensi</span>
      </router-link>

      <router-link :to="{ name: 'AdminTraining', params: { id: id } }">
        <font-awesome-icon icon="qrcode" class="icon-qrcode"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">

      <!-- title -->
      <div class="title">Training {{ training }}</div>
      <!-- title -->

      <!-- list of employee -->
      <div class="table">
        <table>
          <thead>
            <th>ID</th>
            <th>Nama</th>
            <th>Status</th>
          </thead>

          <tbody>
            <tr>
              <td>BLI-1153AD</td>
              <td>Albert Kurniawan</td>
              <td><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-1953OP</td>
              <td>Simon Samosir</td>
              <td><font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-D885A1</td>
              <td>Maudy Hana</td>
              <td><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-B95AAC</td>
              <td>Angelia Yohana</td>
              <td><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-15A9DS</td>
              <td>Rio Martin</td>
              <td><font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-HG9563</td>
              <td>Maria Rosaria</td>
              <td><font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-PO956E</td>
              <td>Spencer Lonhou</td>
              <td><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-D89ADC</td>
              <td>Roni Simanjuntak</td>
              <td><font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-55D23A</td>
              <td>Julio Cesar</td>
              <td><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-PE7SL6</td>
              <td>Fifin Andriani</td>
              <td><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-S6DD92</td>
              <td>Kimmy</td>
              <td><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-I7AALS</td>
              <td>Andi Wijaya</td>
              <td><font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-N8UDOP</td>
              <td>Lorencia Agnes</td>
              <td><font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-L5SSPA</td>
              <td>Algi Nosi</td>
              <td><font-awesome-icon icon="times" class="remove-icon"></font-awesome-icon></td>
            </tr>

            <tr>
              <td>BLI-K96DS1</td>
              <td>Jessica Natalia</td>
              <td><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- list of employee -->

    </div>
    <!-- end content -->

  </div>
</template>

<style lang="scss" scoped>

  // global css
  #container {
    font-family: 'Roboto';
    max-width: 100%;
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
      background-color: #0ABDE3;
      font-weight: 600;
      z-index: 1;
      padding: 0.875rem 1rem;

      .back {
        color: #FFF;
        text-decoration: none;
        font-size: 1.0625em;

        .text {
          margin-left: 0.5rem;
        }
      }

      .icon-qrcode {
        color: #FFF;
        font-size: 1.125em;
      }
    }

    .content {
      margin-top: 3rem;

      .title {
        color: #0984E3;
        text-align: center;
        font-weight: 500;
        background-color: #FFF;
        padding: 1.5rem 1rem;
        font-size: 1.0625em;
      }

      .table {
        max-width: 100%;
        overflow-x: auto;
        background-color: #FFF;
        margin-top: 0.5rem;
        padding: 0.5rem 0 2rem;

        table {
          text-align: left;
          border-collapse: collapse;
          width: 100%;

          th, td {
            color: #333;
            border-bottom: 0.0625rem solid #DDD;
            padding: 0.8125rem 0.9375rem;
            font-size: 0.8125em;
          }

          th:last-child,
          td:last-child {
            text-align: center;
          }

          .remove-icon {
            color: #E74C3C;
            font-size: 1em;
          }

          .check-icon {
            color: #20BF6B;
            font-size: 1em;
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

        .icon-qrcode {
          font-size: 1.1875em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .title {
          padding: 1.75rem 1.25rem;
          font-size: 1.25em;
        }

        .table {

          table {

            th, td {
              padding: 0.875rem 1rem;
              font-size: 0.875em;
            }

            .remove-icon {
              font-size: 1.0625em;
            }

            .check-icon {
              font-size: 1.0625em;
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
        padding: 1.1875rem 1.5rem;

        .back {
          font-size: 1.25em;

          .text {
            margin-left: 0.75rem;
          }
        }

        .icon-qrcode {
          font-size: 1.375em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .title {
          padding: 2rem 1.5rem;
          font-size: 1.375em;
        }

        .table {

          table {

            th, td {
              padding: 0.9375rem 1.0625rem;
              font-size: 0.9375em;
            }

            .remove-icon {
              font-size: 1.125em;
            }

            .check-icon {
              font-size: 1.125em;
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
      training: '',
    };
  },

  created() {
    this.id = this.$route.params.id;
    this.training = this.$route.params.training;
  },

};

</script>
