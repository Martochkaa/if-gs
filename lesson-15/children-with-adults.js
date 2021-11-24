export function childrenWithoutAdults () {
  if (counterAdult.value === '0') {
    counterChildren.value = '0';
    filterForm.style.height = '158px';
    filterForm.style.width = '294px';
    childAgeQuastion.classList.add('hide');
    
    btnCounterChildrenPlus.classList.add('cursor-not-allowed');
    btnCounterChildrenPlus.classList.add('counter-plus-minus-gray');
    btnCounterChildrenPlus.classList.remove('counter-plus-minus-blue');
    btnCounterChildrenMinus.classList.remove('counter-plus-minus-blue');
    btnCounterChildrenMinus.classList.add('counter-plus-minus-gray');
    btnCounterChildrenPlus.setAttribute("disabled", "disabled");
    counterChildren.setAttribute("disabled", "disabled"); 
  } else {
    btnCounterChildrenPlus.classList.remove('cursor-not-allowed');
    btnCounterChildrenPlus.classList.add('counter-plus-minus-blue');
    btnCounterChildrenPlus.removeAttribute("disabled");
    counterChildren.removeAttribute("disabled");
  };
};