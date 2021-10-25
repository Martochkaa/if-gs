

$(document).ready(function () {
  $(".slick__wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: true,
  });
});


  const getResponse = document.querySelector('#content');

const options = {
method: 'GET',
mode: 'cors'
};

fetch(`https://fe-student-api.herokuapp.com/api/hotels/popular`, options)
  .then((response) => response.json())
  .then((data) => {
    if(data.length >0) {
       data.forEach((item) => {
          getResponse.innerHTML += `
             <img class="favorite-item__img photo" src=${item.imageUrl} alt=" ">
             <p class="text_hotel">${item.name}</p>
             <p class="location">${item.city}, ${item.country}</p>  
           `})
}
  })
    