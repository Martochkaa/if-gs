const input = document.getElementById('guestInput');

input.addEventListener('click', (elem) => {
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


const counterLabel = document.querySelector('.counter-label');
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
const childAge1 = document.getElementById('childAgeSelect1');
const childAge2 = document.getElementById('childAgeSelect2');
const childAge3 = document.getElementById('childAgeSelect3');
const childAge4 = document.getElementById('childAgeSelect4');
const childAge5 = document.getElementById('childAgeSelect5');
const childAge6 = document.getElementById('childAgeSelect6');
const childAge7 = document.getElementById('childAgeSelect7');
const childAge8 = document.getElementById('childAgeSelect8');
const childAge9 = document.getElementById('childAgeSelect9');
const childAge10 = document.getElementById('childAgeSelect10');


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








function init(id) {
  let select;
  let i; 
  let option;
  select = document.getElementById(id);
  for (i = 1; i < 18; i ++) {
    option = document.createElement('option');
    option.value = option.text = i + ' years old';
    option.classList.add('child-age-list');
    select.add(option);
  };
};

btnCounterChildrenPlus.addEventListener('click', () => {
  switch (counterChildren.value) {
    case '1':
      init('childAgeSelect1');
      childAgeSelect1.classList.remove('hide');
      break;
    case '2':
      init('childAgeSelect2');
      childAgeSelect2.classList.remove('hide');
      break;
    case '3':
      init('childAgeSelect3');
      childAgeSelect3.classList.remove('hide');
      filterForm.style.width = '349px';
      filterForm.style.height = '250px';
    break;
    case '4':
      init('childAgeSelect4');
      childAgeSelect4.classList.remove('hide');
      filterForm.style.width = '452px';
      filterForm.style.height = '250px';
    break;
    case '5':
      init('childAgeSelect5');
      childAgeSelect5.classList.remove('hide');
      filterForm.style.width = '555px';
      filterForm.style.height = '250px';
    break;
    case '6':
      init('childAgeSelect6');
      childAgeSelect6.classList.remove('hide');
      filterForm.style.height = '291px';
    break;
    case '7':
      init('childAgeSelect7');
      childAgeSelect7.classList.remove('hide');
      filterForm.style.height = '291px';
    break;
    case '8':
      init('childAgeSelect8');
      childAgeSelect8.classList.remove('hide');
      filterForm.style.height = '291px';
    break;
    case '9':
      init('childAgeSelect9');
      childAgeSelect9.classList.remove('hide');
      filterForm.style.height = '291px';
    break;
    case '10':
      init('childAgeSelect10');
      childAgeSelect10.classList.remove('hide');
      filterForm.style.height = '291px';
      btnCounterChildrenPlus.setAttribute('disabled', true);
    break;
  };
});

btnCounterChildrenMinus.addEventListener('click', () => {
  switch (counterChildren.value) {
    case '0':
      childAgeSelect1.classList.add('hide');
    case '1':
      childAgeSelect2.classList.add('hide');
    case '2':
      childAgeSelect3.classList.add('hide');
      filterForm.style.width = '294px';
      break;
    case '3':
      childAgeSelect4.classList.add('hide');
      filterForm.style.width = '349px';
      break;
    case '4':
      childAgeSelect5.classList.add('hide');
      filterForm.style.width = '452px';
      break;
    case '5':
      childAgeSelect6.classList.add('hide');
      filterForm.style.width = '555px';
      filterForm.style.height = '291px';
      break;
    case '6':
      childAgeSelect7.classList.add('hide');
      filterForm.style.height = '291px';
      break;
    case '7':
      childAgeSelect8.classList.add('hide');
      filterForm.style.height = '291px';
      break;
    case '8':
      childAgeSelect9.classList.add('hide');
      filterForm.style.height = '291px';
      break;
    case '9':
      childAgeSelect10.classList.add('hide');
      filterForm.style.height = '291px';
      btnCounterChildrenPlus.setAttribute('disabled', false);
      break;      
  };
});

counterChildren.addEventListener('change', () => {
  if (counterChildren.value == '0') {
    filterForm.style.height = '158px';
    filterForm.style.width = '294px';
    childAgeQuastion.classList.add('hide');
    childAge1.classList.add('hide');
    childAge2.classList.add('hide');
    childAge3.classList.add('hide');
    childAge4.classList.add('hide');
    childAge5.classList.add('hide');
    childAge6.classList.add('hide');
    childAge7.classList.add('hide');
    childAge8.classList.add('hide');
    childAge9.classList.add('hide');
    childAge10.classList.add('hide');
  } else if (counterChildren.value == '1') {
    init('childAge1');
    filterForm.style.height = '267px';
    filterForm.style.width = '294px';
    childAgeQuastion.classList.remove('hide');
    childAge1.classList.remove('hide');
    childAge2.classList.add('hide');
    childAge3.classList.add('hide');
    childAge4.classList.add('hide');
    childAge5.classList.add('hide');
    childAge6.classList.add('hide');
    childAge7.classList.add('hide');
    childAge8.classList.add('hide');
    childAge9.classList.add('hide');
    childAge10.classList.add('hide');
  } else if (counterChildren.value == '2') {
    init('childAge1');
    init('childAge2');
    filterForm.style.height = '267px';
    filterForm.style.width = '294px';
    childAge1.classList.remove('hide');
    childAge2.classList.remove('hide');
    childAge3.classList.add('hide');
    childAge4.classList.add('hide');
    childAge5.classList.add('hide');
    childAge6.classList.add('hide');
    childAge7.classList.add('hide');
    childAge8.classList.add('hide');
    childAge9.classList.add('hide');
    childAge10.classList.add('hide');
  } else if (counterChildren.value == '3') {
    init('childAge1');
    init('childAge2');
    init('childAge3');
    filterForm.style.width = '349px';
    filterForm.style.height = '250px';
    childAge1.classList.remove('hide');
    childAge2.classList.remove('hide');
    childAge3.classList.remove('hide');
    childAge4.classList.add('hide');
    childAge5.classList.add('hide');
    childAge6.classList.add('hide');
    childAge7.classList.add('hide');
    childAge8.classList.add('hide');
    childAge9.classList.add('hide');
    childAge10.classList.add('hide');
  } else if (counterChildren.value == '4') {
    init('childAge1');
    init('childAge2');
    init('childAge3');
    init('childAge4');
    filterForm.style.width = '452px';
    filterForm.style.height = '250px';
    childAge1.classList.remove('hide');
    childAge2.classList.remove('hide');
    childAge3.classList.remove('hide');
    childAge4.classList.remove('hide');
    childAge5.classList.add('hide');
    childAge6.classList.add('hide');
    childAge7.classList.add('hide');
    childAge8.classList.add('hide');
    childAget9.classList.add('hide');
    childAge10.classList.add('hide');
  } else if (counterChildren.value == '5') {
    init('childAge1');
    init('childAge2');
    init('childAge3');
    init('childAge4');
    init('childAge5');
    filterForm.style.width = '555px';
    filterForm.style.height = '250px';
    childAge1.classList.remove('hide');
    childAge2.classList.remove('hide');
    childAge3.classList.remove('hide');
    childAge4.classList.remove('hide');
    childAge5.classList.remove('hide');
    childAge6.classList.add('hide');
    childAge7.classList.add('hide');
    childAge8.classList.add('hide');
    childAge9.classList.add('hide');
    childAge10.classList.add('hide');
  } else if (counterChildren.value == '6') {
    init('childAge1');
    init('childAge2');
    init('childAge3');
    init('childAge4');
    init('childAge5');
    init('childAge6');
    filterForm.style.width = '555px';
    filterForm.style.height = '291px';
    childAge1.classList.remove('hide');
    childAge2.classList.remove('hide');
    childAge3.classList.remove('hide');
    childAge4.classList.remove('hide');
    childAge5.classList.remove('hide');
    childAge6.classList.remove('hide');
    childAge7.classList.add('hide');
    childAge8.classList.add('hide');
    childAge9.classList.add('hide');
    childAge10.classList.add('hide');
  } else if (counterChildren.value == '7') {
    init('childAge1');
    init('childAge2');
    init('childAge3');
    init('childAge4');
    init('childAge5');
    init('childAge6');
    init('childAge7');
    filterForm.style.width = '555px';
    filterForm.style.height = '291px';
    childAge1.classList.remove('hide');
    childAge2.classList.remove('hide');
    childAge3.classList.remove('hide');
    childAge4.classList.remove('hide');
    childAge5.classList.remove('hide');
    childAge6.classList.remove('hide');
    childAge7.classList.remove('hide');
    childAge8.classList.add('hide');
    childAge9.classList.add('hide');
    childAge10.classList.add('hide');
  } else if (counterChildren.value == '8') {
    init('childAge1');
    init('childAge2');
    init('childAge3');
    init('childAge4');
    init('childAge5');
    init('childAge6');
    init('childAge7');
    init('childAge8');    
    filterForm.style.width = '555px';
    filterForm.style.height = '291px';
    childAge1.classList.remove('hide');
    childAge2.classList.remove('hide');
    childAge3.classList.remove('hide');
    childAge4.classList.remove('hide');
    childAge5.classList.remove('hide');
    childAge6.classList.remove('hide');
    childAge7.classList.remove('hide');
    childAge8.classList.remove('hide');
    childAge9.classList.add('hide');
    childAge10.classList.add('hide');
  } else if (counterChildren.value == '9') {
    init('childAge1');
    init('childAge2');
    init('childAge3');
    init('childAge4');
    init('childAge5');
    init('childAge6');
    init('childAge7');
    init('childAge8');
    init('childAge9');  
    filterForm.style.width = '555px';
    filterForm.style.height = '291px';
    childAge1.classList.remove('hide');
    childAge2.classList.remove('hide');
    childAge3.classList.remove('hide');
    childAge4.classList.remove('hide');
    childAge5.classList.remove('hide');
    childAge6.classList.remove('hide');
    childAge7.classList.remove('hide');
    childAge.classList.remove('hide');
    childAge9.classList.remove('hide');
    childAge10.classList.add('hide');
  } else if (counterChildren.value == '10') {
    init('childAge1');
    init('childAge2');
    init('childAge3');
    init('childAge4');
    init('childAge5');
    init('childAge6');
    init('childAge7');
    init('childAge8');
    init('childAge9');
    init('childAge10');  
    filterForm.style.width = '555px';
    filterForm.style.height = '291px';
    childAge1.classList.remove('hide');
    childAge2.classList.remove('hide');
    childAge3.classList.remove('hide');
    childAge4.classList.remove('hide');
    childAge5.classList.remove('hide');
    childAge6.classList.remove('hide');
    childAge7.classList.remove('hide');
    childAge8.classList.remove('hide');
    childAge9.classList.remove('hide');
    childAge0.classList.remove('hide');
  }
});
