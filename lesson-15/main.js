const citySearchInput = document.getElementById('citySearchInput');
const searchHotel = document.getElementById('searchHotel');
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
const guestInput = document.getElementById('guestInput');

document.addEventListener('DOMContentLoaded', (() => {
  counterChildren.value = '0';
  counterAdult.value = '0';
  counterRooms.value = '0';
}));

// слайдер для Home guests loves

function loadSlider() {
  $(".slick__wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: true,
  });
}

async function getResponse() {
const response = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular');
const data = await response.json();
 
 console.log(data)

 const homesInfoPanel = document.querySelector(".favorite-wrapper");

 data.forEach((item) => { const hotelsItem = document.createElement("div");
 hotelsItem.classList.add("guests-Homes");
 hotelsItem.innerHTML = `
   <img class="img_hotel" src="${item.imageUrl}" alt="${item.name}">
   <div class="text_hotel">${item.name}</div>
   <div class="location">${item.city}, ${item.country}</div>`;
 homesInfoPanel.append(hotelsItem);
});
$(document).ready(function () {
  $(".slick__wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: true,
  });
});
 }
getResponse()
 





// слайдер для Avalable
function slickForAvalableHotels(){
  $(".available-hotels-items").slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
};

const availableHotelsItemsSlider = document.querySelector('.available-hotels-items');

//DOM-elements creatng using fetch data for available Hotels section
const availableHotelsItemsFromArray = ((data) => {
  avalableHotels.classList.remove('hide');
  data.forEach((item) => { 
    const availableHotelsItem = document.createElement("div");
    availableHotelsItem.classList.add("item-hotel");
    availableHotelsItem.innerHTML = `
      <img src="${item.imageUrl}" class="available-hotel-img" alt="${item.name}">
      <a href="#" a class="avalable-hotel-name">${item.name}</a>
      <br>
      <span class="avalable-hotel-location">${item.city}, ${item.country}</span>`;
      availableHotelsItemsSlider.append(availableHotelsItem);
  });
});





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
function childrenWithoutAdults () {
  if (counterAdult.value === '0') {
    counterChildren.value = '0';
    filterForm.style.height = '158px';
    filterForm.style.width = '294px';
    childAgeQuastion.classList.add('hide');
    
    btnCounterChildrenPlus.classList.add('cursor-not-allowed');
    btnCounterChildrenPlus.classList.add('counter-plus-minus-gray');
    btnCounterChildrenPlus.classList.remove('counter-plus-minus-blue');
    btnCounterChildrenMinus.classList.remove('counter-plus-minus-blue');
    btnCounterChildrenMinus.classList.add('counter-plus-minus-gray');
    btnCounterChildrenPlus.setAttribute("disabled", "disabled");
    counterChildren.setAttribute("disabled", "disabled"); 
  } else {
    btnCounterChildrenPlus.classList.remove('cursor-not-allowed');
    btnCounterChildrenPlus.classList.add('counter-plus-minus-blue');
    btnCounterChildrenPlus.removeAttribute("disabled");
    counterChildren.removeAttribute("disabled");
  };
};





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















function initDropdownList() {
  const select = document.createElement("select");
  select.classList.add("child-age-select");
  select.innerHTML = `<select>
                      <option>0 years old</option>
                      <option>1 year old</option>
                      <option>2 years old</option>
                      <option>3 years old</option>
                      <option>4 years old</option>
                      <option>5 years old</option>
                      <option>6 years old</option>
                      <option>7 years old</option>
                      <option>8 years old</option>
                      <option>9 years old</option>
                      <option>10 years old</option>
                      <option>11 years old</option>
                      <option>12 years old</option>
                      <option>13 years old</option>
                      <option>14 years old</option>
                      <option>15 years old</option>
                      <option>16 years old</option>
                      <option>17 years old</option>                   
                      </select>`;
    selectsWrapper.appendChild(select);
}
btnCounterChildrenPlus.addEventListener("click", initDropdownList);




function removeDropdownList() {
  const lastSelectWrapperChild = selectsWrapper.lastChild;
  lastSelectWrapperChild.parentNode.removeChild(lastSelectWrapperChild);
}
btnCounterChildrenMinus.addEventListener("click", removeDropdownList);





btnCounterChildrenPlus.addEventListener("click", () => {
  switch (counterChildren.value) {
    case "2":
      childAgeQuastion.textContent = "What is the age of the children you’re travelling with?";
      break;
    case "3":
      filterForm.style.width = "349px";
      filterForm.style.height = "250px";
    break;
    case "4":
      filterForm.style.width = "452px";
      filterForm.style.height = "250px";
    break;
    case "5":
      filterForm.style.width = "555px";
      filterForm.style.height = "250px";
    break;
    case "6":
      filterForm.style.height = "291px";
    break;
    case "7":
      filterForm.style.height = "291px";
    break;
    case "8":
      filterForm.style.height = "291px";
    break;
    case "9":
      filterForm.style.height = "291px";
    break;
    case "10":
      filterForm.style.height = "291px";
      btnCounterChildrenPlus.setAttribute("disabled", "disabled");
    break;
  }
});


btnCounterChildrenMinus.addEventListener("click", () => {
  switch (counterChildren.value) {
    case "1":
      childAgeQuastion.textContent  = "What is the age of the child you’re travelling with?";
      break;
    case "2":
      filterForm.style.width = "294px";
      break;
    case "3":
      filterForm.style.width = "349px";      
      filterForm.style.height = "250px";
      break;
    case "4":
      filterForm.style.width = "452px";      
      filterForm.style.height = "250px";
      break;
    case "5":
      filterForm.style.width = "555px";
      filterForm.style.height = "250px";
      break;
    case "6":
      filterForm.style.height = "291px";
      break;
    case "7":
      filterForm.style.height = "291px";
      break;
    case "8":
      filterForm.style.height = "291px";
      break;
    case "9":
      
      filterForm.style.height = "291px";
      btnCounterChildrenPlus.setAttribute("disabled", "disabled");
      break;      
  }
});