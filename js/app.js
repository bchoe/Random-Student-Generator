// random student generator

// array holding students
let febPrep = ['Christine', 'Jacob', 'Anthony', 'Earnest', 'Ann', 'Ella', 'James', 'Joshua', 'Kaleo', 'Ulu', 'Gaganvir'];

let marPrep = ['Brandon','J5','Kelsie','Mellanie','Seol Hee','Jason','Jeffery','Keola','Vasana'];

// es5 javascript
/*function randomStudentGenerator(arr){
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

console.log(randomStudentGenerator(febPrep));*/

// es6 javascript
let randomStudentGenerator = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
};

console.log(randomStudentGenerator(marPrep));
