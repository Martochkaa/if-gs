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

btnCounterChildrenPlus.addEventListener('click', addChildren);

btnCounterChildrenMinus.addEventListener('click', removeChildren);





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
//searchHotel.addEventListener('click', getAvalableHotels);
//const availableHotelsItemsSlider = document.querySelector('.available-hotels-items');

//const availableHotelsItemsFromArray = ((data) => {
  //avalableHotels.classList.remove('hide');
  //data.forEach((item) => { 
    //const availableHotelsItem = document.createElement("div");
//    availableHotelsItem.classList.add("item-hotel");
  //  availableHotelsItem.innerHTML = `
    //  <img src="${item.imageUrl}" class="available-hotel-img" alt="${item.name}">
      //<a href="#" a class="avalable-hotel-name">${item.name}</a>
//      <br>
  //    <span class="avalable-hotel-location">${item.city}, ${item.country}</span>`;
    //  availableHotelsItemsSlider.append(availableHotelsItem);
//  });
//});

//function slickForAvalableHotels(){
  //$(".available-hotels-items").slick({
    //dots: false,
//    slidesToShow: 4,
  //  slidesToScroll: 1,
    //waitForAnimate: false,
 //   responsive: [
   //   {
     //   breakpoint: 1367,
       // settings: {
         // slidesToShow: 5,
//        },
  //    },
    //  {
      //  breakpoint: 1025,
        //settings: {
          //slidesToShow: 4,
//        },
  //    },
    //  {
      //  breakpoint: 769,
        //settings: {
          //slidesToShow: 3,
 //       },
   //   },
     // {
       // breakpoint: 430,
 //       settings: {
   //      slidesToShow: 2,
     //   },
//    },
//],
  //});
//};


//async function getAvalableHotels(event) {
 // const avalableHotelsItems = document.getElementById('avalableHotelsItems');
//  event.preventDefault();
  //while (avalableHotelsItems.firstChild) {
    //avalableHotelsItems.removeChild(avalableHotelsItems.firstChild);
//  }
  //try {
    //let fetchAvalableHotelsData = await fetch(`https:/fe-student-api.herokuapp.com/api/hotels?search=${citySearchInput.value}&adults=${counterAdult.value}&children=${childAge1.value},${childAge2.value},${childAge3.value},${childAge4.value},${childAge5.value},${childAgeSelect6.value},${childAgeSelect7.value},${childAge8.value},${childAge9.value},${childAge10.value}&rooms=${counterRooms.value}`);
 //   let arrWithAvailableHotels = await fetchAvalableHotelsData.json();
   // availableHotelsItemsFromArray(arrWithAvailableHotels);
//    slickForAvalableHotels();
//  } catch (err) {
  //  console.log('Error');
//  };
//};

//searchHotel.addEventListener('click', getAvalableHotels);









//guestInput.addEventListener('click', (elem) => {
//elem.stopPropagation();
  //if (filterForm.classList.contains('hide')) {
 // filterForm.classList.remove('hide')
 // } else {
 // filterForm.classList.add('hide')
//  };
//});




// Adult
///const counterAdultAndRooms = function () {
  //const btns = document.querySelectorAll('.counter-btn');

//  btns.forEach(btn => {
  //  btn.addEventListener("click", function () {
    //  const direction = this.dataset.direction;
      //const inp = this.parentElement.querySelector('.counter-current-value');
//      const currentValue = + inp.value;
  //    let newValue;

//      if (direction === "plus") {
  //      newValue = currentValue + 1 <= 30 ? currentValue + 1 : 30;
    //  } else {
      //  newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
//      }

//      inp.value = newValue;
  //  });
//  });
//};
//counterAdultAndRooms();

//function minusAdult() {
  //if (counterAdult.value !== '0') {
    //btnCounterAdultMinus.classList.remove('counter-plus-minus-gray');
//    btnCounterAdultMinus.classList.add('counter-plus-minus-blue');
//  } else {
  ///  btnCounterAdultMinus.classList.remove('counter-plus-minus-blue');
    //btnCounterAdultMinus.classList.add('counter-plus-minus-gray');
//  };
//};


//Children
//const counterChildrenForInput = function () {
//  const btnsChildren = document.querySelectorAll('.counter-btn-children');

  //btnsChildren.forEach(btn => {
    //btn.addEventListener("click", function () {
      //const direction = this.dataset.direction;
//      const inpChildren = this.parentElement.querySelector('.counter-current-value-children');
  //    const currentValueChildren = + inpChildren.value;
    //  let newValueChildren;

      //if (direction === "plus") {
        //newValueChildren = currentValueChildren + 1 <= 10 ? currentValueChildren + 1 : 10;
//      } else {
  //      newValueChildren = currentValueChildren - 1 > 0 ? currentValueChildren - 1 : 0;
    //  }

      //inpChildren.value = newValueChildren;
//    });
  //});
