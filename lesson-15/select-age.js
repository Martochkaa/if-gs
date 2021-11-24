export function initDropdownList() {
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

export  function removeDropdownList() {
    const lastSelectWrapperChild = selectsWrapper.lastChild;
    lastSelectWrapperChild.parentNode.removeChild(lastSelectWrapperChild);
  }