function loadSlider() {
  $(".slick__wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: true,
  });
}

const homesInfoPanel = document.querySelector(".favorite-wrapper");

const dataArr = ((data) => {
  data.forEach((item) => { 
  const hotelsItem = document.createElement("div");
 hotelsItem.classList.add("guests-Homes");
 hotelsItem.innerHTML = `
   <img class="img_hotel" src="${item.imageUrl}" alt="${item.name}">
   <div class="text_hotel">${item.name}</div>
   <div class="location">${item.city}, ${item.country}</div>`;
 homesInfoPanel.append(hotelsItem);
});
});

// записывает все, что произошло в fetch в content
document.addEventListener('DOMContentLoaded', async function() {
const content = await getResponse ()
return content
});

async function getResponse() {
const WriteContent = sessionStorage.getItem(content); // получить из памяти инфу
if (!WriteContent) { // если в WriteContent ничего не записано, то запишем туда fetch
 try {
const response = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular');
const data = await response.json();
sessionStorage.setItem('content', JSON.stringify(data)); // строчка которая отвечает за запоминание игформации в памяти 
dataArr(data)
$(document).ready(function () {
  $(".slick__wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: true,
  });
});
} catch (err) {
  console.log('Error');
};
} else {
  const PositiveResponse = JSON.parse(WriteContent);
  dataArr(PositiveResponse)


$(document).ready(function () {
  $(".slick__wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: true,
  });
});
getResponse()
};
}

