const API = 'http://192.168.18.6:8081/api';

export default [
  {
    url: `${API}/auth/login`,
    method: 'POST',
    params: {
      usermail: 'albertkur@gmail.com',
      password: '123',
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        token: 'eyJhbGciOiJIUzUxMiJ',
        message: 'SUCCESS',
        user: {
          userId: '1',
          username: 'albertkur',
          usermail: 'albertkur@mail.com',
          roles: [
            'ROLE_EMPLOYEE',
          ],
          division: null,
          phoneNumber: null,
          gender: null,
          batch: null,
          stage: null,
          birthDate: null,
          registeredAt: null,
        },
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/auth/login`,
    method: 'POST',
    params: {
      usermail: 'admin@gmail.com',
      password: 'admin',
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        token: 'eyJhbGciOiJIUzUxMiJ',
        message: 'SUCCESS',
        user: {
          userId: '1',
          username: 'admin',
          usermail: 'admin@mail.com',
          roles: [
            'ROLE_ADMIN',
          ],
          division: null,
          phoneNumber: null,
          gender: null,
          batch: null,
          stage: null,
          birthDate: null,
          registeredAt: null,
        },
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/auth/login`,
    method: 'POST',
    params: {
      usermail: 'trainer@gmail.com',
      password: '123',
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        token: 'eyJhbGciOiJIUzUxMiJ',
        message: 'SUCCESS',
        user: {
          userId: '1',
          username: 'trainer',
          usermail: 'trainer@mail.com',
          roles: [
            'ROLE_TRAINER',
          ],
          division: null,
          phoneNumber: null,
          gender: null,
          batch: null,
          stage: null,
          birthDate: null,
          registeredAt: null,
        },
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
        employeeId: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        trainingList: [
          {
            id: '1',
            training: '1',
            date: '15 September 2020',
          },
          {
            id: '2',
            training: '2',
            date: '27 September 2020',
          },
          {
            id: '3',
            training: '3',
            date: '09 Oktober 2020',
          },
          {
            id: '4',
            training: '4',
            date: '18 Oktober 2020',
          },
          {
            id: '5',
            training: '5',
            date: '30 Oktober 2020',
          },
        ],
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
        employeeId: '1',
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        training: {
          id: '1',
          training: '1',
          date: '15 September 2020',
          timeStart: '08.00',
          timeFinish: '16.00',
          trainer: 'Rudi Santoso',
          location: 'di Gedung Serbaguna, Ruang 315 C Sarana Jaya',
        },
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/material`,
    method: 'GET',
    params: {
      params: {
        employeeId: '1',
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        materialList: [
          {
            id: '1',
            name: 'Think Win Win',
            link: 'http://www.google.co.id',
          },
          {
            id: '2',
            name: 'Time Management',
            link: 'http://www.google.co.id',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/training/attendance`,
    method: 'GET',
    params: {
      params: {
        employeeId: '1',
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        hasAttend: '1',
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
        employeeId: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        testList: [
          {
            id: '1',
            training: '1',
            status: 'Available',
          },
          {
            id: '2',
            training: '2',
            status: 'Available',
          },
          {
            id: '3',
            training: '3',
            status: 'Closed',
          },
          {
            id: '4',
            training: '4',
            status: 'Closed',
          },
          {
            id: '5',
            training: '5',
            status: 'Closed',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/test/material`,
    method: 'GET',
    params: {
      params: {
        employeeId: '1',
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        materialList: [
          {
            id: '1',
            material: 'Private Victory',
            dateAvailable: '12 September 2020',
            dateClosed: '14 September 2020',
            timeLimit: '20',
            score: '0',
            status: '0',
          },
          {
            id: '2',
            material: 'Public Victory',
            dateAvailable: '17 September 2020',
            dateClosed: '18 September 2020',
            timeLimit: '30',
            score: '60',
            status: '1',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/test/material/question`,
    method: 'GET',
    params: {
      params: {
        employeeId: '1',
        training: '1',
        materialId: '1',
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
            id: '1',
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
            id: '2',
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
            id: '3',
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
            id: '4',
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
            id: '5',
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
      employeeId: '1',
      materialId: '1',
      training: '1',
      question: [
        {
          id: '1',
          choice: '2',
        },
        {
          id: '2',
          choice: '1',
        },
        {
          id: '3',
          choice: '4',
        },
        {
          id: '4',
          choice: '2',
        },
        {
          id: '5',
          choice: '3',
        },
      ],
    },
    status: 202,
    response: {
      code: 202,
      status: 'ACCEPTED',
      data: {
        status: 'ACCEPTED',
        message: 'Test has been submit',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/test/material/question`,
    method: 'POST',
    params: {
      employeeId: '1',
      materialId: '1',
      training: '1',
      question: [
        {
          id: '1',
          choice: '',
        },
        {
          id: '2',
          choice: '',
        },
        {
          id: '3',
          choice: '',
        },
        {
          id: '4',
          choice: '',
        },
        {
          id: '5',
          choice: '',
        },
      ],
    },
    status: 202,
    response: {
      code: 202,
      status: 'ACCEPTED',
      data: {
        status: 'ACCEPTED',
        message: 'Test has been submit',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/notification/trigger`,
    method: 'GET',
    params: {
      params: {
        employeeId: '1',
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
        employeeId: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        notificationList: [
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
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/notification`,
    method: 'POST',
    params: {
      employeeId: '1',
    },
    status: 202,
    response: {
      code: 202,
      status: 'ACCEPTED',
      data: {
        status: 'ACCEPTED',
        message: 'Notification has been read',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/employee`,
    method: 'GET',
    params: {
      params: {
        employeeId: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        employee: {
          id: '1',
          cardId: 'BLI-22D9D6',
          batch: 'Juni - 2020',
          name: 'Albert Kurniawan',
          email: 'albertkur@gmail.com',
          phoneNumber: '081995561257',
          division: 'Software Developer',
          birthdate: '21-08-1995',
          gender: 'Pria',
        },
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/employee/password`,
    method: 'PUT',
    params: {
      employeeId: '1',
      oldPassword: '123',
      currentPassword: '456',
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
    method: 'GET',
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        batchList: [
          {
            batchId: 'FEB-2020',
            batchName: 'FEB - 2020',
            month: '2',
            year: '2020',
          },
          {
            batchId: 'APR-2020',
            batchName: 'APR - 2020',
            month: '4',
            year: '2020',
          },
          {
            batchId: 'MAR-2020',
            batchName: 'MAR - 2020',
            month: '3',
            year: '2020',
          },
          {
            batchId: 'JAN-2020',
            batchName: 'JAN - 2020',
            month: '1',
            year: '2020',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch`,
    method: 'DELETE',
    params: {
      params: {
        batchId: 'FEB-2020',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        status: 'OK',
        message: 'Batch has been deleted',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch`,
    method: 'POST',
    params: {
      batch: '9',
      year: '2020',
    },
    status: 200,
    response: {
      code: 202,
      status: 'ACCEPTED',
      data: {
        status: 'ACCEPTED',
        message: 'Batch has been created',
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
        batchId: 'FEB-2020',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        trainingList: [
          {
            trainingId: '1',
            stage: '1',
            date: '15 September 2020',
            startedAt: '08.00',
            endedAt: '16.00',
            trainerName: 'Rudi Santoso',
            location: 'di Gedung Serbaguna, Ruang 315 C Sarana Jaya',
          },
          {
            trainingId: '2',
            stage: '2',
            date: '27 September 2020',
            startedAt: '12.00',
            endedAt: '15.00',
            trainerName: 'Alvin Wijaya',
            location: 'di Gedung Ropoko, Ruang 54 Sarana Jaya',
          },
          {
            trainingId: '3',
            stage: '3',
            date: '04 Oktober 2020',
            startedAt: '09.00',
            endedAt: '18.00',
            trainerName: 'Renzvin',
            location: 'di Hotel British, Lt. 42 Ruang Anggrek',
          },
          {
            trainingId: '4',
            stage: '4',
            date: '12 Oktober 2020',
            startedAt: '08.00',
            endedAt: '14.00',
            trainerName: 'Andi Wijaya',
            location: 'di Hotel Aston, Basement Ruang Meeting',
          },
          {
            trainingId: '5',
            stage: '5',
            date: '20 Oktober 2020',
            startedAt: '12.00',
            endedAt: '18.00',
            trainerName: 'Fanny Setiani',
            location: 'di Gedung Serbaguna, Ruang 315 C Sarana Jaya',
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
      batchId: 'FEB-2020',
      training: '1',
      date: '25-01-2020',
      location: 'di Gedung Maybara, Lt 3 Ruang 215',
      timeStart: '08:00',
      timeFinish: '15:00',
      trainerId: '1',
      trainerName: 'Alfonsus Nugroho',
    },
    status: 200,
    response: {
      code: 202,
      status: 'ACCEPTED',
      data: {
        status: 'ACCEPTED',
        message: 'Training has been created',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch/training/detail`,
    method: 'GET',
    params: {
      params: {
        batchId: 'FEB-2020',
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        trainingId: '1',
        stage: '1',
        date: '25-03-2020',
        startedAt: '08:00',
        endedAt: '16:00',
        trainerId: '1',
        trainerName: 'Alfonsus Nugroho',
        location: 'di Gedung Serbaguna, Ruang 315 C Sarana Jaya',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch/training`,
    method: 'PUT',
    params: {
      batchId: 'FEB-2020',
      training: '1',
      date: '17-03-2020',
      location: 'di Gedung Serbaguna, Ruang 315 C Sarana Jaya',
      timeStart: '08:00',
      timeFinish: '16:00',
      trainerId: '2',
      trainerName: 'Maia Istianti',
    },
    status: 200,
    response: {
      code: 202,
      status: 'ACCEPTED',
      data: {
        status: 'ACCEPTED',
        message: 'Training has been updated',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch/training`,
    method: 'DELETE',
    params: {
      params: {
        batchId: 'FEB-2020',
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        status: 'OK',
        message: 'Training has been deleted',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/batch/training/attendance`,
    method: 'GET',
    params: {
      params: {
        batchId: 'FEB-2020',
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        employeeList: [
          {
            userId: '1',
            username: 'Albert Kurniawan',
            division: 'Operation',
            status: true,
          },
          {
            userId: '2',
            username: 'Muhammad Taufan Okka',
            division: 'Operation',
            status: true,
          },
          {
            userId: '3',
            username: 'Simon Samosir',
            division: 'Operation',
            status: false,
          },
          {
            userId: '4',
            username: 'Felix Alvin',
            division: 'Operation',
            status: true,
          },
          {
            userId: '5',
            username: 'Tari Swaswati',
            division: 'Operation',
            status: true,
          },
          {
            userId: '6',
            username: 'Esra Targian',
            division: 'Operation',
            status: false,
          },
          {
            userId: '7',
            username: 'Timotius Nugroho',
            division: 'Operation',
            status: false,
          },
          {
            userId: '8',
            username: 'Lia Ernita',
            division: 'Operation',
            status: true,
          },
          {
            userId: '9',
            username: 'Devayani Dinda',
            division: 'Finance',
            status: false,
          },
          {
            userId: '10',
            username: 'Kelvin',
            division: 'Finance',
            status: false,
          },
          {
            userId: '11',
            username: 'Maudy Hana',
            division: 'Finance',
            status: true,
          },
          {
            userId: '12',
            username: 'Angelia Yohana',
            division: 'Finance',
            status: true,
          },
          {
            userId: '13',
            username: 'Rio Martin',
            division: 'Finance',
            status: false,
          },
          {
            userId: '14',
            username: 'Maria Rosaria',
            division: 'Software Developer',
            status: false,
          },
          {
            userId: '15',
            username: 'Spencer Lonhou',
            division: 'Software Developer',
            status: true,
          },
          {
            userId: '16',
            username: 'Roni Simanjuntak',
            division: 'Software Developer',
            status: true,
          },
          {
            userId: '17',
            username: 'Julio Cesar',
            division: 'Software Developer',
            status: true,
          },
          {
            userId: '18',
            username: 'Fifin Andriani',
            division: 'Software Developer',
            status: true,
          },
          {
            userId: '19',
            username: 'Kimmy',
            division: 'Software Developer',
            status: false,
          },
          {
            userId: '20',
            username: 'Andi Wijaya',
            division: 'UI/UX Designer',
            status: true,
          },
          {
            userId: '21',
            username: 'Lorencia Agnes',
            division: 'UI/UX Designer',
            status: false,
          },
          {
            userId: '22',
            username: 'Algi Nosi',
            division: 'UI/UX Designer',
            status: false,
          },
          {
            userId: '23',
            username: 'Jessica Natalia',
            division: 'UI/UX Designer',
            status: true,
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
        batchId: 'FEB-2020',
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        materialList: [
          {
            materialId: '1',
            materialName: 'Think Win Win',
          },
          {
            materialId: '2',
            materialName: 'Time Management',
          },
          {
            materialId: '3',
            materialName: 'Public Victory',
          },
          {
            materialId: '4',
            materialName: '7 Habbits',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/material`,
    method: 'DELETE',
    params: {
      params: {
        batchId: 'FEB-2020',
        training: '1',
        materialId: '1',
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
      batchId: 'FEB-2020',
      training: '1',
      materialName: 'Time Management',
    },
    status: 200,
    response: {
      code: 202,
      status: 'ACCEPTED',
      data: {
        status: 'ACCEPTED',
        message: 'Material has been created',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/test`,
    method: 'GET',
    params: {
      params: {
        batchId: 'FEB-2020',
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        materialList: [
          {
            materialId: '1',
            materialName: 'Private Victory',
            testExist: true,
            testAvailable: '12 September 2020',
            testClosed: '15 September 2020',
            testTimeLimit: 20,
          },
          {
            materialId: '2',
            materialName: 'Emotional Banking',
            testExist: true,
            testAvailable: '20 September 2020',
            testClosed: '22 September 2020',
            testTimeLimit: 60,
          },
          {
            materialId: '3',
            materialName: 'Public Victory',
            testExist: false,
            testAvailable: null,
            testClosed: null,
            testTimeLimit: null,
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
        batchId: 'FEB-2020',
        training: '1',
        materialId: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        testId: '5ced6134-42db-4e6c-832b-26f06f30bd3e',
        batchId: 'FEB-2020',
        stage: '1',
        materialId: '1',
        available: '15-01-2020',
        closed: '18-01-2020',
        timeLimit: '20',
        questions: [
          {
            questionText: 'Semua mahasiswa Perguruan Tinggi memiliki Nomor Induk Mahasiswa. Budi seorang mahasiswa. Jadi,',
            choices: [
              'Budi mungkin memiliki nomor induk mahasiswa.',
              'Belum tentu Budi memiliki nomor induk mahasiswa.',
              'Budi memiliki nomor induk mahasiswa.',
              'Budi tidak memiliki nomor induk mahasiswa.',
            ],
            correctAnswer: '2',
          },
          {
            questionText: 'Sebagian pedagang pecel lele mengeluhkan harga cabe naik. Pak Rudi seorang pedagang pecel lele.',
            choices: [
              'Pak Rudi pasti mengeluhkan harga cabe naik.',
              'Pak Rudi tidak mengeluhkan harga cabe naik.',
              'Harga cabe bukanlah keluhan Pak Rudi.',
              'Pak Rudi mungkin ikut mengeluhkan harga cabe naik.',
            ],
            correctAnswer: '3',
          },
          {
            questionText: 'Semua pemain sepakbola yang berkebangsaan Itali berwajah tampan. David Beckham adalah pemain sepakbola berkebangsaan Inggris.',
            choices: [
              'David Beckham bukanlah pemain sepakbola yang tampan.',
              'David Beckham adalah pemain sepakbola yang tampan.',
              'Meskipun bukan berkebangsaan Italia, David Beckham pasti berwajah tampan.',
              'Tidak dapat ditarik kesimpulan.',
            ],
            correctAnswer: '3',
          },
          {
            questionText: 'Sebagian orang yang berminat menjadi pejabat hanya menginginkan harta dan tahta. Budi tidak berminat menjadi pejabat.',
            choices: [
              'Budi tidak menginginkan harta dan tahta.',
              'Tahta bukanlah keinginan Budi, tapi harta mungkin ya.',
              'Budi menginginkan tahta tapi tidak berminat menjadi pejabat.',
              'Tidak dapat ditarik kesimpulan.',
            ],
            correctAnswer: '0',
          },
          {
            questionText: 'Coklat yang dibungkus dalam kemasan menarik sangat laris terjual. Coklat Jago dibungkus dalam kemasan berwarna merah menyala. Menurut anak-anak, warna merah menyala sangatlah menarik.',
            choices: [
              'Coklat Jago kurang laris terjual di kalangan anak-anak.',
              'Coklat Jago tidak laku terjual di kalangan orang dewasa.',
              'Coklat Jago laris terjual.',
              'Coklat Jago laris terjual di kalangan anak-anak.',
            ],
            correctAnswer: '3',
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
        batchId: 'FEB-2020',
        training: '1',
        materialId: '3',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        testId: null,
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/test`,
    method: 'POST',
    params: {
      batchId: 'FEB-2020',
      training: '1',
      materialId: '3',
      available: '2020-01-15',
      closed: '2020-01-18',
      timeLimit: '20',
      questions: [
        {
          questionText: 'Semua mahasiswa Perguruan Tinggi memiliki Nomor Induk Mahasiswa. Budi seorang mahasiswa. Jadi,',
          choices: [
            'Budi mungkin memiliki nomor induk mahasiswa.',
            'Belum tentu Budi memiliki nomor induk mahasiswa.',
            'Budi memiliki nomor induk mahasiswa.',
            'Budi tidak memiliki nomor induk mahasiswa.',
          ],
          correctAnswer: '2',
        },
        {
          questionText: 'Sebagian pedagang pecel lele mengeluhkan harga cabe naik. Pak Rudi seorang pedagang pecel lele.',
          choices: [
            'Pak Rudi pasti mengeluhkan harga cabe naik.',
            'Pak Rudi tidak mengeluhkan harga cabe naik.',
            'Harga cabe bukanlah keluhan Pak Rudi.',
            'Pak Rudi mungkin ikut mengeluhkan harga cabe naik.',
          ],
          correctAnswer: '3',
        },
        {
          questionText: 'Semua pemain sepakbola yang berkebangsaan Itali berwajah tampan. David Beckham adalah pemain sepakbola berkebangsaan Inggris.',
          choices: [
            'David Beckham bukanlah pemain sepakbola yang tampan.',
            'David Beckham adalah pemain sepakbola yang tampan.',
            'Meskipun bukan berkebangsaan Italia, David Beckham pasti berwajah tampan.',
            'Tidak dapat ditarik kesimpulan.',
          ],
          correctAnswer: '3',
        },
        {
          questionText: 'Sebagian orang yang berminat menjadi pejabat hanya menginginkan harta dan tahta. Budi tidak berminat menjadi pejabat.',
          choices: [
            'Budi tidak menginginkan harta dan tahta.',
            'Tahta bukanlah keinginan Budi, tapi harta mungkin ya.',
            'Budi menginginkan tahta tapi tidak berminat menjadi pejabat.',
            'Tidak dapat ditarik kesimpulan.',
          ],
          correctAnswer: '0',
        },
        {
          questionText: 'Coklat yang dibungkus dalam kemasan menarik sangat laris terjual. Coklat Jago dibungkus dalam kemasan berwarna merah menyala. Menurut anak-anak, warna merah menyala sangatlah menarik.',
          choices: [
            'Coklat Jago kurang laris terjual di kalangan anak-anak.',
            'Coklat Jago tidak laku terjual di kalangan orang dewasa.',
            'Coklat Jago laris terjual.',
            'Coklat Jago laris terjual di kalangan anak-anak.',
          ],
          correctAnswer: '3',
        },
      ],
    },
    status: 200,
    response: {
      code: 202,
      status: 'ACCEPTED',
      data: {
        status: 'ACCEPTED',
        message: 'Test has been created',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/test`,
    method: 'PUT',
    params: {
      batchId: 'FEB-2020',
      training: '1',
      materialId: '1',
      available: '2020-01-15',
      closed: '2020-01-18',
      timeLimit: '20',
      questions: [
        {
          questionText: 'Semua mahasiswa Perguruan Tinggi memiliki Nomor Induk Mahasiswa. Budi seorang mahasiswa. Jadi,',
          choices: [
            'Budi mungkin memiliki nomor induk mahasiswa.',
            'Belum tentu Budi memiliki nomor induk mahasiswa.',
            'Budi memiliki nomor induk mahasiswa.',
            'Budi tidak memiliki nomor induk mahasiswa.',
          ],
          correctAnswer: '2',
        },
        {
          questionText: 'Sebagian pedagang pecel lele mengeluhkan harga cabe naik. Pak Rudi seorang pedagang pecel lele.',
          choices: [
            'Pak Rudi pasti mengeluhkan harga cabe naik.',
            'Pak Rudi tidak mengeluhkan harga cabe naik.',
            'Harga cabe bukanlah keluhan Pak Rudi.',
            'Pak Rudi mungkin ikut mengeluhkan harga cabe naik.',
          ],
          correctAnswer: '3',
        },
        {
          questionText: 'Semua pemain sepakbola yang berkebangsaan Itali berwajah tampan. David Beckham adalah pemain sepakbola berkebangsaan Inggris.',
          choices: [
            'David Beckham bukanlah pemain sepakbola yang tampan.',
            'David Beckham adalah pemain sepakbola yang tampan.',
            'Meskipun bukan berkebangsaan Italia, David Beckham pasti berwajah tampan.',
            'Tidak dapat ditarik kesimpulan.',
          ],
          correctAnswer: '3',
        },
        {
          questionText: 'Sebagian orang yang berminat menjadi pejabat hanya menginginkan harta dan tahta. Budi tidak berminat menjadi pejabat.',
          choices: [
            'Budi tidak menginginkan harta dan tahta.',
            'Tahta bukanlah keinginan Budi, tapi harta mungkin ya.',
            'Budi menginginkan tahta tapi tidak berminat menjadi pejabat.',
            'Tidak dapat ditarik kesimpulan.',
          ],
          correctAnswer: '0',
        },
        {
          questionText: 'Coklat yang dibungkus dalam kemasan menarik sangat laris terjual. Coklat Jago dibungkus dalam kemasan berwarna merah menyala. Menurut anak-anak, warna merah menyala sangatlah menarik.',
          choices: [
            'Coklat Jago kurang laris terjual di kalangan anak-anak.',
            'Coklat Jago tidak laku terjual di kalangan orang dewasa.',
            'Coklat Jago laris terjual.',
            'Coklat Jago laris terjual di kalangan anak-anak.',
          ],
          correctAnswer: '3',
        },
      ],
    },
    status: 200,
    response: {
      code: 202,
      status: 'ACCEPTED',
      data: {
        status: 'ACCEPTED',
        message: 'Test has been created',
      },
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
      data: {
        notificationList: [
          {
            id: '1',
            title: 'PENGUMUMAN',
            batch: 'Juni 2020',
            message: 'Dalam mengikuti training 2, diharapkan setiap peserta training membawa kebutuhan masing-masing seperti alat tulis, laptop, ataupun peralatan mandi lainnya. Terimakasih.',
            date: '12/07/2020, 09.45',
          },
          {
            id: '2',
            title: 'PENGUMUMAN',
            batch: 'Januari 2021',
            message: 'Dalam mengikuti training 4, diharapkan setiap peserta training pas foto 3x4 sebanyak 2 lembar dan 6x4 sebanyak 4 lembar. Terimakasih.',
            date: '24/08/2021, 10.20',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/notification`,
    method: 'POST',
    params: {
      batchId: 'JAN-2020',
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
      data: {
        employeeList: [
          {
            userId: '1',
            username: 'Albert Kurniawan',
            division: 'Operation',
          },
          {
            userId: '2',
            username: 'Simon Samosir',
            division: 'Operation',
          },
          {
            userId: '3',
            username: 'Maudy Hana',
            division: 'Operation',
          },
          {
            userId: '4',
            username: 'Angelia Yohana',
            division: 'Operation',
          },
          {
            userId: '5',
            username: 'Rio Martin',
            division: 'Software Developer',
          },
          {
            userId: '6',
            username: 'Maria Rosaria',
            division: 'Software Developer',
          },
          {
            userId: '7',
            username: 'Spencer Lonhou',
            division: 'Software Developer',
          },
          {
            userId: '8',
            username: 'Roni Simanjuntak',
            division: 'Software Developer',
          },
          {
            userId: '9',
            username: 'Julio Cesar',
            division: 'Software Developer',
          },
          {
            userId: '10',
            username: 'Fifin Andriani',
            division: 'UI/UX Designer',
          },
          {
            userId: '11',
            username: 'Kimmy',
            division: 'UI/UX Designer',
          },
          {
            userId: '12',
            username: 'Andi Wijaya',
            division: 'UI/UX Designer',
          },
          {
            userId: '13',
            username: 'Lorencia Agnes',
            division: 'UI/UX Designer',
          },
          {
            userId: '14',
            username: 'Algi Nosi',
            division: 'Finance',
          },
          {
            userId: '15',
            username: 'Jessica Natalia',
            division: 'Finance',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/employee/detail`,
    method: 'GET',
    params: {
      params: {
        id: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        userId: '1',
        username: 'Albert Kurniawan',
        usermail: 'albertkur@gmail.com',
        phoneNumber: '081392290882',
        division: 'Software Engineer',
        birthDate: '19-11-2020',
        gender: 'PRIA',
        batch: 'JAN-2020',
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
      birthdate: '25-01-2020',
      gender: 'Pria',
      batchId: 'JAN-2020',
    },
    status: 200,
    response: {
      code: 202,
      status: 'ACCEPTED',
      data: {
        status: 'ACCEPTED',
        message: 'Employee has been created',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/employee`,
    method: 'PUT',
    params: {
      id: '1',
      name: 'Albert Kurniawan',
      email: 'albertkur@gmail.com',
      phoneNumber: '081392290882',
      division: 'Operation',
      birthdate: '19-11-2020',
      gender: 'Pria',
      batchId: 'JAN-2020',
    },
    status: 200,
    response: {
      code: 202,
      status: 'ACCEPTED',
      data: {
        status: 'ACCEPTED',
        message: 'Employee has been created',
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
        batchId: 'FEB-2020',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        employeeList: [
          {
            userId: '1',
            username: 'Albert Kurniawan',
            division: 'Operation',
          },
          {
            userId: '2',
            username: 'Muhammad Taufan Okka',
            division: 'Operation',
          },
          {
            userId: '3',
            username: 'Simon Samosir',
            division: 'Operation',
          },
          {
            userId: '4',
            username: 'Felix Alvin',
            division: 'Operation',
          },
          {
            userId: '5',
            username: 'Tari Swaswati',
            division: 'Operation',
          },
          {
            userId: '6',
            username: 'Esra Targian',
            division: 'Software Engineer',
          },
          {
            userId: '7',
            username: 'Timotius Nugroho',
            division: 'Software Engineer',
          },
          {
            userId: '8',
            username: 'Lia Ernita',
            division: 'Software Engineer',
          },
          {
            userId: '9',
            username: 'Devayani Dinda',
            division: 'Software Engineer',
          },
          {
            userId: '10',
            username: 'Kelvin',
            division: 'Software Engineer',
          },
          {
            userId: '11',
            username: 'Maudy Hana',
            division: 'Finance',
          },
          {
            userId: '12',
            username: 'Angelia Yohana',
            division: 'Finance',
          },
          {
            userId: '13',
            username: 'Rio Martin',
            division: 'Finance',
          },
          {
            userId: '14',
            username: 'Maria Rosaria',
            division: 'Finance',
          },
          {
            userId: '15',
            username: 'Spencer Lonhou',
            division: 'UI/UX Designer',
          },
          {
            userId: '16',
            username: 'Roni Simanjuntak',
            division: 'UI/UX Designer',
          },
          {
            userId: '17',
            username: 'Julio Cesar',
            division: 'UI/UX Designer',
          },
          {
            userId: '18',
            username: 'Fifin Andriani',
            division: 'UI/UX Designer',
          },
          {
            userId: '19',
            username: 'Kimmy',
            division: 'UI/UX Designer',
          },
          {
            userId: '20',
            username: 'Andi Wijaya',
            division: 'UI/UX Designer',
          },
          {
            userId: '21',
            username: 'Lorencia Agnes',
            division: 'Accountant',
          },
          {
            userId: '22',
            username: 'Algi Nosi',
            division: 'Accountant',
          },
          {
            userId: '23',
            username: 'Jessica Natalia',
            division: 'Accountant',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/employee/reset`,
    method: 'PUT',
    params: {
      id: '1',
    },
    status: 200,
    response: {
      code: 202,
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
        id: '1',
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
      data: {
        trainerList: [
          {
            userId: '1',
            username: 'Alfonsus Nugroho',
            division: 'Software Engineer',
          },
          {
            userId: '2',
            username: 'Maia Istianti',
            division: 'Operation',
          },
          {
            userId: '3',
            username: 'Daiva Rianto',
            division: 'Human Resource',
          },
          {
            userId: '4',
            username: 'Spencer Matthew',
            division: 'Software Engineer',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/trainer/detail`,
    method: 'GET',
    params: {
      params: {
        id: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        userId: 1,
        username: 'Alfonsus Nugroho',
        usermail: 'alfon@gmail.com',
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
      code: 202,
      status: 'OK',
      data: {
        status: 'ACCEPTED',
        message: 'Trainer data has been created',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/trainer`,
    method: 'PUT',
    params: {
      id: '1',
      name: 'Alfonsus Nugroho',
      email: 'alfon@gmail.com',
      division: 'Operation',
    },
    status: 200,
    response: {
      code: 202,
      status: 'OK',
      data: {
        status: 'ACCEPTED',
        message: 'Trainer data has been created',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/trainer/reset`,
    method: 'PUT',
    params: {
      id: '1',
    },
    status: 200,
    response: {
      code: 202,
      status: 'OK',
      data: {
        status: 'ACCEPTED',
        message: 'Trainer data has been created',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/admin/trainer`,
    method: 'DELETE',
    params: {
      params: {
        id: '1',
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
        trainerId: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        trainingList: [
          {
            batchId: 'JUN-2020',
            training: '1',
            date: '15 September 2020',
            timeStart: '12:00',
            timeFinish: '18:00',
            location: 'di Gedung Serbaguna Basement 1 R.25, Sarana Jaya',
          },
          {
            batchId: 'SEP-2020',
            training: '4',
            date: '06 Desember 2020',
            timeStart: '09:30',
            timeFinish: '16:30',
            location: 'di Gedung Serbaguna Basement 2 R.2C, Sarana Jaya',
          },
          {
            batchId: 'JAN-2021',
            training: '2',
            date: '10 Februari 2021',
            timeStart: '08:00',
            timeFinish: '15:00',
            location: 'di Gedung Serbaguna Basement 2 R.2A, Sarana Jaya',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/training/detail`,
    method: 'GET',
    params: {
      params: {
        training: '1',
        batchId: 'JUN-2020',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        employee: {
          total: '15',
          employeeList: [
            {
              id: '1',
              cardId: 'BLI-1153AD',
              name: 'Albert Kurniawan',
              status: '1',
            },
            {
              id: '2',
              cardId: 'BLI-1953OP',
              name: 'Simon Samosir',
              status: '1',
            },
            {
              id: '3',
              cardId: 'BLI-D885A1',
              name: 'Maudy Hana',
              status: '1',
            },
            {
              id: '4',
              cardId: 'BLI-B95AAC',
              name: 'Angelia Yohana',
              status: '0',
            },
            {
              id: '5',
              cardId: 'BLI-15A9DS',
              name: 'Rio Martin',
              status: '1',
            },
            {
              id: '6',
              cardId: 'BLI-HG9563',
              name: 'Maria Rosaria',
              status: '0',
            },
            {
              id: '7',
              cardId: 'BLI-PO956E',
              name: 'Spencer Lonhou',
              status: '0',
            },
            {
              id: '8',
              cardId: 'BLI-D89ADC',
              name: 'Roni Simanjuntak',
              status: '1',
            },
            {
              id: '9',
              cardId: 'BLI-55D23A',
              name: 'Julio Cesar',
              status: '1',
            },
            {
              id: '10',
              cardId: 'BLI-PE7SL6',
              name: 'Fifin Andriani',
              status: '0',
            },
            {
              id: '11',
              cardId: 'BLI-S6DD92',
              name: 'Kimmy',
              status: '1',
            },
            {
              id: '12',
              cardId: 'BLI-I7AALS',
              name: 'Andi Wijaya',
              status: '0',
            },
            {
              id: '13',
              cardId: 'BLI-N8UDOP',
              name: 'Lorencia Agnes',
              status: '0',
            },
            {
              id: '14',
              cardId: 'BLI-L5SSPA',
              name: 'Algi Nosi',
              status: '1',
            },
            {
              id: '15',
              cardId: 'BLI-K96DS1',
              name: 'Jessica Natalia',
              status: '1',
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
    method: 'GET',
    params: {
      params: {
        batchId: 'JUN-2020',
        training: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        materialList: [
          {
            id: '1',
            name: 'Think Win Win',
          },
          {
            id: '2',
            name: 'Time Management',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/material`,
    method: 'POST',
    params: {
      batchId: 'JUN-2020',
      training: '1',
      materialName: 'Time Management',
    },
    status: 200,
    response: {
      code: 202,
      status: 'ACCEPTED',
      data: {
        status: 'ACCEPTED',
        message: 'Material has been created',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/material`,
    method: 'DELETE',
    params: {
      params: {
        batchId: 'JUN-2020',
        training: '1',
        materialId: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        status: 'OK',
        message: 'Material has been deleted',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/test`,
    method: 'GET',
    params: {
      params: {
        batchId: 'JUN-2020',
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
        trainerId: '1',
      },
    },
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        notificationList: [
          {
            id: '1',
            title: 'Reminder - Training',
            message: 'Haloo Albert, ingat lho 2 minggu lagi kamu ada jadwal mengajar batch Juni 2020 training 1 di Wisma Rahayu, tepatnya pada tanggal 15 September 2020. Untuk lebih detailnya, cek jadwal di halaman training ya!',
          },
          {
            id: '2',
            title: 'Reminder - Training',
            message: 'Haloo Albert, ingat lho 2 minggu lagi kamu ada jadwal mengajar batch Januari 2021 training 3 di Sarana Jaya, tepatnya pada tanggal 22 April 2021. Untuk lebih detailnya, cek jadwal di halaman training ya!',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/notification/trigger`,
    method: 'GET',
    params: {
      params: {
        trainerId: '1',
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
      trainerId: '1',
    },
    status: 200,
    response: {
      code: 202,
      status: 'ACCEPTED',
      data: {
        status: 'ACCEPTED',
        message: 'Notification has been read',
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/trainer/password`,
    method: 'PUT',
    params: {
      trainerId: 1,
      oldPassword: '123',
      currentPassword: '456',
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
