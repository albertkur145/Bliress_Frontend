import cookies from 'vue-cookies';
import router from '@/router';
import swal from 'sweetalert2';

export default {
  userAuth: (role) => {
    if (!cookies.isKey('user')) {
      router.push({ name: 'Login' });
    } else if (cookies.get('user').role !== role) {
      router.go(-1);
    }
  },

  popupSuccessfull: async (msg, timer, route) => {
    await swal.fire({
      text: msg,
      icon: 'success',
      timer,
      backdrop: false,
      allowEscapeKey: false,
      timerProgressBar: true,
      showCloseButton: true,
    });
    router.push(route);
  },

  popupLostConnection: () => {
    swal.fire({
      text: 'Internet kamu sudah hidup?',
      icon: 'question',
      backdrop: false,
      allowEscapeKey: false,
      timerProgressBar: true,
      showCloseButton: true,
    });
  },

  popupError: (msg, timer) => {
    swal.fire({
      text: msg,
      icon: 'error',
      timer,
      backdrop: false,
      allowEscapeKey: false,
      showCloseButton: true,
    });
  },

  popupLogoutFirst: async () => {
    await swal.fire({
      text: 'Silahkan logout terlebih dahulu',
      icon: 'info',
      backdrop: false,
      timerProgressBar: true,
      allowEscapeKey: false,
    });

    let name = '';
    let exist = true;
    switch (cookies.get('user').role) {
      case 'Employee':
        name = 'Training';
        break;

      case 'Admin':
        name = 'AdminBatch';
        break;

      case 'Trainer':
        name = 'TrainerTraining';
        break;

      default:
        exist = false;
        break;
    }

    if (exist) {
      router.push({ name });
    }
  },

  popupConfirmDialog: (title, text) => {
    const confirm = swal.fire({
      title,
      text,
      icon: 'warning',
      backdrop: false,
      allowEscapeKey: false,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: '#45AAF2',
      confirmButtonText: 'Saya yakin',
    });

    return confirm;
  },
};
