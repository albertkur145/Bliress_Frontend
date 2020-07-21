const API = 'http://localhost:8080/api';

export default [
  {
    url: `${API}/login`,
    method: 'POST',
    params: {
      email: 'albertkur@gmail.com',
      password: '123',
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        id: 1,
        role: 'Employee',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/login`,
    method: 'POST',
    params: {
      email: 'admin',
      password: 'admin',
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        id: 1,
        role: 'Admin',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/login`,
    method: 'POST',
    params: {
      email: 'trainer@gmail.com',
      password: '123',
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        id: 1,
        role: 'Trainer',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/training`,
    method: 'GET',
    params: {
      params: {
        employeeId: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 1,
          training: '1',
          date: '15 September 2020',
        },
        {
          id: 2,
          training: '2',
          date: '27 September 2020',
        },
        {
          id: 3,
          training: '3',
          date: '09 Oktober 2020',
        },
        {
          id: 4,
          training: '4',
          date: '18 Oktober 2020',
        },
        {
          id: 5,
          training: '5',
          date: '30 Oktober 2020',
        },
      ],
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/training/detail`,
    method: 'GET',
    params: {
      params: {
        employeeId: 1,
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        training: {
          id: 1,
          training: '1',
          date: '15 September 2020',
          timeStart: '08.00',
          timeFinish: '16.00',
          trainer: 'Rudi Santoso',
          location: 'di Gedung Serbaguna, Ruang 315 C Sarana Jaya',
          materials: [
            {
              id: 1,
              name: 'Think Win Win',
              link: 'https://www.google.co.id',
            },
            {
              id: 2,
              name: 'Time Management',
              link: 'https://www.google.co.id',
            },
          ],
        },
        isAttend: 1,
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/training/detail`,
    method: 'GET',
    params: {
      params: {
        employeeId: 1,
        training: '5',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        training: {
          id: 5,
          training: '5',
          date: '30 Oktober 2020',
          timeStart: '12.00',
          timeFinish: '18.00',
          trainer: 'Lely Suryanti',
          location: 'di Gedung Serbaguna, Ruang 112 A Sarana Jaya',
          materials: [
            {
              id: 1,
              name: '7 Habbits',
              link: 'https://www.google.co.id',
            },
            {
              id: 2,
              name: 'Time Management',
              link: 'https://www.google.co.id',
            },
          ],
        },
        employees: {
          total: '5',
          employee: [
            {
              id: 1,
              name: 'Diana Permata',
              division: 'Akuntan',
            },
            {
              id: 2,
              name: 'Kevin Santoso',
              division: 'Software Developer',
            },
            {
              id: 3,
              name: 'Yemima Milenia',
              division: 'Quality Control',
            },
            {
              id: 4,
              name: 'Albert Kurniawan',
              division: 'Sales Manager',
            },
            {
              id: 5,
              name: 'Irene Nike',
              division: 'Akuntan',
            },
          ],
        },
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/test`,
    method: 'GET',
    params: {
      params: {
        employeeId: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 1,
          training: '1',
          status: 'Available',
        },
        {
          id: 2,
          training: '2',
          status: 'Available',
        },
        {
          id: 3,
          training: '3',
          status: 'Closed',
        },
        {
          id: 4,
          training: '4',
          status: 'Closed',
        },
        {
          id: 5,
          training: '5',
          status: 'Closed',
        },
      ],
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/test/material`,
    method: 'GET',
    params: {
      params: {
        employeeId: 1,
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 1,
          material: 'Private Victory',
          dateAvailable: '12 September 2020',
          dateClosed: '14 September 2020',
          timeLimit: 20,
          score: 0,
          status: 0,
        },
        {
          id: 2,
          material: 'Public Victory',
          dateAvailable: '17 September 2020',
          dateClosed: '18 September 2020',
          timeLimit: 30,
          score: 60,
          status: 1,
        },
      ],
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/test/material/question`,
    method: 'GET',
    params: {
      params: {
        employeeId: 1,
        training: '1',
        materialId: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        timeLimit: 20,
        questions: [
          {
            id: 1,
            questionText: 'Sebagian pedagang pecel lele mengeluhkan harga cabe naik. Pak Rudi seorang pedagang pecel lele.',
            choices: [
              {
                choice: '1',
                answer: 'Pak Rudi pasti mengeluhkan harga cabe naik.',
              },
              {
                choice: '2',
                answer: 'Pak Rudi tidak mengeluhkan harga cabe naik.',
              },
              {
                choice: '3',
                answer: 'Harga cabe bukanlah keluhan Pak Rudi.',
              },
              {
                choice: '4',
                answer: 'Pak Rudi mungkin ikut mengeluhkan harga cabe naik.',
              },
            ],
          },
          {
            id: 2,
            questionText: 'Semua pemain sepakbola yang berkebangsaan Itali berwajah tampan. David Beckham adalah pemain sepakbola berkebangsaan Inggris.',
            choices: [
              {
                choice: '1',
                answer: 'David Beckham bukanlah pemain sepakbola yang tampan.',
              },
              {
                choice: '2',
                answer: 'David Beckham adalah pemain sepakbola yang tampan.',
              },
              {
                choice: '3',
                answer: 'Meskipun bukan berkebangsaan Italia, David Beckham pasti berwajah tampan.',
              },
              {
                choice: '4',
                answer: 'Tidak dapat ditarik kesimpulan.',
              },
            ],
          },
          {
            id: 3,
            questionText: 'Semua mahasiswa Perguruan Tinggi memiliki Nomor Induk Mahasiswa. Budi seorang mahasiswa. Jadi,',
            choices: [
              {
                choice: '1',
                answer: 'Budi mungkin memiliki nomor induk mahasiswa.',
              },
              {
                choice: '2',
                answer: 'Belum tentu Budi memiliki nomor induk mahasiswa.',
              },
              {
                choice: '3',
                answer: 'Budi memiliki nomor induk mahasiswa.',
              },
              {
                choice: '4',
                answer: 'Budi tidak memiliki nomor induk mahasiswa.',
              },
            ],
          },
          {
            id: 4,
            questionText: 'Sebagian orang yang berminat menjadi pejabat hanya menginginkan harta dan tahta. Budi tidak berminat menjadi pejabat.',
            choices: [
              {
                choice: '1',
                answer: 'Budi tidak menginginkan harta dan tahta.',
              },
              {
                choice: '2',
                answer: 'Tahta bukanlah keinginan Budi, tapi harta mungkin ya.',
              },
              {
                choice: '3',
                answer: 'Budi menginginkan tahta tapi tidak berminat menjadi pejabat.',
              },
              {
                choice: '4',
                answer: 'Tidak dapat ditarik kesimpulan.',
              },
            ],
          },
          {
            id: 5,
            questionText: 'Coklat yang dibungkus dalam kemasan menarik sangat laris terjual. Coklat Jago dibungkus dalam kemasan berwarna merah menyala. Menurut anak-anak, warna merah menyala sangatlah menarik.',
            choices: [
              {
                choice: '1',
                answer: 'Coklat Jago kurang laris terjual di kalangan anak-anak.',
              },
              {
                choice: '2',
                answer: 'Coklat Jago tidak laku terjual di kalangan orang dewasa.',
              },
              {
                choice: '3',
                answer: 'Coklat Jago laris terjual.',
              },
              {
                choice: '4',
                answer: 'Coklat Jago laris terjual di kalangan anak-anak.',
              },
            ],
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/test/material/question`,
    method: 'POST',
    params: {
      employeeId: 1,
      materialId: 1,
      training: '1',
      question: [
        {
          id: 1,
          choice: '2',
        },
        {
          id: 2,
          choice: '1',
        },
        {
          id: 3,
          choice: '4',
        },
        {
          id: 4,
          choice: '2',
        },
        {
          id: 5,
          choice: '3',
        },
      ],
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/test/material/question`,
    method: 'POST',
    params: {
      employeeId: 1,
      materialId: 1,
      training: '1',
      question: [
        {
          id: 1,
          choice: '',
        },
        {
          id: 2,
          choice: '',
        },
        {
          id: 3,
          choice: '',
        },
        {
          id: 4,
          choice: '',
        },
        {
          id: 5,
          choice: '',
        },
      ],
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/notification/trigger`,
    method: 'GET',
    params: {
      params: {
        employeeId: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        hasNotif: true,
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/notification`,
    method: 'GET',
    params: {
      params: {
        employeeId: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 1,
          title: 'Reminder - Training',
          message: 'Haloo Albert, ingat lho 1 minggu lagi kamu ada training perdanamu di Gedung Serbaguna Sarana Jaya. Tepatnya pada tanggal 15 September 2020 pkl 08.00 WIB. Untuk lebih detailnya, cek jadwal di halaman training ya!',
        },
        {
          id: 2,
          title: 'PENGUMUMAN',
          message: 'Dalam mengikuti training 2, diharapkan setiap peserta training membawa kebutuhan masing-masing seperti alat tulis, laptop, ataupun peralatan mandi lainnya. Terimakasih.',
        },
      ],
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/notification`,
    method: 'POST',
    params: {
      employeeId: 1,
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/employee`,
    method: 'GET',
    params: {
      params: {
        employeeId: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        id: 1,
        cardId: 'BLI-22D9D6',
        batch: 'Juni - 2020',
        name: 'Albert Kurniawan',
        email: 'albertkur@gmail.com',
        phoneNumber: '081995561257',
        division: 'Software Developer',
        birthdate: '21-08-1995',
        gender: 'Pria',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch`,
    method: 'GET',
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 202006,
          batch: 'Juni',
          year: 2020,
        },
        {
          id: 202009,
          batch: 'September',
          year: 2020,
        },
        {
          id: 202101,
          batch: 'Januari',
          year: 2021,
        },
        {
          id: 202103,
          batch: 'Maret',
          year: 2021,
        },
      ],
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batchtraining`,
    method: 'GET',
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 202006,
          batch: 'Juni',
          year: 2020,
          training: [
            {
              id: 1,
              training: '1',
            },
            {
              id: 2,
              training: '2',
            },
            {
              id: 3,
              training: '3',
            },
            {
              id: 4,
              training: '4',
            },
            {
              id: 5,
              training: '5',
            },
          ],
        },
        {
          id: 202008,
          batch: 'September',
          year: 2020,
          training: [
            {
              id: 1,
              training: '1',
            },
            {
              id: 2,
              training: '2',
            },
            {
              id: 3,
              training: '3',
            },
            {
              id: 4,
              training: '4',
            },
            {
              id: 5,
              training: '5',
            },
          ],
        },
        {
          id: 202012,
          batch: 'Januari',
          year: 2021,
          training: [
            {
              id: 1,
              training: '1',
            },
            {
              id: 2,
              training: '2',
            },
            {
              id: 3,
              training: '3',
            },
            {
              id: 4,
              training: '4',
            },
            {
              id: 5,
              training: '5',
            },
          ],
        },
        {
          id: 202101,
          batch: 'Maret',
          year: 2021,
          training: [
            {
              id: 1,
              training: '1',
            },
            {
              id: 2,
              training: '2',
            },
            {
              id: 3,
              training: '3',
            },
            {
              id: 4,
              training: '4',
            },
            {
              id: 5,
              training: '5',
            },
          ],
        },
      ],
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch`,
    method: 'DELETE',
    params: {
      params: {
        batchId: 202006,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch`,
    method: 'POST',
    params: {
      batch: 9,
      year: 2020,
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch/detail`,
    method: 'GET',
    params: {
      params: {
        batchId: 202006,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        batch: {
          id: 202006,
          batch: 'Juni',
          year: 2020,
        },
        training: [
          {
            id: 1,
            training: '1',
            date: '15 September 2020',
            timeStart: '08.00',
            timeFinish: '16.00',
          },
          {
            id: 2,
            training: '2',
            date: '27 September 2020',
            timeStart: '12.00',
            timeFinish: '15.00',
          },
          {
            id: 3,
            training: '3',
            date: '04 Oktober 2020',
            timeStart: '09.00',
            timeFinish: '18.00',
          },
          {
            id: 4,
            training: '4',
            date: '12 Oktober 2020',
            timeStart: '12.00',
            timeFinish: '18.00',
          },
          {
            id: 5,
            training: '5',
            date: '20 Oktober 2020',
            timeStart: '08.00',
            timeFinish: '15.00',
          },
        ],
        employee: [
          {
            id: 1,
            cardId: 'BLI-1154AD',
            name: 'Albert Kurniawan',
          },
          {
            id: 2,
            cardId: 'BLI-1953OP',
            name: 'Muhammad Taufan Okka',
          },
          {
            id: 3,
            cardId: 'BLI-D885A1',
            name: 'Simon Samosir',
          },
          {
            id: 4,
            cardId: 'BLI-AA5S96',
            name: 'Felix Alvin',
          },
          {
            id: 5,
            cardId: 'BLI-6OE33S',
            name: 'Tari Swaswati',
          },
          {
            id: 6,
            cardId: 'BLI-0H553N',
            name: 'Esra Targian',
          },
          {
            id: 7,
            cardId: 'BLI-225A3S',
            name: 'Timotius Nugroho',
          },
          {
            id: 8,
            cardId: 'BLI-A8D956',
            name: 'Lia Ernita',
          },
          {
            id: 9,
            cardId: 'BLI-P9D6EE',
            name: 'Devayani Dinda',
          },
          {
            id: 10,
            cardId: 'BLI-KE5DS3',
            name: 'Kelvin',
          },
          {
            id: 10,
            cardId: 'BLI-D805A1',
            name: 'Maudy Hana',
          },
          {
            id: 11,
            cardId: 'BLI-B95AAC',
            name: 'Angelia Yohana',
          },
          {
            id: 12,
            cardId: 'BLI-15A9DS',
            name: 'Rio Martin',
          },
          {
            id: 13,
            cardId: 'BLI-HG9563',
            name: 'Maria Rosaria',
          },
          {
            id: 14,
            cardId: 'BLI-PO956E',
            name: 'Spencer Lonhou',
          },
          {
            id: 15,
            cardId: 'BLI-D89ADC',
            name: 'Roni Simanjuntak',
          },
          {
            id: 16,
            cardId: 'BLI-55D23A',
            name: 'Julio Cesar',
          },
          {
            id: 17,
            cardId: 'BLI-PE7SL6',
            name: 'Fifin Andriani',
          },
          {
            id: 18,
            cardId: 'BLI-S6DD92',
            name: 'Kimmy',
          },
          {
            id: 19,
            cardId: 'BLI-I7AALS',
            name: 'Andi Wijaya',
          },
          {
            id: 20,
            cardId: 'BLI-N8UDOP',
            name: 'Lorencia Agnes',
          },
          {
            id: 21,
            cardId: 'BLI-L5SSPA',
            name: 'Algi Nosi',
          },
          {
            id: 22,
            cardId: 'BLI-K96DS1',
            name: 'Jessica Natalia',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/employee/batch`,
    method: 'GET',
    params: {
      params: {
        batchId: 202006,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        batch: {
          id: 202006,
          batch: 'Juni',
          year: 2020,
        },
        employee: [
          {
            id: 1,
            cardId: 'BLI-1154AD',
            name: 'Albert Kurniawan',
          },
          {
            id: 2,
            cardId: 'BLI-1953OP',
            name: 'Muhammad Taufan Okka',
          },
          {
            id: 3,
            cardId: 'BLI-D885A1',
            name: 'Simon Samosir',
          },
          {
            id: 4,
            cardId: 'BLI-AA5S96',
            name: 'Felix Alvin',
          },
          {
            id: 5,
            cardId: 'BLI-6OE33S',
            name: 'Tari Swaswati',
          },
          {
            id: 6,
            cardId: 'BLI-0H553N',
            name: 'Esra Targian',
          },
          {
            id: 7,
            cardId: 'BLI-225A3S',
            name: 'Timotius Nugroho',
          },
          {
            id: 8,
            cardId: 'BLI-A8D956',
            name: 'Lia Ernita',
          },
          {
            id: 9,
            cardId: 'BLI-P9D6EE',
            name: 'Devayani Dinda',
          },
          {
            id: 10,
            cardId: 'BLI-KE5DS3',
            name: 'Kelvin',
          },
          {
            id: 11,
            cardId: 'BLI-D805A1',
            name: 'Maudy Hana',
          },
          {
            id: 12,
            cardId: 'BLI-B95AAC',
            name: 'Angelia Yohana',
          },
          {
            id: 13,
            cardId: 'BLI-15A9DS',
            name: 'Rio Martin',
          },
          {
            id: 14,
            cardId: 'BLI-HG9563',
            name: 'Maria Rosaria',
          },
          {
            id: 15,
            cardId: 'BLI-PO956E',
            name: 'Spencer Lonhou',
          },
          {
            id: 16,
            cardId: 'BLI-D89ADC',
            name: 'Roni Simanjuntak',
          },
          {
            id: 17,
            cardId: 'BLI-55D23A',
            name: 'Julio Cesar',
          },
          {
            id: 18,
            cardId: 'BLI-PE7SL6',
            name: 'Fifin Andriani',
          },
          {
            id: 19,
            cardId: 'BLI-S6DD92',
            name: 'Kimmy',
          },
          {
            id: 20,
            cardId: 'BLI-I7AALS',
            name: 'Andi Wijaya',
          },
          {
            id: 21,
            cardId: 'BLI-N8UDOP',
            name: 'Lorencia Agnes',
          },
          {
            id: 22,
            cardId: 'BLI-L5SSPA',
            name: 'Algi Nosi',
          },
          {
            id: 23,
            cardId: 'BLI-K96DS1',
            name: 'Jessica Natalia',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch/training`,
    method: 'GET',
    params: {
      params: {
        batchId: 202006,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        batch: {
          id: 202006,
          batch: 'Juni',
          year: 2020,
        },
        training: [
          {
            id: 1,
            training: 1,
            date: '15 September 2020',
            timeStart: '08.00',
            timeFinish: '16.00',
            trainer: 'Rudi Santoso',
            location: 'di Gedung Serbaguna, Ruang 315 C Sarana Jaya',
            materials: [
              {
                id: 1,
                name: 'Time Management',
                link: 'https://www.google.co.id',
              },
              {
                id: 2,
                name: 'Private Victory',
                link: 'https://www.google.co.id',
              },
            ],
          },
          {
            id: 2,
            training: 2,
            date: '27 September 2020',
            timeStart: '12.00',
            timeFinish: '15.00',
            trainer: 'Alvin Wijaya',
            location: 'di Gedung Ropoko, Ruang 54 Sarana Jaya',
            materials: [
              {
                id: 1,
                name: 'Public Victory',
                link: 'https://www.google.co.id',
              },
            ],
          },
          {
            id: 3,
            training: 3,
            date: '04 Oktober 2020',
            timeStart: '09.00',
            timeFinish: '18.00',
            trainer: 'Renzvin',
            location: 'di Hotel British, Lt. 42 Ruang Anggrek',
            materials: [
              {
                id: 1,
                name: 'Think Win Win',
                link: 'https://www.google.co.id',
              },
            ],
          },
          {
            id: 4,
            training: 4,
            date: '12 Oktober 2020',
            timeStart: '08.00',
            timeFinish: '14.00',
            trainer: 'Andi Wijaya',
            location: 'di Hotel Aston, Basement Ruang Meeting',
            materials: [
              {
                id: 1,
                name: 'Emotional Banking',
                link: 'https://www.google.co.id',
              },
            ],
          },
          {
            id: 5,
            training: 5,
            date: '20 Oktober 2020',
            timeStart: '12.00',
            timeFinish: '18.00',
            trainer: 'Fanny Setiani',
            location: 'di Gedung Serbaguna, Ruang 315 C Sarana Jaya',
            materials: [
              {
                id: 1,
                name: '7 Habbits',
                link: 'https://www.google.co.id',
              },
              {
                id: 2,
                name: 'The Winner',
                link: 'https://www.google.co.id',
              },
            ],
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch/training`,
    method: 'POST',
    params: {
      batchId: 202006,
      training: '1',
      date: '2020-01-25',
      location: 'di Gedung Maybara, Lt 3 Ruang 215',
      timeStart: '08:00',
      timeFinish: '15:00',
      trainerId: 1,
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch/training/detail`,
    method: 'GET',
    params: {
      params: {
        batchId: 202006,
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        id: 1,
        training: '1',
        date: '2020-09-15',
        timeStart: '08:00',
        timeFinish: '16:00',
        trainerId: 1,
        location: 'di Gedung Serbaguna, Ruang 315 C Sarana Jaya',
        materials: [
          {
            id: 1,
            name: 'Think Win Win',
            link: 'https://www.google.co.id',
          }, {
            id: 2,
            name: 'Time Management',
            link: 'https://www.google.co.id',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch/training`,
    method: 'PUT',
    params: {
      batchId: 202006,
      training: '1',
      date: '2020-09-15',
      location: 'di Gedung Serbaguna, Ruang 315 C Sarana Jaya',
      timeStart: '08:00',
      timeFinish: '16:00',
      trainerId: 1,
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch/training`,
    method: 'DELETE',
    params: {
      params: {
        batchId: 202006,
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch/training/attendance`,
    method: 'GET',
    params: {
      params: {
        batchId: 202006,
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        batch: {
          id: 202006,
          batch: 'Juni',
          year: 2020,
        },
        employee: [
          {
            id: 1,
            cardId: 'BLI-1154AD',
            name: 'Albert Kurniawan',
            status: 1,
          },
          {
            id: 2,
            cardId: 'BLI-1953OP',
            name: 'Muhammad Taufan Okka',
            status: 1,
          },
          {
            id: 3,
            cardId: 'BLI-D885A1',
            name: 'Simon Samosir',
            status: 0,
          },
          {
            id: 4,
            cardId: 'BLI-AA5S96',
            name: 'Felix Alvin',
            status: 1,
          },
          {
            id: 5,
            cardId: 'BLI-6OE33S',
            name: 'Tari Swaswati',
            status: 1,
          },
          {
            id: 6,
            cardId: 'BLI-0H553N',
            name: 'Esra Targian',
            status: 0,
          },
          {
            id: 7,
            cardId: 'BLI-225A3S',
            name: 'Timotius Nugroho',
            status: 0,
          },
          {
            id: 8,
            cardId: 'BLI-A8D956',
            name: 'Lia Ernita',
            status: 1,
          },
          {
            id: 9,
            cardId: 'BLI-P9D6EE',
            name: 'Devayani Dinda',
            status: 0,
          },
          {
            id: 10,
            cardId: 'BLI-KE5DS3',
            name: 'Kelvin',
            status: 0,
          },
          {
            id: 11,
            cardId: 'BLI-D805A1',
            name: 'Maudy Hana',
            status: 1,
          },
          {
            id: 12,
            cardId: 'BLI-B95AAC',
            name: 'Angelia Yohana',
            status: 1,
          },
          {
            id: 13,
            cardId: 'BLI-15A9DS',
            name: 'Rio Martin',
            status: 0,
          },
          {
            id: 14,
            cardId: 'BLI-HG9563',
            name: 'Maria Rosaria',
            status: 0,
          },
          {
            id: 15,
            cardId: 'BLI-PO956E',
            name: 'Spencer Lonhou',
            status: 1,
          },
          {
            id: 16,
            cardId: 'BLI-D89ADC',
            name: 'Roni Simanjuntak',
            status: 1,
          },
          {
            id: 17,
            cardId: 'BLI-55D23A',
            name: 'Julio Cesar',
            status: 1,
          },
          {
            id: 18,
            cardId: 'BLI-PE7SL6',
            name: 'Fifin Andriani',
            status: 1,
          },
          {
            id: 19,
            cardId: 'BLI-S6DD92',
            name: 'Kimmy',
            status: 0,
          },
          {
            id: 20,
            cardId: 'BLI-I7AALS',
            name: 'Andi Wijaya',
            status: 1,
          },
          {
            id: 21,
            cardId: 'BLI-N8UDOP',
            name: 'Lorencia Agnes',
            status: 0,
          },
          {
            id: 22,
            cardId: 'BLI-L5SSPA',
            name: 'Algi Nosi',
            status: 0,
          },
          {
            id: 23,
            cardId: 'BLI-K96DS1',
            name: 'Jessica Natalia',
            status: 1,
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/material`,
    method: 'GET',
    params: {
      params: {
        batchId: 202006,
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 1,
          name: 'Think Win Win',
        },
        {
          id: 2,
          name: 'Time Management',
        },
        {
          id: 3,
          name: 'Public Victory',
        },
        {
          id: 4,
          name: '7 Habbits',
        },
      ],
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/material`,
    method: 'DELETE',
    params: {
      params: {
        batchId: 202006,
        training: '1',
        materialId: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/material`,
    method: 'POST',
    params: {
      batchId: 202006,
      training: '1',
      material: {
        name: 'Time Management',
        file: 'time.pptx',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/test`,
    method: 'GET',
    params: {
      params: {
        batchId: 202006,
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        batch: {
          id: 202006,
          batch: 'Juni',
          year: 2020,
        },
        training: '1',
        material: [
          {
            id: 1,
            name: 'Private Victory',
            available: '12 September 2020',
            closed: '15 September 2020',
            timeLimit: 20,
          },
          {
            id: 2,
            name: 'Emotional Banking',
            available: '20 September 2020',
            closed: '22 September 2020',
            timeLimit: 60,
          },
          {
            id: 3,
            name: 'Public Victory',
            available: '-',
            closed: '-',
            timeLimit: '-',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/test/preview`,
    method: 'GET',
    params: {
      params: {
        batchId: 202006,
        training: '1',
        materialId: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        available: '2020-01-15',
        closed: '2020-01-18',
        timeLimit: 20,
        material: {
          id: 1,
          name: 'Think Win Win',
          questions: [
            {
              questionText: 'Semua mahasiswa Perguruan Tinggi memiliki Nomor Induk Mahasiswa. Budi seorang mahasiswa. Jadi,',
              choices: [
                {
                  choice: '1',
                  answer: 'Budi mungkin memiliki nomor induk mahasiswa.',
                },
                {
                  choice: '2',
                  answer: 'Belum tentu Budi memiliki nomor induk mahasiswa.',
                },
                {
                  choice: '3',
                  answer: 'Budi memiliki nomor induk mahasiswa.',
                },
                {
                  choice: '4',
                  answer: 'Budi tidak memiliki nomor induk mahasiswa.',
                },
              ],
              correctAnswer: '3',
            },
            {
              questionText: 'Sebagian pedagang pecel lele mengeluhkan harga cabe naik. Pak Rudi seorang pedagang pecel lele.',
              choices: [
                {
                  choice: '1',
                  answer: 'Pak Rudi pasti mengeluhkan harga cabe naik.',
                },
                {
                  choice: '2',
                  answer: 'Pak Rudi tidak mengeluhkan harga cabe naik.',
                },
                {
                  choice: '3',
                  answer: 'Harga cabe bukanlah keluhan Pak Rudi.',
                },
                {
                  choice: '4',
                  answer: 'Pak Rudi mungkin ikut mengeluhkan harga cabe naik.',
                },
              ],
              correctAnswer: '4',
            },
            {
              questionText: 'Semua pemain sepakbola yang berkebangsaan Itali berwajah tampan. David Beckham adalah pemain sepakbola berkebangsaan Inggris.',
              choices: [
                {
                  choice: '1',
                  answer: 'David Beckham bukanlah pemain sepakbola yang tampan.',
                },
                {
                  choice: '2',
                  answer: 'David Beckham adalah pemain sepakbola yang tampan.',
                },
                {
                  choice: '3',
                  answer: 'Meskipun bukan berkebangsaan Italia, David Beckham pasti berwajah tampan.',
                },
                {
                  choice: '4',
                  answer: 'Tidak dapat ditarik kesimpulan.',
                },
              ],
              correctAnswer: '4',
            },
            {
              questionText: 'Sebagian orang yang berminat menjadi pejabat hanya menginginkan harta dan tahta. Budi tidak berminat menjadi pejabat.',
              choices: [
                {
                  choice: '1',
                  answer: 'Budi tidak menginginkan harta dan tahta.',
                },
                {
                  choice: '2',
                  answer: 'Tahta bukanlah keinginan Budi, tapi harta mungkin ya.',
                },
                {
                  choice: '3',
                  answer: 'Budi menginginkan tahta tapi tidak berminat menjadi pejabat.',
                },
                {
                  choice: '4',
                  answer: 'Tidak dapat ditarik kesimpulan.',
                },
              ],
              correctAnswer: '1',
            },
            {
              questionText: 'Coklat yang dibungkus dalam kemasan menarik sangat laris terjual. Coklat Jago dibungkus dalam kemasan berwarna merah menyala. Menurut anak-anak, warna merah menyala sangatlah menarik.',
              choices: [
                {
                  choice: '1',
                  answer: 'Coklat Jago kurang laris terjual di kalangan anak-anak.',
                },
                {
                  choice: '2',
                  answer: 'Coklat Jago tidak laku terjual di kalangan orang dewasa.',
                },
                {
                  choice: '3',
                  answer: 'Coklat Jago laris terjual.',
                },
                {
                  choice: '4',
                  answer: 'Coklat Jago laris terjual di kalangan anak-anak.',
                },
              ],
              correctAnswer: '4',
            },
          ],
        },
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/test/preview`,
    method: 'GET',
    params: {
      params: {
        batchId: 202006,
        training: '1',
        materialId: 3,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        available: null,
        closed: null,
        timeLimit: null,
        material: {
          id: 1,
          name: 'Public Victory',
          questions: null,
        },
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/test`,
    method: 'POST',
    params: {
      batchId: 202006,
      training: '1',
      materialId: 3,
      test: {
        available: '2020-01-15',
        closed: '2020-01-18',
        timeLimit: 20,
        questions: [
          {
            questionText: 'Semua mahasiswa Perguruan Tinggi memiliki Nomor Induk Mahasiswa. Budi seorang mahasiswa. Jadi,',
            choices: [
              {
                choice: '1',
                answer: 'Budi mungkin memiliki nomor induk mahasiswa.',
              },
              {
                choice: '2',
                answer: 'Belum tentu Budi memiliki nomor induk mahasiswa.',
              },
              {
                choice: '3',
                answer: 'Budi memiliki nomor induk mahasiswa.',
              },
              {
                choice: '4',
                answer: 'Budi tidak memiliki nomor induk mahasiswa.',
              },
            ],
            correctAnswer: '3',
          },
          {
            questionText: 'Sebagian pedagang pecel lele mengeluhkan harga cabe naik. Pak Rudi seorang pedagang pecel lele.',
            choices: [
              {
                choice: '1',
                answer: 'Pak Rudi pasti mengeluhkan harga cabe naik.',
              },
              {
                choice: '2',
                answer: 'Pak Rudi tidak mengeluhkan harga cabe naik.',
              },
              {
                choice: '3',
                answer: 'Harga cabe bukanlah keluhan Pak Rudi.',
              },
              {
                choice: '4',
                answer: 'Pak Rudi mungkin ikut mengeluhkan harga cabe naik.',
              },
            ],
            correctAnswer: '4',
          },
          {
            questionText: 'Semua pemain sepakbola yang berkebangsaan Itali berwajah tampan. David Beckham adalah pemain sepakbola berkebangsaan Inggris.',
            choices: [
              {
                choice: '1',
                answer: 'David Beckham bukanlah pemain sepakbola yang tampan.',
              },
              {
                choice: '2',
                answer: 'David Beckham adalah pemain sepakbola yang tampan.',
              },
              {
                choice: '3',
                answer: 'Meskipun bukan berkebangsaan Italia, David Beckham pasti berwajah tampan.',
              },
              {
                choice: '4',
                answer: 'Tidak dapat ditarik kesimpulan.',
              },
            ],
            correctAnswer: '4',
          },
          {
            questionText: 'Sebagian orang yang berminat menjadi pejabat hanya menginginkan harta dan tahta. Budi tidak berminat menjadi pejabat.',
            choices: [
              {
                choice: '1',
                answer: 'Budi tidak menginginkan harta dan tahta.',
              },
              {
                choice: '2',
                answer: 'Tahta bukanlah keinginan Budi, tapi harta mungkin ya.',
              },
              {
                choice: '3',
                answer: 'Budi menginginkan tahta tapi tidak berminat menjadi pejabat.',
              },
              {
                choice: '4',
                answer: 'Tidak dapat ditarik kesimpulan.',
              },
            ],
            correctAnswer: '1',
          },
          {
            questionText: 'Coklat yang dibungkus dalam kemasan menarik sangat laris terjual. Coklat Jago dibungkus dalam kemasan berwarna merah menyala. Menurut anak-anak, warna merah menyala sangatlah menarik.',
            choices: [
              {
                choice: '1',
                answer: 'Coklat Jago kurang laris terjual di kalangan anak-anak.',
              },
              {
                choice: '2',
                answer: 'Coklat Jago tidak laku terjual di kalangan orang dewasa.',
              },
              {
                choice: '3',
                answer: 'Coklat Jago laris terjual.',
              },
              {
                choice: '4',
                answer: 'Coklat Jago laris terjual di kalangan anak-anak.',
              },
            ],
            correctAnswer: '4',
          },
        ],
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/test`,
    method: 'PUT',
    params: {
      batchId: 202006,
      training: '1',
      materialId: 1,
      test: {
        available: '2020-01-15',
        closed: '2020-01-18',
        timeLimit: 20,
        questions: [
          {
            questionText: 'Semua mahasiswa Perguruan Tinggi memiliki Nomor Induk Mahasiswa. Budi seorang mahasiswa. Jadi,',
            choices: [
              {
                choice: '1',
                answer: 'Budi mungkin memiliki nomor induk mahasiswa.',
              },
              {
                choice: '2',
                answer: 'Belum tentu Budi memiliki nomor induk mahasiswa.',
              },
              {
                choice: '3',
                answer: 'Budi memiliki nomor induk mahasiswa.',
              },
              {
                choice: '4',
                answer: 'Budi tidak memiliki nomor induk mahasiswa.',
              },
            ],
            correctAnswer: '3',
          },
          {
            questionText: 'Sebagian pedagang pecel lele mengeluhkan harga cabe naik. Pak Rudi seorang pedagang pecel lele.',
            choices: [
              {
                choice: '1',
                answer: 'Pak Rudi pasti mengeluhkan harga cabe naik.',
              },
              {
                choice: '2',
                answer: 'Pak Rudi tidak mengeluhkan harga cabe naik.',
              },
              {
                choice: '3',
                answer: 'Harga cabe bukanlah keluhan Pak Rudi.',
              },
              {
                choice: '4',
                answer: 'Pak Rudi mungkin ikut mengeluhkan harga cabe naik.',
              },
            ],
            correctAnswer: '4',
          },
          {
            questionText: 'Semua pemain sepakbola yang berkebangsaan Itali berwajah tampan. David Beckham adalah pemain sepakbola berkebangsaan Inggris.',
            choices: [
              {
                choice: '1',
                answer: 'David Beckham bukanlah pemain sepakbola yang tampan.',
              },
              {
                choice: '2',
                answer: 'David Beckham adalah pemain sepakbola yang tampan.',
              },
              {
                choice: '3',
                answer: 'Meskipun bukan berkebangsaan Italia, David Beckham pasti berwajah tampan.',
              },
              {
                choice: '4',
                answer: 'Tidak dapat ditarik kesimpulan.',
              },
            ],
            correctAnswer: '4',
          },
          {
            questionText: 'Sebagian orang yang berminat menjadi pejabat hanya menginginkan harta dan tahta. Budi tidak berminat menjadi pejabat.',
            choices: [
              {
                choice: '1',
                answer: 'Budi tidak menginginkan harta dan tahta.',
              },
              {
                choice: '2',
                answer: 'Tahta bukanlah keinginan Budi, tapi harta mungkin ya.',
              },
              {
                choice: '3',
                answer: 'Budi menginginkan tahta tapi tidak berminat menjadi pejabat.',
              },
              {
                choice: '4',
                answer: 'Tidak dapat ditarik kesimpulan.',
              },
            ],
            correctAnswer: '1',
          },
          {
            questionText: 'Coklat yang dibungkus dalam kemasan menarik sangat laris terjual. Coklat Jago dibungkus dalam kemasan berwarna merah menyala. Menurut anak-anak, warna merah menyala sangatlah menarik.',
            choices: [
              {
                choice: '1',
                answer: 'Coklat Jago kurang laris terjual di kalangan anak-anak.',
              },
              {
                choice: '2',
                answer: 'Coklat Jago tidak laku terjual di kalangan orang dewasa.',
              },
              {
                choice: '3',
                answer: 'Coklat Jago laris terjual.',
              },
              {
                choice: '4',
                answer: 'Coklat Jago laris terjual di kalangan anak-anak.',
              },
            ],
            correctAnswer: '4',
          },
        ],
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/notification`,
    method: 'GET',
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 1,
          title: 'PENGUMUMAN',
          batch: 'Juni 2020',
          message: 'Dalam mengikuti training 2, diharapkan setiap peserta training membawa kebutuhan masing-masing seperti alat tulis, laptop, ataupun peralatan mandi lainnya. Terimakasih.',
          date: '12/07/2020, 09.45',
        },
        {
          id: 2,
          title: 'PENGUMUMAN',
          batch: 'Januari 2021',
          message: 'Dalam mengikuti training 4, diharapkan setiap peserta training pas foto 3x4 sebanyak 2 lembar dan 6x4 sebanyak 4 lembar. Terimakasih.',
          date: '24/08/2021, 10.20',
        },
      ],
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/notification`,
    method: 'POST',
    params: {
      batchId: 202006,
      title: 'PENGUMUMAN',
      message: 'Dalam mengikuti training 2, diharapkan setiap peserta training membawa kebutuhan masing-masing seperti alat tulis, laptop, ataupun peralatan mandi lainnya. Terimakasih.',
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/employee`,
    method: 'GET',
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 1,
          cardId: 'BLI-1153AD',
          name: 'Albert Kurniawan',
        },
        {
          id: 2,
          cardId: 'BLI-1953OP',
          name: 'Simon Samosir',
        },
        {
          id: 3,
          cardId: 'BLI-D885A1',
          name: 'Maudy Hana',
        },
        {
          id: 4,
          cardId: 'BLI-B95AAC',
          name: 'Angelia Yohana',
        },
        {
          id: 5,
          cardId: 'BLI-15A9DS',
          name: 'Rio Martin',
        },
        {
          id: 6,
          cardId: 'BLI-HG9563',
          name: 'Maria Rosaria',
        },
        {
          id: 7,
          cardId: 'BLI-PO956E',
          name: 'Spencer Lonhou',
        },
        {
          id: 8,
          cardId: 'BLI-D89ADC',
          name: 'Roni Simanjuntak',
        },
        {
          id: 9,
          cardId: 'BLI-55D23A',
          name: 'Julio Cesar',
        },
        {
          id: 10,
          cardId: 'BLI-PE7SL6',
          name: 'Fifin Andriani',
        },
        {
          id: 11,
          cardId: 'BLI-S6DD92',
          name: 'Kimmy',
        },
        {
          id: 12,
          cardId: 'BLI-I7AALS',
          name: 'Andi Wijaya',
        },
        {
          id: 13,
          cardId: 'BLI-N8UDOP',
          name: 'Lorencia Agnes',
        },
        {
          id: 14,
          cardId: 'BLI-L5SSPA',
          name: 'Algi Nosi',
        },
        {
          id: 15,
          cardId: 'BLI-K96DS1',
          name: 'Jessica Natalia',
        },
      ],
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/employee/detail`,
    method: 'GET',
    params: {
      params: {
        id: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        id: 1,
        cardId: 'BLI-1153AD',
        name: 'Albert Kurniawan',
        email: 'albertkur@gmail.com',
        password: '123456',
        phoneNumber: '081392290882',
        division: 'Operation',
        birthdate: '1990-11-03',
        gender: 'Pria',
        batchId: 202009,
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/employee`,
    method: 'POST',
    params: {
      name: 'Albert Kurniawan',
      email: 'albertkur@gmail.com',
      password: '123456',
      phoneNumber: '081392290882',
      division: 'Operation',
      birthdate: '2020-01-25',
      gender: 'Pria',
      batchId: 202101,
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/employee`,
    method: 'PUT',
    params: {
      id: 1,
      name: 'Albert Kurniawan',
      email: 'albertkur@gmail.com',
      password: '123456',
      phoneNumber: '081392290882',
      division: 'Operation',
      birthdate: '1990-11-03',
      gender: 'Pria',
      batchId: 202009,
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/employee`,
    method: 'DELETE',
    params: {
      params: {
        id: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/trainer`,
    method: 'GET',
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 1,
          name: 'Alfonsus Nugroho',
          division: 'Software Engineer',
        },
        {
          id: 2,
          name: 'Maia Istianti',
          division: 'Operation',
        },
        {
          id: 3,
          name: 'Daiva Rianto',
          division: 'Human Resource',
        },
        {
          id: 4,
          name: 'Spencer Matthew',
          division: 'Software Engineer',
        },
      ],
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/trainer/detail`,
    method: 'GET',
    params: {
      params: {
        id: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        id: 1,
        name: 'Alfonsus Nugroho',
        email: 'alfon@gmail.com',
        password: '123456',
        division: 'Software Engineer',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/trainer`,
    method: 'POST',
    params: {
      name: 'Didit',
      email: 'didit@gmail.com',
      password: '123456',
      division: 'Operation',
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/trainer`,
    method: 'PUT',
    params: {
      id: 1,
      name: 'Alfonsus Nugroho',
      email: 'alfon@gmail.com',
      password: '123456',
      division: 'Software Engineer',
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/trainer`,
    method: 'DELETE',
    params: {
      params: {
        id: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/training`,
    method: 'GET',
    params: {
      params: {
        trainerId: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          training: '1',
          batch: {
            id: 202006,
            batch: 'Juni',
            year: 2020,
          },
          date: '15 September 2020',
          timeStart: '12:00',
          timeFinish: '18:00',
          location: 'di Gedung Serbaguna Basement 1 R.25, Sarana Jaya',
        },
        {
          training: '4',
          batch: {
            id: 202009,
            batch: 'September',
            year: 2020,
          },
          date: '06 Desember 2020',
          timeStart: '09:30',
          timeFinish: '16:30',
          location: 'di Gedung Serbaguna Basement 2 R.2C, Sarana Jaya',
        },
        {
          training: '2',
          batch: {
            id: 202101,
            batch: 'Januari',
            year: 2021,
          },
          date: '10 Februari 2021',
          timeStart: '08:00',
          timeFinish: '15:00',
          location: 'di Gedung Serbaguna Basement 2 R.2A, Sarana Jaya',
        },
      ],
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/training/detail`,
    method: 'GET',
    params: {
      params: {
        trainerId: 1,
        training: '1',
        batchId: 202006,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        batch: {
          id: 202006,
          batch: 'Juni',
          year: 2020,
        },
        materials: [
          {
            id: 1,
            name: 'Think Win Win',
          },
          {
            id: 2,
            name: 'Private Victory',
          },
        ],
        employees: {
          total: 15,
          employee: [
            {
              id: 1,
              cardId: 'BLI-1153AD',
              name: 'Albert Kurniawan',
              status: 1,
            },
            {
              id: 2,
              cardId: 'BLI-1953OP',
              name: 'Simon Samosir',
              status: 1,
            },
            {
              id: 3,
              cardId: 'BLI-D885A1',
              name: 'Maudy Hana',
              status: 1,
            },
            {
              id: 4,
              cardId: 'BLI-B95AAC',
              name: 'Angelia Yohana',
              status: 0,
            },
            {
              id: 5,
              cardId: 'BLI-15A9DS',
              name: 'Rio Martin',
              status: 1,
            },
            {
              id: 6,
              cardId: 'BLI-HG9563',
              name: 'Maria Rosaria',
              status: 0,
            },
            {
              id: 7,
              cardId: 'BLI-PO956E',
              name: 'Spencer Lonhou',
              status: 0,
            },
            {
              id: 8,
              cardId: 'BLI-D89ADC',
              name: 'Roni Simanjuntak',
              status: 1,
            },
            {
              id: 9,
              cardId: 'BLI-55D23A',
              name: 'Julio Cesar',
              status: 1,
            },
            {
              id: 10,
              cardId: 'BLI-PE7SL6',
              name: 'Fifin Andriani',
              status: 0,
            },
            {
              id: 11,
              cardId: 'BLI-S6DD92',
              name: 'Kimmy',
              status: 1,
            },
            {
              id: 12,
              cardId: 'BLI-I7AALS',
              name: 'Andi Wijaya',
              status: 0,
            },
            {
              id: 13,
              cardId: 'BLI-N8UDOP',
              name: 'Lorencia Agnes',
              status: 0,
            },
            {
              id: 14,
              cardId: 'BLI-L5SSPA',
              name: 'Algi Nosi',
              status: 1,
            },
            {
              id: 15,
              cardId: 'BLI-K96DS1',
              name: 'Jessica Natalia',
              status: 1,
            },
          ],
        },
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/material`,
    method: 'POST',
    params: {
      batchId: 202006,
      training: '1',
      material: {
        name: 'Time Management',
        file: 'time.pptx',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/material`,
    method: 'DELETE',
    params: {
      params: {
        batchId: 202006,
        training: '1',
        materialId: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/test`,
    method: 'GET',
    params: {
      params: {
        batchId: 202006,
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        batch: {
          id: 202006,
          batch: 'Juni',
          year: 2020,
        },
        training: '1',
        material: [
          {
            id: 1,
            name: 'Private Victory',
            available: '12 September 2020',
            closed: '15 September 2020',
            timeLimit: 20,
          },
          {
            id: 2,
            name: 'Emotional Banking',
            available: '20 September 2020',
            closed: '22 September 2020',
            timeLimit: 60,
          },
          {
            id: 3,
            name: 'Public Victory',
            available: '-',
            closed: '-',
            timeLimit: '-',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/test/preview`,
    method: 'GET',
    params: {
      params: {
        batchId: 202006,
        training: '1',
        materialId: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        available: '2020-01-15',
        closed: '2020-01-18',
        timeLimit: 20,
        material: {
          id: 1,
          name: 'Think Win Win',
          questions: [
            {
              questionText: 'Semua mahasiswa Perguruan Tinggi memiliki Nomor Induk Mahasiswa. Budi seorang mahasiswa. Jadi,',
              choices: [
                {
                  choice: '1',
                  answer: 'Budi mungkin memiliki nomor induk mahasiswa.',
                },
                {
                  choice: '2',
                  answer: 'Belum tentu Budi memiliki nomor induk mahasiswa.',
                },
                {
                  choice: '3',
                  answer: 'Budi memiliki nomor induk mahasiswa.',
                },
                {
                  choice: '4',
                  answer: 'Budi tidak memiliki nomor induk mahasiswa.',
                },
              ],
              correctAnswer: '3',
            },
            {
              questionText: 'Sebagian pedagang pecel lele mengeluhkan harga cabe naik. Pak Rudi seorang pedagang pecel lele.',
              choices: [
                {
                  choice: '1',
                  answer: 'Pak Rudi pasti mengeluhkan harga cabe naik.',
                },
                {
                  choice: '2',
                  answer: 'Pak Rudi tidak mengeluhkan harga cabe naik.',
                },
                {
                  choice: '3',
                  answer: 'Harga cabe bukanlah keluhan Pak Rudi.',
                },
                {
                  choice: '4',
                  answer: 'Pak Rudi mungkin ikut mengeluhkan harga cabe naik.',
                },
              ],
              correctAnswer: '4',
            },
            {
              questionText: 'Semua pemain sepakbola yang berkebangsaan Itali berwajah tampan. David Beckham adalah pemain sepakbola berkebangsaan Inggris.',
              choices: [
                {
                  choice: '1',
                  answer: 'David Beckham bukanlah pemain sepakbola yang tampan.',
                },
                {
                  choice: '2',
                  answer: 'David Beckham adalah pemain sepakbola yang tampan.',
                },
                {
                  choice: '3',
                  answer: 'Meskipun bukan berkebangsaan Italia, David Beckham pasti berwajah tampan.',
                },
                {
                  choice: '4',
                  answer: 'Tidak dapat ditarik kesimpulan.',
                },
              ],
              correctAnswer: '4',
            },
            {
              questionText: 'Sebagian orang yang berminat menjadi pejabat hanya menginginkan harta dan tahta. Budi tidak berminat menjadi pejabat.',
              choices: [
                {
                  choice: '1',
                  answer: 'Budi tidak menginginkan harta dan tahta.',
                },
                {
                  choice: '2',
                  answer: 'Tahta bukanlah keinginan Budi, tapi harta mungkin ya.',
                },
                {
                  choice: '3',
                  answer: 'Budi menginginkan tahta tapi tidak berminat menjadi pejabat.',
                },
                {
                  choice: '4',
                  answer: 'Tidak dapat ditarik kesimpulan.',
                },
              ],
              correctAnswer: '1',
            },
            {
              questionText: 'Coklat yang dibungkus dalam kemasan menarik sangat laris terjual. Coklat Jago dibungkus dalam kemasan berwarna merah menyala. Menurut anak-anak, warna merah menyala sangatlah menarik.',
              choices: [
                {
                  choice: '1',
                  answer: 'Coklat Jago kurang laris terjual di kalangan anak-anak.',
                },
                {
                  choice: '2',
                  answer: 'Coklat Jago tidak laku terjual di kalangan orang dewasa.',
                },
                {
                  choice: '3',
                  answer: 'Coklat Jago laris terjual.',
                },
                {
                  choice: '4',
                  answer: 'Coklat Jago laris terjual di kalangan anak-anak.',
                },
              ],
              correctAnswer: '4',
            },
          ],
        },
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/test/preview`,
    method: 'GET',
    params: {
      params: {
        batchId: 202006,
        training: '1',
        materialId: 3,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        available: null,
        closed: null,
        timeLimit: null,
        material: {
          id: 1,
          name: 'Public Victory',
          questions: null,
        },
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/test`,
    method: 'POST',
    params: {
      batchId: 202006,
      training: '1',
      materialId: 3,
      test: {
        available: '2020-01-15',
        closed: '2020-01-18',
        timeLimit: 20,
        questions: [
          {
            questionText: 'Semua mahasiswa Perguruan Tinggi memiliki Nomor Induk Mahasiswa. Budi seorang mahasiswa. Jadi,',
            choices: [
              {
                choice: '1',
                answer: 'Budi mungkin memiliki nomor induk mahasiswa.',
              },
              {
                choice: '2',
                answer: 'Belum tentu Budi memiliki nomor induk mahasiswa.',
              },
              {
                choice: '3',
                answer: 'Budi memiliki nomor induk mahasiswa.',
              },
              {
                choice: '4',
                answer: 'Budi tidak memiliki nomor induk mahasiswa.',
              },
            ],
            correctAnswer: '3',
          },
          {
            questionText: 'Sebagian pedagang pecel lele mengeluhkan harga cabe naik. Pak Rudi seorang pedagang pecel lele.',
            choices: [
              {
                choice: '1',
                answer: 'Pak Rudi pasti mengeluhkan harga cabe naik.',
              },
              {
                choice: '2',
                answer: 'Pak Rudi tidak mengeluhkan harga cabe naik.',
              },
              {
                choice: '3',
                answer: 'Harga cabe bukanlah keluhan Pak Rudi.',
              },
              {
                choice: '4',
                answer: 'Pak Rudi mungkin ikut mengeluhkan harga cabe naik.',
              },
            ],
            correctAnswer: '4',
          },
          {
            questionText: 'Semua pemain sepakbola yang berkebangsaan Itali berwajah tampan. David Beckham adalah pemain sepakbola berkebangsaan Inggris.',
            choices: [
              {
                choice: '1',
                answer: 'David Beckham bukanlah pemain sepakbola yang tampan.',
              },
              {
                choice: '2',
                answer: 'David Beckham adalah pemain sepakbola yang tampan.',
              },
              {
                choice: '3',
                answer: 'Meskipun bukan berkebangsaan Italia, David Beckham pasti berwajah tampan.',
              },
              {
                choice: '4',
                answer: 'Tidak dapat ditarik kesimpulan.',
              },
            ],
            correctAnswer: '4',
          },
          {
            questionText: 'Sebagian orang yang berminat menjadi pejabat hanya menginginkan harta dan tahta. Budi tidak berminat menjadi pejabat.',
            choices: [
              {
                choice: '1',
                answer: 'Budi tidak menginginkan harta dan tahta.',
              },
              {
                choice: '2',
                answer: 'Tahta bukanlah keinginan Budi, tapi harta mungkin ya.',
              },
              {
                choice: '3',
                answer: 'Budi menginginkan tahta tapi tidak berminat menjadi pejabat.',
              },
              {
                choice: '4',
                answer: 'Tidak dapat ditarik kesimpulan.',
              },
            ],
            correctAnswer: '1',
          },
          {
            questionText: 'Coklat yang dibungkus dalam kemasan menarik sangat laris terjual. Coklat Jago dibungkus dalam kemasan berwarna merah menyala. Menurut anak-anak, warna merah menyala sangatlah menarik.',
            choices: [
              {
                choice: '1',
                answer: 'Coklat Jago kurang laris terjual di kalangan anak-anak.',
              },
              {
                choice: '2',
                answer: 'Coklat Jago tidak laku terjual di kalangan orang dewasa.',
              },
              {
                choice: '3',
                answer: 'Coklat Jago laris terjual.',
              },
              {
                choice: '4',
                answer: 'Coklat Jago laris terjual di kalangan anak-anak.',
              },
            ],
            correctAnswer: '4',
          },
        ],
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/test`,
    method: 'PUT',
    params: {
      batchId: 202006,
      training: '1',
      materialId: 1,
      test: {
        available: '2020-01-15',
        closed: '2020-01-18',
        timeLimit: 20,
        questions: [
          {
            questionText: 'Semua mahasiswa Perguruan Tinggi memiliki Nomor Induk Mahasiswa. Budi seorang mahasiswa. Jadi,',
            choices: [
              {
                choice: '1',
                answer: 'Budi mungkin memiliki nomor induk mahasiswa.',
              },
              {
                choice: '2',
                answer: 'Belum tentu Budi memiliki nomor induk mahasiswa.',
              },
              {
                choice: '3',
                answer: 'Budi memiliki nomor induk mahasiswa.',
              },
              {
                choice: '4',
                answer: 'Budi tidak memiliki nomor induk mahasiswa.',
              },
            ],
            correctAnswer: '3',
          },
          {
            questionText: 'Sebagian pedagang pecel lele mengeluhkan harga cabe naik. Pak Rudi seorang pedagang pecel lele.',
            choices: [
              {
                choice: '1',
                answer: 'Pak Rudi pasti mengeluhkan harga cabe naik.',
              },
              {
                choice: '2',
                answer: 'Pak Rudi tidak mengeluhkan harga cabe naik.',
              },
              {
                choice: '3',
                answer: 'Harga cabe bukanlah keluhan Pak Rudi.',
              },
              {
                choice: '4',
                answer: 'Pak Rudi mungkin ikut mengeluhkan harga cabe naik.',
              },
            ],
            correctAnswer: '4',
          },
          {
            questionText: 'Semua pemain sepakbola yang berkebangsaan Itali berwajah tampan. David Beckham adalah pemain sepakbola berkebangsaan Inggris.',
            choices: [
              {
                choice: '1',
                answer: 'David Beckham bukanlah pemain sepakbola yang tampan.',
              },
              {
                choice: '2',
                answer: 'David Beckham adalah pemain sepakbola yang tampan.',
              },
              {
                choice: '3',
                answer: 'Meskipun bukan berkebangsaan Italia, David Beckham pasti berwajah tampan.',
              },
              {
                choice: '4',
                answer: 'Tidak dapat ditarik kesimpulan.',
              },
            ],
            correctAnswer: '4',
          },
          {
            questionText: 'Sebagian orang yang berminat menjadi pejabat hanya menginginkan harta dan tahta. Budi tidak berminat menjadi pejabat.',
            choices: [
              {
                choice: '1',
                answer: 'Budi tidak menginginkan harta dan tahta.',
              },
              {
                choice: '2',
                answer: 'Tahta bukanlah keinginan Budi, tapi harta mungkin ya.',
              },
              {
                choice: '3',
                answer: 'Budi menginginkan tahta tapi tidak berminat menjadi pejabat.',
              },
              {
                choice: '4',
                answer: 'Tidak dapat ditarik kesimpulan.',
              },
            ],
            correctAnswer: '1',
          },
          {
            questionText: 'Coklat yang dibungkus dalam kemasan menarik sangat laris terjual. Coklat Jago dibungkus dalam kemasan berwarna merah menyala. Menurut anak-anak, warna merah menyala sangatlah menarik.',
            choices: [
              {
                choice: '1',
                answer: 'Coklat Jago kurang laris terjual di kalangan anak-anak.',
              },
              {
                choice: '2',
                answer: 'Coklat Jago tidak laku terjual di kalangan orang dewasa.',
              },
              {
                choice: '3',
                answer: 'Coklat Jago laris terjual.',
              },
              {
                choice: '4',
                answer: 'Coklat Jago laris terjual di kalangan anak-anak.',
              },
            ],
            correctAnswer: '4',
          },
        ],
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/notification`,
    method: 'GET',
    params: {
      params: {
        trainerId: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 1,
          title: 'Reminder - Training',
          message: 'Haloo Albert, ingat lho 2 minggu lagi kamu ada jadwal mengajar batch Juni 2020 training 1 di Wisma Rahayu, tepatnya pada tanggal 15 September 2020. Untuk lebih detailnya, cek jadwal di halaman training ya!',
        },
        {
          id: 2,
          title: 'Reminder - Training',
          message: 'Haloo Albert, ingat lho 2 minggu lagi kamu ada jadwal mengajar batch Januari 2021 training 3 di Sarana Jaya, tepatnya pada tanggal 22 April 2021. Untuk lebih detailnya, cek jadwal di halaman training ya!',
        },
      ],
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/notification/trigger`,
    method: 'GET',
    params: {
      params: {
        trainerId: 1,
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        hasNotif: true,
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/notification`,
    method: 'POST',
    params: {
      trainerId: 1,
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
];
