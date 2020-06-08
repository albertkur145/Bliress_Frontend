export default [
  {
    url: '/api/training',
    params: '',
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
    url: '/api/training/detail',
    params: {
      employeeId: 1,
      training: 1,
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
              link: 'www.google.co.id',
            },
            {
              id: 2,
              name: 'Time Management',
              link: 'www.google.co.id',
            },
          ],
        },
        employees: {},
      },
      paging: null,
      errors: null,
    },
  },
];
