const API = 'http://localhost:8123/api';

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
        batch: '2',
        name: 'Albert Kurniawan',
        email: 'albertkur@gmail.com',
        phoneNumber: '081375589622',
        division: 'Software Developer',
        birthdate: '19/02/2020',
        gender: 'Pria',
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
        employees: {
          total: '12',
          employee: [
            {
              id: 1,
              name: 'Albert Kurniawan',
              division: 'Sales Manager',
            },
            {
              id: 2,
              name: 'Rendi Orton',
              division: 'Sales Manager',
            },
            {
              id: 3,
              name: 'Denny Laoli',
              division: 'Supervisor Business',
            },
            {
              id: 4,
              name: 'Irene Nike',
              division: 'Akuntan',
            },
            {
              id: 5,
              name: 'Diana Permata',
              division: 'Akuntan',
            },
            {
              id: 6,
              name: 'Desman Zega',
              division: 'Software Developer',
            },
            {
              id: 7,
              name: 'Kevin Santoso',
              division: 'Software Developer',
            },
            {
              id: 8,
              name: 'Simon',
              division: 'Software Developer',
            },
            {
              id: 9,
              name: 'Niken Regina',
              division: 'Quality Control',
            },
            {
              id: 10,
              name: 'Yemima Milenia',
              division: 'Quality Control',
            },
            {
              id: 11,
              name: 'Nicholaus Putra',
              division: 'Quality Control',
            },
            {
              id: 12,
              name: 'Andi Wijaya',
              division: 'Quality Control',
            },
          ],
        },
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
        training: '2',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        training: {
          id: 2,
          training: '2',
          date: '27 September 2020',
          timeStart: '12.00',
          timeFinish: '15.00',
          trainer: 'Andi Law',
          location: 'di Gedung Serbaguna, Ruang 112 A Sarana Jaya',
          materials: [
            {
              id: 1,
              name: 'Private Victory',
              link: 'https://www.google.co.id',
            },
          ],
        },
        employees: {
          total: '10',
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
              name: 'Nicholaus Putra',
              division: 'Quality Control',
            },
            {
              id: 5,
              name: 'Denny Laoli',
              division: 'Supervisor Business',
            },
            {
              id: 6,
              name: 'Albert Kurniawan',
              division: 'Sales Manager',
            },
            {
              id: 7,
              name: 'Rendi Orton',
              division: 'Sales Manager',
            },
            {
              id: 8,
              name: 'Irene Nike',
              division: 'Akuntan',
            },
            {
              id: 9,
              name: 'Desman Zega',
              division: 'Software Developer',
            },
            {
              id: 10,
              name: 'Simon',
              division: 'Software Developer',
            },
          ],
        },
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
        training: '3',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        training: {
          id: 3,
          training: '3',
          date: '09 Oktober 2020',
          timeStart: '09.00',
          timeFinish: '15.00',
          trainer: 'Martha Vally',
          location: 'di Hotel Aston Lt 27 Ruang Mawar',
          materials: [
            {
              id: 1,
              name: 'Public Victory',
              link: 'https://www.google.co.id',
            },
          ],
        },
        employees: {
          total: '8',
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
              name: 'Nicholaus Putra',
              division: 'Quality Control',
            },
            {
              id: 5,
              name: 'Denny Laoli',
              division: 'Supervisor Business',
            },
            {
              id: 6,
              name: 'Albert Kurniawan',
              division: 'Sales Manager',
            },
            {
              id: 7,
              name: 'Rendi Orton',
              division: 'Sales Manager',
            },
            {
              id: 8,
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
    url: `${API}/training/detail`,
    method: 'GET',
    params: {
      params: {
        employeeId: 1,
        training: '4',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        training: {
          id: 4,
          training: '4',
          date: '18 Oktober 2020',
          timeStart: '15.00',
          timeFinish: '18.00',
          trainer: 'Martin Sutanto',
          location: 'di Hotel Aston Lt 15 Ruang Melati',
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
          total: '7',
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
              name: 'Nicholaus Putra',
              division: 'Quality Control',
            },
            {
              id: 5,
              name: 'Albert Kurniawan',
              division: 'Sales Manager',
            },
            {
              id: 6,
              name: 'Rendi Orton',
              division: 'Sales Manager',
            },
            {
              id: 7,
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
          timeLimit: '20 menit',
          score: 0,
          status: 0,
        },
        {
          id: 2,
          material: 'Public Victory',
          dateAvailable: '17 September 2020',
          dateClosed: '18 September 2020',
          timeLimit: '30 menit',
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
      data: [
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
        batch: '2',
        name: 'Albert Kurniawan',
        email: 'albertkur@gmail.com',
        phoneNumber: '081995561257',
        division: 'Software Developer',
        birthdate: '21/08/1995',
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
          id: 1,
          batch: '1',
        },
      ],
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch`,
    method: 'POST',
    params: {
      batch: '1',
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
        batch: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        batch: {
          id: 1,
          batch: '1',
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
    url: `${API}/admin/employee`,
    method: 'GET',
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: [
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
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch/training`,
    method: 'GET',
    params: {
      params: {
        batch: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        batch: {
          id: 1,
          batch: '1',
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
      batch: '1',
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
];
