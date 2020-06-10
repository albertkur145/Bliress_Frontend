const API = 'http://localhost:8123/api';

export default [
  {
    url: `${API}/training`,
    method: 'GET',
    params: {
      employeeId: 1,
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
      employeeId: 1,
      training: '1',
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
      employeeId: 1,
      training: '2',
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
      employeeId: 1,
      training: '3',
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
      employeeId: 1,
      training: '4',
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
      employeeId: 1,
      training: '5',
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
      employeeId: 1,
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
    url: `${API}/test/materials`,
    method: 'GET',
    params: {
      employeeId: 1,
      training: '1',
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
    url: `${API}/test/materials/question`,
    method: 'GET',
    params: {
      employeeId: 1,
      training: '1',
      materialId: 1,
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
];
