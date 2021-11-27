import { removeDropdownList, initDropdownList, filterForm, btnCounterChildrenPlus, counterChildren, counterAdult, btnCounterChildrenMinus } from 'select-age.js';
import { getAvalableHotels, Closer, minusAdult, counterRooms, counterAdult, counterChildren } from 'slider-avalable.js';
import { childrenWithoutAdults } from 'children-with-adults.js';
import { counterZero, newSelect, minusChildren, btnCounterChildrenMinus } from './select-age';
import { counterChildrenForInput } from './counterChildren';
import { btnCounterRoomsMinus, minusRooms } from './counterRooms';


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

const counterAdultAndRooms = function () {
  const btns = document.querySelectorAll('.counter-btn');

  btns.forEach(btn => {
    btn.addEventListener("click", function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter-current-value');
      const currentValue = + inp.value;
      let newValue;

      if (direction === "plus") {
        newValue = currentValue + 1 <= 30 ? currentValue + 1 : 30;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

      inp.value = newValue;
    });
  });
};

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



