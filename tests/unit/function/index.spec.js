import Func from '@/function';
import router from '@/router';
import cookies from 'vue-cookies';
import swal from 'sweetalert2';

window.scrollTo = jest.fn();

// describe method
describe('Method', () => {
  // it user auth
  it('User auth', () => {
    const spyPush = jest.spyOn(router, 'push');
    Func.userAuth('ROLE_ADMIN');

    // expect
    expect(spyPush).toBeCalled();
    expect(spyPush).toBeCalledWith({ name: 'Login' });
    spyPush.mockClear();

    const spyGo = jest.spyOn(router, 'go');
    cookies.set('user', { roles: ['ROLE_ADMIN'] });
    Func.userAuth('Test');

    // expect
    expect(spyGo).toBeCalled();
    expect(spyGo).toBeCalledWith(-1);
    spyGo.mockClear();

    cookies.set('user', { roles: ['ROLE_ADMIN'] });
    Func.userAuth('ROLE_ADMIN');

    // expect
    expect(spyPush).not.toBeCalled();
    expect(spyGo).not.toBeCalled();
  });
  // it user auth

  // it popupsuccess
  it('Popup successfull', async () => {
    const spySwal = jest.spyOn(swal, 'fire').mockImplementation(() => {
      Promise.resolve();
    });;
    await Func.popupSuccess('Sukses', 2000);

    // expect
    expect(spySwal).toBeCalled();
  });
  // it popupsuccess

  // it popupsuccessfull
  it('Popup successfull', async () => {
    const spySwal = jest.spyOn(swal, 'fire').mockImplementation(() => {
      Promise.resolve();
    });;
    const spyPush = jest.spyOn(router, 'push');
    await Func.popupSuccessfull('Sukses', 2000, { name: 'Training' });

    // expect
    expect(spySwal).toBeCalled();
    expect(spyPush).toBeCalledWith({ name: 'Training' });
    spyPush.mockClear();
  });
  // it popupsuccessfull

  // it popuplostconnection
  it('Popup lost connection', () => {
    const spySwal = jest.spyOn(swal, 'fire').mockImplementation(() => {
      Promise.resolve();
    });;
    Func.popupLostConnection();

    // expect
    expect(spySwal).toBeCalled();
  });
  // it popuplostconnection

  // it popuperror
  it('Popup error', () => {
    const spySwal = jest.spyOn(swal, 'fire').mockImplementation(() => {
      Promise.resolve();
    });;
    Func.popupError('Test', 2000);

    // expect
    expect(spySwal).toBeCalled();
  });
  // it popuperror

  // it popuplogoutfirst
  it('Popup logout first', async () => {
    const spySwal = jest.spyOn(swal, 'fire').mockImplementation(() => {
      Promise.resolve();
    });
    const spyPush = jest.spyOn(router, 'push');

    cookies.set('user', { roles: ['-'] });
    await Func.popupLogoutFirst();

    // expect
    expect(spySwal).toBeCalled();
    expect(spyPush).not.toBeCalled();

    spyPush.mockClear();
    cookies.set('user', { roles: ['ROLE_EMPLOYEE'] });
    await Func.popupLogoutFirst();

    // expect
    expect(spyPush).toBeCalledWith({ name: 'Training' });

    spyPush.mockClear();
    cookies.set('user', { roles: ['ROLE_ADMIN'] });
    await Func.popupLogoutFirst();

    // expect
    expect(spyPush).toBeCalledWith({ name: 'AdminBatch' });

    spyPush.mockClear();
    cookies.set('user', { roles: ['ROLE_TRAINER'] });
    await Func.popupLogoutFirst();

    // expect
    expect(spyPush).toBeCalledWith({ name: 'TrainerTraining' });
  });
  // it popuplogoutfirst

  // it popupconfirmdialog
  it('Popup confirm dialog', () => {
    const spySwal = jest.spyOn(swal, 'fire').mockImplementation(() => {
      return {
        value: true,
      };
    });
    const value = Func.popupConfirmDialog('Yakin?', 'Data test');

    expect(value).toStrictEqual({ value: true });
  });
  // it popupconfirmdialog
});
// describe method
