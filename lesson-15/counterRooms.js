export const btnCounterRoomsMinus = document.getElementById('btnCounterRoomsMinus');

export function minusRooms() {
    if (counterRooms.value !== '0') {
      btnCounterRoomsMinus.classList.remove('counter-plus-minus-gray');
      btnCounterRoomsMinus.classList.add('counter-plus-minus-blue');
    } else {
      btnCounterRoomsMinus.classList.remove('counter-plus-minus-blue');
      btnCounterRoomsMinus.classList.add('counter-plus-minus-gray');
    };
  };