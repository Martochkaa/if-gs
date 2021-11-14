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