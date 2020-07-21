import Employee from '@/store/modules/admin/employee';
import axios from 'axios';

const store = Employee;
jest.mock('axios', () => jest.fn());


// describe
describe('Employee modules admin', () => {
  // it getters
  it('Getters', () => {
    const state = {
      employeesBatch: 'employeesBatch',
      employees: 'employees',
      employee: 'employee',
    };

    // expect
    expect(store.getters.batchEmployeeList(state)).toBe(state.employeesBatch);
    expect(store.getters.employeeList(state)).toBe(state.employees);
    expect(store.getters.employeeData(state)).toBe(state.employee);
  });
  // it getters

  // it mutations
  it('Mutations', () => {
    const state = {
      employeesBatch: '',
      employees: '',
      employee: '',
    };

    store.mutations.setEmployeesBatch(state, 'employeesBatch');
    store.mutations.setEmployees(state, 'employees');
    store.mutations.setEmployee(state, 'employee');

    // expect
    expect(state.employeesBatch).toBe('employeesBatch');
    expect(state.employees).toBe('employees');
    expect(state.employee).toBe('employee');
  });
  // it mutations

  // it actions
  it('Actions', async () => {
    const commit = jest.fn();
    const resolve = jest.fn();
    const res = {
      data: {
        code: 200,
      },
    };
    const spyConsole = jest.spyOn(console, 'log');

    // getEmployeesBatch
    axios.mockResolvedValue(res);
    await store.actions.getEmployeesBatch({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setEmployeesBatch', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getEmployeesBatch({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getEmployeesBatch

    jest.clearAllMocks();

    // getEmployees
    axios.mockResolvedValue(res);
    await store.actions.getEmployees({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setEmployees', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getEmployees({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getEmployees

    jest.clearAllMocks();

    // getEmployee
    axios.mockResolvedValue(res);
    await store.actions.getEmployee({ commit }, { resolve });

    // expect
    expect(commit).toBeCalledWith('setEmployee', res.data);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.getEmployee({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // getEmployee

    jest.clearAllMocks();

    // postEmployee
    axios.mockResolvedValue(res);
    await store.actions.postEmployee({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.postEmployee({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // postEmployee

    jest.clearAllMocks();

    // putEmployee
    axios.mockResolvedValue(res);
    await store.actions.putEmployee({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.putEmployee({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // putEmployee

    jest.clearAllMocks();

    // deleteEmployee
    axios.mockResolvedValue(res);
    await store.actions.deleteEmployee({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.deleteEmployee({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // deleteEmployee

    jest.clearAllMocks();

    // resetPassword
    axios.mockResolvedValue(res);
    await store.actions.resetPassword({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith(commit);
    expect(resolve).toBeCalledWith(res.data.code);

    axios.mockRejectedValue('Catch');
    await store.actions.resetPassword({ commit }, { resolve });

    // expect
    expect(spyConsole).toBeCalledWith('Catch');
    // resetPassword
  });
  // it actions
});
// end describe
