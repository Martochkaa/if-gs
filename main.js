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
        return Boolean(strReverse === str);}


  let palindrome = isPalindrome ('lol');
  const palindrome2 = isPalindrome ('marta');
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
  function minimal (a, b) {
      return a < b ? a : b;
  }
  
  function maximum (a, b) {
      return a > b ? a : b;
  }
  
  function changeZero (number) {
  const numStr = `${number}`; // нужно писать `${number}` именно в таком виде, чтобы привести в строчный вид
  if (numStr.includes('0')){ // содержит ли элемент numStr 0 определяется через .includes('0')
  return numStr.replaceAll('0', 'zero'); // replaceAll заменяет все 0 на zero через .replaceAll
  }
  return number;
  }
  console.log ([80, 1, 2, 500] .map(changeZero).join(' ')); // .map позволило создать новый массив, .join позволил объединить все элементы в строку
  




  function sum(a,b){
    if(b===undefined){
        return function(c){ return parseInt(a)+parseInt(c);} //  Функция parseInt преобразует первый переданный ей аргумент в строковый тип, интерпретирует его и возвращает целое число или значение NaN
    }
    return parseInt(a)+parseInt(b);
}
console.log(sum(5)(2)); // 7




let colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const  text1 = document.getElementById('text1');
const  text2 = document.getElementById('text2');
const  text3 = document.getElementById('text3');

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










let changeData = new Date('2020-11-26');

let answer = [
  newData(changeData.getDate()),      // функция GETDATE возвращает текущую дату и время
  newData(changeData.getMonth() + 1),  // Метод getMonth() возвращает месяц указанной даты по местному времени, нумерация месяцев начинается с нуля для первого месяца в году.
  changeData.getFullYear()            //метод getFullYear() объекта Date возвращает числовое значение, которое соответствует году из указанной даты по местному времени
].join('.');

console.log(answer);

