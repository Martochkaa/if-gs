export function slickForAvalableHotels(){
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
  export const availableHotelsItemsFromArray = ((data) => {
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
  
  
  
  
  
  