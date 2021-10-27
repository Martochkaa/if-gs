

function loadSlider() {
  $(".slick__wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: true,
  });
}
debugger

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
 