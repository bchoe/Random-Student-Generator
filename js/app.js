var febPrep = ['Brandon','J5','Kelsie','Mellanie','Seol Hee','Jason','Jeffery','Keola','Vasana'];

function randomStudentGenerator(arr){
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

console.log(randomStudentGenerator(febPrep));

/*var students = [
  'Christine',
  'Jacob',
  'Anthony',
  'Earnest',
  'Ann',
  'Ella',
  'James',
  'Joshua',
  'Kaleo',
  'Ulu',
  'Gaganvir'
  ];

var randomIndex = Math.floor(Math.random() * students.length);
var randomElement = students[randomIndex];

console.log(randomElement);
*/
