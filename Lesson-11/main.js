function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.Adults_Children_Room')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
        }
      }
  
  
      let count = document.getElementById("buttonCountNumber");
  
    document.getElementById("buttonCountPlus").onclick = () => {
        let countPlus = count.innerHTML;
        if (+countPlus <= 50) {
            count.innerHTML++;
        }
         if (+countPlus >= 30) {
             count.innerHTML--;
        }
    }
  
  document.getElementById("buttonCountMinus").onclick = () => {
      let countMinus = count.innerHTML;
      if (+countMinus >= 1) {
          count.innerHTML--;
      }
  }
  
  let count2 = document.getElementById("buttonCountNumber2");
  
    document.getElementById("buttonCountPlus2").onclick = () => {
        let countPlus2 = count2.innerHTML;
        if (+countPlus2 <= 50) {
            count2.innerHTML++;
        }
         if (+countPlus2 >= 10) {
             count2.innerHTML--;
        }
    }
  
  document.getElementById("buttonCountMinus2").onclick = () => {
      let countMinus2 = count2.innerHTML;
      if (+countMinus2 >= 1) {
          count2.innerHTML--;
      }
  }
  
  let count3 = document.getElementById("buttonCountNumber3");
  
    document.getElementById("buttonCountPlus3").onclick = () => {
        let countPlus3 = count3.innerHTML;
        if (+countPlus3 <= 50) {
            count3.innerHTML++;
        }
        if (+countPlus3 >= 30) {
             count3.innerHTML--;
        }
    }
  
  document.getElementById("buttonCountMinus3").onclick = () => {
      let countMinus3 = count3.innerHTML;
      if (+countMinus3 >= 1) {
          count3.innerHTML--;
      }
  }
  
  function viewDiv(){
    document.getElementById("age_block").style.display = "block";
  };