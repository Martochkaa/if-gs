

$(document).ready(function () {
  $(".slick__wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: true,
  });
});
debugger

async function getResponse() {
let response = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular');
let data = await response.json();
 
 console.log(data)


// let data =[{"id":"cd45d380-5eac-460a-bf69-cdd8a789bbd1","name":"Waikiki Resort Hotel","city":"Hawaii","country":"USA","imageUrl":"https://res.cloudinary.com/intellectfox/image/upload/v1612300639/fe/waikiki-resort-hotel_vpk2hm.jpg"},{"id":"1d88fefe-edf1-4cda-844a-babbf29bb2b3","name":"Villa Kunerad","city":"Vysokie Tatry","country":"Slowakia","imageUrl":"https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg"},{"id":"4c97e73d-ccca-4d1e-8f2f-448abe957799","name":"Ramada Plaza","city":"Istanbul","country":"Turkey","imageUrl":"https://res.cloudinary.com/intellectfox/image/upload/v1612300371/fe/ramada-plaza_c8ww5k.jpg"},{"id":"81527412-e1c1-4659-a966-6714af086c6b","name":"Grand Beach Resort","city":"Dubai","country":"United Arab Emirates","imageUrl":"https://res.cloudinary.com/intellectfox/image/upload/v1612355736/fe/grand-beach-resort_n74jau.jpg"},{"id":"275ed60b-0ec5-4d11-ae94-90832cb35a01","name":"Leonardo Vienna","city":"Vienna","country":"Austria","imageUrl":"https://res.cloudinary.com/intellectfox/image/upload/v1612303348/fe/leonardo-vienna_cl6ubh.jpg"},{"id":"e41ae4b2-06cc-4060-a9c2-b07a4fac9831","name":"Asma Suites","city":"Santorini","country":"Greece","imageUrl":"https://res.cloudinary.com/intellectfox/image/upload/v1612301036/fe/asma-suites_p4oex6.jpg"},{"id":"90dc3cf2-8734-49d9-a146-a76b6de25c22","name":"Puro Hotel","city":"Krakow","country":"Poland","imageUrl":"https://res.cloudinary.com/intellectfox/image/upload/v1612300826/fe/puro-hotel_gtztvw.jpg"},{"id":"ccc4021a-b429-4faf-a157-b239a68662bb","name":"Lux Isla","city":"Ibiza","country":"Spain","imageUrl":"https://res.cloudinary.com/intellectfox/image/upload/v1612302619/fe/lux-isla_aljmc5.jpg"}]

 
 const homesInfoPanel = document.querySelector(".favorite-wrapper");

   data.forEach((item) => { const hotelsItem = document.createElement("div");
     hotelsItem.classList.add("guests-Homes");
     hotelsItem.innerHTML = `
       <img class="img_hotel" src="${item.imageUrl}" alt="${item.name}">
       <div class="text_hotel">${item.name}</div>
       <div class="location">${item.city}, ${item.country}</div>`;
     homesInfoPanel.append(hotelsItem);
   });
 
 }
getResponse()
 