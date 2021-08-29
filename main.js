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

result = result * arr[i];
}
alert (result);

let arr1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i=0; i < arr1.length; i++) {
if (arr1[i] > 5 && arr1[i] < 10){
console.log(arr1[i]); }}

let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i=0; i < arr2.length; i++)
{
    if ((arr2[i] % 2) === 0)
    {
        console.log(arr2[i]);
    }
  }