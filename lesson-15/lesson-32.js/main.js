import { removeDropdownList, newSelect, minusChildren, initDropdownList, filterForm, btnCounterChildrenPlus, btnCounterChildrenMinus, counterAdultAndRooms } from './select-age.js';
import { getAvalableHotels, Closer, minusAdult, counterRooms, counterAdult, counterChildren, counterZero } from './slider-avalable.js';
import { childrenWithoutAdults } from '../children-with-adults.js';
import { counterChildrenForInput } from '../counterChildren.js';
import { btnCounterRoomsMinus, minusRooms } from '../counterRooms.js';

counterZero();

const searchHotel = document.getElementById('searchHotel');
const btnCounterRoomsPlus = document.getElementById('btnCounterRoomsPlus');
const guestInput = document.getElementById('guestInput');
const btnCounterAdultPlus = document.getElementById('btnCounterAdultPlus');

searchHotel.addEventListener('click', getAvalableHotels);
guestInput.addEventListener('click', (elem) => {
  elem.stopPropagation();
  if (filterForm.classList.contains('hide')) {
    filterForm.classList.remove('hide')
  } else {
    filterForm.classList.add('hide')
  };
});

Closer();

counterAdultAndRooms();
counterChildrenForInput();

btnCounterRoomsPlus.addEventListener('click', minusRooms);
btnCounterRoomsMinus.addEventListener('click', minusRooms);
btnCounterAdultPlus.addEventListener('click', minusAdult);
btnCounterAdultPlus.addEventListener('click', childrenWithoutAdults);
btnCounterChildrenMinus.addEventListener('click', childrenWithoutAdults);
document.addEventListener('DOMContentLoaded', childrenWithoutAdults);
btnCounterAdultPlus.addEventListener('click', dimnamicInputValueChanger);
btnCounterChildrenPlus.addEventListener('click', dimnamicInputValueChanger);
btnCounterChildrenMinus.addEventListener('click', dimnamicInputValueChanger);
btnCounterRoomsPlus.addEventListener('click', dimnamicInputValueChanger);
btnCounterRoomsMinus.addEventListener('click', dimnamicInputValueChanger);
btnCounterChildrenMinus.addEventListener("click", removeDropdownList);
btnCounterChildrenPlus.addEventListener('click', minusChildren);
btnCounterChildrenMinus.addEventListener('click', minusChildren);
btnCounterChildrenPlus.addEventListener("click", initDropdownList);

counterRooms.addEventListener('change', dimnamicInputValueChanger);
function dimnamicInputValueChanger() {
  guestInput.value = `${counterAdult.value}` + ' Adults — ' + `${counterChildren.value}` + 
  ' Children — ' + `${counterRooms.value}` + ' Room'
}

newSelect()



