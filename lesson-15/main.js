import { removeDropdownList, } from 'select-age.js';
import { slickForAvalableHotels, availableHotelsItemsFromArray} from 'slider-avalable.js';
import { childrenWithoutAdults } from 'children-with-adults.js'

const citySearchInput = document.getElementById('citySearchInput');
const searchHotel = document.getElementById('searchHotel');
const filterForm = document.getElementById('filterForm');
const counterAdult = document.getElementById('counterAdult');
const counterChildren = document.getElementById('counterChildren');
const counterRooms = document.getElementById('counterRooms');
const btnCounterAdultMinus = document.getElementById('btnCounterAdultMinus');
const btnCounterAdultPlus = document.getElementById('btnCounterAdultPlus');
const btnCounterChildrenMinus = document.getElementById('btnCounterChildrenMinus');
const btnCounterChildrenPlus = document.getElementById('btnCounterChildrenPlus');
const btnCounterRoomsMinus = document.getElementById('btnCounterRoomsMinus');
const btnCounterRoomsPlus = document.getElementById('btnCounterRoomsPlus');
const childAgeQuastion = document.getElementById('childAgeQuastion');
const guestInput = document.getElementById('guestInput');

document.addEventListener('DOMContentLoaded', (() => {
  counterChildren.value = '0';
  counterAdult.value = '0';
}));

searchHotel.addEventListener('click', getAvalableHotels);
guestInput.addEventListener('click', (elem) => {
  elem.stopPropagation();
  if (filterForm.classList.contains('hide')) {
    filterForm.classList.remove('hide')
  } else {
    filterForm.classList.add('hide')
  };
});




function Closer() {
  filterForm.classList.add('hide');
};




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

const counterChildrenForInput = function () {
  const btnsChildren = document.querySelectorAll('.counter-btn-children');

  btnsChildren.forEach(btn => {
    btn.addEventListener("click", function () {
      const direction = this.dataset.direction;
      const inpChildren = this.parentElement.querySelector('.counter-current-value-children');
      const currentValueChildren = + inpChildren.value;
      let newValueChildren;

      if (direction === "plus") {
        newValueChildren = currentValueChildren + 1 <= 10 ? currentValueChildren + 1 : 10;
      } else {
        newValueChildren = currentValueChildren - 1 > 0 ? currentValueChildren - 1 : 0;
      }

      inpChildren.value = newValueChildren;
    });
  });
};
counterChildrenForInput();



//fetch response for slicker for available home
async function getAvalableHotels() {
  event.preventDefault();
  const avalableHotelsItems = document.getElementById('avalableHotelsItems');
  while (avalableHotelsItems.firstChild) {
    avalableHotelsItems.removeChild(avalableHotelsItems.firstChild);
  }
  try {
    let fetchAvalableHotelsData = await fetch(`https:/fe-student-api.herokuapp.com/api/hotels?search=${citySearchInput.value}&adults=${counterAdult.value}&children=${counterChildren.value}&rooms=${counterRooms.value}`);
    let arrWithAvailableHotels = await fetchAvalableHotelsData.json();
    availableHotelsItemsFromArray(arrWithAvailableHotels);
    slickForAvalableHotels();
  } catch (err) {
    console.log('Error');
  };
};



btnCounterChildrenPlus.addEventListener('click', minusChildren);
btnCounterChildrenMinus.addEventListener('click', minusChildren);
function minusChildren() {
  if (counterChildren.value !== '0') {
    btnCounterChildrenMinus.classList.remove('counter-plus-minus-gray');
    btnCounterChildrenMinus.classList.add('counter-plus-minus-blue');
    filterForm.style.height = '267px';
    childAgeQuastion.classList.remove('hide');
  } else {
    btnCounterChildrenMinus.classList.remove('counter-plus-minus-blue');
    btnCounterChildrenMinus.classList.add('counter-plus-minus-gray');
    filterForm.style.height = '158px';
    childAgeQuastion.classList.add('hide');
  };
};

btnCounterAdultPlus.addEventListener('click', minusAdult);
btnCounterAdultMinus.addEventListener('click', minusAdult);
function minusAdult() {
  if (counterAdult.value !== '0') {
    btnCounterAdultMinus.classList.remove('counter-plus-minus-gray');
    btnCounterAdultMinus.classList.add('counter-plus-minus-blue');
  } else {
    btnCounterAdultMinus.classList.remove('counter-plus-minus-blue');
    btnCounterAdultMinus.classList.add('counter-plus-minus-gray');
  };
};

btnCounterRoomsPlus.addEventListener('click', minusRooms);
btnCounterRoomsMinus.addEventListener('click', minusRooms);
function minusRooms() {
  if (counterRooms.value !== '0') {
    btnCounterRoomsMinus.classList.remove('counter-plus-minus-gray');
    btnCounterRoomsMinus.classList.add('counter-plus-minus-blue');
  } else {
    btnCounterRoomsMinus.classList.remove('counter-plus-minus-blue');
    btnCounterRoomsMinus.classList.add('counter-plus-minus-gray');
  };
};



// не нажмутся дети без взрослых
btnCounterAdultPlus.addEventListener('click', childrenWithoutAdults);
btnCounterAdultMinus.addEventListener('click', childrenWithoutAdults);
btnCounterChildrenMinus.addEventListener('click', childrenWithoutAdults);
document.addEventListener('DOMContentLoaded', childrenWithoutAdults);


btnCounterAdultPlus.addEventListener('click', dimnamicInputValueChanger);
btnCounterAdultMinus.addEventListener('click', dimnamicInputValueChanger);
btnCounterChildrenPlus.addEventListener('click', dimnamicInputValueChanger);
btnCounterChildrenMinus.addEventListener('click', dimnamicInputValueChanger);
btnCounterRoomsPlus.addEventListener('click', dimnamicInputValueChanger);
btnCounterRoomsMinus.addEventListener('click', dimnamicInputValueChanger);
counterAdult.addEventListener('change', dimnamicInputValueChanger);
counterChildren.addEventListener('change', dimnamicInputValueChanger);
counterRooms.addEventListener('change', dimnamicInputValueChanger);
function dimnamicInputValueChanger() {
  guestInput.value = `${counterAdult.value}` + ' Adults — ' + `${counterChildren.value}` + 
  ' Children — ' + `${counterRooms.value}` + ' Room'
}


btnCounterChildrenMinus.addEventListener("click", removeDropdownList);