function newData(d) {
    if (+d < 10) return '0' + d;
    return d;
  };



  const data = [
    {
      country: 'Russia',
      city: 'Saint Petersburg',
      hotel: 'Hotel Leopold',
    },
    {
      country: 'Spain',
      city: 'Santa Cruz de Tenerife',
      hotel: 'Apartment Sunshine',
    },
    {
      country: 'Slowakia',
      city: 'Vysokie Tatry',
      hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
      city: 'Berlin',
      hotel: 'Hostel Friendship',
    },
    {
      country: 'Indonesia',
      city: 'Bali',
      hotel: 'Ubud Bali Resort&SPA',
    },
    {
      country: 'Netherlands',
      city: 'Rotterdam',
      hotel: 'King Kong Hostel',
    },
    {
      country: 'Marocco',
      city: 'Ourika',
      hotel: 'Rokoko Hotel',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hotel Rehberge Berlin Mitte',
    },
  ];
 
  let searchValue = prompt('please type info').toLocaleLowerCase().trim();
  const res = data.filter (item => Object.values(item).some(val => val.toLocaleLowerCase().trim().includes(searchValue)))
  console.log (res)




  //lesson-6
  
  function isPalindrome1(str1) {
    str1Reverse = str1.split ('') .reverse( ) .join('') .toLocaleLowerCase();
    return str1Reverse == str1 ? Boolean(str1Reverse === str1) : Boolean(str1Reverse === str1);
  }
  let palindrome1 = isPalindrome1 ('lol');
  const palindrome0 = isPalindrome1 ('marta');
  console.log (palindrome1);
  console.log (palindrome0);




  const hotels = [
    {
      name: 'Hotel Leopold',
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    {
      name: 'Apartment Sunshine',
      city: 'Santa Cruz de Tenerife',
      country: 'Spain',
    },
    {
      name: 'Villa Kunerad',
      city: 'Vysokie Tatry',
      country: 'Slowakia',
    },
    {
      name: 'Hostel Friendship',
      city: 'Berlin',
      country: 'Germany',
    },
    {
      name: 'Radisson Blu Hotel',
      city: 'Kyiv',
      country: 'Ukraine',
    },
    {
      name: 'Paradise Hotel',
      city: 'Guadalupe',
      country: 'Mexico',
    },
    {
      name: 'Hotel Grindewald',
      city: 'Interlaken',
      country: 'Switzerland',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Virgin Hotel',
      city: 'Chicago',
      country: 'USA',
    },
    {
      name: 'Grand Beach Resort',
      city: 'Dubai',
      country: 'United Arab Emirates',
    },
    {
      name: 'Shilla Stay',
      city: 'Seoul',
      country: 'South Korea',
    },
    {
      name: 'San Firenze Suites',
      city: 'Florence',
      country: 'Italy',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Black Penny Villas',
      city: 'BTDC, Nuca Dua',
      country: 'Indonesia',
    },
    {
      name: 'Koko Hotel',
      city: 'Tokyo',
      country: 'Japan',
    },
    {
      name: 'Ramada Plaza',
      city: 'Istanbul',
      country: 'Turkey',
    },
    {
      name: 'Waikiki Resort Hotel',
      city: 'Hawaii',
      country: 'USA',
    },
    {
      name: 'Puro Hotel',
      city: 'Krakow',
      country: 'Poland',
    },
    {
      name: 'Asma Suites',
      city: 'Santorini',
      country: 'Greece',
    },
    {
      name: 'Cityden Apartments',
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    {
      name: 'Mandarin Oriental',
      city: 'Miami',
      country: 'USA',
    },
    {
      name: 'Concept Terrace Hotel',
      city: 'Rome',
      country: 'Italy',
    },
    {
      name: 'Ponta Mar Hotel',
      city: 'Fortaleza',
      country: 'Brazil',
    },
    {
      name: 'Four Seasons Hotel',
      city: 'Sydney',
      country: 'Australia',
    },
    {
      name: 'Le Meridien',
      city: 'Nice',
      country: 'France',
    },
    {
      name: 'Apart Neptun',
      city: 'Gdansk',
      country: 'Poland',
    },
    {
      name: 'Lux Isla',
      city: 'Ibiza',
      country: 'Spain',
    },
    {
      name: 'Nox Hostel',
      city: 'London',
      country: 'UK',
    },
    {
      name: 'Leonardo Vienna',
      city: 'Vienna',
      country: 'Austria',
    },
    {
      name: 'Adagio Aparthotel',
      city: 'Edinburgh',
      country: 'UK',
    },
    {
      name: 'Steigenberger Hotel',
      city: 'Hamburg',
      country: 'Germany',
    },
  ];

  let searchhotels = prompt('please type info').toLocaleLowerCase().trim();
  const options = hotels.filter (item => Object.values(item).some(val => val.toLocaleLowerCase().trim().includes(searchValue)))
  console.log (options)

  const hotels1 = [
    {
      name: 'Hotel Leopold',
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    {
      name: 'Apartment Sunshine',
      city: 'Santa Cruz de Tenerife',
      country: 'Spain',
    },
    {
      name: 'Villa Kunerad',
      city: 'Vysokie Tatry',
      country: 'Slowakia',
    },
    {
      name: 'Hostel Friendship',
      city: 'Berlin',
      country: 'Germany',
    },
    {
      name: 'Radisson Blu Hotel',
      city: 'Kyiv',
      country: 'Ukraine',
    },
    {
      name: 'Paradise Hotel',
      city: 'Guadalupe',
      country: 'Mexico',
    },
    {
      name: 'Hotel Grindewald',
      city: 'Interlaken',
      country: 'Switzerland',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Virgin Hotel',
      city: 'Chicago',
      country: 'USA',
    },
    {
      name: 'Grand Beach Resort',
      city: 'Dubai',
      country: 'United Arab Emirates',
    },
    {
      name: 'Shilla Stay',
      city: 'Seoul',
      country: 'South Korea',
    },
    {
      name: 'San Firenze Suites',
      city: 'Florence',
      country: 'Italy',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Black Penny Villas',
      city: 'BTDC, Nuca Dua',
      country: 'Indonesia',
    },
    {
      name: 'Koko Hotel',
      city: 'Tokyo',
      country: 'Japan',
    },
    {
      name: 'Ramada Plaza',
      city: 'Istanbul',
      country: 'Turkey',
    },
    {
      name: 'Waikiki Resort Hotel',
      city: 'Hawaii',
      country: 'USA',
    },
    {
      name: 'Puro Hotel',
      city: 'Krakow',
      country: 'Poland',
    },
    {
      name: 'Asma Suites',
      city: 'Santorini',
      country: 'Greece',
    },
    {
      name: 'Cityden Apartments',
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    {
      name: 'Mandarin Oriental',
      city: 'Miami',
      country: 'USA',
    },
    {
      name: 'Concept Terrace Hotel',
      city: 'Rome',
      country: 'Italy',
    },
    {
      name: 'Ponta Mar Hotel',
      city: 'Fortaleza',
      country: 'Brazil',
    },
    {
      name: 'Four Seasons Hotel',
      city: 'Sydney',
      country: 'Australia',
    },
    {
      name: 'Le Meridien',
      city: 'Nice',
      country: 'France',
    },
    {
      name: 'Apart Neptun',
      city: 'Gdansk',
      country: 'Poland',
    },
    {
      name: 'Lux Isla',
      city: 'Ibiza',
      country: 'Spain',
    },
    {
      name: 'Nox Hostel',
      city: 'London',
      country: 'UK',
    },
    {
      name: 'Leonardo Vienna',
      city: 'Vienna',
      country: 'Austria',
    },
    {
      name: 'Adagio Aparthotel',
      city: 'Edinburgh',
      country: 'UK',
    },
    {
      name: 'Steigenberger Hotel',
      city: 'Hamburg',
      country: 'Germany',
    },
  ];

  let searchhotels1 = prompt('please type info').toLocaleLowerCase().trim();
  let options1 = hotels1.filter (item => Object.values(item).some(val => val.toLocaleLowerCase().trim().includes(searchValue)))
  console.log (options1)





  const Exercise7 = [
    {
      name: 'Hotel Leopold',
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    {
      name: 'Apartment Sunshine',
      city: 'Santa Cruz de Tenerife',
      country: 'Spain',
    },
    {
      name: 'Villa Kunerad',
      city: 'Vysokie Tatry',
      country: 'Slowakia',
    },
    {
      name: 'Hostel Friendship',
      city: 'Berlin',
      country: 'Germany',
    },
    {
      name: 'Radisson Blu Hotel',
      city: 'Kyiv',
      country: 'Ukraine',
    },
    {
      name: 'Paradise Hotel',
      city: 'Guadalupe',
      country: 'Mexico',
    },
    {
      name: 'Hotel Grindewald',
      city: 'Interlaken',
      country: 'Switzerland',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Virgin Hotel',
      city: 'Chicago',
      country: 'USA',
    },
    {
      name: 'Grand Beach Resort',
      city: 'Dubai',
      country: 'United Arab Emirates',
    },
    {
      name: 'Shilla Stay',
      city: 'Seoul',
      country: 'South Korea',
    },
    {
      name: 'San Firenze Suites',
      city: 'Florence',
      country: 'Italy',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Black Penny Villas',
      city: 'BTDC, Nuca Dua',
      country: 'Indonesia',
    },
    {
      name: 'Koko Hotel',
      city: 'Tokyo',
      country: 'Japan',
    },
    {
      name: 'Ramada Plaza',
      city: 'Istanbul',
      country: 'Turkey',
    },
    {
      name: 'Waikiki Resort Hotel',
      city: 'Hawaii',
      country: 'USA',
    },
    {
      name: 'Puro Hotel',
      city: 'Krakow',
      country: 'Poland',
    },
    {
      name: 'Asma Suites',
      city: 'Santorini',
      country: 'Greece',
    },
    {
      name: 'Cityden Apartments',
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    {
      name: 'Mandarin Oriental',
      city: 'Miami',
      country: 'USA',
    },
    {
      name: 'Concept Terrace Hotel',
      city: 'Rome',
      country: 'Italy',
    },
    {
      name: 'Ponta Mar Hotel',
      city: 'Fortaleza',
      country: 'Brazil',
    },
    {
      name: 'Four Seasons Hotel',
      city: 'Sydney',
      country: 'Australia',
    },
    {
      name: 'Le Meridien',
      city: 'Nice',
      country: 'France',
    },
    {
      name: 'Apart Neptun',
      city: 'Gdansk',
      country: 'Poland',
    },
    {
      name: 'Lux Isla',
      city: 'Ibiza',
      country: 'Spain',
    },
    {
      name: 'Nox Hostel',
      city: 'London',
      country: 'UK',
    },
    {
      name: 'Leonardo Vienna',
      city: 'Vienna',
      country: 'Austria',
    },
    {
      name: 'Adagio Aparthotel',
      city: 'Edinburgh',
      country: 'UK',
    },
    {
      name: 'Steigenberger Hotel',
      city: 'Hamburg',
      country: 'Germany',
    },
  ];

function СountriesAndCities(x) { // создаем пустую функцию какую-то с каким-то аргументом х
    const resultarr = {}; // результат константы не может быть изменен новым присваиванием
const arrcountry = [...new Set(x.map((item) => item.country))]; // из аргумента х вытягиваем переменные стран и записывываем этот массив в константу arrcountry
for  (let i=0; i<arrcountry.length; i++) { // для полученного массива стран arrcountry
    let str7 = arrcountry[i]; // приравниваем массив стран к переменной str1
    const newArr = x.filter((item) => item.country === str7); // из этого же аргумента х вытягиваем массив стран сравниваем его (===) с переменной str1 и совпадения записываем в новую константу newArr
    resultarr[str7] = newArr.map((item) => item.city);// в константу resultarr записываем новый массив который будет к нашим совпадениям newArr вытягивать еще и города
}
return resultarr;
}
console.log(СountriesAndCities(Exercise7)) // вместо аргумента х записываем нужный нам массив
