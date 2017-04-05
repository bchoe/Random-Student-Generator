// random student generator

// array holding students
let febPrep = ['Christine', 'Jacob', 'Anthony', 'Earnest', 'Ann', 'Ella', 'James', 'Joshua', 'Kaleo', 'Ulu', 'Gaganvir'];

let marPrep = ['Brandon','J5','Kelsie','Mellanie','Seol Hee','Jason','Jeffe','Keola','Vasana'];

let aprPrep = ['Brendan', 'Jody', 'Levi', 'Oksana', 'Ross', 'Scott', 'Virginia'];

let mayPrep = [];

// es5 javascript
function randomStudentGenerator(arr){
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

console.log(randomStudentGenerator(aprPrep));

// es6 javascript
// let randomStudentGenerator = (arr) => {
//   let randomIndex = Math.floor(Math.random() * arr.length);
//   let randomElement = arr[randomIndex];
//   document.getElementById('main');
//   randomElement.innerHTML = randomElement;
//   return randomElement;
// };

// console.log(randomStudentGenerator(marPrep));

// document.getElementById("demo").addEventListener("click", randomStudentGenerator(marPrep));