//};
//counterChildrenForInput();

//btnCounterChildrenPlus.addEventListener('click', minusChildren);
//btnCounterChildrenMinus.addEventListener('click', minusChildren);
//function minusChildren() {
  //if (counterChildren.value !== '0') {
    //btnCounterChildrenMinus.classList.remove('counter-plus-minus-gray');
//    btnCounterChildrenMinus.classList.add('counter-plus-minus-blue');
  //  filterForm.style.height = '267px';
    //childAgeQuastion.classList.remove('hide');
//  } else {
  //  btnCounterChildrenMinus.classList.remove('counter-plus-minus-blue');
    //btnCounterChildrenMinus.classList.add('counter-plus-minus-gray');
//    filterForm.style.height = '158px';
  //  childAgeQuastion.classList.add('hide');
//  };
//};


//rooms
//btnCounterRoomsPlus.addEventListener('click', minusRooms);
//btnCounterRoomsMinus.addEventListener('click', minusRooms);
//function minusRooms() {
  //if (counterRooms.value !== '0') {
    //btnCounterRoomsMinus.classList.remove('counter-plus-minus-gray');
 //   btnCounterRoomsMinus.classList.add('counter-plus-minus-blue');
//  } else {
  //  btnCounterRoomsMinus.classList.remove('counter-plus-minus-blue');
//    btnCounterRoomsMinus.classList.add('counter-plus-minus-gray');
 // };
//};




// не нажмутся дети без взрослых
//btnCounterAdultPlus.addEventListener('click', childrenWithoutAdults);
//btnCounterAdultMinus.addEventListener('click', childrenWithoutAdults);
//btnCounterChildrenMinus.addEventListener('click', childrenWithoutAdults);
//document.addEventListener('DOMContentLoaded', childrenWithoutAdults);
//function childrenWithoutAdults () {
  //if (counterAdult.value === '0') {
  // counterChildren.value = '0';
    //filterForm.style.height = '158px';
 //   filterForm.style.width = '294px';
//  childAgeQuastion.classList.add('hide');
    
//  btnCounterChildrenPlus.classList.add('cursor-not-allowed');
  //  btnCounterChildrenPlus.classList.add('counter-plus-minus-gray');
    //btnCounterChildrenPlus.classList.remove('counter-plus-minus-blue');
//    btnCounterChildrenMinus.classList.remove('counter-plus-minus-blue');
  //  btnCounterChildrenMinus.classList.add('counter-plus-minus-gray');
    //btnCounterChildrenPlus.setAttribute("disabled", "disabled");
//    counterChildren.setAttribute("disabled", "disabled"); 
  //} else {
    //btnCounterChildrenPlus.classList.remove('cursor-not-allowed');
//    btnCounterChildrenPlus.classList.add('counter-plus-minus-blue');
  //  btnCounterChildrenPlus.removeAttribute("disabled");
    //counterChildren.removeAttribute("disabled");
//  };
//};


//function dimnamicInputValueChanger() {
//  guestInput.value = `${counterAdult.value}` + ' Adults — ' + `${counterChildren.value}` + 
  //' Children — ' + `${counterRooms.value}` + ' Room'
//}





//function init(id) {
  //let select;
 // let i; 
 // let option;
 // select = document.getElementById(id);
 // for (i = 1; i < 18; i ++) {
   // option = document.createElement('option');
  //  option.value = option.text = i + ' years old';
  //  option.classList.add('child-age-list');
   // select.add(option);
 // };
//};

//btnCounterChildrenPlus.addEventListener('click', () => {
  //switch (counterChildren.value) {
    //case '1':
    //  init('childAgeSelect1');
    //  childAge1.classList.remove('hide');
    //  break;
   // case '2':
     // init('childAgeSelect2');
   //   childAge2.classList.remove('hide');
    //  break;
   // case '3':
   //   init('childAgeSelect3');
    //  childAge3.classList.remove('hide');
      //filterForm.style.width = '349px';
//      filterForm.style.height = '250px';
  //  break;
    //case '4':
      //init('childAgeSelect4');
//      childAge4.classList.remove('hide');
  //    filterForm.style.width = '452px';
    //  filterForm.style.height = '250px';
//    break;
  //  case '5':
    //  init('childAgeSelect5');
      //childAge5.classList.remove('hide');
//      filterForm.style.width = '555px';
  //    filterForm.style.height = '250px';
    //break;
//    case '6':
  //    init('childAgeSelect6');
    //  childAge6.classList.remove('hide');
      //filterForm.style.height = '291px';
//    break;
  //  case '7':
    //  init('childAgeSelect7');
      //childAge7.classList.remove('hide');
//      filterForm.style.height = '291px';
  //  break;
    //case '8':
//      init('childAgeSelect8');
  //    childAge8.classList.remove('hide');
    //  filterForm.style.height = '291px';
//    break;
  //  case '9':
    //  init('childAgeSelect9');
      //childAge9.classList.remove('hide');
