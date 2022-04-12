import Swal from "sweetalert2";

export const alertEvent = (status, message) => {
  Swal.fire({
    icon: status,
    title: message,
    showConfirmButton: false,
    timer: 1000,
  });
};
