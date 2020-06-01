<template>
  <div id="container">

    <!-- head -->
    <div class="head">
      <router-link to="/trainer/training" class="back">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
      </router-link>

      <div class="text">Training {{ paramTraining }}</div>

      <router-link to="/trainer/training" class="qr-code-reader">
        <font-awesome-icon icon="qrcode"></font-awesome-icon>
      </router-link>
    </div>
    <!-- end head -->

    <!-- content -->
    <div class="content">

      <div class="txt-batch">Batch {{ paramBatch }}</div>

      <!-- participants -->
      <div class="participants">
        <div class="top">
          <div class="title">Peserta</div>
          <div class="count">86 orang</div>
        </div>

        <div class="data">
          <table>
            <thead>
              <th>ID</th>
              <th>Nama</th>
              <th>Status</th>
            </thead>

            <tbody>
              <tr v-for="(value, index) in employees" :key="index">
                <td>{{ value.id }}</td>
                <td>{{ value.name }}</td>
                <td v-if="value.status === '1'"><font-awesome-icon icon="check" class="check-icon"></font-awesome-icon></td>
                <td v-else><font-awesome-icon icon="times" class="times-icon"></font-awesome-icon></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- participants -->

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
      box-sizing: border-box;
      text-align: center;
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
        position: absolute;
        color: #FFF;
        top: 31%;
        left: 0.9375rem;
        font-size: 1.0625em;
      }

      .text {
        font-size: 1.0625em;
      }

      .qr-code-reader {
        position: absolute;
        color: #FFF;
        top: 31%;
        right: 0.9375rem;
        font-size: 1.0625em;
      }
    }

    .content {
      margin-top: 3rem;

      .txt-batch {
        background-color: #FFF;
        text-align: center;
        color: #1B9CFC;
        font-weight: 500;
        padding: 1.25rem;
        font-size: 1.0625em;
      }

      .participants {
        background-color: #FFF;
        margin-top: 0.5rem;
        padding: 1.125rem 1rem 1.875rem;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .title {
            font-weight: 500;
            color: #444;
            font-size: 1em;
          }

          .count {
            color: #555;
            font-size: 0.875em;
          }
        }

        .data {
          max-width: 100%;
          overflow-x: auto;
          margin-top: 1.25rem;

          table {
            text-align: left;
            border-collapse: collapse;
            width: 100%;

            th, td {
              color: #333;
              border-bottom: 0.125rem solid #DDD;
              padding: 0.75rem 0.9375rem;
              font-size: 0.875em;
            }

            td:last-child,
            th:last-child {
              text-align: center;
            }

            .check-icon {
              color: #20BF6B;
              font-size: 1em;
            }

            .times-icon {
              color: #E74C3C;
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

        .back {
          left: 1.0625rem;
          font-size: 1.0625em;
        }

        .text {
          font-size: 1.125em;
        }

        .qr-code-reader {
          right: 1.0625rem;
          font-size: 1.0625em;
        }
      }

      .content {
        margin-top: 3.375rem;

        .txt-batch {
          padding: 1.5rem;
          font-size: 1.125em;
        }

        .participants {
          padding: 1.25rem 1.125rem 2rem;

          .top {

            .title {
              font-size: 1.0625em;
            }

            .count {
              font-size: 0.9375em;
            }
          }

          .data {
            margin-top: 1.5rem;

            table {

              th, td {
                padding: 0.8125rem 1rem;
                font-size: 0.9375em;
              }

              .check-icon {
                font-size: 1.0625em;
              }

              .times-icon {
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

        .back {
          left: 1.25rem;
          font-size: 1.125em;
        }

        .text {
          font-size: 1.25em;
        }

        .qr-code-reader {
          right: 1.25rem;
          font-size: 1.125em;
        }
      }

      .content {
        margin-top: 3.75rem;

        .txt-batch {
          padding: 1.75rem;
          font-size: 1.1875em;
        }

        .participants {
          padding: 1.4375rem 1.375rem 2.5rem;

          .top {

            .title {
              font-size: 1.125em;
            }

            .count {
              font-size: 1.0625em;
            }
          }

          .data {
            margin-top: 1.75rem;

            table {

              th, td {
                padding: 1rem 1.25rem;
                font-size: 1em;
              }

              .check-icon {
                font-size: 1.125em;
              }

              .times-icon {
                font-size: 1.125em;
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

export default {

  data() {
    return {
      paramBatch: '',
      paramTraining: '',
      employees: [
        {
          id: 'BLI-1153AD',
          name: 'Albert Kurniawan',
          status: '1',
        },
        {
          id: 'BLI-1953OP',
          name: 'Simon Samosir',
          status: '1',
        },
        {
          id: 'BLI-D885A1',
          name: 'Maudy Hana',
          status: '0',
        },
        {
          id: 'BLI-B95AAC',
          name: 'Angelia Yohana',
          status: '1',
        },
        {
          id: 'BLI-15A9DS',
          name: 'Rio Martin',
          status: '0',
        },
        {
          id: 'BLI-HG9563',
          name: 'Maria Rosaria',
          status: '0',
        },
        {
          id: 'BLI-PO956E',
          name: 'Spencer Lonhou',
          status: '1',
        },
        {
          id: 'BLI-D89ADC',
          name: 'Roni Simanjuntak',
          status: '0',
        },
        {
          id: 'BLI-55D23A',
          name: 'Julio Cesar',
          status: '1',
        },
        {
          id: 'BLI-PE7SL6',
          name: 'Fifin Andriani',
          status: '0',
        },
        {
          id: 'BLI-S6DD92',
          name: 'Kimmy',
          status: '1',
        },
        {
          id: 'BLI-I7AALS',
          name: 'Andi Wijaya',
          status: '1',
        },
        {
          id: 'BLI-N8UDOP',
          name: 'Lorencia Agnes',
          status: '1',
        },
        {
          id: 'BLI-L5SSPA',
          name: 'Algi Nosi',
          status: '0',
        },
        {
          id: 'BLI-K96DS1',
          name: 'Jessica Natalia',
          status: '0',
        },
      ],
    };
  },

  created() {
    this.paramTraining = this.$route.params.training;
    this.paramBatch = this.$route.params.batch;
  },

};

</script>