//      filterForm.style.height = '291px';
  //  break;
    //case '10':
      //init('childAgeSelect10');
//      childAge10.classList.remove('hide');
  //    filterForm.style.height = '291px';
    //  btnCounterChildrenPlus.setAttribute('disabled', true);
//    break;
  //};
//});

//btnCounterChildrenMinus.addEventListener('click', () => {
  //switch (counterChildren.value) {
//    case '0':
  //    childAge1.classList.add('hide');
    //case '1':
      //childAge2.classList.add('hide');
//    case '2':
  //    childAge3.classList.add('hide');
    ///  filterForm.style.width = '294px';
//      break;
  //  case '3':
    //  childAge4.classList.add('hide');
      //filterForm.style.width = '349px';
//      break;
  //  case '4':
    //  childAge5.classList.add('hide');
      //filterForm.style.width = '452px';
//      break;
  //  case '5':
    //  childAge6.classList.add('hide');
      //filterForm.style.width = '555px';
//      filterForm.style.height = '291px';
  //    break;
//    case '6':
  //    childAge7.classList.add('hide');
    //  filterForm.style.height = '291px';
      //break;
//    case '7':
  //    childAge8.classList.add('hide');
    //  filterForm.style.height = '291px';
      //break;
//    case '8':
  //    childAge9.classList.add('hide');
    //  filterForm.style.height = '291px';
      //break;
//    case '9':
  //    childAge10.classList.add('hide');
    //  filterForm.style.height = '291px';
//      btnCounterChildrenPlus.setAttribute('disabled', false);
  //    break;      
//  };
//});


const filter = document.getElementById("filterForm");

guestInput.onclick = function () {
  filter.classList.toggle("display");
};


const ageSelector = document.getElementById("childAgeQuastion");
btnCounterChildrenPlus.addEventListener('click', addChildren);

function addChildren() {
  ageSelector.style.display = "flex";
  const selectOptions = document.createElement("select");
  selectOptions.classList.add("year-selector");
  selectOptions.setAttribute("name", "year-selector");
  selectOptions.id = "shildAge"
  selectOptions.innerHTML = `<select >
                  <option>1 years old</option>
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
ageSelector.append(selectOptions);
}
const shildAge = document.getElementById('shildAge');

function removeChildren() {
  if (counterChildren.innerHTML === "0") {
    ageSelector.style.display = "none";
  }
  const selectTag = ageSelector.getElementsByTagName("select");
  selectTag[selectTag.length - 1].remove();
}

function displayVisitors() {
  const adultsInput = document.getElementById("adultsInput");
  const childrenInput = document.getElementById("childrenInput");
  const roomsInput = document.getElementById("roomsInput");

  let adults;
  let children;
  let rooms;

  if (adultsInput.hasAttribute("value"))
    adults = adultsInput.getAttribute("value");
  else adults = 0;
  if (childrenInput.hasAttribute("value"))
    children = childrenInput.getAttribute("value");
  else children = 0;
  if (roomsInput.hasAttribute("value"))
    rooms = roomsInput.getAttribute("value");
  else rooms = 0;

  guestInput.setAttribute(
    "value",
    `${adults} Adults — ${children} Children — ${rooms} Rooms `
  );
}

function buttonDisable(elem, value) {
  if (value === 0) {
    elem.previousElementSibling.setAttribute("disabled", "disabled");
  } else elem.previousElementSibling.removeAttribute("disabled");

  let upperLimit;
  if (elem === document.getElementById("counterChildren")) {
    upperLimit = 10;
  } else upperLimit = 30;
  if (value === upperLimit) {
    elem.nextElementSibling.setAttribute("disabled", "disabled");
  } else elem.nextElementSibling.removeAttribute("disabled");
}

function increaseValue() {
  const counterText = event.target.previousElementSibling;
  let counter = counterText.innerHTML;
  counter++;
  buttonDisable(counterText, counter);
  counterText.innerHTML = counter;
  event.target.parentElement.firstElementChild.setAttribute("value", counter);
  displayVisitors();
}

function reduceValue() {
  const counterText = event.target.nextElementSibling;
  let counter = counterText.innerHTML;
  counter--;
  buttonDisable(counterText, counter);
  counterText.innerHTML = counter;
  event.target.parentElement.firstElementChild.setAttribute("value", counter);
  displayVisitors();
}


const filterCounters = document.getElementsByClassName("buttons-input-wrapper");
for (const elem of filterCounters) {
  elem.firstElementChild.hidden = true;
}

const reduceButtons = document.getElementsByClassName("counter-plus-minus-gray ");
const increaseButtons = document.getElementsByClassName("counter-plus-minus-blue");

for (const btn of reduceButtons) {
  btn.addEventListener("click", reduceValue);
}
for (const btn of increaseButtons) {
  btn.addEventListener("click", increaseValue);
}