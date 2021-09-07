let user = 'John Doe';
let student = 'Marta';

user = student; // when the user variable field, the student's name will appear

const test = 1;
alert (test+1); // the test variable has increased by 1
alert (test-1); //the test variable is 0
alert (Boolean (test)); // the test variable is converted to true

let arr = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < arr.length; i++){
result*=arr[i];
}
alert (result);

let arr1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i=0; i < arr1.length; i++) {
if (arr1[i] > 5 && arr1[i] < 10){
console.log(arr1[i]); }
}

let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i=0; i < arr2.length; i++)
{
    if ((arr2[i] % 2) === 0)
    {
        console.log(arr2[i]);
    }
  }

  function isPalindrome(str) {
    let strLen = str.length, strReverse = str.split ('') .reverse( ) .join('');
    // Разбила строку посимвольно и превратила в массив с помощью split ( '' ), применила метод reverse( ) и собрала все в символьную строку с помощью join( '' )
    if (strReverse == str) {
        return Boolean(strReverse == str);
    } else {
        return Boolean(strReverse == str);
    }
  }
  let palindrome = isPalindrome ('lol');
  let palindrome2 = isPalindrome ('marta');
  console.log (palindrome);
  console.log (palindrome2);
  
  function min (a, b) {
      if (a < b) {
          return a;
      } else {
          return b;
      }
  }
  
  function max (a, b) {
      if (a > b) {
          return a;
      } else {
          return b;
      }
  }
  
  //Функции через тернарный оператор
  function min (a, b) {
      return a < b ? a : b;
  }
  
  function max (a, b) {
      return a > b ? a : b;
  }
  
  function changeZero (number) {
  const numStr = `${number}`; // нужно писать `${number}` именно в таком виде, чтобы замена вставилась на его место
  if (numStr.includes('0')){ // содержит ли элемент numStr 0 определяется через .includes('0')
  return numStr.replaceAll('0', 'zero'); // заменяет все 0 на zero через .replaceAll
  }
  return number;
  }
  console.log ([80, 1, 2, 500] .map(changeZero).join(' ')); // .map позволило создать новый массив
  




  function sum(a,b){
    if(b===undefined){
        return function(c){ return parseInt(a)+parseInt(c);} //  Функция parseInt преобразует первый переданный ей аргумент в строковый тип, интерпретирует его и возвращает целое число или значение NaN
    }
    return parseInt(a)+parseInt(b);
}
console.log(sum(5)(2)); // 5

// module.exports = sum;



let colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let  text1 = document.getElementById('text1');
let  text2 = document.getElementById('text2');
let  text3 = document.getElementById('text3');

let f1 = () => {
	let k = 0;
	return function(event) {
	    event.target.style.color = colors[k];
		k++;
		if (k >= colors.length){
            k = 0;
        }
	}
}

let chahgeColor1 = f1();
let chahgeColor2 = f1();
let chahgeColor3 = f1();

text1.addEventListener('click', chahgeColor1);
text2.addEventListener('click', chahgeColor2);
text3.addEventListener('click', chahgeColor3);