

export const counterChildrenForInput = function () {
    const btnsChildren = document.querySelectorAll('.counter-btn-children');
  
    btnsChildren.forEach(btn => {
      btn.addEventListener("click", function () {
        const direction = this.dataset.direction;
        const inpChildren = this.parentElement.querySelector('.counter-current-value-children');
        const currentValueChildren = + inpChildren.value;
        let newValueChildren;
  
        if (direction === "plus") {
          newValueChildren = currentValueChildren + 1 <= 10 ? currentValueChildren + 1 : 10;
        } else {
          newValueChildren = currentValueChildren - 1 > 0 ? currentValueChildren - 1 : 0;
        }
  
        inpChildren.value = newValueChildren;
      });
    });
  };