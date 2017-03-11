let janPrep = ['Christine', 'Jacob', 'Anthony', 'Earnest', 'Ann', 'Ella', 'James', 'Joshua', 'Kaleo', 'Ulu', 'Gaganvir'];

let febPrep = ['Brandon','J5','Kelsie','Mellanie','Seol Hee','Jason','Jeffery','Keola','Vasana'];

function randomStudentGenerator(arr){
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}

console.log(randomStudentGenerator(febPrep));

