const citySearchInput = document.getElementById('citySearchInput');
export const counterAdult = document.getElementById('counterAdult');
export const counterChildren = document.getElementById('counterChildren');
export const btnCounterAdultMinus = document.getElementById('btnCounterAdultMinus');
export const counterRooms = document.getElementById('counterRooms');
export const filterForm = document.getElementById('filterForm');

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
async export function getAvalableHotels() {
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
  
  
import function minusAdult() {
  if (counterAdult.value !== '0') {
    btnCounterAdultMinus.classList.remove('counter-plus-minus-gray');
    btnCounterAdultMinus.classList.add('counter-plus-minus-blue');
  } else {
    btnCounterAdultMinus.classList.remove('counter-plus-minus-blue');
    btnCounterAdultMinus.classList.add('counter-plus-minus-gray');
  };
};

export function Closer() {
  filterForm.classList.add('hide');
};
btnCounterAdultMinus.addEventListener('click', minusAdult);
btnCounterAdultMinus.addEventListener('click', childrenWithoutAdults);
btnCounterAdultMinus.addEventListener('click', dimnamicInputValueChanger);
counterAdult.addEventListener('change', dimnamicInputValueChanger);
counterChildren.addEventListener('change', dimnamicInputValueChanger);