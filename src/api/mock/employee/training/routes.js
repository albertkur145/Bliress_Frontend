const API = 'http://localhost:8080/api';

export default [
  {
    url: `${API}/training`,
    method: 'GET',
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
    params: {
      employeeId: 1,
      training: '1',
    },
    method: 'GET',
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
    params: {
      employeeId: 1,
      training: '2',
    },
    method: 'GET',
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
    params: {
      employeeId: 1,
      training: '3',
    },
    method: 'GET',
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
    params: {
      employeeId: 1,
      training: '4',
    },
    method: 'GET',
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
    params: {
      employeeId: 1,
      training: '5',
    },
    method: 'GET',
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
];
